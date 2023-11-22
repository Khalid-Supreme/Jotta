
<template>
    <v-sheet color="#e7e7e7" width="100%" class="pa-4 mx-auto">
        <!-- heading -->
        <header class="jotta-header mb-5">
            <img src="./assets/pinia-logo.svg" alt="pinia-logo">
            <h1>{{ name }}</h1>
        </header>

        <!-- new jottings form -->

        <Form />
    </v-sheet>

    <v-sheet max-width="60%" color="#f2f2f2" width="100%" class="pa-4 mx-auto">

        <!-- jottings filter buttons -->

        <v-card-actions class="px-0">
            <v-spacer></v-spacer>
            <v-tooltip text="All" location="bottom">
                <template v-slot:activator="{ props }">
                    <v-btn variant="outline" v-bind="props" @click="filter = 'all'"
                        icon="mdi-format-list-bulleted-square"></v-btn>
                </template>
            </v-tooltip>
            <v-tooltip text="Favorites" location="bottom">
                <template v-slot:activator="{ props }">
            <v-btn variant="outline" v-bind="props" @click="filter = 'favorite'" icon="mdi-heart"></v-btn>
                </template>
            </v-tooltip>
        </v-card-actions>


        <!-- skeleton loader -->
        <v-skeleton-loader type="list-item" v-if="loading" elevation="1"></v-skeleton-loader>

        <!-- jottings -->
        <div class="jottings">

            <!-- all jottings -->
            <div v-if="filter == 'all'">
                <p v-if="allCount">You have {{ allCount + pluralizeAllCount }} </p>
                <div v-for="jotting in jottings" :key="jotting.id">
                    <Jottings :jotting="jotting" />
                </div>
            </div>

            <!-- favorite jottings -->
            <div v-else="filter == 'favorite'">
                <p v-if="faveCount">You have {{ faveCount + pluralizeFaveCount }} </p>
                <div v-for="jotting in fave" :key="jotting.id">
                    <Jottings :jotting="jotting" />
                </div>
            </div>
        </div>
    </v-sheet>
</template>


<script>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import Form from "./components/JottingsForm.vue";
import Jottings from "./components/JottingsOverview.vue";
import { useJottaStore } from "./stores/jottaStore";
export default {

    components: {
        Jottings, Form,
    },

    setup() {
        const jottaStore = useJottaStore();

        const filter = ref('all');

        // fetch jottings
        jottaStore.getJottings();

        const { jottings, name, loading, fave, faveCount, allCount, pluralizeAllCount, pluralizeFaveCount, generateNewId, checkIfFavorite } = storeToRefs(jottaStore);

        return { filter, jottings, name, loading, fave, faveCount, allCount, pluralizeAllCount, pluralizeFaveCount, generateNewId, checkIfFavorite };
    }
}

</script>