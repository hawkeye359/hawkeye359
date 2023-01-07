// mongodb://127.0.0.1:27017/test
const express = require("express");
const mongoose = require("mongoose");
const Counter = require("../mongo/Schema")
main().then((e)=>{console.log("database successfully connected",e)})
.catch(e=>{
    console.log("database error");
    console.log(e);
})
async function main () {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect("");
    let count;
    Counter.find({name: "count",function(err,data){
        
    }});
    // const count_doc = Counter.findByIdAndUpdate("",{count},(err,data)=>{
    //     if(err) {
    //         console.log("oops error!");
    //     }
    //     else()
    // })
    
}

const app = express();
app.get("/",(req,res)=>{
    res.json({
        res: "test ok"
    })
})

app.listen("5000",()=>{
    console.log("server running on port 5000");
})
module.exports = app;