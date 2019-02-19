import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './fe/components/header/header.component';
import { FooterComponent } from './fe/components/footer/footer.component';
import { HomecontentComponent } from './fe/pages/landing/homecontent/homecontent.component';
import { FreeSimComponent } from 'src/app/fe/pages/landing/free-sim/free-sim.component';
import { SigninComponent } from './fe/pages/authentication/signin/signin.component';
import { ActivateSimComponent } from './fe/pages/landing/sim-activate/activate-sim/activate-sim.component';
import { WelcomeComponent } from './fe/pages/landing/welcome/welcome.component';
import { FirebaseService } from './fe/firebase.service';
import {AngularFireModule} from  'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from 'src/environments/environment';

/*export const routes: Routes = 
[
{path:'signin', component: SigninComponent}
];*/



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomecontentComponent,
    FreeSimComponent,
    SigninComponent,
    ActivateSimComponent,
    WelcomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
   
  
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
