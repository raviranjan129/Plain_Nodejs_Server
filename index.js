const http=require('http'); //import node.js core module;

const PORT = 3000;

const server = http.createServer((req,res)=>{

    console.log('Request received');
    console.log(req);
    console.log(res);
//send a hello world response

if(req.url =='/'){
    res.write('home');
}else if( req.url=='/ping'){
    res.write('pong');
}else{
    res.write('Hello World'); // write a response to the client
}

 

res.end(); // end the response;
})

//start your server

server.listen(PORT,()=>{
    //callback triggered when server is successfully listening .

    console.log("server Listening on :http://localhost:",PORT);
})