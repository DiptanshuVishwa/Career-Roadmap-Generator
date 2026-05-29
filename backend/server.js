import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import logger from "./middlewares/logger.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(cors());
app.use(express.json());

app.use(logger);
app.use("/roadmap", roadmapRoutes);

app.get("/",(req,res)=>{
    res.send("API is running");
});
// testing route
app.post("/test", (req,res)=>{
    console.log(req.body);
    res.json({
        message: "Data recevied",
        data: req.body,
    });
});

app.listen(PORT, (error)=>{
    if(!error){
        console.log("Server is Running at PORT: "+PORT);
    }else{
        console.log("Error: "+error);
    }
});