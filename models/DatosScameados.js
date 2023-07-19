import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const DatosScameados = sequelize.define("DatosScameados", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username : {
        type: DataTypes.STRING,
    },
    
    password : {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});