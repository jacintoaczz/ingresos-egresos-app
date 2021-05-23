import * as fromAuth from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { User } from '../User';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(fromAuth.SETEAR_USUARIO, (state, { newUser }) => ({
    user: { ...newUser },
  }))
);

export function authReducer(state: AuthState | undefined, action: any) {
  return _authReducer(state, action);
}
