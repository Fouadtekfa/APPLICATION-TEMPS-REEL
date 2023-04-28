//on recharge les varaibles
var app=require("express")();
var http=require("http").Server(app);
var io=require('socket.io')(http);


//lancer le serveur
http.listen(3000,function (){
   console.log(" run on  http://localhost:3000/")
});