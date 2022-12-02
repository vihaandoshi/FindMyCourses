const mongoose = require('mongoose');

const courseCardSchema = new mongoose.Schema({
    CourseName: {
        type: String,
        required: true
    },
    Units: {
        type: Number,
        required: true,
        default : 4
    },
    Department: {
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
    Prerequisites: {
        type: [String],
        default: "None"
    },
    Corequisites: {
        type: [String],
        default: "None"
    },
    Textbooks: {
        type: [String],
        default: "None"
    },
},  {collection: "coursecard" })

module.exports = mongoose.model('CourseCard', courseCardSchema);
    



