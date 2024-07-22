import mongoose from "mongoose";

export const Chat = mongoose.model(
  "Chat",
  new mongoose.Schema({
    room: String,
    message: String,
    sender: String,
    timeStamp: { type: Date, default: Date.now() },
  })
);
