import { defineStore } from "pinia";

export const useJottaStore = defineStore('jottastore', {
    state: () => ({
        // add some obj properties here
        jottings: [
            { id: 1, title: 'Evolution of AI', isFave: false },
            { id: 2, title: 'How to make jollof rice', isFave: false }
        ],

        name: 'Jotta'
    })
});