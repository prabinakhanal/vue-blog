<template>
<navBar />
<div class="m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">

    <div class="w-full h-96  overflow-hidden bg-no-repeat bg-cover bg-center" style="background-image:url('https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg');">
        <div class="mt-72 pl-44">
            <h1 class="text-lg  text-slate-800 font-medium">523 views , Published on sep 17,2021</h1>

            <h1 class="text-3xl  text-slate-800 font-bold ">{{Details.title}}</h1>
        </div>
    </div>

    <div class=" flex bg-white bg-no-repeat bg-cover overflow-hidden justify-between space-x-40 pl-10 pr-20   w-5/6 ml-36  p-8">

        <div class="">
            <p class="font-normal text-xl text-gray-500 pb-5">{{Details.body}}</p>
            <p class="font-normal text-xl text-gray-500 pb-5">{{Details.body}}</p>
            <div class="flex flex-row justify-between">
                <span class="text-2xl font-medium  text-slate-600"><i class="fa-solid fa-user-tag"></i>:</span>
                <div v-for=" tags in Details.tags" :key="tags">
                    <h1 class="text-2xl font-medium  text-slate-600 pb-5"> {{ tags }}
                    </h1>
                </div>
                <h1 class=" font-bold text-slate-600 text-2xl pb-5"><i class="fa-solid fa-heart"></i> {{Details.reactions}}
                </h1>
                <h1 class="font-bold text-slate-600 text-2xl"><i class="fa-solid fa-bookmark"></i></h1>

            </div>

            <div class="space-x-5 mt-4">
                <h3 class="mb-3 font-medium font-xl">Share post to</h3>
                <button type="button" class="bg-[#3b5998] text-white rounded pl-2 pr-2"><i class="fa-brands fa-facebook-square"></i> Facebook</button>
                <button type="button" class="bg-[#2f73a0] text-white rounded pl-2 pr-2"><i class="fa-brands fa-twitter-square"></i> Twitter</button>
                <button type="button" class="bg-[#31a7fb] text-white rounded pl-2 pr-2"><i class="fa-brands fa-linkedin"></i> Linkedin</button>

            </div>

        </div>

        <div class="">
            <h1 class="font-xl font-medium">Author</h1>
            <span class="flex mt-3 mb-12">
                <img alt="no image" src="../assets/pic.jpg" class="rounded-full w-16 h-12">&nbsp;
                <h1 class="font-xs">parnal</h1>
            </span>

            <h1 class="font-xl font-medium">Subscribe my post</h1>
            <input type="text" placeholder="Enter your Email" class=" mt-3 outline-0 border-2 rounded-lg shadow-lg w-72 h-12 bg-gray-50">
            <button type="button" class="mt-2 border-2 rounded-lg bg-red-700 w-32 text-white font-medium">Subscribe</button>

            <div class="h-44 border-2 mt-8  flex flex-col justify-center items-center bg-no-repeat" style="background-image:url('https://i.pinimg.com/736x/fd/70/d9/fd70d956e6fd67f7c3af5e9cc3f201f1.jpg');">
                <h1 class="font-medium text-white">Create your post here</h1>
                <button type="button" class="border-2 rounded-lg text-white bg-slate-400 w-28 mt-4">Create</button>

            </div>

            <div>
                <h1 class="font-xl  mt-8  font-medium text-slate-600 mb-4 ">comments <button id="cmnt" v-on:click="seen = !seen"> <i class="fa-solid fa-comments font-bold text-slate-600 text-2xl"></i></button></h1>

                <div v-if="seen" id="hide">
                    <div class=" flex font-bold text-slate-600 text-xl mb-5 " v-for="comment in comments" :key="comment.id"> <img alt="no image" src="../assets/pic.jpg" class="rounded-full w-12 h-10 mr-3"> {{comment.body}}!!</div>
                </div>
                <h1 class="font-medium text-slate-600 font-xl">favorite <i class="fa-regular fa-heart"></i></h1>

            </div>

        </div>
    </div>

    <div class="h-72 w-full bg-blue-100 flex flex-col justify-center items-center">
        <h1 class="font-2xl font-bold  text-slate-800 ">Start Exploring Yourself </h1>
        <h1 class="font-normal font-xs mb-3 mt-3">Explore yourself in short time.It will grow your education and writting skill</h1>
        <button class="font-xl font-medium text-white bg-blue-400 rounded w-48">Start Free Trail </button>
    </div>

    <div class="bg-blue-900">

        <div class="flex justify-between">
            <div class=" pl-8 flex space-x-12 pt-3">
                <h1 class="font-light font-base text-white">Privacy Policy</h1>
                <h1 class="font-light font-base text-white">Cookie Policy</h1>
            </div>

            <div class="sm:space-x-3 text-white mb-8 pt-3">
                <span class="lg:pl-8 font-medium  hover:text-indigo-500"></span><i class="fa-brands fa-facebook"></i>
                <span class="lg:pl-8 font-medium hover:text-indigo-500"></span><i class="fa-brands fa-twitter-square"></i>
                <span class="lg:pl-8 font-medium hover:text-indigo-500"></span><i class="fa-brands fa-instagram-square"></i>
                <span class="lg:pl-8 font-medium hover:text-indigo-500"></span><i class="fa-solid fa-envelope"></i>
                <span class="lg:pl-8 font-medium hover:text-indigo-500"></span><i class="fa-solid fa-phone lg:pr-10"></i>
            </div>
        </div>

        <div class=" pr-8 w-full h-40 border-t-[1px]  sm:space-x-8  sm:justify-between  sm:flex sm:justify-center sm:items-center">
            <div>
                <h1 class="sm:pl-8 text-white"><i class="fa-solid fa-copyright"></i>2022 blog | Contact</h1>
            </div>

            <div>
                <h1 class="font-bold text-white"><i class="fa-solid fa-blog"></i>Blog</h1>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import navBar from '../components/Nav.vue'
import axios from 'axios'

export default {
    name: 'detailsPage',
    el: '#hide',
    data() {
        return {
            Details: {},
            comments: [],
            seen: false,

        }
    },
    components: {
        navBar
    },

    mounted() {

        const {
            postId
        } = this.$route.params;

        const url = [this.getPost(postId), this.getComment(postId)

        ]
        Promise.all(url.map((data) => {
                console.log(data)
            }))
            .then((response) => {
                console.log(response)
            })

    },

    methods: {

        getPost(postId) {

            axios.get(`/posts/${postId}`)
                .then((result) => {
                    this.Details = result.data
                })

        },
        getComment(postId) {
            axios.get('/posts/' + postId + '/comments')
                .then((result) => {
                    this.comments = result.data.comments
                })
        },

    },

}
</script>
