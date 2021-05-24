import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { AuthState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>('user');

export const selectUserUid = createSelector(
  getAuthState,
  (state: AuthState) => state.user?.uid
);
