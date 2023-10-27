import { createRouter, createWebHashHistory } from 'vue-router'
import TaskList from '../views/TaskList'
import TaskItem from '../views/TaskItem'
import NewTask from '../views/NewTask'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: TaskList },
    { path: '/new', component: NewTask },
    { path: '/task/:taskId', component: TaskItem, props: true }
  ]
})

export default router
