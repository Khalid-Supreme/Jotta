<template>
    <div>
        <v-card class="my-4 px2">
            <v-card-item>
                <v-card-title class="jotting-title">
                    {{ jotting.title }}
                </v-card-title>
            </v-card-item>
            <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn size="large" color="success" icon="mdi-delete" @click="deleteJotting(jotting.id)">
                </v-btn>
                <v-btn size="large" color="success" icon="mdi-heart-outline" @click="toggleFavoriteJotting(jotting.id)">
                </v-btn>
            </v-card-actions>
            <v-divider></v-divider>
        </v-card>

    </div>
</template>

<script>
import { useJottaStore } from '../stores/jottaStore';
export default {
    props: ['jotting'],
    setup() {

        const jottaStore = useJottaStore();

        const deleteJotting = (id => {
            jottaStore.deleteJotting(id);
        });
        const toggleFavoriteJotting = (id => {
            jottaStore.toggleFave(id);
        });

        return { jottaStore, deleteJotting, toggleFavoriteJotting };




    }

}
</script>