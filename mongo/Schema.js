import {Schema, model} from "mongoose";

const counter = new Schema({
    name: String,
    count: Number
});

const Counter = model('Counter',counter);

export default Counter;