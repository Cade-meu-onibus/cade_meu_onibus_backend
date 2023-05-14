const BusRoute = require("../models/BusRoute");

module.exports = { 
    
    async index(req, res) {
        const busRoutes = await BusRoute.findAll();

        return res.json(busRoutes);
    },
    
    async getBusRouteFromNumber(req, res) {
        const busRoute = await BusRoute.findByPk(req.params.busNumber);

        return res.json(busRoute);
    }
    ,
    async store(req, res) {
        const {name, number, route, busStop} = req.body;

        const busRoute = await BusRoute.create({name, number, route, busStop});

        return res.json(busRoute);
    }
};