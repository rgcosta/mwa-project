import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth-guard.service'

const routes: Routes = [{
  path: '123',
  component: HomeComponent,
  canActivate: [AuthGuard]
  
}, {
path: '456',
  component: HomeComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}