<template>
<navBar />
<div class="m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">
    <div class="bg-gradient-to-r from-indigo-400 to-purple-400 h-screen ">

        <div class=" flex bg-white bg-no-repeat bg-cover overflow-hidden justify-between space-x-40 pl-20 pr-20 h-[600px]  w-5/6 ml-36  shadow-lg rounded-lg p-8">

            <div class="">
                <h1 class="text-3xl pb-5 text-slate-800 font-bold">{{Details.title}}</h1>
                <p class="font-medium text-2xl text-gray-500 pb-5">{{Details.body}}</p>
                <div class="flex flex-row justify-between">
                    <h1 class="text-2xl font-medium  text-slate-600 pb-5"><i class="fa-solid fa-user-tag"></i>: {{Details.tags}}
                    </h1>
                    <h1 class=" font-bold text-slate-600 text-2xl pb-5"><i class="fa-solid fa-heart"></i> {{Details.reactions}}
                    </h1>
                    <h1 class="font-bold text-slate-600 text-2xl"><i class="fa-solid fa-bookmark"></i></h1>

                </div>

                <div class="space-x-5 mt-4">
                    <h3 class="mb-3 font-medium font-xl">Share post to</h3>
                    <button type="button" class="bg-[#3b5998] text-white rounded pl-2 pr-2"><i class="fa-brands fa-facebook-square"></i>Facebook</button>
                    <button type="button" class="bg-[#2f73a0] text-white rounded pl-2 pr-2"><i class="fa-brands fa-twitter-square"></i>Twitter</button>
                    <button type="button" class="bg-[#31a7fb] text-white rounded pl-2 pr-2"><i class="fa-brands fa-linkedin"></i>Linkedin</button>

                </div>

            </div>

            <div class="">
                <h1 class="font-xl font-medium">Author</h1>
                <span class="flex mt-3 mb-12">
                    <img alt="no image" src="../assets/pic.jpg" class="rounded-full w-16 h-12">&nbsp;
                    <h1 class="font-xs">parnal</h1>
                </span>

                <input type="text" placeholder="Enter your Email" class=" outline-0 border-2 rounded-lg shadow-lg w-72 h-12 bg-gray-50">
                <button type="button" class="mt-4 border-2 rounded-lg bg-red-700 w-32 text-white font-medium">Subscribe</button>

                <div class="h-44 border-2 mt-8 bg-gray-400 flex flex-col justify-center items-center">
                    <h1 class="font-medium text-slate-700 ">Create your post here</h1>
                    <button type="button" class="border-2 rounded-lg text-white bg-slate-400 w-28 mt-4">Create</button>

                </div>

                <h1 class="font-xl font-medium mt-8">comments</h1>
                <button v-on:click="displaycomment(Details)" class="font-bold text-slate-600 text-2xl items-center justify-center"><i class="fa-solid fa-comments"></i></button>

            </div>

        </div>

    </div>
</div>
</template>

<script>
import navBar from './nav.vue'
import axios from 'axios'
import {
    useRoute
} from 'vue-router';
export default {
    name: 'detailsPage',

    data() {
        return {
            Details: []
        }
    },
    components: {
        navBar
    },
    methods: {
        displaycomment(details) {
            console.log(details.id);
            let id = details.id;
            window.location.href = "/post/details/comment/" + id;
        }
    },

    created() {
        const route = useRoute();
        console.warn("route:", route.params)
        let postId = route.params.postId
        console.log(postId)
        axios.get(`${postId}`)
            .then((result) => {
                console.log(result)
                this.Details = result.data
            })
            .catch(error => console.log(error))
    }

}
</script>
