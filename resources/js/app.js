/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// import PortalVue from 'portal-vue'
import VModal from 'vue-js-modal'
import PopperTooltip from 'tooltip.js'



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Global Vue

// Vue.component('carousel', require('./components/Carousel.vue').default);
//
Vue.component('contact', require('./components/SupportButton.vue').default);
//
// Vue.component('about-dropdown', require('./components/AboutDropdown.vue').default);
//
// Vue.component('accordion', require('./components/Accordion.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.directive('tooltip', {

 bind(elem, bindings) {
   new PopperTooltip(elem, {

     placement: bindings.arg,
     title: bindings.value

     });
   }
 });

//local Vue
    import Tooltip from './components/Tooltip.vue'

    Vue.component('tooltip', Tooltip);
//
//  }
//
// });

 // Vue.use(PortalVue)
 Vue.use(VModal)

const app = new Vue({
    el: '#app',

    mounted() {

      document.querySelectorAll('[data-tooltip]').forEach(elem => {

        new PopperTooltip(elem, {

          placement: elem.dataset.tooltipPlacement || 'top',
          title: elem.dataset.tooltip

        });

      });

    }

});
