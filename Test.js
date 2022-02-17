var http=require("http");
http.createServer(function(req,res)
{
res.write("Hello Node ....");
res.end();
}).listen(8080,function(){
    console.log("server is running asynchronously.")
});