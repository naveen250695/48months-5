import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/fe/firebase.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   
  private order_id = this.generateId();
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  

  private generateId() {
    return Math.round(Math.random() * 100000);
  }





}



