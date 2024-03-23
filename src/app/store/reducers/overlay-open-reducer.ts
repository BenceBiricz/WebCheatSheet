// src/app/reducers/my-boolean.reducer.ts

import { Action, createReducer, on } from '@ngrx/store';
import { toggleOverlay } from '../actions/overlay-open-action';

export const initialState = false;

const _overlayReducer = createReducer(
  initialState,
  on(toggleOverlay, (state) => !state)
);

export function overlayReducer(state: boolean | undefined, action: Action) {
  return _overlayReducer(state, action);
}
