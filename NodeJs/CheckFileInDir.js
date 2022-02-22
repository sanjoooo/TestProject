var fs=require('fs');
try{
const arrayOfFiles=fs.readdirSync("./Rest" ,function(err){
    if(err)
    {
        console.log(err);

    }
   
});
console.log(arrayOfFiles);
}
catch(e)
{
    console.log(e)
}
