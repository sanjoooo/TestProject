var buf=new Buffer(10);
var buf2=new Buffer([2,4,6,2,5]);
var len=buf.write("Heeyaa");
//console.log(len);

var leng=buf2.write("Sanjivani");
//console.log(leng);
var lenr=buf.write("hey")
console.log(lenr);