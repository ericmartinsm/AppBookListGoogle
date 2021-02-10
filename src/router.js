import Vue from 'vue';
import Router from 'vue-router'
import LoginPage from './components/Login/LoginPage'
import BookListPage from './components/Book/BookListPage'

Vue.use(Router);

const routes = [
    { path: '/', name: 'login', component: LoginPage },
    { path: '/book', name: 'bookpage', component: BookListPage},
    { path: '/collection', name: 'collectionpage', component: BookListPage},
];

export default new Router({
    routes,
})