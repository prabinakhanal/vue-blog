import { createWebHistory, createRouter } from 'vue-router'

import mainPage from './pages/main.vue'
import postPage from './pages/post.vue'
import detailsPage from './pages/details.vue'


const routes= [
    {
        name:'mainPage',
        path:'/',
        component:mainPage

    },
    {
        name:'postPage',
        path:'/posts',
        component:postPage

    },
    {
        name:'detailsPage',
        path:'/posts/:postId',
        component:detailsPage

    },
    
];

const router= createRouter({
history:createWebHistory(),
routes    
})

export default router;
