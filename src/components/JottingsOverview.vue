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
                <v-tooltip text="Delete" location="top" close-on-content-click>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" size="small" icon="mdi-delete"
                            @click="deleteJotting(jotting.id)">
                        </v-btn>
                    </template>
                </v-tooltip>
                <v-tooltip :text="tooltipText=== true ? 'Remove favorite' : 'Add favorite'" location="top" close-on-content-click>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" size="small" color="red" :icon="heartIcon=== true ? 'mdi-heart' : 'mdi-heart-outline'"
                            @click="toggleFavoriteJotting(jotting.id)">
                        </v-btn>
                    </template>
                </v-tooltip>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useJottaStore } from '../stores/jottaStore';
export default {
    props: ['jotting'],
    setup(props) {

        const jottaStore = useJottaStore();
        const jottingId = props.jotting.id;
        
        const heartIcon = ref('');
        const tooltipText = ref('');

        const deleteJotting = (id => {
            jottaStore.deleteJotting(id);
        });
        const toggleFavoriteJotting = (id => {
            jottaStore.toggleFave(id);
            checkIfFavorite();

        });
        onMounted(() => {
            checkIfFavorite()
        });
        
        const checkIfFavorite = () => {
            let isFavorite = props.jotting.isFave;
            heartIcon.value = isFavorite;
            tooltipText.value = isFavorite;
        }

        return { jottaStore, deleteJotting, toggleFavoriteJotting, checkIfFavorite, jottingId, heartIcon, tooltipText };



    }

}
</script>