import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [{
  path: 'home',
  loadChildren: 'app/home/home.module#HomeModule'
}, {
  path: 'question',
  loadChildren: 'app/questions/questions.module#QuestionsModule'
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}, {
  path: 'profile',
  loadChildren: 'app/profile/profile.module#ProfileModule'
  // canActivate: [AuthGuard],

}, {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
