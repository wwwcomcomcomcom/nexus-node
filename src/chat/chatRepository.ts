import mongoose from "mongoose";

export class ChatRepository {
  constructor() {
    mongoose.connect("mongodb://localhost:27017/chat", {});
  }

  async save(chat: any): Promise<void> {
    console.log(`Saving chat message: ${chat.message}`);
  }
}
