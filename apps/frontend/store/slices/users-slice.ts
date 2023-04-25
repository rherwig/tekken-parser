import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'next-auth';
import type { Preferences, Prisma } from '@prisma/client';

import type { RootState } from '@/store';

export interface UsersState {
    currentUser: User | null;
}

const initialState: UsersState = {
    currentUser: null,
};

interface UpdatePreferencesPayload {
    name: keyof Preferences;
    value: Preferences[keyof Preferences];
}

const usersSlice = createSlice({
    name: 'users',
    reducers: {
        /**
         * Sets the currently logged-in user.
         * @param state
         * @param action
         */
        setCurrentUser(state, action: PayloadAction<User | null>) {
            state.currentUser = action.payload;
        },

        /**
         * Sets the preferences of the currently logged-in user.
         * @param state
         * @param action
         */
        setUserPreferences(
            state: UsersState,
            action: PayloadAction<Preferences>,
        ) {
            if (!state.currentUser) {
                return;
            }

            state.currentUser.preferences = action.payload;
        },

        /**
         * Updates a single preference of the currently logged-in user.
         * @param state
         * @param action
         */
        updateUserPreferences(
            state: UsersState,
            action: PayloadAction<UpdatePreferencesPayload>,
        ) {
            if (!state.currentUser) {
                return;
            }

            const { name, value } = action.payload;

            state.currentUser.preferences![name] = value as any;
        },
    },
    initialState,
});

export const { setCurrentUser, setUserPreferences, updateUserPreferences } =
    usersSlice.actions;

/**
 * Returns the currently logged-in user.
 * @param state
 */
export const selectCurrentUser = (state: RootState) => state.users.currentUser;

/**
 * Returns the preferences of the currently logged-in user.
 * @param state
 */
export const selectUserPreferences = (state: RootState) =>
    state.users.currentUser?.preferences;

export default usersSlice.reducer;
