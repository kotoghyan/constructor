import { createRouter, createWebHistory } from 'vue-router/auto'
import CurrentProjects from '../pages/CurrentProjects.vue'
import AddProject from '../pages/AddProject.vue'
import {routes} from "vue-router/auto-routes";

routes.push({
  path: '/',
  name: 'CurrentProjects',
  component: CurrentProjects,
})

routes.push({
  path: '/add-project',
  name: 'AddProject',
  component: AddProject,
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
