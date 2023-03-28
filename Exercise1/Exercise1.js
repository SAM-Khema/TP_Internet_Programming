const express = require('express')
                const fs = require('fs');
                const app = express();
                

                app.get('/',function(req,res){
                        fs.readFile('src/Exercise1.html','utf8',(err,data)=>{
                                if(err){
                                        console.log(err);
                                        return;
                                        
                                }
                                res.send(data);
                        });
                });
                app.listen(3000,()=>{
                        console.log("server is running on 3000");
                })
