import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@prisma/client';

import type { RootState } from '@/store';

export interface CharactersState {
    all: Character[];
}

const initialState: CharactersState = {
    all: [],
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchAll',
    async () => {
        const response = await fetch('/api/characters');
        const data = await response.json();

        return data;
    },
);

const charactersSlice = createSlice({
    name: 'characters',
    reducers: {
        /**
         * Sets the characters list.
         * @param state
         * @param action
         */
        setCharacters(state, action: PayloadAction<Character[]>) {
            state.all = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.all = action.payload;
        });
    },
    initialState,
});

export const { setCharacters } = charactersSlice.actions;

/**
 * Returns an array of all characters.
 * @param state
 */
export const selectCharacters = (state: RootState) => state.characters.all;

export default charactersSlice.reducer;
