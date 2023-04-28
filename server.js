//on recharge les varaibles
var app=require("express")();
var http=require("http").Server(app);
var io=require('socket.io')(http);

//get de fichiers html client dans le serveur
app.get("",function (req,res){
   res.sendFile(__dirname+'/index.html');
});
io.on("connection",function (socket){
   console.log("a user is connected ");
   socket.on("disconnect",function (){
      console.log('a user is disconnected');
   });
   socket.on("chat message",function (msg){
      console.log('message recu:  '+msg);
      io.emit("chat message",msg)
   });
});
//lancer le serveur
http.listen(3000,function (){
   console.log(" run on  http://localhost:3000/")
});