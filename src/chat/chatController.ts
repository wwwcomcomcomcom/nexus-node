import { Server, Socket } from "socket.io";
import * as http from "http";
import mongoose from "mongoose";
import { ChatService } from "./chatService";
import { ChatRequestDto } from "./chatRequestDto";

class ChatController {
  private chatService: ChatService;
  constructor(chatService: ChatService, httpServer: http.Server) {
    this.chatService = chatService;
    const io = new Server(httpServer);

    io.on("connection", this.onConnection);
  }

  onConnection(socket: Socket) {
    //authorization
    socket.request.headers.authorization;

    socket.on("chat message", this.onChat);
    socket.on("join room", (room: string) => {
      socket.join(room);
    });
    socket.on("leave room", (room: string) => {
      socket.leave(room);
    });
    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  }

  onChat(chatRequest: ChatRequestDto) {
    this.chatService.sendMessage(chatRequest);
  }
}
