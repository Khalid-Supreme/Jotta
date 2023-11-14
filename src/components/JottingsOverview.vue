<template>
    <div>
        <v-card class="my-4 px2" :title="jotting.title">
            <v-card-actions>

                <v-spacer></v-spacer>
                
            
                <v-btn size="small" color="success" icon="mdi-delete">
                </v-btn>
                <v-btn size="small" color="success" icon="mdi-heart-outline">

                </v-btn>
            </v-card-actions>
            <v-divider></v-divider>
        </v-card>

    </div>
</template>

<script>
export default {
    props: ['jotting']
}
</script>