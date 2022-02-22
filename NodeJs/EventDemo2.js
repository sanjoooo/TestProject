var event=require('events');

var eventEmitter1=new event.EventEmitter();

var connect=function Connection()
{
    console.log("Connection done!!!")

    eventEmitter1.emit('data');
}

eventEmitter1.on("myconnent",connect);


eventEmitter1.on('data' ,function(){
    console.log("data recived!!!!!!!!")
});

eventEmitter1.emit('myconnent');

console.log("Done")