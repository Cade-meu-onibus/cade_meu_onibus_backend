const {Model, DataTypes} = require("sequelize");

class BusStop extends Model {
    static init(connection) {
        super.init({
            id: { 
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            coordinates: {
                type: DataTypes.GEOMETRY,
                allowNull: false
            }
        }, {
            sequelize: connection
        })
    }
}

module.exports = BusStop;