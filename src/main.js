import Vue from 'vue';
import LandingPage from './LandingPage.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(LandingPage)
}).$mount('#app');
