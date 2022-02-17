var fs=require('fs');
var data="'Node File Writing Operation done with fs Module'"
fs.writeFile('output.txt',data,function(err)
{
    if(err)
    console.log(err)
    console.log("Write Operation is Done!!!!!");
})
