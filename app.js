var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
app.get('/',function(req,res)
{
	res.sendFile(__dirname+'/index.html');

});
io.on('connection',function(socket)
{
 console.log("a user connected");
 socket.on('disconnect',function()
 {
  console.log("user disconnected");
 });
 socket.on('chat message',function(msg)
 {
  io.emit('chat message',msg);
 });
});
http.listen(8080,function()
{
console.log("running....");
});