////routing to different urls


const fs  = require('fs');
const http = require('http');
const url = require('url');

//////////////////////////
////FILES

/////////////////////////
/////SERVER

const server = http.createServer((req,res) => {
    const pathName = req.url;
    
    console.log(req.url);
    if(pathName === '/overview' || pathName === '/'){
        res.end('Hello from the server!');
    }else if(pathName ==='/product'){
        res.end('This is the product!');
    }else{
        res.writeHead(404,{
            'Content-type':'text/html'
        });
        res.end('<h1> Page not found</h1>');
    }
    
});

server.listen(8000, '127.0.0.1',() => {
    console.log('Listening to requests on port 8000');
});