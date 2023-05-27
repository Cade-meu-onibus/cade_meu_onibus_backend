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

        return res.json(busStops);
    }
    ,
    async store(req, res) {
        const {name, coordinates} = req.body;

        const busStop = await BusStop.create({name, coordinates});

        return res.json(busStop);
    }
};