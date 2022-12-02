require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening", process.env.PORT);
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
        console.log(result);
      }
    });
});

