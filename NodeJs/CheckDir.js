var fs=require('fs');
fs.access('./Rest',function(err){
    if(err)
    {
        console.log("Does not present")
    }
    else{
        console.log("directory is present")
    }
})