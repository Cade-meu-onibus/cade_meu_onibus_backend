const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const BusRoute = require("../models/BusRoute");
const BusStop = require("../models/BusStop");

const connection = new Sequelize(dbConfig);
// Sincronizar o modelo com o banco de dados
connection.sync()
    .then(() => {
        console.log('Todas as tabelas foram sincronizadas com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar as tabelas:', error);
});

User.init(connection);
BusRoute.init(connection);
BusStop.init(connection);


module.exports = connection;