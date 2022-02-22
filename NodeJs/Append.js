var fs=require('fs');

fs.appendFileSync('output.txt','Append Data in File',function(err){
    if(err)
    console.log(err)
    console.log("Append Done!!!");
})