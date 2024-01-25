import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './core/guards/is-admin.guard';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';


const routes: Routes = [
  {path: '', redirectTo:'portal', pathMatch:'full'},
  {path: 'portal', loadChildren:() => import('./features/portal/portal.module').then(m => m.PortalModule)},
  {
    //canActivate:[IsAdminGuard, IsAuthenticatedGuard],//guard si es admin y si esta autenticado
    path: 'admin',
     loadChildren:() => import('./features/admin/admin.module').then(m => m.AdminModule)},
  
  {
    path: 'payment',
    //canActivate:[IsAuthenticatedGuard],// implementación del guard
    loadChildren:() => import('./features/payment/payment.module').then(m => m.PaymentModule)},
  {path: 'auth', loadChildren:() => import('./features/auth/auth.module').then(m => m.AuthModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
