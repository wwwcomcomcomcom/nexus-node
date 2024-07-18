export class ChatRepository {
  async save(chat: any): Promise<void> {
    console.log(`Saving chat message: ${chat.message}`);
  }
}
