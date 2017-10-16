import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
export const loginRoutes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'index',component:LoginComponent}
 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
