const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const AuthRoute = require("./routes/UserRoute")


dotenv.config()


app.use(express.json())




const port = process.env.port || 5000



app.use("/api/auth",AuthRoute)








mongoose.connect(process.env.mongoUri).then(()=>{
    console.log('mongoDb connected')
}).catch((err)=>{
    console.log(err)
    })
    



app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})