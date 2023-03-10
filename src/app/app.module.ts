import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Componentes
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './providers/chat.service';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Gw9pUD2yZANs62btAsjKO6nv5AUJWO4",
  authDomain: "firechat-e5af5.firebaseapp.com",
  projectId: "firechat-e5af5",
  storageBucket: "firechat-e5af5.appspot.com",
  messagingSenderId: "511274278663",
  appId: "1:511274278663:web:9177402b0b52b5edd4efa2"
};

// Initialize Firebase
export const APP = initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


