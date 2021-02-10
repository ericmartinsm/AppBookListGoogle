<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
        <v-toolbar-title>Curso-VueJs</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items v-if="$store.state.logged">
            <v-btn @click="goToBookList" text>Livros</v-btn>
            <v-btn @click="goToCollection" text>Minha Coleção</v-btn>
            <v-btn @click="logOut" text>Sair</v-btn>
        </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
      goToBookList(){
          this.$router.push('/book')
      },
      goToMyColection(){
          this.$router.push('/collection')
      },
      logOut(){
          this.$store.commit('setAuthToken', '');
          this.$router.push('/');
          this.$store.commit('setLogged', false)
      },
  }
};
</script>

<style>
</style>