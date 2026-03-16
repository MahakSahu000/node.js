// const express = require("express");
// const app = express();
// app.get("/" , (req,res) =>{
//   res.send("this is the home page");
// });
// app.get("/contact" , (req,res) =>{
//   res.send("this is the contact page");
// });
// app.get("/student" , (req,res) =>{
//   res.send("this is the student page");
// });
// app.get("/problem:id" , (req,res) =>{
//   const id = req.params.id;


//   res.send(`ye hai mera id ${id}`);
// });
// app.get("/search" , (req,res) =>{
//   const name = req.query.name;

//   res.send(`ye hai mera name ${name}`);

  
// });


// app.listen(3000 , () =>{
//     console.log("Server is running on port on 3000");
// });




// app.use((req,res,next) =>{
//    console.log("hello this is my middleware");
//    next();
// })
// app.use((req,res,next) =>{
//    console.log("hello this is my middleware");
//    next();
// })
// app.use((req,res,next) =>{
//    console.log("hello this is my middleware");
//    next();
// })
// app.get("/about" , (req , res)=>{
//   res.send("Hello !!! This is my about page");
// });

// app.get("/" , (req , res)=>{
//   res.send("Hello !!! This is my home page");
// });

// app.listen(3000 , () =>{
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const app = express();
app.use(express.json());

const notes = [];

app.post("/notes" , (req ,res) =>{
  console.log(req.body);
  notes.push(req.body);
  res.status(201).json({message : "Note created successfully"});

});
app.get("/notes" , (req ,res) =>{
    res.status(201).json({message : "Note created successfully",
      notes:notes
    });
      
});
app.delete("/notes/:id" , (req,res) =>{
  const id = req.params.id;
  notes.splice(id , 1)
  res.status(200).json({message : "ye hua mer adat delete"});
})
app.put("/notes/:id" , (req,res) =>{
  const id = req.params.id;
  notes[id] = req.body;
  res.status(200).json({message : "ye hua mer adat update"});
})
app.patch("/notes/:id" , (req,res) =>{
  const id = req.params.id;
  notes[id].description = req.body.description;
  res.status(200).json({message : "ye hua mer adat update"});
})
app.listen(3000 , () =>{
  console.log("ye mera hua server create");
})


