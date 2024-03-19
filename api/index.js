import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRout from './routs/user.route.js';
import authRout from './routs/auth.rout.js'
import errorHandler from './utils/error.js';
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

// error handling middle weare
app.use((err,req,res,next) => {
  const statuscode = err.statuscode || 500;
 const  message = err.message || 'internal server error'
  return res.status(statuscode).json({
    sucess:false,
    message,
    statuscode
  })
})


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
