import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}
    

    ngOnInit() {}
    
    navigateToSignIn(){

      this.router.navigate(['/', 'signin']);
  }

  navigateToFreeSim(){

    this.router.navigate(['/', 'free-sim']);
  }

  navigateToActivateSim(){
    
    this.router.navigate(['/', 'activate-sim']);
  
  }
   
  navigateToConform(){
    
    this.router.navigate(['/', 'welcome']);

  }
      
      }
    
