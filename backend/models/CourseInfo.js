const mongoose = require('mongoose');

const courseInfoSchema = new mongoose.Schema({
    ClassName: {
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
        type: Number,
        default: 0
    },
    Clobber: {
        type: Boolean,
        default: false
    },
    MandatoryDiscussion: {
        type: Boolean,
        required: true
    },
    Difficulty: {
        type: Number,
        required: true
    }, 
    NextClasses: {
        type: [String], 
        default: []
    },
    ClassesForPrep: {
        type:[String],
        default: []
    },
    Comment: {
        type: [String],
        required: false
    },
    UsefulResources: {
        type: [String],
        default: []
    }
}, {collection: "courseinfo" })

module.exports = mongoose.model('CourseInfo', courseInfoSchema);