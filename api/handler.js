// mongodb://127.0.0.1:27017/test
const express = require("express");
const mongoose = require("mongoose");
const ip = require("ip");
console.log("my ip address",ip.address());
const Counter = require("../mongo/Schema");
require("dotenv").config();
main().then((e)=>{console.log("database successfully connected",e)})
.catch(e=>{
    console.log("database error");
    console.log(e);
})
async function main () {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(process.env.DATABASE_URI);
    
    // const count_doc = Counter.findByIdAndUpdate("",{count},(err,data)=>{
    //     if(err) {
    //         console.log("oops error!");
    //     }
    //     else()
    // })
    
}
console.log(typeof process.env.DATABASE_DOCUMENT_ID)
const app = express();
app.get("/profile-count",async (req,res)=>{
    let count;
    Counter.find({name: "count"},async function(err,data){
        if(err) {
            console.log("Oops! Error", err);
            return;
        }
        count = data[0].count;
        count++;
        Counter.findByIdAndUpdate(process.env.DATABASE_DOCUMENT_ID,{count:count},function (err,data){
            if(err){
                console.log("sorry data couldn't be updated");
                // console.log(err);
                return;
            } 
            console.log("data successfully updated",data);
        });
        const image = await fetchImage(count);
        res.set('Content-Type', 'image/svg+xml');
        res.send(image);
    });
    
    
})
async function fetchImage (count) {
    const res = await fetch(`https://custom-icon-badges.demolab.com/badge/views-${count}-red?style=for-the-badge&logo=eye`);
    const ImageBlob = await res.arrayBuffer();
    const imageBuffer = Buffer.from(ImageBlob);
    return imageBuffer
}
app.listen("5000",()=>{
    console.log("server running on port 5000");
})
module.exports = app;