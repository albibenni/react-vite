// import {
//   configureStore,
//   ThunkAction,
//   Action,
//   PayloadAction,
// } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//
// const counterReducer = (state: RootState, action: PayloadAction) => ({
//   counter: state.counter + 1,
// });
//
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };
//
// export const store = configureStore({
//   reducer: counterReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });
//
// store.subscribe(counterSubscriber);
// store.dispatch({ type: 'increment' });
//
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
//
// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// // type RootState = ReturnType<typeof combinedReducer>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action
// >;
// export default {
//   store,
// };
