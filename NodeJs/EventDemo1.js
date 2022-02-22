var events=require('events');

var eventEmitter=new events.EventEmitter();

var myEvent=function()
{
    console.log('I am Event');
}

eventEmitter.on('test',myEvent);

eventEmitter.emit('test');