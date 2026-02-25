import mongoose from "mongoose"


export const connectdb=async()=>{
      try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Db Connected successfully")
      } catch(error){
      console.log(error)
      }
}