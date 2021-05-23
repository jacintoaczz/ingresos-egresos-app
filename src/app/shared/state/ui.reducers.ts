import * as fromUI from './ui.actions';
import { createReducer, on } from '@ngrx/store';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

const _uiReducer = createReducer(
  initialState,
  on(fromUI.ACTIVAR_LOADING, (state) => ({ isLoading: true })),
  on(fromUI.DESACTIVAR_LOADING, (state) => ({ isLoading: false }))
);

export function uiReducer(state: State | undefined, action: any) {
  return _uiReducer(state, action);
}
