const fs = require('fs');
const os = require("os");

console.log(os.cpus().length);
console.log("1");
// non-blocking / asynchronous
const result = fs.readFile("contacts.txt","utf-8" , (err,result)=>{
  console.log(result);
});

console.log("2");

// default thread pool size = 4
//max? - 8core cpu = 8 thread pool



// fs.writeFileSync('./test.txt','hello world');

// fs.writeFile('./test.txt','hello world Async', (err) =>{} );

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// fs.readFile("./contacts.txt" ,"utf-8",(err , result) =>{
//   if(err){
//     console.log("Error", err);
//   }
//   else{
//     console.log(result);
//   }
// });

// fs.appendFileSync('./test.txt', `${Date.now()} hey there\n`);

// // fs.cpSync('./test.txt','./copy.txt');
// // fs.unlinkSync('./copy.txt');
// console.log(fs.statSync('./test.txt'));
// fs.mkdirSync("my-docs/a/b" , { recursive : true});