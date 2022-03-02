const config=require("./config");
const express=require('express');

const bodyParser=require("body-parser");
const mongoose=require('mongoose');

const Movie=require("./routes/Movie.route");

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/Movie",Movie);

mongoose
.connect(config.mongoURL)
.then(console.log("DB connected"))
.catch(err=>console.log(err));

mongoose.Promise=global.Promise;

let db=mongoose.connection;
db.on("error",console.error.bind(console,"Connection error in mongo"));

app.listen(config.serverPort,function(){
    console.log("Server is running");
})