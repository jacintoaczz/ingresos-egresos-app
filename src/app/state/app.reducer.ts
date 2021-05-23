import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from '../shared/state/ui.reducers';

export interface AppState {
  ui: fromUI.State;
}

// Creamos una constante para relacionar el estado con sus respectivos reducers y asi
// importar dichos valores en el StoreModule de manera mas facil.
export const appReducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
};
