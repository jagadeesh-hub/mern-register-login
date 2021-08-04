const express = require("express")
const mongoose = require("mongoose")
const app = express()
const userRouter = require("./userRouter")
const morgan=require("morgan")
const cors=require("cors")
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({origin:"*"}))

app.use("/api",userRouter)

mongoose.connect("mongodb://localhost:27017/userAuth",{ useUnifiedTopology: true, useNewUrlParser: true } , () => {
    console.log("mongodb is connected successfully")
})

app.listen(5000,()=>console.log("server is started at 5000"))