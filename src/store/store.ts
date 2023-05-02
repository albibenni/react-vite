import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  createAction,
  ThunkAction,
} from '@reduxjs/toolkit';

export const logoutAction = createAction<void>('LOGOUT');
const combinedReducer = combineReducers({});
const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === 'LOGOUT') {
    // deleteJwtToken();    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return combinedReducer(state, action);
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itselfexport
type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
