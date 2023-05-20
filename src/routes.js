const express = require("express");

const UserController = require("./controllers/UserControllers");
const BusRouteController = require("./controllers/BusRouteController")
const BusStopController = require("./controllers/BusStopController")

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/busRoutes', BusRouteController.index);
routes.get('/busRoute/:busNumber', BusRouteController.getBusRouteFromNumber);
routes.post('/busRoutes', BusRouteController.store);
routes.post('/busRoutesBulk', BusRouteController.createBusRouteWithBusStops);

routes.get('/busStops', BusStopController.index);
routes.get('/busStop/id/:busStopId', BusStopController.getBusStopFromPK);
routes.get('/busStops/:busNumber', BusStopController.getBusStopsFromBusNumber);
routes.post('/busStops', BusStopController.store);

module.exports = routes;