
const express = require('express');
const { Users } = require("../model/userModel")





const userRouter = express.Router()
require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let data = await Users.findOne({ where: { email } });

        if (data) {
            return res.status(200).send({ msg: "user already registered" });
        }

        bcrypt.hash(password, 5, async function (err, hash) {
            if (err) {

                return res.status(404).send({ msg: "something went wrong" });
            } else {

                await Users.create({ name, email, password: hash })
                return res.status(201).send("registration sucessfull");
            }
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
})



userRouter.post("/login", async (req, res) => {


    let { email, password } = req.body;

    try {
        let user = await Users.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ msg: "user not found" });
        }

        //console.log(user)


        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                var token = jwt.sign({ userID: user.id }, process.env.SECRET_KEY);

                res.status(201).send({ msg: "login successfull", token: token });
            } else {

                res.status(404).send({ mag: "login failed" });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
});



module.exports = { userRouter }