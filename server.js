console.log("server started");
let appModule = require("./app");
let handlers=require("./requestHandler")
//appModule.appInit();
const express = require('express')
const app = express();
app.use(express.static(__dirname));   // global member in node which use current(we have all static files) directory name
/* app.use("/",function(req,res,next){
    console.log("MW1");
    next();
});
app.use("/",function(req,res,next){
    console.log("MW2");
    res.send("Response from MW2"); 
    
});
app.use("/",function(req,res,next){
    console.log("MW3");
}); */


//app.get("/",handlers.root_get);
//app.get("/userAdminDashboard.html",function(req,res){
//});


app.listen(8000, appModule.appInit);