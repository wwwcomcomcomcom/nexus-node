import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import mongoose from "mongoose";
import { config } from "dotenv";

//load config
config();

//Server Setting
const app = express();
const server = http.createServer(app);
const port = 3000;

//DB Setting
mongoose.connect("mongodb://localhost:27017/chat");
const db = mongoose.connection;
db.on("error", (error) => console.log("connection failed ", error));
db.once("open", () => console.log("Connected to MongoDB"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
