import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../pages/ProgramsPage.vue')
    },
    {
      path: '/programs/tech-empowerment',
      name: 'tech-empowerment',
      component: () => import('../pages/programs/TechEmpowermentPage.vue')
    },
    {
      path: '/programs/girls-in-tech',
      name: 'girls-in-tech',
      component: () => import('../pages/programs/GirlsInTechPage.vue')
    },
    {
      path: '/programs/code-impact-challenge',
      name: 'code-impact-challenge',
      component: () => import('../pages/programs/CodeImpactChallengePage.vue')
    },
    {
      path: '/programs/rural-tech-connect',
      name: 'rural-tech-connect',
      component: () => import('../pages/programs/RuralTechConnectPage.vue')
    },
    {
      path: '/programs/tech-outreach',
      name: 'tech-outreach',
      component: () => import('../pages/programs/TechOutreachPage.vue')
    },
    {
      path: '/programs/advocacy',
      name: 'advocacy',
      component: () => import('../pages/programs/AdvocacyPage.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../pages/NewsPage.vue')
    },
    {
      path: '/partner',
      name: 'partner',
      component: () => import('../pages/PartnerPage.vue')
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: () => import('../pages/VolunteerPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router