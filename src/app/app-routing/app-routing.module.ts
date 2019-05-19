import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
//import { HomeComponent } from '../home/home.component';

const routes: Routes = [{
  path: 'home',
  //component: HomeComponent,
  loadChildren: 'app/home/home.module#HomeModule',
  //children: [{ path: '', loadChildren: 'app/questions-home/questions-home.module#QuestionsHomeModule' }]
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
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
