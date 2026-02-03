// Define a synchronous function
function addNumbers(a, b) {
  return a + b;
}

// Call the function and use the result immediately
const result = addNumbers(5, 10);
console.log(`The sum is: ${result}`);

const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., a network request)
    setTimeout(() => {
      const success = true; // Set to false to see the reject case
      if (success) {
        resolve("Operation completed successfully!"); // Fulfills the promise
      } else {
        reject(new Error("Operation failed.")); // Rejects the promise
      }
    }, 1000); // 1 second delay
  });
};

// Consume the promise using .then() and .catch()
myAsyncFunction()
  .then(message => {
    console.log("Success:", message); // Handle the fulfillment
  })
  .catch(error => {
    console.error("Error:", error.message); // Handle the rejection
  });
