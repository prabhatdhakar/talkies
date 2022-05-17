const mongoose = require('mongoose');
const validator = require('validator');
const answerDataSchema = new mongoose.Schema({
    generatorsId: {
        type: String,
        required: true,
    },
    questionId: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }
});
const AnswerData = new mongoose.model('AnswerData', answerDataSchema);
module.exports = AnswerData;