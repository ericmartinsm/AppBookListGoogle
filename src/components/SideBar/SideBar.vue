<template>
    <div>
        <v-app-bar
        color="indigo accent-1"
        :collapse="!collapse"
        outlined
        >
        <v-checkbox></v-checkbox>
        <!-- <v-checkbox
        
        color="white"
        hide-details
      >
      </v-checkbox> -->
        <v-btn v-model="collapse">Teste</v-btn>
        </v-app-bar>
        
        
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data(){
        return{
            collapse: true,
            
        }
    },
    methods: {
        
    },
}
</script>

<style>

</style>