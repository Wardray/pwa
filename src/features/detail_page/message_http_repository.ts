import { HttpRepository } from "../../core/repository/http_repository";
import { IMessage } from "./message_store";

export class MessageHttpRepository extends HttpRepository {
  getMessages = (messagesFrom: string) =>
    this.jsonRequest<IMessage[]>("/user/get/messages", "POST", {
      id: messagesFrom,
    });
  sendMessage = (message: IMessage) =>
    this.jsonRequest<IMessage[]>("/user/send/messages", "POST", message);
}
