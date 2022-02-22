var fs=require('fs');

var fileName='MyFile.txt';
fs.unlink(fileName,(err)=>{
    console.log('File Deleted.........')
})