
const {Sequelize} = require("sequelize")

require('dotenv').config()

const sequelize = new Sequelize("webledger","root",process.env.password,{

    host:"localhost",
    dialect:"mysql"
})


module.exports = {sequelize}


