// https://codesandbox.io/s/react-redux-toolkit-persist-izxb6?file=/src/app/store.js:405-638

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import userReducer from "./slice/sliceUser";
import sideMenuReducer from "./slice/sliceSideMenu";
import sideMenuMobileReducer from "./slice/sliceSideMenuMobile";
import newSeriesReducer from "./slice/sliceNewSeries";
import listGridReducer from "./slice/sliceListGrid";

const reducers = combineReducers({
  user: userReducer,
  isMenuClosed: sideMenuReducer,
  isMenuClosedMobile: sideMenuMobileReducer,
  isNewSeriesClosed: newSeriesReducer,
  isMoviesCompact: listGridReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
