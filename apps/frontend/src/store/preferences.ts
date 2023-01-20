import { defineStore } from 'pinia';

export type LayoutType = 'arcade' | 'controller';

interface State {
    layout: LayoutType;
}

export const usePreferencesStore = defineStore('preferences', {
    state: (): State => ({
        layout: 'controller',
    }),

    actions: {
        setLayout(layout: LayoutType) {
            this.layout = layout;
        },
    },
});
