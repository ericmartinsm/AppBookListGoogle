<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <h3>LIVROS</h3>
      </v-col>
    </v-row>
    <BookList/>
  </v-container>
</template>

<script>
import BookList from './BookList'

export default {
  name: "ListBookPage",
  components:{
    BookList,
  }
};
</script>

<style>
</style>