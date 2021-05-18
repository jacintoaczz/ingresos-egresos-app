import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    this._authService.crearUsuario(
      formData.nombre,
      formData.email,
      formData.password
    );
  }
}
