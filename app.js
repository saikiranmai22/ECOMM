const express = require("express")
const mongoose = require("mongoose")
const app=express()
const Blog= require("./models/blog")
app.set("view engine","ejs")

app.use('/images',express.static('images'));


const dbURL = "mongodb+srv://user:test1234@coder.mdkw6ht.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURL)
.then(()=>{
    console.log("mongo connected")
    app.listen(3000)
}).catch((err)=>{
    console.log(err)
})
//index
app.get("/",(req,res)=>{
    res.render("index",{title:"HOME PAGE"})
    
})

app.get("/blogs",(req,res)=>{
    Blog.find().then((result)=>{
        res.render("login",{title:"LOGIN INFO",blogs: result})
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{title:"ABOUT US"})
})
app.get("/cart",(req,res)=>{
    res.render("cart",{title:"SHOPPING CART"})
})

app.get("/shop",(req,res)=>{
    res.render("shop",{title:"PRODUCTS"})
})

app.get("/login",(req,res)=>{
    // res.render("login",{title:"LOGIN INFO"})
    res.redirect("/blogs")
})

app.use(express.urlencoded({ extended: true}) )

app.post("/blogs",(req,res)=>{
    // console.log(req.body)
    const blog = new Blog(req.body)
    blog.save().then((result)=>{
        res.redirect("/blogs")
    }).catch((err)=>{
        console.log(err)
    })
})