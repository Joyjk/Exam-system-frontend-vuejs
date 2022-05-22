import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page2View from '../views/Page2View.vue'
import AddNewUser from '../views/AddNewUserView.vue'
import AddCandidate from '../views/CandidateView/AddCandidateView.vue'
import AddCandidateShortView from '../views/CandidateView/AddCandidateShortView.vue'
import StartPageView from '../views/CandidateView/SecondPageView.vue'
import QuestionType1 from '../views/Question/QuestionType1.vue'
import QuestionType2 from '../views/Question/QuestionType2.vue'
import QuestionType3 from '../views/Question/QuestionType3.vue'
import QuestionType4 from '../views/Question/QuestionType4.vue'
import Login  from '../views/AdminView/LoginView.vue'
import HrSetupCandicateView from '../views/AdminView/HrSetupCandicateView.vue'
import SetupQuestion from '../views/AdminView/SetupQuestion.vue'
import QuestionSetMapping from '../views/AdminView/QuestionSetMapping.vue'
import SetupQustionForCandidates from '../views/AdminView/SetupQustionForCandidates.vue'
import ViewExamPaperList from '../views/AdminView/ViewExamPaperList.vue'
import ViewExamPaper from '../views/AdminView/ViewExamPaper.vue'
import ResultSheet from '../views/AdminView/ResultSheet.vue'
import QuestionNew from '../views/Question/QuestionNew.vue'
import TabTest from '../views/TestTab/TabTest.vue'

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
  },
  {
    path: '/questiontype3',
    name:'QuestionType3',
    component:QuestionType3
  },
  {
    path: '/questiontype4',
    name:'QuestionType4',
    component:QuestionType4
  },
  {
    path: '/login',
    name:'Login',
    component:Login
  },
  {
    path: '/hrsetupcandidate',
    name:'HrSetupCandicateView',
    component:HrSetupCandicateView
  },
  {
    path: '/setupquestion',
    name:'SetupQuestion',
    component:SetupQuestion
  },
  {
    path: '/questionset',
    name:'QuestionSet',
    component:QuestionSetMapping
  },
  {
    path: '/questionforcandidate',
    name:'SetupQustionForCandidates',
    component:SetupQustionForCandidates
  },
  {
    path: '/viewexamlist',
    name:'ViewExamPaperList',
    component:ViewExamPaperList
  },
  {
    path: '/viewexam',
    name:'ViewExamPaper',
    component:ViewExamPaper
  },
  {
    path: '/resultsheet',
    name:'ResultSheet',
    component:ResultSheet
  },

  {
    path: '/questionnew',
    name:'QuestionNew',
    component:QuestionNew
  },
  {
    path: '/tebtest',
    name:'TabTest',
    component:TabTest
  },

]












const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
