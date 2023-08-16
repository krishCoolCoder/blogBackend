import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import router from "./blog/apiRoutes/apiRoutes";

const app = express();

mongoose
  .connect("mongodb+srv://demo:demo@blog.1dhngi8.mongodb.net/Blog")
  .then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
  });
  
  app.use(bodyParser.json());
  console.log("The code");
  
  // Routes
  app.use("/api/blogs", router);
  
  app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`);
  });
// export default app;
