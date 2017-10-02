import Vue from 'vue';
import App from './App.vue';
import Navbar from './Navbar.vue';
import Header from './Header.vue';

Vue.component('navbar', Navbar);
Vue.component('main-header', Header);

new Vue({
  el: '#app',
  render: h => h(App)
});
