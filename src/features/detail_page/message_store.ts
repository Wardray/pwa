import { NavigateFunction } from "react-router-dom";
import { LifeCycleStore } from "../../core/helper/use_store";
import { MessageHttpRepository } from "./message_http_repository";
import makeAutoObservable from "mobx-store-inheritance";

export interface IMessage {
  date: number;
  message: string;
  toWhom: string;
  from: string;
}

export class MessageStore extends LifeCycleStore {
  messageHttpRepository = new MessageHttpRepository();
  messages: IMessage[] = [];
  input: string = "";
  id?: string;

  constructor() {
    super();
    makeAutoObservable(this);
  }
  async sendMessage() {
    await this.messageHttpRepository.sendMessage({
      date: Date.now(),
      from: this.id ?? "",
      message: this.input,
      toWhom: localStorage.getItem("authUserName") ?? "",
    });
    this.initParam(this.id!);
  }

  async initParam(id: string) {
    this.id = id;
    await this.mapOk(this.messageHttpRepository.getMessages(id), "messages");
  }
}
