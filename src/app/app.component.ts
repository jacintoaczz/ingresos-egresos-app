import { Component, OnInit } from '@angular/core';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ingresos-egresos-app';

  constructor(private _authService: AuthService) {}
  ngOnInit(): void {
    this._authService.initAuthListener();
  }
}
