import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user$!: Observable<any>;

  constructor(
    private _afAuth: AngularFireAuth,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isLoggedIn = true;
    this.user$ = this._store.select('auth').pipe(map((state) => state.user));

    if (!this.user$) {
      this._router.navigate(['/auth/login']);
    }

    return isLoggedIn;
  }
}
