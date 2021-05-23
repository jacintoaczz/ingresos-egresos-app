import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.reducer';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  cargando$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _store: Store<AppState>
  ) {
    this.cargando$ = _store.select('ui').pipe(map((state) => state.isLoading));
  }

  ngOnInit(): void {}

  public onSubmit(formData: any) {
    this._authService.iniciarSesion(formData.email, formData.password);
  }
}
