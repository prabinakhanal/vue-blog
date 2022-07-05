<template>
<div class="bg-gradient-to-r from-indigo-400 to-purple-400">
    <div class="grid grid-x-5 grid-y-5 grid-cols-2">
        <div class="" v-for="list in postList" :key="list.id">
            <div class="group bg-white bg-no-repeat bg-cover overflow-hidden  m-8 h-[600px] mt-8 shadow-lg rounded-lg p-8  ">
                <h1 class="text-3xl pb-5 text-slate-800 font-bold">{{list.title}}</h1>
                <p class="font-medium text-2xl text-gray-500 pb-5">{{list.body}}</p>
                <div class="flex flex-row justify-between">
                    <h1 class="text-2xl font-medium  text-slate-600 pb-5"><i class="fa-solid fa-user-tag"></i>: {{list.tags}}</h1>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <router-link :to="'/details/'+ list.id" class="hidden group-hover:block bg-gray-500 text-white h-10 w-44 rounded-lg font-bold">Read more</router-link>
                </div>
            </div>
        </div>
    </div>
</div>`;
</template>

<script>
import axios from 'axios'
export default {
    name: 'postPage',

    data() {
        return {
            postList: []
        }
    },

    async mounted() {
        let result = await axios.get("https://dummyjson.com/posts?limit=150")
        console.log('api data', result.data.posts);
        this.postList = result.data.posts;
    }
}
</script>
