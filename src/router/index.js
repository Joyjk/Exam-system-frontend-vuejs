import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page2View from '../views/Page2View.vue'
import AddNewUser from '../views/AddNewUserView.vue'
import AddCandidate from '../views/CandidateView/AddCandidateView.vue'
import AddCandidateShortView from '../views/CandidateView/AddCandidateShortView.vue'
import StartPageView from '../views/CandidateView/StartPageView.vue'
import QuestionType1 from '../views/Question/QuestionType1.vue'
import QuestionType2 from '../views/Question/QuestionType2.vue'

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
  },
  {
    path: '/addcandidate2',
    name:'newcandidate2',
    component:AddCandidateShortView
  },
  {
    path: '/secondpage',
    name:'secondpage',
    component:StartPageView
  },
  {
    path: '/questiontype1',
    name:'QuestionType1',
    component:QuestionType1
  },
  {
    path: '/questiontype2',
    name:'QuestionType2',
    component:QuestionType2
  }
]












const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
