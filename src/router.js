import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/index/Home.vue';
import Team from './views/team/index'
import Person from './views/person/index'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
    }
  ],
});
