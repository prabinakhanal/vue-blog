<template>
    <div class="m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">
        <div
            class="group bg-[url('./images/comment.jpg')] bg-no-repeat bg-cover w-full overflow-hidden pl-32 pr-32 h-[600px]  w-5/6 ml-36 mt-8 shadow-lg rounded-lg p-8  ">
            
            <div class="flex flex-row justify-center items-center  mt-28 space-x-8">
                <h1 class=" font-outfit font-bold text-slate-700 text-2xl pb-5  justify-center items-center"><i
                        class="fa-solid fa-id-badge"></i> ${Details.id}</h1>
                <h1 class=" font-bold text-slate-700 text-2xl pb-5"><i class="fa-solid fa-id-card-clip"></i>
                    ${Details.userId}</h1>
            </div>

            <h1 class="text-3xl pb-5 text-slate-800 font-bold">${Details.title}</h1>
            <p class="font-medium text-2xl text-gray-500 pb-5">${Details.body}</p>
            <div class="flex flex-row justify-between">
                <h1 class="text-2xl font-medium  text-slate-600 pb-5"><i class="fa-solid fa-user-tag"></i>: ${Details.tags}
                </h1>
                <h1 class=" font-bold text-slate-600 text-2xl pb-5"><i class="fa-solid fa-heart"></i> ${Details.reactions}
                </h1>
                <h1 class="font-bold text-slate-600 text-2xl"><i class="fa-solid fa-bookmark"></i></h1>
                <router-link :to="'/comment/' +Details.id " class="font-bold text-slate-600 text-2xl"><i
                        class="fa-solid fa-comments"></i></router-link>
            </div>
            </div>
        </div>
    
    
</template>

<script>
// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// const postId = urlParams.get('id')
// console.log(postId);

import axios from 'axios'
import {useRoute} from 'vue-router';
export default {
    name: 'detailsPage',

    data() {
        return {
            Details: []
        }
    },

     created(){
        const route = useRoute();
        console.warn("route:",route.params.id)
        let postId =route.params.id
        axios.get('https://dummyjson.com/posts/'+postId)
        .then((result) => {
            this.Details = result.data
        })
        .catch(error => console.log(error))
    }
  

}
</script>
