import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './fe/pages/authentication/signin/signin.component';
import { HeaderComponent } from './fe/components/header/header.component';
import { FreeSimComponent } from 'src/app/fe/pages/landing/free-sim/free-sim.component';
import { ActivateSimComponent } from './fe/pages/landing/sim-activate/activate-sim/activate-sim.component';
import { WelcomeComponent } from './fe/pages/landing/welcome/welcome.component';
export const routes: Routes = 
[
  { path: '', redirectTo: '/headerpage', pathMatch: 'full' },
  {path :'headerpage', component:  HeaderComponent },
  {path :'signin', component: SigninComponent},
  {path :'free-sim', component: FreeSimComponent},
  {path :'activate-sim', component:ActivateSimComponent},
  {path :'welcome', component: WelcomeComponent}
];

/*export const routes: Routes = 
[
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path :'homepage', component:  HomecontentComponent },
  {path :'signin', component: SigninComponent}
];*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
