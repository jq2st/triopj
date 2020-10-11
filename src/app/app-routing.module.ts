import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent},
  {path: 'admin', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
