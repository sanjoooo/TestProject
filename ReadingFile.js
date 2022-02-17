var fs=require('fs');

console.log("start")

fs.readFile('MyFile.txt',function(err,data)
{
    if(err)
    throw err;
    console.log("File Data    "+data.toString());
});
console.log("end");
//Asynchronous way fast spped