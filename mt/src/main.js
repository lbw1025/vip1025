import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入common
import '@/assets/css/common.css'
import '@/assets/js/rem.js'

// 引入 iconfont
import "@/assets/font/iconfont.css"
// 引入有赞库
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
