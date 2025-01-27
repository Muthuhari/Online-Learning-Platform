const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes")

const app = express();
const cors =require("cors")

//Middleware
//mongodb+srv://admin_muthu:<db_password>@cluster0.y4dje.mongodb.net/
//data base password : VEaqQDV4AvmcwmU3


//new 
// C3LPWXb9Uz5pruqX
// muthuharinisansala2
app.use(express.json());
app.use(cors());
app.use("/users",router);
app.use("/file", express.static("file"))
mongoose.connect("mongodb+srv://muthuharinisansala2:C3LPWXb9Uz5pruqX@cluster0.eehxy.mongodb.net/")
.then(()=> console.log("connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err) => console.log(err));

//Call Register Model

require("./Model/Register");
const User = mongoose.model("Register");
app.post("/register", async(req,res) => {
    const {name, gmail, password} = req.body;
    try{
        await User.create({
            name,
            gmail,
            password
        })
        res.send({ status: "ok"});
    } catch (err){
        res.send({ status: "err"});
    }
   
})

//Login function
app.post("/login", async(req,res) => {
    const {gmail, password} = req.body;
    try{
        const user = await User.findOne({gmail});
        if(!user){
            return res.json({err: "User Not Font"})
        }
        if (user.password === password){
            return res.send({status: "ok"})
        }else{
            return res.json({err: "incorrect password" })
        }
    }catch(err){
        console.error(err)
        res.status(500).json({err:"server Err"})    
    }
})
//Upload function
const multer =require("multer")
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./file')
    },
    filename: function(req, file, cb){
        const uniqueSuffix =Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

//Insert Model part

require("./Model/PdfModel")
const pdfSchema =mongoose.model("PdfDetails")
const uplode =multer({storage})

app.post("/uplodefile" , uplode.single("file"), async (req, res) =>{
    console.log(res.file)
    const title = req.body.title;
    const pdf = req.file.filename;
    try{
        await pdfSchema.create({title: title, pdf: pdf})
        console.log("pdf Uploaded successfully")
        res.send({ status: 200 });

    }
    catch (err) {
        console.log(err)
        res.status(500).send({status: "error"})
    }
})


app.get("/getFile", async (req, res) => {
    try{
        const data = await pdfSchema.find({})
        res.send({status : 200, data: data})
    }catch (err){
        console.log(err)
        res.status(500).send({status:'error'})
    
    }
})
//Image Part


require("./Model/ImgModel")
const ImgSchema =mongoose.model("ImagModel")
const multerimg =require("multer")

const storageimg = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../Frontend/src/Components/Imguploder/files')
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})
const uploadimg = multerimg({storage : storage})

app.post("/uplodeImg" , uploadimg.single("image"), async (req, res) =>{
    console.log(res.body)
    const imageName = req.file.filename;
    try{
        await ImgSchema.create({image : imageName})
        res.json({status: "ok"})
    }
    catch (error) {
        res.json({status: error})
    }
})
//dsplay images
app.get("/getImage", async (req, res) => {
    try{
       ImgSchema.find({}).then((data) => {
        res.send({status : "ok", data: data})
        })
       
    }catch (error) {
        res.json({status: error})
    }
})

