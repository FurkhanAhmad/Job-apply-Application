
import express from "express"
import { connectdb } from "./connectDb/conncedb.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
dotenv.config(); // loads .env file



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
const PORT=process.env.PORT || 7000


app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    connectdb();
 console.log(`server is running on PORT ${PORT}`)
}) 