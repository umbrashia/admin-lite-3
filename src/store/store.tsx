import { configureStore } from "@reduxjs/toolkit"
import commonDashboardReducer from "./slices/commonDashboardSlice"
import fruitMartReducer from "./slices/fruitMartSlice"


export const store:any = configureStore({
    reducer: {
      commonDashboard:commonDashboardReducer,
      fruitMart:fruitMartReducer
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch