const {Model, DataTypes} = require("sequelize");

class BusStop extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            coordinates: DataTypes.GEOMETRY,
        }, {
            sequelize: connection
        })
    }
}

module.exports = BusStop;