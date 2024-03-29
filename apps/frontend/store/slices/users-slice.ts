import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'next-auth';

import type { RootState } from '@/store';

export interface UserPreferences {
    controllerLayout: string;
}

export interface UsersState {
    currentUser: User | null;
    localPreferences: Partial<UserPreferences>;
}

const initialState: UsersState = {
    currentUser: null,
    localPreferences: {},
};

interface UpdatePreferencesPayload {
    name: keyof UserPreferences;
    value: UserPreferences[keyof UserPreferences];
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
            action: PayloadAction<UserPreferences>,
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
            const { name, value } = action.payload;

            if (!state.currentUser) {
                state.localPreferences[name] = value as any;
                return;
            }

            if (!state.currentUser.preferences) {
                state.currentUser.preferences = {} as UserPreferences;
            }

            state.currentUser.preferences[name] = value as any;
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
export const selectUserPreferences = (state: RootState) => ({
    ...state.users.localPreferences,
    ...state.users.currentUser?.preferences,
});

export default usersSlice.reducer;
