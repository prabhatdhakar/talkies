const mongoose = require('mongoose');
const validator = require('validator');
const userDataSchema = new mongoose.Schema({
    question : {
        type: String,
        required: true,
        minlength: 13,
    },
    
});
const QueryData = new mongoose.model('QueryData', userDataSchema);
module.exports = QueryData;