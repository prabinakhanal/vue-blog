<template>
<navBar />
<div class="m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">
    <div class="bg-gradient-to-r from-indigo-400 to-purple-400 h-screen ">

        <div class=" bg-white bg-no-repeat bg-cover w-full overflow-hidden pl-20 pr-20 h-[450px]  w-5/6 ml-36  shadow-lg rounded-lg p-8  ">

            <div class="flex flex-row justify-center items-center  space-x-8">

            </div>

            <h1 class="text-3xl pb-5 text-slate-800 font-bold">{{Details.title}}</h1>
            <p class="font-medium text-2xl text-gray-500 pb-5">{{Details.body}}</p>
            <div class="flex flex-row justify-between">
                <h1 class="text-2xl font-medium  text-slate-600 pb-5"><i class="fa-solid fa-user-tag"></i>: {{Details.tags}}
                </h1>
                <h1 class=" font-bold text-slate-600 text-2xl pb-5"><i class="fa-solid fa-heart"></i> {{Details.reactions}}
                </h1>
                <h1 class="font-bold text-slate-600 text-2xl"><i class="fa-solid fa-bookmark"></i></h1>
                <button v-on:click="displaycomment(Details)" class="font-bold text-slate-600 text-2xl"><i class="fa-solid fa-comments"></i></button>
            </div>

            <div class="space-x-5 ">
                <h3 class="mb-3 font-medium font-xl">Share post to</h3>
                <button type="button" class="bg-[#3b5998] text-white rounded pl-2 pr-2"><i class="fa-brands fa-facebook-square"></i>Facebook</button>
                <button type="button" class="bg-[#2f73a0] text-white rounded pl-2 pr-2"><i class="fa-brands fa-twitter-square"></i>Twitter</button>
                <button type="button" class="bg-[#31a7fb] text-white rounded pl-2 pr-2"><i class="fa-brands fa-linkedin"></i>Linkedin</button>

            </div>
        </div>

        <div>
            <h1>Author</h1>
            <!-- <img alt="no image" src="./assets/pic.jpg" > -->
            <h1>parnal</h1>
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
        axios.get(`https://dummyjson.com/posts/${postId}`)
            .then((result) => {
                console.log(result)
                this.Details = result.data
            })
            .catch(error => console.log(error))
    }

}
</script>
