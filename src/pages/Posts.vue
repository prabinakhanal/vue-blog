<template>
<navBar />
<div  class="container mx-auto py-10">
    <div class="grid gap-5 grid-cols-3 ">
        <post-card v-for="(post, index) in trimedData" :key="index" :post="post" class="text-slate-700">
            <template v-slot:title>
                {{ post.title }}
            </template>
            <template v-slot:tags>
                <div class="mt-3 flex flex-wrap gap-3">
                    <div v-for="tag in post.tags" :key="tag" class="border border-gray-300 rounded-full text-sm px-3 py-1 italic text-slate-600">
                        # {{ tag }}
                    </div>
                </div>
            </template>
        </post-card>
    </div>

    <div class="text-gray-300 flex items-center p-10 space-x-8 justify-center">
        <div class="text-gray-300 flex items-center p-10 space-x-8 justify-center">
            <div v-for="(pagenumbers, index) in count" :key="index">
                <button v-on:click="buttons(index)" class="bg-gray-500 text-white h-10 w-20 hover:bg-blue-500 rounded-lg m-3 font-bold">
                    {{ pagenumbers }}
                </button>
            </div>
        </div>
    </div>
</div>
;
</template>

<script>
import axios from 'axios';
import navBar from '../components/Nav.vue';
import PostCard from '../components/Post_Card.vue';

export default {
    name: 'postPage',

    data() {
        return {
            postList: [],
            page: 0,
            row_per_page: 30,
            trimedData: [],
            count: 0,
        };
    },
    components: {
        navBar,

        PostCard,
    },
    methods: {
        pagination(page) {
            let trimStart = this.row_per_page * page;
            let trimEnd = trimStart + this.row_per_page;
            this.trimedData = this.postList.slice(trimStart, trimEnd);
        },

        setPagination() {
            this.count = Math.ceil(this.postList.length / this.row_per_page);
            
        },
        buttons(pages) {
            this.page = pages;
            console.log(pages);
            this.pagination(this.page);
            this.$router.push({
        path: "/posts/",
        query: { page: this.page+1 },
      });
        },
    },

    async mounted() {
        let result = await axios.get('/posts?limit=150');
        this.postList = result.data.posts;
        this.pagination(this.page);
        this.setPagination();
    },
};
</script>
