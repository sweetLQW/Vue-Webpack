import Vue from 'vue';
import App from './app.vue';
import router from './router';
import './main.css'

new Vue({
  el: '#nav',
  router,
  components: {
    App
  },
  template: '<App/>'
})