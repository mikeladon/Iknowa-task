import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const PostsView = () => import(/* webpackChunkName: 'route-jobs' */ '@/views/PostsView.vue')
const PostView = () => import(/* webpackChunkName: 'route-enter' */ '@/views/PostView.vue')
const MainView = () => import(/* webpackChunkName: 'route-enter' */ '@/views/MainView.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/posts',
        name: 'posts',
        component: PostsView,
    },
    {
        path: '/posts/:user/posts/:post',
        name: 'post',
        component: PostView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})


export default router
