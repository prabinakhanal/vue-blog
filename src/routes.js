import { createRouter, createWebHistory } from 'vue-router';

import contactPage from './pages/Contact.vue';
import detailsPage from './pages/Detail.vue';
import mainPage from './pages/Home.vue';
import postPage from './pages/Posts.vue';

const routes = [
  {
    name: 'mainPage',
    path: '/',
    component: mainPage,
  },
  {
    name: 'posts',
    path: '/posts/',
    component: postPage,
  },
  {
    name: 'post-detail',
    path: '/posts/:postId',
    component: detailsPage,
  },
  {
    name: 'contactPage',
    path: '/contactUs/',
    component: contactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
