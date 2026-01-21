const fs = require('fs');
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

fs.appendFileSync('./test.txt', `${Date.now()} hey there\n`);

// fs.cpSync('./test.txt','./copy.txt');
// fs.unlinkSync('./copy.txt');
console.log(fs.statSync('./test.txt'));
fs.mkdirSync("my-docs/a/b" , { recursive : true});