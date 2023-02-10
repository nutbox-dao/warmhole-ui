import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang/index'
import Cookie from 'vue-cookies'
import Spinner from "@/components/Spinner";
import { List, PullRefresh, ImagePreview, Popup } from 'vant'
import mitt from 'mitt'
import 'vant/es/image-preview/style';
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style/el-custom.scss'
import 'windi.css'
import { createMetaManager, defaultConfig, plugin as metaPlugin } from 'vue-meta'

window.$vueApp = Vue.createApp(App)
window.$vueApp.config.globalProperties.$bus = mitt()
window.$vueApp.component('c-spinner', Spinner)
window.$vueApp.use(store).use(router).use(i18n).use(Cookie).use(List)
.use(PullRefresh).use(ImagePreview).use(Popup)
  .use(createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: 'meta', nameless: true }
}))
window.$vueApp.mount('#app')
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
