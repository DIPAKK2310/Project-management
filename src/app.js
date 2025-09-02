import express from "express";
import cors from "cors";


const app = express();
// Middlewre for express
app.use(express.json({limit:"14kb"}));
app.use(express.urlencoded({extended:true, limit:"14kb"}));
// Using or parsing the pulic folser as static mean now can access the files in public folder
app.use(express.static("public"));

// Cors use
app.use(
  cors({
    origin:process.env.CORS_ORIGIN?.split(",")|| "https://localhost:5173", // You can specify the origin you want to allow, e.g., "http://localhost:3000"
    credentials: true, // Allow credentials if needed
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}))

// Importing routes
import healthCheckRouter from "./routes/healthCheck.route.js";
app.use("/api/v1/healthCheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Welcome to working env!");
});
app.get("/server", (req, res) => {
  res.send("Welcome to working server!");
});


export default app;