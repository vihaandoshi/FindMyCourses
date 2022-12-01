const mongoose = requier('mongoose')

const courseCardSchema = new mongoose.Schema({
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
        type: Int16Array,
        required: true
    },
    Prerequisites: [{
        type: String,
        default: "None"
    }],
    Corequisites: [{
        type: String,
        default: "None"
    }],
    Textbooks: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('CourseCard', courseCardSchema)
    



