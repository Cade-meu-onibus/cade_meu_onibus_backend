const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const BusRoute = require("../models/BusRoute");
const BusStop = require("../models/BusStop");

const connection = new Sequelize(dbConfig);

// Sincronizar o modelo com o banco de dados
connection.sync({alter: true})
    .then(() => {
        console.log('Todas as tabelas foram sincronizadas com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar as tabelas:', error);
});

// Inicia os modelos no sequelize 
User.init(connection);
BusRoute.init(connection);
BusStop.init(connection);

// Cria a relação Muitos para Muitos atráves da tabela BusRouteBusStop
BusRoute.belongsToMany(BusStop, {through: 'BusRouteBusStop'});
BusStop.belongsToMany(BusRoute, {through: 'BusRouteBusStop'});


BusRoute.

module.exports = connection; 