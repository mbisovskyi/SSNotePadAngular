import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisteringFormComponent } from './components/registering-form/registering-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "Home", pathMatch: "full"},
  {path: "", children: [
    {path: "Login", component: LoginFormComponent },
    {path: "Register", component: RegisteringFormComponent },
    {path: "Home", component: HomeComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
