import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'user/register',
    component: RegisterUserComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/resetPassword',
    component: ResetPasswordComponent
  },
  {
    path: 'user/forgotPassword',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
