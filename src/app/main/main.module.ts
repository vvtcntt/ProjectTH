import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FunctionComponent } from './function/function.component';
import {mainRoutes} from './main.routes';
import{RouterModule,Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import {UserModule} from './user/user.module';
import {HomeModule} from './home/home.module';

 @NgModule({
  imports: [
    CommonModule, 
     RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent, FunctionComponent]
})
export class MainModule { }
