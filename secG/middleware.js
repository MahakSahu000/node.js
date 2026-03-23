// const express = require("express")
// const app = express()

// // 1. Application-level middleware
// app.use((req, res, next) => {
//   console.log("this is my first middleware")
//   next()
// })
// app.use((req,res,next) =>{
//    console.log("this is my second middleware");
//    next();
// })

// // 2. Built-in middleware
// app.use(express.json())

// // 3. Router-level middleware
// app.get("/routes",
//   (req, res, next) => {
//     console.log("this is my first middleware for routes")
//     next();
//   },
//   (req, res) => {
//     res.send("heloooowwwwwwwwwwwwwwww")
//   }
// );






// // 4. Custom middleware
// function auth(req, res, next) {
//   if (req.query.token === "12345") {
//     next()
//   } else {
//     res.send("invalid token")
//   }
// }

// app.get("/status", auth, (req, res) => {
//   res.send("20 march");
// });

// app.listen(3000, () => {
//   console.log("server created")
// });

// const express = require("express");
// const router = express.Router();

// router.get("/" , (req, res) =>{
//   res.send("ye mera data receive hua hai")
// });
// router.post("/" , (req, res) =>{
//   res.send("ye mera data receive hua hai")
// });

// module.exports = router;

// // const express = require("express");
// const app = express();
// const route = require("./routes/bookRoutes.js");
// app.use("/mahak" , route);
// app.listen(3000,()=>{
//   console.log("listening on port 3000");
// });

// const express = require("express");
// const app = express();

// const route = require("./routes/bookRoutes");

// app.use("/mahak", route);

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

const express = require("express")
const app = express()
app.use(express.json())

let tokens = "Mahak";
let Checktoken = (req , res , next)=>{
    console.log(req.query.token)
    if (req.query.token === ""  || req.query.token === undefined){
        return res.send({status:0 , msg: "token is required"})
    }
    if (req.query.token !== tokens){
        return res.send({status:0 , msg: "token is invalid please provide a valid token"})
    }
    
    next()
}
app.use(Checktoken);
let Checkpass = (req , res , next)=>{
    if (req.query.pass==="" || req.query.pass ===undefined){
        return res.send({
            status:0,
            msg: "please fill this password"
        })
    } if(req.query.pass!= mypass){
        return res.send({
            status:0,
            msg : "please enter the correct password"
        })
    }
    next()
}
app.use(Checkpass)

app.get("/" , (req , res)=>{
    res.send({status:1 , msg: "this is home page API"})
})

app.get("/news"  ,  (req , res)=>{
    res.send({status:1 , msg: "this is new page API"})
})

app.get("/news/:id" , (req , res)=>{
    const id = req.params.id
    res.send("News details API" + " " + id)
})
app.get("/product" , (req,res)=>{
    res.send({status: 1 , msg : "this  is product page API"})
})

app.post("/login" , (req , res)=>{
    console.log(req.body)
    res.status(200).json({
        status :1 ,
        msg: "Login API" ,
        bodyData : req.body ,
        querydata : req.query
    })
})

app.get("/error" , (req , res)=>{
    throw new Error("this is a error")
})
app.use((error ,req , res , next)=>{
    console.log(error)
    res.status(500).json({
        status:0,
        msg: "something went wrong"
    })
})
app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
});










