import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRout from './routs/user.route.js';
import authRout from './routs/auth.rout.js'
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log("db conected sucsessfully")
})
.catch((error)=>{
  console.log(error)
})

const app = express();
// Middleware to parse JSON data
app.use(express.json());

app.use("/api/user",userRout)
app.use("/api/auth",authRout)



app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
