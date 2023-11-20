import { defineStore } from "pinia";
export const useJottaStore = defineStore('jottastore', {
    state: () => ({

        jottings: [],
        name: 'Jotta',
        loading: false,
    }),

    getters: {
        fave() {
            return this.jottings.filter(J => J.isFave)
        },

        faveCount() {
            return this.jottings.reduce((p, c) => {
                return c.isFave ? p + 1 : p
            }, 0);
        },

        allCount: (state) => state.jottings.length,

        pluralizeFaveCount() {
            return this.faveCount > 1 ? " favorite jottings." : " favorite jotting.";
        },
        pluralizeAllCount() {
            return this.allCount > 1 ? " total jottings." : " total jotting.";
        },

        generateNewId() {
            if (this.jottings.length > 0) {
                return this.jottings.reduce((max, obj) => {
                    return obj.id > max ? obj.id : max;
                }, -Infinity)
            }
            else {
                return 1;
            }
        },

        checkIfFavorite: (state) => (id) => {
            const jotting = state.jottings.find((j) => j.id === id);
            return jotting ? jotting.isFave : null;
        }

    },

    actions: {

        async getJottings() {
            this.loading = true;

            /**type 'json-server --watch ./data/db.json' in a separate terminal to start json server */
            const response = await fetch(' http://localhost:3000/jottings');
            const data = await response.json();

            this.jottings = data;
            this.loading = false;
        },

        addNew(newJot) {
            this.jottings.push(newJot);
        },
        deleteJotting(id) {
            this.jottings = this.jottings.filter((jotting) =>
                jotting.id !== id)
        },
        toggleFave(id) {
            const toggledJotting = this.jottings.find(jotting => jotting.id === id);
            toggledJotting.isFave = !toggledJotting.isFave;

        }
    }
});