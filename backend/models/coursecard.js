const mongoose = require('mongoose');

const courseCardSchema = new mongoose.Schema({
    CourseName: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Professor: {
        type: String,
        required: true
    },
    BreadthsSatisfied: [{
        type: String,
        default: "None"
    }],
    HoursPerWeek: {
        type: Number,
        required: true
    },
    Prerequisites: [{
        type: [String],
        default: "None"
    }],
    Corequisites: [{
        type: [String],
        default: "None"
    }],
    Textbooks: {
        type: [String],
        default: "None"
    },
})

module.exports = mongoose.model('CourseCardModel', courseCardSchema, 'CourseCard');
    



