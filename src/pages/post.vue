<template>
<navBar />
<div style="background-image:url('');">
    <div class="grid grid-x-5 grid-y-5 grid-cols-3">
        <postCard v-for="(post,index) in  trimedData" :key="index" :post="post">

        </postCard>
    </div>

    <div class="text-gray-300 flex items-center p-10 space-x-8 justify-center">

        <div class="text-gray-300 flex items-center p-10 space-x-8 justify-center" >

            <div v-for="(pagenumbers, index) in count" :key="index">
                <button v-on:click="buttons(index)" class="bg-gray-500 text-white h-10 w-20 hover:bg-blue-500 rounded-lg m-3 font-bold">{{pagenumbers}}</button>

            </div>
        </div>
    </div>

</div>;
</template>

<script>
import navBar from '../components/nav.vue'
import axios from 'axios'
import postCard from '../components/postCard.vue'
export default {
    name: 'postPage',

    data() {
        return {
            postList: [],
            page: 0,
            row_per_page:30,
            trimedData: [],
            count: 0,

        }
    },
    components: {
        navBar,
        postCard

    },
    methods: {
        pagination() {
            let trimStart = this.row_per_page * this.page;
            let trimEnd = trimStart + this.row_per_page;
            this.trimedData = this.postList.slice(trimStart, trimEnd)
           
        },

        setPagination() {
            this.count = Math.ceil(this.postList.length / this.row_per_page);
        },
        buttons(pages) {
            this.page = pages;
          const url=`/${this.page+1}`;
        window.location.href=url;
        },
        
    },

    async mounted() {
        
        let result = await axios.get("/posts?limit=150")
        console.log('api data', result.data.posts);
        this.postList = result.data.posts;
        this.pagination();
        this.setPagination();
    }
}
</script>
