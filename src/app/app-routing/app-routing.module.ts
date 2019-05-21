import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'home/:topic',
  component: HomeComponent
}, {
  path: 'home/:topic/:new',
  redirectTo: 'home/:new'
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
