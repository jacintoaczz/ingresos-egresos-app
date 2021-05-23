import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.reducer';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  cargando$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    public _store: Store<AppState>
  ) {
    this.cargando$ = _store.select('ui').pipe(map((state) => state.isLoading));
  }

  ngOnInit(): void {}

  onSubmit(formData: any) {
    this._authService.crearUsuario(
      formData.nombre,
      formData.email,
      formData.password
    );
  }
}
