const fs = require("fs");
fs.mkdir("firstFolder" , (err) =>{
   if(err) 
    {
      console.log("Error found");
    }
   else
    {
      console.log("folder created successfully");
    }
    
    
      fs.writeFile("firstFolder/notes.txt" , "THIS IS MY FIRST NOTE\n" , (err) =>{
          if(err) throw err;
          console.log("File created successfully");

     
    
        fs.appendFile("firstFolder/notes.txt" , " This is an appended note\n" , (err) =>{
           if(err) throw err;
           console.log("File appended successfully");

          fs.rename("firstFolder" , "newFolder" , (err) =>{
            if(err) throw err;
            console.log("Folder renamed successfully");

          fs.rm("newFolder" , {recursive : true , force : true} , (err) =>{
             if(err) throw err;
             console.log("Folder deleted successfully");
             });
            });
           });
         });
    
    
    
});