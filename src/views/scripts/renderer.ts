import '../styles/index.css';
import Vue, { VNode } from 'vue';
import App from './components/App.vue';

Vue.config.productionTip = false;

const vm = new Vue(
  {
    el: '#app',
    template: '<App/>',
    components: { App },
    render: (h): VNode => h(App)
  }
);
