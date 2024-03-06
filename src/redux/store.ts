import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
});

//스토어 자체에서 `RootState` 및 `AppDispatch` 유형을 추론합니다
export type RootState = ReturnType<typeof store.getState>;

//추론된 유형: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
