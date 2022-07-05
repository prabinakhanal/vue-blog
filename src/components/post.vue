<template>
<navBar/>
<div class="bg-gradient-to-r from-indigo-400 to-purple-400">
    <div class="grid grid-x-5 grid-y-5 grid-cols-3">
        <div class="" v-for="(list,index) in trimedData" :key="index">
            <div class="group bg-white bg-no-repeat bg-cover overflow-hidden w-[400px] m-8 h-[250px] mt-8 shadow-lg rounded-lg p-8  ">
                <h1 class="text-2xl pb-5 text-slate-800 font-bold">{{list.title}}</h1>
                
                <div class="flex flex-row justify-between">
                    <h1 class="text-xl font-medium  text-slate-600 pb-5"><i class="fa-solid fa-user-tag"></i>: {{list.tags}}</h1>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <button v-on:click="displayDetail(list)" class="hidden group-hover:block bg-gray-500 text-white h-10 w-44 rounded-lg font-bold">Read more</button>
                </div>
            </div>
        </div>
    </div>

    <div class="text-gray-300 flex items-center p-10 space-x-8 justify-center">

        <div class="pagination text-gray-300 flex items-center p-10 space-x-8 justify-center" id="pagination">

            <div v-for="(pagenumber, index) in count" :key="index">
                <button @click="buttons(index)" class="bg-gray-500 text-white h-10 w-20 hover:bg-blue-500 rounded-lg m-3 font-bold">{{pagenumber}}</button>

            </div>
        </div>
    </div>

</div>;
</template>

<script>
import navBar from './nav.vue'
import axios from 'axios'
export default {
    name: 'postPage',

    data() {
        return {
            postList: [],
            page: 0,
            row_per_page: 30,
            trimedData: [],
            count: 0,

        }
    },
    components:{
        navBar
    },
    methods: {
        pagination() {
            let trimStart = this.row_per_page * this.page;
            let trimEnd = trimStart + this.row_per_page;
            this.trimedData = this.postList.slice(trimStart, trimEnd)
            console.log(this.trimedData)
        },

        setPagination() {
            this.count = Math.ceil(this.postList.length / this.row_per_page);
        },
        buttons(pages) {
            this.Page = pages;
            console.log('current:', this.page);
            this.pagination();
        },
        displayDetail(details) {
            console.log(details.id);
            let id = details.id;
            window.location.href = "/post/details/" + id;
        },
    },

    async mounted() {
        let result = await axios.get("https://dummyjson.com/posts?limit=150")
        console.log('api data', result.data.posts);
        this.postList = result.data.posts;
        this.pagination();
        this.setPagination();
    }
}
</script>
