const express = require("express");
const app = express();
app.get("/" , (req,res) =>{
  res.send("this is the home page");
});
app.get("/contact" , (req,res) =>{
  res.send("this is the contact page");
});
app.get("/student" , (req,res) =>{
  res.send("this is the student page");
});
app.get("/problem:id" , (req,res) =>{
  const id = req.params.id;


  res.send(`ye hai mera id ${id}`);
});
app.get("/search" , (req,res) =>{
  const name = req.query.name;

  res.send(`ye hai mera name ${name}`);

  
});


app.listen(3000 , () =>{
    console.log("Server is running on port on 3000");
});
