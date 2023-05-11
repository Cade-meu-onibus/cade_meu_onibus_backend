const {Model, DataTypes} = require("sequelize");

class BusRoute extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            number: DataTypes.STRING,
            route: DataTypes.GEOMETRY,
            busStop: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = BusRoute;