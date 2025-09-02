import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './db/db_Connection.js';





const port = process.env.PORT || 7000;


// console.log("PORT from env",process.env.PORT);

connectDB().
then(()=>{
  app.listen(port,()=>{
    console.log(`✅ Server is running at http://localhost:${port}`)
  })
})
.catch((err)=>{
  console.error("❌ Mongodb connection failed", err);
  process.exit(1); // Exit process with failure
}

)


