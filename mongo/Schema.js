const {Schema,model} = require("mongoose");
const counter = new Schema({
    name: String,
    count: Number
});

const Counter = model('Counter',counter);

module.exports = Counter;