import Vue from 'vue';
import App from './App-6-count-toggle-filters-input-item-list.vue';
import filters from '../filters';

const VueApp = new Vue(App);

function onHashChange() {
  var visibility = window.location.hash.replace(/#\/?/, '');
  if (filters[visibility]) {
    VueApp.visibility = visibility;
  } else {
    window.location.hash = '';
    VueApp.visibility = 'all';
  }
}

window.addEventListener('hashchange', onHashChange);
onHashChange();

VueApp.$mount('#app');
