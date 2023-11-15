import { defineStore } from "pinia";
export const useJottaStore = defineStore('jottastore', {
    state: () => ({
        // add some obj properties here
        jottings: [
            { id: 1, title: 'Evolution of AI', isFave: false },
            { id: 2, title: 'How to make jollof rice', isFave: true }
        ],

        name: 'Jotta'
    }),

    getters: {
        fave(
        ) {
            return this.jottings.filter(J => J.isFave)
        },

     

        faveCount() {
            return this.jottings.reduce((p, c) => {
                return c.isFave ? p + 1 : p
            },0);
        },

        allCount: (state) => state.jottings.length,

        pluralizeFaveCount() {
            return this.faveCount > 1 ? " favorite jottings." : " favorite jotting.";
        },
        pluralizeAllCount() {
            return this.allCount > 1 ? " total jottings." : " total jotting.";
        }
    },
});