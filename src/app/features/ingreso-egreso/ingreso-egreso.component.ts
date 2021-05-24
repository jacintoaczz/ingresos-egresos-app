import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.reducer';
import { IngresoEgreso } from './Ingreso-Egreso.model';
import { IngresoEgresoService } from './services/ingreso-egreso.service';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss'],
})
export class IngresoEgresoComponent implements OnInit {
  form!: FormGroup;
  tipo = 'ingreso';
  cargando$: Observable<boolean>;

  constructor(
    private _ingresoEgresoService: IngresoEgresoService,
    private _store: Store<AppState>
  ) {
    this.cargando$ = _store.select('ui').pipe(map((state) => state.isLoading));
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      monto: new FormControl(0, Validators.min(1)),
    });
  }

  crearIngresoEgreso() {
    const ingresoEgreso = new IngresoEgreso({
      ...this.form.value,
      tipo: this.tipo,
    });

    this._ingresoEgresoService.crearIngresoEgreso(ingresoEgreso);

    this.form.reset({
      monto: 0,
    });
  }
}
