import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken:'',
        logged:false,
    },
    mutations: {
        setAuthToken(state, payload){
            state.authToken=payload;
        },
        setLogged(state, payload){
            state.logged = payload;
        }
    },
});