
function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(5, 10);
console.log(`The sum is: ${result}`);

const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Operation completed successfully!"); // Fulfills the promise
      } else {
        reject(new Error("Operation failed.")); 
      }
    }, 1000); 
  });
};


myAsyncFunction()
  .then(message => {
    console.log("Success:", message); 
  })
  .catch(error => {
    console.error("Error:", error.message); 
  });
