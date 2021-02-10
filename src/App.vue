<template>
  <v-app>
    <!-- <Home/> -->
    <Header/>
    <v-container>
      <router-view></router-view>
    </v-container>
    
    
  </v-app>
</template>

<script>

// import Home from './components/Home/Home'
// import LoginPage from './components/Login/LoginPage'
import Header from './components/Header/Header'

export default {
  name: 'App',


  components: {
    // Home,
    // LoginPage
    Header,
  },

  data: () => ({
    //
  }),
};

</script>
