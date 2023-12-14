import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinkComponent } from './pages/link/link.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';
import { NewcountComponent } from './pages/newcount/newcount.component';
import { PasswordfComponent } from './pages/passwordf/passwordf.component';



const routes: Routes = [
{
    path: '',
    component: HomeComponent
},{
    path: 'newcount',
    component: NewcountComponent
},{
    path: 'contra',
    component: PasswordfComponent
},{
    path: 'link',
    component: LinkComponent
},{
    path: 'sesion',
    component: IniciarsesionComponent
}


];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(routes)
