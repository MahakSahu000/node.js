const express = require("express")
const app = express()

// 1. Application-level middleware
app.use((req, res, next) => {
  console.log("this is my first middleware")
  next()
})
app.use((req,res,next) =>{
   console.log("this is my second middleware");
   next();
})

// 2. Built-in middleware
app.use(express.json())

// 3. Router-level middleware
app.get("/routes",
  (req, res, next) => {
    console.log("this is my first middleware for routes")
    next();
  },
  (req, res) => {
    res.send("heloooowwwwwwwwwwwwwwww")
  }
);




// 4. Custom middleware
function auth(req, res, next) {
  if (req.query.token === "12345") {
    next()
  } else {
    res.send("invalid token")
  }
}

app.get("/status", auth, (req, res) => {
  res.send("20 march");
});

app.listen(3000, () => {
  console.log("server created")
});

