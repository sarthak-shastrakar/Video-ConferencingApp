import express from "express";

import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controller/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8001);
app.use(cors());
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ limit: "50kb", extended: true }));

app.use("/api/v1/users", userRoutes);

// app.get("/home", (req, res) => {
//   res.send("the server is run on 8001 port !");
// });

// app.listen(8001, () => {
//   console.log("the server is runned !");
// });

const start = async () => {
  app.set("mongo_user");
  const connectionDB = await mongoose.connect(
    "mongodb+srv://sarthakshastrakar9:K58zWkPV9Nwwci4j@cluster0.fwisz.mongodb.net/"
  );
  console.log(`our mongo connected host: ${connectionDB.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("the server is runned & port is 8001!");
  });
};

start();
