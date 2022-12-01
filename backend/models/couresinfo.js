const { interactivity } = require("@chakra-ui/react")
const { model } = require("mongoose")

const mongoose = requier('mongoose')

const courseInfoSchema = new mongoose.Schema({
    Class: {
        type: String,
        required: true
    },
    Professor: {
        type: String,
        required: true
    },
    Semester: {
        type: String,
        required: true
    },
    GradeReceived: {
        type: String,
        default: "N/A"
    },
    Midterms: {
        type: Int16Array,
        default: 'None'
    },
    Clobber: {
        type: String,
        default: "None"
    },
    MandatoryDiscussion: {
        type: Boolean,
        required: true
    },
    Difficulty: {
        type: Int16Array,
        required: true
    }, 
    NextClasses: [{
        type: String, 
        default: "None"
    }],
    ClassesForPrep: [{
        type:String,
        default: "None"
    }],
    Comment: {
        type:String,
        required: true
    },
    UsefulResources: [{
        type: String,
        default: "None"
    }]
})

model.exports = mongoose.model('CourseInfo', courseInfoSchema)