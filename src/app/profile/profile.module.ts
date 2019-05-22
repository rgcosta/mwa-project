import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule} from "@angular/router";
import { DisplayProfileComponent } from './display-profile/display-profile.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      {path: '', component: ProfileComponent}
    ])
  ],
  declarations: [ProfileComponent, DisplayProfileComponent]
})
export class ProfileModule { }
