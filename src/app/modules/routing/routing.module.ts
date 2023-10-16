import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { AdminComponent } from '../admin/components/admin/admin.component';
import { InfoComponent } from '../admin/components/info/info.component';
import { EditInfoComponent } from '../admin/components/edit-info/edit-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'panel', component: DashboardComponent, children: [
      {path: 'info', component: InfoComponent, children: [
        {path:'edit-info/:id', component: EditInfoComponent}
      ]}
    ]}
  ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
