const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
  if(req.url == '/favicon.ico') return res.end();
  const log = `${Date.now()} : ${req.method}${req.url}New Req Received\n`;
  const myUrl = url.parse(req.url , true) ;
  console.log(myUrl);
  fs.appendFile("log.txt", log , (err , data) => {
    switch(myUrl.pathname) {
      case '/' : 
      if(req.method === 'GET') res.end("homepage");
      break;
       case '/about' : 
       const qp =  myUrl.query.myname ;
       res.end(`hi , ${qp}`);
      
       
      break;
      case '/search' : 
      const search =  myUrl.query.search_query;
      res.end("here are your search results for " +  search);
      case '/signup':
        if(req.method === 'GET') res.end("signup page");
        else if(req.method === 'POST') {
          // DB query
          
          res.end("Sucecss");
        }

       default:
        res.end("404 not found"); 



    }
  
  });
});

myServer.listen(8000 , () => console.log("Server Stated !"));





