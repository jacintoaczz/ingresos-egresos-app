import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public _authService: AuthService) {}

  ngOnInit(): void {}

  public cerrarSesion() {
    this._authService.cerrarSesion();
  }
}
