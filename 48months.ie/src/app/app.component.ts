import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/fe/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
title ='tour-of-heroes'
hero = 'Windstorm';

constructor(private firebaseService:FirebaseService){}

}
