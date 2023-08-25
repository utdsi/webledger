const express = require("express")
const  cors = require('cors')
const {sequelize} = require("./config/db.js")
const {userRouter} = require("./route/userRouter.js")
const {recipeRouter} = require("./route/recipeRoutet.js")


const app = express()

app.use(express.json())
app.use(cors())

app.use("/",userRouter)
app.use("/",recipeRouter)





app.listen(8000,async()=>{

    try {
        await sequelize.sync();
        console.log("connected to db")
    } catch (error) {

        console.log(error)
        
    }
})