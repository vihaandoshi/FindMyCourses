require('dotenv').config

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://findcourses:fullstackdecal@findmycourses.abmjg6z.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening");
        })
    })
    .catch((error) => {
        console.log(error)
    })
    
const courseCardModel = require('./models/CourseCard')

app.get("/getCourseCards", (req, res) => {
    courseCardModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
});

