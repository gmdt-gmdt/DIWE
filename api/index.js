//
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

//
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import guidesRoute from "./routes/guide.js";
import packagesRoute from "./routes/package.js";
import servicesRoute from "./routes/service.js";
import destinationsRoute from "./routes/destination.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middleWares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/guides", guidesRoute);
app.use("/api/packages", packagesRoute);
app.use("/api/services", servicesRoute);
app.use("/api/destinations", destinationsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
