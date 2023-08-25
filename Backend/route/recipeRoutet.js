


const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


const express = require("express")

const recipeRouter = express.Router()

recipeRouter.get("/get", async (req, res) => {

    try {

        const response = await fetch('https://api.spoonacular.com/recipes/complexSearch&apiKey=6f105b7e59dd4ade90b5dc2630bf09b6');
        const data = await response.json();
        res.status(200).send(data);

    } catch (error) {

        console.log(err.message);
        res.status(500).send({ msg: "Internal Server Error" });

    }



});


module.exports = { recipeRouter }