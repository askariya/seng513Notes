let ws = new WebSocket("ws://www.example.com/wsserver");
ws.onopen = function (event){
    ws.send("Hello server, I am here.");
};

ws.onmessage = function(event){

}


/*
Socket.IO
    - JS library for both client and Node.js servers
    - share nearly identical APIs
    - event driven
    - if you use socket.IO on one end, you must use it on the other (cannot mix and match)
*/