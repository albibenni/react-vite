// import {
//   Action,
//   AnyAction,
//   combineReducers,
//   configureStore,
//   createAction,
//   ThunkAction,
// } from '@reduxjs/toolkit';
//
// export const logoutAction = createAction<void>('LOGOUT');
// const combinedReducer = combineReducers({});
// const rootReducer = (state: RootState | undefined, action: AnyAction) => {
//   if (action.type === 'LOGOUT') {
//     // deleteJwtToken();    // eslint-disable-next-line no-param-reassign
//     state = undefined;
//   }
//   return combinedReducer(state, action);
// };
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
//   devTools: import.meta.env.DEV,
// });
//
// // Infer the `RootState` and `AppDispatch` types from the store itselfexport
// type RootState = ReturnType<typeof combinedReducer>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action
// >;
import { configureStore, combineReducers, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'vite-plugin-checker/dist/cjs/types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const combinedReducer = combineReducers({});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// type RootState = ReturnType<typeof combinedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export default {
  store,
};
