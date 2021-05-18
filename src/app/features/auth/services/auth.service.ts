import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _afAuth: AngularFireAuth, private _router: Router) {}

  public initAuthListener() {
    this._afAuth.authState.subscribe(
      (fbUser: firebase.default.UserInfo | null) => {
        console.log(fbUser);
      }
    );
  }

  public crearUsuario(nombre: string, email: string, password: string) {
    this._afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        this._router.navigate(['/']);
      })
      .catch((error) => {
        Swal.fire('Error en la creación de usuario.', error.message, 'error');
      });
  }

  public iniciarSesion(email: string, password: string) {
    this._afAuth
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        this._router.navigate(['/']);
      })
      .catch((error) => {
        Swal.fire('Error en el inicio de sesión.', error.message, 'error');
      });
  }

  public cerrarSesion() {
    this._router.navigate(['/auth/login']);
    this._afAuth.signOut();
  }
}
