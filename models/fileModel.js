const {Schema, model} = require('../connection');

const scObj = new Schema({
    title: String,
    file: String,
    thumbnail: String,
    createdAt : Date
})
module.exports = model('files', scObj);


