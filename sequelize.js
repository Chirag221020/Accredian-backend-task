const {Sequelize} = require("sequelize")
const sequelize = new Sequelize("refer now", "root", "chirag..1234", {
    host: "localhost", 
    dialect: "mysql",
    logging: false
}) 


sequelize.authenticate().then(()=>{
        console.log("sql conneect")
})
.catch((err)=>{
    console.log("error ", err)
})


module.exports = sequelize