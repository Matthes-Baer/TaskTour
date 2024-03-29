import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { ActiveTodosSlice } from "../features/ActiveTodosSlice";
import { ColorSlice } from "../features/ColorSlice";
import { DoneTodoSlice } from "../features/DoneTodoSlice";
import { CurrentTimeSlice } from "../features/CurrentTimeSlice";

// APIs:
// import { QuoteAPI } from "../APIs/QuoteAPI";
// import { WeatherApi } from '../APIs/WeatherApi';

export const store = configureStore({
  reducer: {
    activeTodos: ActiveTodosSlice.reducer,
    colorTheme: ColorSlice.reducer,
    doneTodos: DoneTodoSlice.reducer,
    currentTime: CurrentTimeSlice.reducer,
    // quoteAPI: QuoteAPI.reducer,
    // WeatherApi: WeatherApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(QuoteAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
