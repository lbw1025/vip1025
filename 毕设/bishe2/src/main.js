import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  '../src/static/common.css'//引入公共样式

//引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
