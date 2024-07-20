import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MessageDetailsComponent} from "../message-details/message-details.component";
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  templateUrl: './my-first-component.component.html',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    MessageDetailsComponent
  ],
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {
  name: string = '';
  email: string = '';
  isSubmitted = false
  messages: Array<any> = [];

  constructor(private service: MyFirstService) {
    this.messages=this.service.getAllMessages();
  }

  onSubmit() {
    console.log(this.name);
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email
    })
  }

  onKeyDown() {
    console.log(this.name);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(1);
  }
}
