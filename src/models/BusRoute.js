const {Model, DataTypes, Sequelize} = require("sequelize");

class BusRoute extends Model {
    static init(connection) {
        super.init({
            number: { 
                type: DataTypes.STRING(3),
                primaryKey: true,
                unique: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            route: DataTypes.GEOMETRY
        }, {
            sequelize: connection
        })
    }
}

module.exports = BusRoute;