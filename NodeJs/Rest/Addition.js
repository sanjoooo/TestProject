const express=require('express');
const { appendFile } = require('fs');
const bodyParser=require('body-parser')



var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/",function(err,res){
    res.sendFile("D:/MernNodeJs/Rest/index.htm");
})


app.post("/add",function(req,res){
    console.log("hello")
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("Addition="+result);
})
app.listen(3000,function(){
    console.log("Server is running");
})