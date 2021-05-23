import * as fromUI from '../shared/state/ui.reducers';
import * as fromAuth from '../features/auth/state/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState;
}

// Creamos una constante para relacionar el estado con sus respectivos reducers y asi
// importar dichos valores en el StoreModule de manera mas facil.
export const appReducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer,
};
