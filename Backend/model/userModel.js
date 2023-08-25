
const {sequelize} = require("../config/db.js")

const {DataTypes} = require("sequelize")


const Users = sequelize.define("users",{

   
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }

})

module.exports = {Users}