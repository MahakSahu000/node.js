// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req , res) =>{
//    if(req.url ==="/"){
//          res.end("THIS IS MY HOME PAGE");
//    }
//    else if(req.url ==="/about"){
//       const about ={
//          name:"Mahak Sahu",
//          age:21,
//          city:"Jhansi"
//       }
//       res.end(about.name +" "+ about.age +" "+ about.city);
//    } 
//    else if(req.url ==="/contact"){
//          res.end("THIS IS MY CONTACT PAGE "+ "91-123456780");
//    }
//    else if(req.url ==="/section"){
//          res.end("THIS IS MY SECTION G PAGE");
//    }
//    else if(req.url ==="/write-logs"){
//       const log = `ye hua mera log ${new Date}\n`;
//       fs.appendFileSync("logs.txt",log);
//       res.end("Logs have been written to the file");
      
//    }
//    else{
//         res.end("PAGE NOT FOUND");
//    }
//    // res.end("HELLO");  
  
// });
// server.listen(3000,()=>{
//   console.log("Server is running on port 3000")
// });

//create a server and make sure the routes 

const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const filePath = path.join(__dirname, "log.txt");

const server = http.createServer((req, res) => {

   
    if (req.url === "/write-log") {
        const data = `Log entry at: ${new Date().toLocaleString()}\n`;

        fs.appendFile(filePath, data, (err) => {
            if (err) {
                res.end("Error writing file");
            } else {
                res.end("Log written successfully");
            }
        });
    }
     else if (req.url === "/read-log") {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                res.end("No file found");
            } else {
                res.end(data);
            }
        });
    }
    else if (req.url === "/edit-log") {
        const newData = "This file has been edited.\n";

        fs.writeFile(filePath, newData, (err) => {
            if (err) {
                res.end("Error editing file");
            } else {
                res.end("File edited successfully");
            }
        });
    }
     else if (req.url === "/rename-log") {
        fs.rename(filePath, "renamed-log.txt", (err) => {
            if (err) {
                res.end("Error renaming file");
            } else {
                res.end("File renamed successfully");
            }
        });
    }
    else if (req.url === "/copy-log") {
        fs.copyFile(filePath, "copy-log.txt", (err) => {
            if (err) {
                res.end("Error copying file");
            } else {
                res.end("File copied successfully");
            }
        });
    }
      else if (req.url === "/delete-log") {
        fs.unlink(filePath, (err) => {
            if (err) {
                res.end("Error deleting file");
            } else {
                res.end("File deleted successfully");
            }
        });
    }
     else if (req.url === "/system-specs") {
        const specs = `
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
Free Memory: ${os.freemem()}
Total Memory: ${os.totalmem()}
Uptime (seconds): ${os.uptime()}
        `;
        res.end(specs);
    }
     else if (req.url === "/about") {
        const aboutInfo = `
Name: Mahak Sahu
Roll No: 231500
Section: G
DOB: 29-01-2005
Favorite Sport: Cricket
Favorite Player: virat kholi
        `;
        res.end(aboutInfo);
    }
    else {
        res.end("Route not found");
    }

});


    server.listen(3000 , () =>{
      console.log("Server is running on port 3000");
    })
   




