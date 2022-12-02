require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json());

const cors = require('cors');
app.use(cors());

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
const courseInfoModel = require('./models/CourseInfo')

app.get("/getCourseCards", (req, res) => {
    courseCardModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
});

app.get("/getCourseReviews", (req, res) => {
    courseInfoModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
});

app.post("/addReview", async (req, res) => {
    console.log(req.body);
    const review = req.body;
    const newReview = new courseInfoModel(review);
    await newReview.save();
  
    res.json(review);
  });

