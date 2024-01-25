import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { AboutView } from './views/about/about.view';
import { DetailView } from './views/detail/detail.view';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path:'', component: PortalComponent,
    children:[
      {path: 'home', component: HomeView},
      {path: 'detail/:id', component: DetailView},//con los : le digo que le paso un parametro de id ej: :id
      {path: 'about', component: AboutView},
      {path: 'not-found', component: NotFoundView}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
