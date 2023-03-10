import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { APP } from '../app.module';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats:any;
  constructor() {
    const db=getFirestore(APP);
    //Función recopiladora de datos de la base

    this.chats=getChats(db);
    async function getChats(db: Firestore) {
      const chatsCol = collection(db, 'chats');
      const chatsSnapshot = await getDocs(chatsCol);
      const chatsList = chatsSnapshot.docs.map(doc => doc.data());
      return chatsList;
    }
   }
   cargarmensajes(){
    return this.chats;
   }
}
