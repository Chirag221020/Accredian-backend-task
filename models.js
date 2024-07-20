const { DataTypes } = require("sequelize")
const sequelize =require("./sequelize")

const Referees = sequelize.define("Referees", {
    referrerName:{
        type: DataTypes.STRING
    },
    referrerEmail:{
        type: DataTypes.STRING,
        unique: true    
    },
    refereeName:{
        type: DataTypes.STRING
    },
    refereeEmail:{
        type: DataTypes.STRING,
        unique:true,
    }
})

module.exports = Referees;