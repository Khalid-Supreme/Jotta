<template>
    <div>
        <v-responsive class="mx-auto" max-width="500">
            <v-text-field variant="solo" flat bg-color="#fff" density="compact" placeholder="Jottings on..." v-model="newJotting">
                <template #append-inner>
                    <v-tooltip location="bottom">
                        <template #activator="{ props }">
                            <v-icon v-bind="props" color="green-accent-3" @click="handleNewJotting">mdi-plus-box</v-icon>
                        </template>
                        <span>Add new jotting</span>
                    </v-tooltip>
                </template>
            </v-text-field>
        </v-responsive>
    </div>
</template>

<script>
import { ref } from "vue";
import { useJottaStore } from '../stores/jottaStore';
export default {
    setup() {

        const jottaStore = useJottaStore();
        const newJotting = ref('');
        const handleNewJotting = () => {
            const newId = jottaStore.generateNewId + 1;

            if (newJotting.value.length > 0) {
                jottaStore.addNew(
                    {
                        id: newId, title: newJotting.value, isFave: false
                    }
                );
            }
            newJotting.value = "";
        }

        return { jottaStore, newJotting, handleNewJotting };

    }
}
</script>