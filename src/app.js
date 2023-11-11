const express = require("express");
const dotenv = require('dotenv');
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/userRoute");
const { errorHandler,notFound} = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
const logger = (req,res,next)=>{
     console.log("Am a Logger");
     next();
};
app.use(logger);
dbConnect();

//middlewares
app.use(express.json());
//routes

app.use("/api/users",userRoute);

//Error
app.use(notFound);
app.use(errorHandler);


module.exports=app;
