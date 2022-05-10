import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page2View from '../views/Page2View.vue'
import AddNewUser from '../views/AddNewUserView.vue'
import AddCandidate from '../views/AddCandidateView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2View
  },
  {
    path: '/addnewuser',
    name: 'newuser',
    component: AddNewUser
  },
  {
    path: '/addcandidate',
    name:'newcandidate',
    component:AddCandidate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
