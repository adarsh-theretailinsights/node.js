const express = require('express');
const router = express.Router();

// const { body, validationResult } = require('express-validator');
// const { isAuth } = require('../authJWT');
//movieSchema
const Forms = require("../models/Form");
// const faker = require('faker');
const mongoose = require('mongoose');
router.post('/addForm', async function(req, res) {
    console.log("rrrr",req.body.data)
    try {
        const data = req.body.data;
        const newFormObj = new Forms({
            // id: new mongoose.Types.ObjectId(),
            fullName: data.fullName,
            email: data.email,
            description: data.description,
            check: data.check,
           
        })
        const new_form_result = await newFormObj.save();
        if (new_form_result) {
            return res.send({
                status: "success",
                status_code: 200,
                message: "new updated saved successfully.",
                data: {  newFormObj }   
            });  
        }

        throw new Error("Unable to create new Movie record");

    } catch (error) {
        res.send({
            status: "bad request",
            status_code: 400,
            message: error.message,
            error: ""
        })
    }
});
// router.get('/movie', async function(req, res) {

//     try {
//          const movie_result = await Forms.find().sort({$natural:-1}).limit(5)
//            if (movie_result) {
//             return res.send({
//                 status: "success",
//                 status_code: 200,
//                 message: "Get movie successfully.",
//                 data: {  movie_result }        
//             });  
//         }
//         throw new Error("Unable to movie record");
//     } catch (error) {
//         res.send({
//             status: "bad request",
//             status_code: 400,
//             message: error.message,
//             error: ""
//         })
//     }
// });

module.exports = router;