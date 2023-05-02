import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
  })

  app.get('/', (req,res)=>{
    res.send('Project running!')
  })

const connecturl = 'mongodb+srv://testuser:testpassword@cluster0.2ythvyv.mongodb.net/?retryWrites=true&w=majority'

const CONNECTION_URL=connecturl;
  const PORT = process.env.PORT || 8000
  mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
    .catch((error)=>console.log(error));