const BusRoute = require("../models/BusRoute");
const BusStop = require("../models/BusStop");


module.exports = { 
    
    async index(req, res) {
        const busStops = await BusStop.findAll();

        return res.json(busStops);
    },
    
    async getBusStopFromPK(req, res) {
        const busStop = await BusStop.findByPk(req.params.busStopId);

        return res.json(busStop);
    }
    ,
    async getBusStopsFromBusNumber(req, res) {
        const busRoute = await BusRoute.findByPk(req.params.busNumber)
        const busStops = await busRoute.getBusStops();
        const jsonResponse = {
            name: busRoute.name,
            number: busRoute.number,
            busStops: busStops
                .filter(item => item.coordinates) // Filtra os itens que possuem a propriedade 'coordinates'
                .map((busStop) => busStop.coordinates.coordinates)
          }
        console.log(jsonResponse);

        return res.json(jsonResponse);
    }
    ,
    async store(req, res) {
        const {name, coordinates} = req.body;

        const busStop = await BusStop.create({name, coordinates});

        return res.json(busStop);
    }
};