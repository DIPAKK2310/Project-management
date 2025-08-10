import dotenv from 'dotenv';

dotenv.config({
    path:"./.env",
});
let myName = process.env.MY_NAME 


console.log("Myname is:",myName)
console.log("App is running...");

