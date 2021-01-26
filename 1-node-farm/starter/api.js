
const fs  = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////
/////SERVER
////Synchronous version
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {
    const {query, pathname} = url.parse(req.url, true)
    const pathName = req.url;
    
    
    if(pathName === '/overview' || pathName === '/'){
        res.end('Hello from the server!');

    }else if(pathName ==='/product'){
        res.end('This is the product!');

    }else if(pathName === '/api'){
        //asynchronous  version
        //Read something from the json and send it back to the client
        //fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data)=>{
            //const productData = JSON.parse(data);
            //console.log(productData);
            //res.writeHead(200,{'Content-type':'application/json'})
            //res.end(data);
        //});

        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);
   
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