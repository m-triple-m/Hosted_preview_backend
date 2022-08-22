const {Schema, model} = require('../connection');

const scObj = new Schema({
    title: String,
    file: String,
    thumbnail: String,
    createdAt : Date,
    type: String
})
module.exports = model('files', scObj);


