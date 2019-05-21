import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule} from "@angular/router";
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      {path: '', component: ProfileComponent},
      {path: 'myquestions', component: ProfileInfoComponent}
    ])
  ],
  declarations: [ProfileComponent, ProfileInfoComponent]
})
export class ProfileModule { }
