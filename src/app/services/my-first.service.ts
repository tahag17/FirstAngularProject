import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'taha',
      email: 'thisis2@myemail.com'
    });
    this.insert({
      name: 'taha',
      email: 'thisis2@myemail.com'
    });
    this.insert({
      name: 'taha',
      email: 'thisis2@myemail.com'
    });
  }

  insert(message: { name: string, email: string }): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
