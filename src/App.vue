
<template>
    <v-sheet elevation="12" max-width="1000" rounded="lg" width="100%" class="pa-4 mx-auto">

        <!-- heading -->
        <header class="jotta-header">
            <img src="./assets/pinia-logo.svg" alt="pinia-logo">
            <h1>{{ name }}</h1>
        </header>
        <!-- jottings filter buttons -->

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="tonal" @click="filter = 'all'" append-icon="mdi-format-list-bulleted-square">All</v-btn>
            <v-btn variant="tonal" @click="filter = 'favorite'" append-icon="mdi-heart">Favorite</v-btn>
        </v-card-actions>

        <!-- new jottings form -->

        <Form />

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