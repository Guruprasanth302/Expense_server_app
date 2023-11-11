const mongoose = require("mongoose");
//mongodb+srv://guruprasanthp2020csea:<password>@cluster0.axl2fgh.mongodb.net/?retryWrites=true&w=majority
const dbConnect = async() => {
   try{
   await mongoose.connect(
      process.env.MONGO_URL);
   console.log("Connection sucessfull");
   }
   catch(err){
    console.log(`Connection error ${err.message}`)
   }
}

module.exports=dbConnect;