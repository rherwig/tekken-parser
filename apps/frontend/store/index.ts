import { configureStore } from '@reduxjs/toolkit';

import characters from '@/store/slices/characters-slice';
import users from '@/store/slices/users-slice';

export const store = configureStore({
    reducer: {
        characters,
        users,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
