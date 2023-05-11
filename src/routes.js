const express = require("express");

const UserController = require("./controllers/UserControllers");
const BusRouteController = require("./controllers/BusRouteController")

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/busesRoutes', BusRouteController.index);
routes.post('/busesRoutes', BusRouteController.store);

module.exports = routes;