import {  ApiResponse } from '../utils/api-response.js';
import { asynchandler } from '../utils/async-handler.js';




/*
Understanding
const healthCheck =  async (req, res, next) => {
    try {
    const user = await getUserFromDB(); // Hypothetical function to get user data
    res.status(200).json(
     new ApiResponse(200,{message:"✅Server is running"})
    );
    } catch (error) {
         console.error(error)
    }
}
                */

               
const healthCheck = asynchandler(async ( req, res)=> {
  res.status(200).json(
    new ApiResponse(200, {message:"✅Server is running"})
  );
});


export {healthCheck};