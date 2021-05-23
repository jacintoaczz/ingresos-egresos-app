import { createAction, props } from '@ngrx/store';
import { User } from '../User';

export const SETEAR_USUARIO = createAction(
  '[Auth] Setear usuario',
  props<{ newUser: User }>()
);
