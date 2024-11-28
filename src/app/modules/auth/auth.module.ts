import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [AuthComponent, LoginComponent],
})
export class AuthModule {}
