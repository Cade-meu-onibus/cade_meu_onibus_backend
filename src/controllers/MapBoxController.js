const fetch = require('node-fetch');
const BusRoute = require("../models/BusRoute");

module.exports = {     
    async getTimeOfRouteFraction(req, res) {
        // const busRoute = await BusRoute.findByPk(req.params.busNumber);
        
        const busStartCoordinate = req.params.busStartCoordinate;
        const busEndCoordinate = req.params.endCoordinate;
        
        let busStartFraction;
        await BusRoute.sequelize.query(`SELECT ST_LINELOCATEPOINT(route::geometry, ST_SetSRID(ST_GeomFromText('POINT(${busStartCoordinate.replace(',',' ')})'), 4326)::geometry) AS medida FROM "BusRoutes" LIMIT 1;`).then(result => {
            // Manipular o resultado da consulta
            busStartFraction = result[0][0]['medida'];
            // console.log(result);
        });

        let busEndFraction;
        await BusRoute.sequelize.query(`SELECT ST_LINELOCATEPOINT(route::geometry, ST_SetSRID(ST_GeomFromText('POINT(${busEndCoordinate.replace(',',' ')})'), 4326)::geometry) AS medida FROM "BusRoutes" LIMIT 1;`).then(result => {
            // Manipular o resultado da consulta
            busEndFraction = result[0][0]['medida'];
            // console.log(result);
        });

        let busRoute;
        await BusRoute.sequelize.query(`SELECT ST_AsGeoJSON(ST_LineSubstring(route::geometry, ${busStartFraction}, ${busEndFraction})) from "BusRoutes" LIMIT 1;`).then(result => {
            // Manipular o resultado da consulta
            // busRoute = result[0][0]['st_asgeojson'];
            busRoute = JSON.parse(result[0][0]['st_asgeojson'])['coordinates'];
            console.log(busRoute);
        });
        
        const pointsBetween = Math.ceil((busRoute.length/23));
        let coordinatesInBetween = '';
        
        let index = 0;
        busRoute.forEach((coordinate,currentIndex) => {
            if (currentIndex === index) {
                coordinatesInBetween += coordinate[0] + ',' + coordinate[1] + ';'; 
                index += pointsBetween;
            }
        });
        console.log(coordinatesInBetween);
        

        let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${busStartCoordinate};${coordinatesInBetween}${busEndCoordinate}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`

        const response = await fetch(url);
        const body = await response.json();

        console.log(url);

        const seconds = body.routes[0].duration;
        let minutos = Math.floor(seconds / 60); // Calcula o número de minutos
        let secondsRemaining = Math.round(seconds % 60); // Calcula o número de segundos restantes

        // Formata a saída em uma string no formato 'mm:ss'
        const result = minutos + " minutos e " + secondsRemaining + " segundos.";

        return res.json({
            "message": "O tempo estimado para a chegada do ônibus na parada selecionada é de : " + result,
            "ETA": seconds,
        });   
    }, 
    async getTimeOfFullRoute(req, res) { 
        const busNumber = req.params.busNumber;
        const busStartCoordinate = req.params.busStartCoordinate;
        const busOriginStopCoordinate = req.params.originStopCoordinate;
        const busEndStopCoordinate =req.params.endCoordinate;

        let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${busStartCoordinate};${busOriginStopCoordinate};${busEndStopCoordinate}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
        const response = await fetch(url);
        const body = await response.json();

        const seconds = body.routes[0].duration;
        let minutos = Math.floor(seconds / 60); // Calcula o número de minutos
        let secondsRemaining = Math.round(seconds % 60); // Calcula o número de segundos restantes

        // Formata a saída em uma string no formato 'mm:ss'
        const result = minutos + " minutos e " + secondsRemaining + " segundos.";

        return res.json({
            "message": "O tempo estimado para a chegada do ônibus na parada e depois da parada até o destino é de : " + result,
            "ETA": seconds,
        });
    },
};