import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from '../views/ProjectList.vue'
import About from '../views/About.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import NewProject from '../views/NewProject.vue'

const routes = [
  {
    path: '/',
    name: 'ProjectList',
    component: ProjectList
  },
  {
    path: '/event/:id',
    name: 'ProjectDetails',
    props: true,
    
    component: ProjectDetails
  },
  {
    path: '/event/new',
    name: 'NewProject',
    
    component: NewProject
  },
  {
    path: '/about',
    name: 'About',
    
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
