import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/fe/firebase.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-free-sim',
  templateUrl: './free-sim.component.html',
  styleUrls: ['./free-sim.component.css']
})
export class FreeSimComponent implements OnInit {
  
  
 constructor(private router:Router,private firebaseService:FirebaseService,private http: HttpClient){};
 
 
 ngOnInit() {
 
}

navigateToConform(){

  this.router.navigate(['/', 'welcome']);
}

submit(userForm) {
  console.log('Form Submitted!',userForm);
this.firebaseService.addAUserToFirebase(userForm.value);
this.navigateToConform();
let obs = this.http.get('http://localhost:8091/email/sendEmail');
obs.subscribe((response)=> console.log(response));

}




}

  







