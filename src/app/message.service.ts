import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages : string[] = [];

  add(message: string) {
    this.messages.push(message)
  }

  constructor() { }

  clear() {
    this.messages = []
  }

  getMessages() : Observable<String[]>{
    return of(this.messages)
  }
}
