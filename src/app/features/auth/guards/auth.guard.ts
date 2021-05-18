import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _afAuth: AngularFireAuth, private _router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const user = await this._afAuth.currentUser;
    // Convertimos el valor en un valor booleano.
    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      this._router.navigate(['/auth/login']);
    }

    return isLoggedIn;
  }
}
