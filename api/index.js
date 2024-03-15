import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRout from './routs/user.route.js';
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log("db conected sucsessfully")
})
.catch((error)=>{
  console.log(error)
})

const app = express();

app.use("/api/user",userRout)



app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
