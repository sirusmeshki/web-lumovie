import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

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
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
