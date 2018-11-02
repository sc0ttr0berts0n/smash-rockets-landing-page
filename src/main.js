import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App.vue';
import VueAnalytics from 'vue-analytics';

Vue.use(Meta);
Vue.use(VueAnalytics, {
    id: 'UA-73093001-3'
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
