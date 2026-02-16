// console.log("heeloo world.....");
// import add from './fun.js';
// console.log(add(5,10));

// console.log("start");
// setTimeout(() =>{
//   console.log("inside setTimeout");
  
// })
setTimeout(() => {
    console.log("hi")
},1000);

// promises

const nayapromise =  new Promise((resolve , reject) => {
  let deliver = true;
  if(deliver){
    resolve("Promises has been resolved successfully , your order is delivered");
  }
  else{
    reject("Promises has been rejected , your order is not delivered");
  }
});

nayapromise.then(() =>{
  console.log("This is in the block");
}).catch(() =>{
  console.log("This is in the catch block");
});





