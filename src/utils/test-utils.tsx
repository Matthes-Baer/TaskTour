//! Mit dieser file wird das Problem mit dem Redux Provider und store gelöst (eigene render-Funktion)

import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// As a basic setup, import your same slice reducers
import { ActiveTodosSlice } from "../features/ActiveTodosSlice";
import { ColorSlice } from "../features/ColorSlice";
import { DoneTodoSlice } from "../features/DoneTodoSlice";
import { CurrentTimeSlice } from "../features/CurrentTimeSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: any;
  store?: any;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        activeTodos: ActiveTodosSlice.reducer,
        colorTheme: ColorSlice.reducer,
        doneTodos: DoneTodoSlice.reducer,
        currentTime: CurrentTimeSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
