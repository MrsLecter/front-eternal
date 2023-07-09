import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import internalReducer from "./reducers/internalSlice";
import modalReducer from "./reducers/modalSlice";

const rootReducer = combineReducers({
  userReducer,
  internalReducer,
  modalReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
