<template>
  <v-container>
    <v-row justify="center">
      <v-col align="center" cols="4">
        <h4>LOGIN</h4>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center" cols="4">
        <v-text-field v-model="token" label="token"></v-text-field>
        <v-btn block dark class="green" @click="login" elevation="4">Login</v-btn>
        <v-btn class="mt-4" @click="loginAsGuest">Entrar como visitante</v-btn>
      </v-col>
    </v-row>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" color="error">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
  <!-- AIzaSyBVKEhYk_3sNTjbbOjAUK1QJ8Ub-_YBZWU -->
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      token: "AIzaSyBVKEhYk_3sNTjbbOjAUK1QJ8Ub-_YBZWU",
      snackbar: false,
      text: `Olá, insira o token por favor`,
    };
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit("setAuthToken", this.token);
        this.$store.commit('setLogged', true);
        this.$router.push("/book");
      } else {
        this.snackbar = true;
      }
    },
    loginAsGuest() {
      this.$router.push("/book");
      this.$store.commit('setLogged', true);
    },
  },
};
</script>

<style>
</style>