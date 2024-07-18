import mongoose from "mongoose";
import { ChatRequestDto } from "./chatRequestDto";
import { ChatRepository } from "./chatRepository";

export class ChatService {
  constructor(private chatRepository: ChatRepository) {}

  async sendMessage(chatMessage: ChatRequestDto): Promise<void> {
    const chat = new Chat({ ...chatMessage });
    await this.chatRepository.save(chat);
  }
}
const Chat = mongoose.model(
  "Chat",
  new mongoose.Schema({
    room: String,
    message: String,
    sender: String,
    timeStamp: { type: Date, default: Date.now() },
  })
);
