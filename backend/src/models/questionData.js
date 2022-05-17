const mongoose = require('mongoose');
const validator = require('validator');
const questionDataSchema = new mongoose.Schema({
    generatorsId: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
        minlength: 1
    },
    answers: {
        type: Array,
        required: false,
    },

});
const QuestionData = new mongoose.model('QuestionData', questionDataSchema);
module.exports = QuestionData;