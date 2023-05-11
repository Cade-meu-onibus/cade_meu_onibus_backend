const BusRoute = require("../models/BusRoute");

module.exports = { 
    
    async index(req, res) {
        const busesRoutes = await BusRoute.findAll();

        return res.json(busesRoutes);
    },

    async store(req, res) {
        const {name, number, route, busStop} = req.body;

        const busRoute = await BusRoute.create({name, number, route, busStop});

        return res.json(busRoute);
    }
};