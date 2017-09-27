import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FuntionComponent } from './funtion/funtion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, FuntionComponent]
})
export class MainModule { }
