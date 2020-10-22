import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: '', component: MainLayoutComponent},
  {path: 'admin', children: [
    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
    {path: 'login', component: AdminLoginComponent},
    {path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
