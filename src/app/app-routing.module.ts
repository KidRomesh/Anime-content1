import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent, pathMatch:"full"},
  {path:"add", component:AddComponent, pathMatch:"full"},
  {path:"nav", component:NavComponent, pathMatch:"full"},
  {path:"top", component:TopbarComponent, pathMatch:"full"},
  {path:"edit/:name", component:EditComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
