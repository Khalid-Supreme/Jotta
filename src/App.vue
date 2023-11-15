
<template>
    <v-sheet elevation="12" max-width="1000" rounded="lg" width="100%" class="pa-4 mx-auto">
        
        <!-- heading -->
        <header class="jotta-header">
            <img src="./assets/pinia-logo.svg" alt="pinia-logo">
            <h1>{{ jottaStore.name }}</h1>
        </header>

        <!-- jottings -->
        <div class="jottings">

            <!-- all jottings -->
            <p>all</p>
            <div v-for="jotting in jottaStore.jottings" :key="jotting.id">
                <Jottings :jotting="jotting" />

            </div>
            
            <!-- favorite jottings -->
            <p>favorites</p>
            <div v-for="jotting in jottaStore.fave" :key="jotting.id">
                <Jottings :jotting="jotting" />

            </div>
        </div>
    </v-sheet>
</template>


<script>
import Jottings from "./components/JottingsOverview.vue";
import { useJottaStore } from "./stores/JottaStore";
export default {

    components: {
        Jottings,
    },

    setup() {
        const jottaStore = useJottaStore();

        return { jottaStore };
    }
}

</script>