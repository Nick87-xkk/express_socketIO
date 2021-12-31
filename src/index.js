
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  console.log('a user connected');
  console.log(`${socket.id}
   ${socket.handshake.query.user}`
  );
});


io.on('connection', function(socket){cd 
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('------------user disconnected-------------');
    //   io.emit('chat message','user disconnected');
    });
  });
      
  
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });
      
io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        io.emit('chat message',`${socket.handshake.query.user}: ${msg}`);
    });
});

http.listen(3002, function(){
  console.log('listening on *:3002');
});
    