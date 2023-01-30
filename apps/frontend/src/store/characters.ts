import { defineStore } from 'pinia';

export interface Character {
    id: string;
    name: string;
    combos: any[];
}

interface State {
    all: Character[];
}

export const useCharactersStore = defineStore('characters', {
    state: (): State => ({
        all: [],
    }),

    actions: {
        setAll(characters: Character[]) {
            this.all = characters;
        },
    },
});
