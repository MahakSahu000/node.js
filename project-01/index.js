const express = require("express");
const users = require("./MOCK_DATA.json");
const fs  = require("fs");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;



const userSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true,
  },
    lastName : {
     type : String,
    },
    email :{
      type : String,
      required : true,
      unique : true,

    },
    jobTitle :{
      type : String,
    },
    gender :{
      type : String,
    },

})

const user = mongoose.model('user' , userSchema) ;




// middleware - plugin
app.use(express.urlencoded({ extended: false}));
// app.use(express.json({ extended: false}));

app.use((req,res,next) =>{
    
   fs.appendFile('log.txt' , `\n${Date.now()} : ${req.ip} {req.method} : ${req.path}` , (err , data) =>{
       next();
   });
   
}) ;
app.use((req,res,next) =>{
    console.log("hello from middleare 2" );
    next();
   
})


app.get('/users' , (req,res) =>{
  const html = `
  <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `
  res.send(html);
});

app.get('/api/users' , (req,res) =>{
  console.log(req.headers);
  res.setHeader("X-myName" , "Mahak sahu"); // custom header
  // always add X to custom headers
  return res.json(users);
});

app.route('/api/users/:id').get( (req,res) =>{
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if(!user) return res.status(404).json({error : "user not found"});
  return res.json(user);
}).patch((req,res) =>{
    return res.json({status :"pending"});
}).delete((req,res)=>{
   return res.json({status :"pending"});
});


app.post('/api/users' , (req,res) =>{
   const body = req.body;
    if(!body || !body.first_name || !body.email || !body.last_name || !body.gender || !body.job_title){
      return res.status(400).json({msg : "All fields are required"});
    }
    users.push({...body , id:users.length + 1} );
    fs.writeFile('./MOCK_DATA.json' , JSON .stringify(users),(err , data) =>{
       return res.status(201).json({status : "success" , id : users.length});

    });
  
});








app.listen(PORT , () => console.log(`Server started at port ${PORT}`));