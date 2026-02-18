const http = require('http');
const server = http.createServer((req , res) =>{
   if(req.url ==="/"){
         res.end("THIS IS MY HOME PAGE");
   }
   else if(req.url ==="/about"){
      res.end("THIS IS MY ABOUT PAGE");
   } 
   else{
        res.end("PAGE NOT FOUND");
   }
  
});
server.listen(3000,()=>{
  console.log("Server is running on port 3000")
});