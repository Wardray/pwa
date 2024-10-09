import { NavigateFunction } from "react-router-dom";
import { LifeCycleStore } from "../../core/helper/use_store";
import { MessageHttpRepository } from "./message_http_repository";
import { makeAutoObservable } from "mobx";

export interface IMessage {
  date: number;
  message: string;
  toWhom: string;
  from: string;
}

export class MessageStore implements LifeCycleStore {
  messageHttpRepository = new MessageHttpRepository();
  messages: IMessage[] = [];
  input: string = "";
  id?: number;
  constructor() {
    makeAutoObservable(this);
  }
  initParam(id: number) {
    this.id = id;
  }
}
