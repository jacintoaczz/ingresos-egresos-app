import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { IngresoEgreso } from '../Ingreso-Egreso.model';

import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';
import {
  ACTIVAR_LOADING,
  DESACTIVAR_LOADING,
} from 'src/app/shared/state/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class IngresoEgresoService {
  constructor(
    private _afDatabase: AngularFirestore,
    private _authService: AuthService,
    private _store: Store<AppState>
  ) {}

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    const user = this._authService.getUserData();
    this._store.dispatch(ACTIVAR_LOADING());

    this._afDatabase
      .doc(`${user.uid}/ingresos-egresos`)
      .collection('items')
      .add({ ...ingresoEgreso })
      .then(() => {
        this._store.dispatch(DESACTIVAR_LOADING());
        Swal.fire(
          'Creado el registro: ',
          ingresoEgreso.descripcion?.toString(),
          'success'
        );
      });
  }
}
