import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import EventDetails from '../views/EventDetails.vue'
import NewEvent from '../views/NewEvent.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    
    component: EventDetails
  },
  {
    path: '/event/new',
    name: 'NewEvent',
    
    component: NewEvent
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
