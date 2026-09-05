import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import themeReducer from "../redux/slices/themeSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const storageSession = {
    getItem: (key) => Promise.resolve(sessionStorage.getItem(key)),
    setItem: (key, value) => {
        sessionStorage.setItem(key, value);
        return Promise.resolve();
    },
    removeItem: (key) => {
        sessionStorage.removeItem(key);
        return Promise.resolve();
    },
};

const authPersistConfig = {
    key: "auth",
    storage: storageSession,
    whitelist: ["token", "user", "isAuthenticated"],
};

const persistedAuthReducer = persistReducer(
    authPersistConfig,
    authReducer
);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        theme: themeReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;