import Vue from 'vue'
import App from './App.vue'
import geoLocation from 'vue-browser-geolocation'
Vue.config.productionTip = false
Vue.use(geoLocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load:{
    key:'AIzaSyD8Jsy5fpJ9u6kMw5G8GB12VcjA7EmbC_A'
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
