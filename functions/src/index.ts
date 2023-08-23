/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
*
* See a full list of supported triggers at https://firebase.google.com/docs/functions
*/

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as express from "express";

import * as bodyParser from "body-parser";
// import * as mongoose from "mongoose";
import  mongoose from "mongoose";
import router from "./blog/apiRoutes/apiRoutes";

mongoose
  .connect("mongodb+srv://demo:demo@blog.1dhngi8.mongodb.net/Blog")
  .then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
  });
  
  const app = express();
  app.use(bodyParser.json());
  console.log("The code");
  
  // Routes
  app.use("/api/blogs", router);
  


app.get("/",(req,res)=>{
      logger.info("Hello logs!", {structuredData: true});
    res.status(200).send({message: "Hello World!."})
})

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const blogApi = onRequest(app);
// export const blogApi = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
