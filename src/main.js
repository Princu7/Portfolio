import Vue from 'vue';
import App from './App.vue';
import Navbar from './Navbar.vue';
import Header from './Header.vue';
import Project from './Project.vue';

import 'font-awesome/css/font-awesome.css';

Vue.component('navbar', Navbar);
Vue.component('main-header', Header);
Vue.component('project', Project);

new Vue({
  el: '#app',
  render: h => h(App)
});
