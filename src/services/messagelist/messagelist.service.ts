import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Send } from './../../models/message/send.model';
@Injectable()
export class SendMessageService {
  private sendMessageRef = this.db.list<Send>('messagelist');
  constructor(private db: AngularFireDatabase) {}

    getMessageList(){
      return this.sendMessageRef;
    }

    addMessage(message:Send){
      return this.sendMessageRef.push(message);
    }
}
