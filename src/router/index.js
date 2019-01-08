import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
Vue.use(Router)
export default new Router({
  routes,
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      document.title = to.meta.title
  },
  scrollBehavior(to,from,savedPosition){
    return {x:0 ,y :0}
  }
})
