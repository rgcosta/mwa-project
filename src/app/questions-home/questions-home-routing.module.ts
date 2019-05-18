import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsHomeComponent } from './questions-home.component';
//import { OnlyAdminUsersGuard } from './admin-user-guard';

const routes: Routes = [{
  path: ':topic',
  //canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: QuestionsHomeComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuestionsRoutingModule {}
