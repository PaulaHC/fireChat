import { Component, Pipe, ViewChild } from '@angular/core';
import { getDocs } from 'firebase/firestore/lite';
import { map } from 'rxjs';
import { ChatService } from 'src/app/providers/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  mensaje:string="";
  chats: any;
  constructor( private _cs:ChatService){
    this.chats=_cs.cargarmensajes();
    console.log(this.chats);
  }
  enviar_mensaje(){
  }
}
