const fetch = require('node-fetch');

module.exports = { 
    
    async getTimeToArriveAtBusStop(req, res) { 
        const busNumber = req.params.busNumber;
        const busStartCoordinate = req.params.busStartCoordinate;
        const busEndCoordinate =req.params.endCoordinate;

        let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${busStartCoordinate};${busEndCoordinate}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
        const response = await fetch(url);
        const body = await response.json();

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
    async getTimeToArriveAtDestination(req, res) { 
        const busNumber = req.params.busNumber;
        const busStartCoordinate = req.params.busStartCoordinate;
        const busEndCoordinate =req.params.endCoordinate;

        let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${busStartCoordinate};${busEndCoordinate}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
        const response = await fetch(url);
        const body = await response.json();

        const seconds = body.routes[0].duration;
        let minutos = Math.floor(seconds / 60); // Calcula o número de minutos
        let secondsRemaining = Math.round(seconds % 60); // Calcula o número de segundos restantes

        // Formata a saída em uma string no formato 'mm:ss'
        const result = minutos + " minutos e " + secondsRemaining + " segundos.";

        return res.json({
            "message": "O tempo estimado para a chegada do ônibus saindo da parada selecionada até o destino é de : " + result,
            "ETA": seconds,
        });   
    },
    async getFullTripEstimatedTime(req, res) { 
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