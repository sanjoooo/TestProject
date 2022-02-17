var fs=require('fs');

console.log("start")
var data=fs.readFileSync('MyFile.txt');
console.log(data.toString());

console.log("end");
//Synchronous way 
//low performanance