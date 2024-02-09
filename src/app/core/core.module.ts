import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    AuthModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
