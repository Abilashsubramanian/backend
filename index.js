const express=require ("express")
const path=require ('path')
const app= express()
const {dbConnect}=require("./db/dbConnect")
const {studentModel}=require("./studentModel/studentModel")
const { default: mongoose } = require("mongoose")
//static middleware
app.use(express.static(path.join(__dirname,"views")))
app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.url,req.method);
   // res.send("<h1>This server is connected by nodemon</h1>")
   res.sendFile(path.join(__dirname,"views","index.html"))
})
// app.get("/blog",(req,res)=>{
//     console.log(req.url,req.method)
//    // res.send("<h1>This server is handled by blog page!!!!!!!!!!!!</h1>")
//    res.sendFile(path.join(__dirname,"views","blog.html"))
// })
// app.get("/index.css",(req,res)=>{
//     console.log(req.url,req.method)
//    // res.send("<h1>This server is handled by blog page!!!!!!!!!!!!</h1>")
//    res.sendFile(path.join(__dirname,"views","index.css"))
// })
//create document using post method
app.post("/newstudent",async(req,res)=>{
   console.log(req.url,req.method);
   console.log(req.body)
   const student=new studentModel(req.body)
   const response=await student.save()
   console.log(response)
   res.send({msg:"data received"})
})
//get document using get method
app.get('/getstudents',async(req,res)=>{
    let student=await studentModel.find()
    console.log(student)
    res.send(student)
})

app.listen(7000,"127.0.0.7",()=>{
    console.log('server started at http://127.0.0.7:7000');
    dbConnect()
})  