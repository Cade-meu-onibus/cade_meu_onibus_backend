const express = require("express");

const UserController = require("./controllers/UserControllers");
const BusRouteController = require("./controllers/BusRouteController")
const BusStopController = require("./controllers/BusStopController")

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/busRoutes', BusRouteController.index);
routes.post('/busRoutes', BusRouteController.store);
routes.post('/busRoutesBulk', BusRouteController.createBusRouteWithBusStops);
routes.get('/busRoute/:busNumber', BusRouteController.getBusRouteFromNumber);

routes.get('/busStops', BusStopController.index);
routes.post('/busStops', BusStopController.store);
routes.post('/busStopsBulk', BusStopController.storeBulk);
routes.get('/busStop/:busStopId', BusStopController.getBusStopFromPK);

module.exports = routes;