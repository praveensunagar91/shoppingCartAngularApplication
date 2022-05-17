import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { CakeHomeComponent } from './cake-home/cake-home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:CakeHomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',loadChildren:()=> import('./dashboard/dashboard.module').then((m)=>m.DashbaordModule),canActivate:[AuthGuardGuard]},
  {path:'pageNotFound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
