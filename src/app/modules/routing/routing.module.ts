import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
