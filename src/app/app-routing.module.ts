import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsformComponent } from './detailsform/detailsform.component';
import { LoginComponent } from './login/login.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'signin',component:LoginComponent},
  {path:'userdetails',component:DetailsformComponent},
  {path:'signup', component:SignupComponent},
  {path:'persondetails', component:PersondetailsComponent},
  {path:'', redirectTo:'signin', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
