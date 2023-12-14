import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';
import { LinkComponent } from './pages/link/link.component';
import { NewcountComponent } from './pages/newcount/newcount.component';
import { PasswordfComponent } from './pages/passwordf/passwordf.component';

import { AppComponent } from './app.component';
import { userservice } from './services/userservice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciarsesionComponent,
    LinkComponent,
    NewcountComponent,
    PasswordfComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders,userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
