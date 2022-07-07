import { createWebHistory, createRouter } from 'vue-router'

import mainPage from './components/main.vue'
import postPage from './components/post.vue'
import detailsPage from './components/details.vue'
import commentPage from './components/comment.vue'

const routes= [
    {
        name:'mainPage',
        path:'/',
        component:mainPage

    },
    {
        name:'postPage',
        path:'/post',
        component:postPage

    },
    {
        name:'detailsPage',
        path:'/post/:postId',
        component:detailsPage

    },
    {
        name:'commentPage',
        path:'/post/details/comment/:postId',
        component:commentPage

    },
    
];

const router= createRouter({
history:createWebHistory(),
routes    
})

export default router;
