import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../views/ProgramsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: () => import('../views/VolunteerView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/tech-empowerment',
      name: 'tech-empowerment',
      component: () => import('../views/TechEmpowermentView.vue'),
    },
    {
      path: '/girls-in-tech',
      name: 'girls-in-tech',
      component: () => import('../views/GirlsInTechView.vue'),
    },
    {
      path: '/code-impact-challenge',
      name: 'code-impact-challenge',
      component: () => import('../views/CodeImpactChallengeView.vue'),
    },
    {
      path: '/tech-outreach',
      name: 'tech-outreach',
      component: () => import('../views/TechOutreachView.vue'),
    },
    {
      path: '/advocacy',
      name: 'advocacy',
      component: () => import('../views/AdvocacyView.vue'),
    },
    {
      path: '/rural-tech-connect',
      name: 'rural-tech-connect',
      component: () => import('../views/RuralTechConnectView.vue'),
    },
    {
      path: '/partner',
      name: 'partner',
      component: () => import('../views/PartnerView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
