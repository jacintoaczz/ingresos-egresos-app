import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  public onSubmit(formData: any) {
    this._authService.iniciarSesion(formData.email, formData.password);
  }
}
