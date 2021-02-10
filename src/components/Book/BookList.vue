<template>
  <v-row>
      <v-col cols="12">
        <v-text-field v-on:keydown.enter="Search" label="pesquise algo">
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3" lg="2" v-for="(book, i) in bookList" :key="i">
        <v-card elevation="2">
          <v-card-title>{{ book.volumeInfo.title }}</v-card-title>
          <!-- <v-card-text>{{ book.volumeInfo.subtitle }}</v-card-text> -->
          <v-btn>Detail</v-btn>
        </v-card>
      </v-col><Loading :condition="searchOnGoing"/>
    </v-row>
    
</template>

<script>
const axios = require("axios");

import Loading from '../Loading/Loading'


export default {
    name: 'BookList',
    components:{
        Loading,
    },
    data() {
    return {
      bookList: [],
      textSearch: "",
      searchOnGoing:false,
    };
  },
  methods: {
    Search(e) {
      console.log("Entrou no search");
      this.textSearch = e.target.value;
      console.log(this.textSearch);
      this.searchOnGoing=true;

      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`)
        .then((response) => {
          this.bookList = response.data.items;
          this.searchOnGoing=false;
        });
    },
  },
}
</script>

<style>

</style>