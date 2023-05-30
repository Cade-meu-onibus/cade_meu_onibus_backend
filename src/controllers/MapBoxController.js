const fetch = require('node-fetch');

module.exports = { 
    
    async getTimeToArrive(req, res) { 
        const busStartCoordinate = req.params.startCoordinate;
        const busStopCoordinate =req.params.endCoordinate;

        console.log(busStartCoordinate + " => " + busStopCoordinate);

        // let url = `https://api.mapbox.com/directions/v5/mapbox/driving/-48.469066%2C-1.457719%3B-48.476748%2C-1.462721%3B-48.468594%2C-1.467414?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
        let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${busStartCoordinate};${busStopCoordinate}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
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
    }
};