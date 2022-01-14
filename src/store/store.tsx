import { configureStore } from "@reduxjs/toolkit"
import commonDashboardReducer from "./slices/commonDashboardSlice"

export const store:any = configureStore({
    reducer: {
      commonDashboard:commonDashboardReducer
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch