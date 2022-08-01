const {Schema, model} = require('../connection');

const scObj = new Schema({
    title: String,
    file: Number,
    thumbnail: Number,
    createdAt : Date
})
module.exports = model('files', scObj);


