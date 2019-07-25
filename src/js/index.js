// index.js
import Vue from 'vue';
import reverseMessage from './components/reverse-message.vue'

Vue.component('reverse-message',reverseMessage);

var app5 = new Vue({
    el: '#app-5',
});

