import mongoose from "mongoose";
import { ChatRequestDto } from "./chatRequestDto";
import { ChatRepository } from "./chatRepository";
import { Chat } from "./entity/chat";

export class ChatService {
  constructor(private chatRepository: ChatRepository) {}

  async sendMessage(chatMessage: ChatRequestDto): Promise<void> {
    const chat = new Chat({ ...chatMessage });
    await this.chatRepository.save(chat);
  }
}
