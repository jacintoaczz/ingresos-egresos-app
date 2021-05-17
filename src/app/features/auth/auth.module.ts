import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const components = [LoginComponent, RegisterComponent];
const modules = [AuthRoutingModule, CommonModule, FormsModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class AuthModule {}
