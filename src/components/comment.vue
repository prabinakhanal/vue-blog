<template>
<div class="bg-gradient-to-r from-indigo-400 to-purple-400 h-screen">
    <div v-for="comment in comments" :key="comment" class="flex justify-center items-center">
        <div  class="bg-white bg-no-repeat bg-cover flex flex-col h-[270px] mt-10 border-b-4 w-2/5 justify-center items-center rounded-lg p-5">
            <h1 class="font-bold text-2xl pb-8 text-slate-700"><i class="fa-solid fa-user"></i> {{comment.user.id}},{{comment.user.username}} </h1>
            <p class="font-bold text-2xl text-gray-500">{{comment.body}}!!</p><br>

            <span class="font-medium text-slate-700">10 <i class="fa-solid fa-thumbs-up"></i>&nbsp; &nbsp;
                <span class="font-medium text-slate-700">50 <i class="fa-solid fa-eye"></i></span>&nbsp; &nbsp;
                <span class="font-medium text-slate-700">Reply <i class="fa-solid fa-reply"></i></span>&nbsp; &nbsp;
            </span>

        </div>
    </div>
</div>
</template>

<script>
import {
    useRoute
} from 'vue-router';
import axios from 'axios'
export default {
    name: 'commentPage',

    data() {
        return {
            comments: []
        }
    },

    created() {
        const route = useRoute();
        console.warn("route:", route.params)
        let postId = route.params.postId
        axios.get('https://dummyjson.com/posts/' + postId + '/comments')
            .then((result) => {
                console.log(result)
                this.comments = result.data.comments
                console.log(this.comments)
            })
            .catch(error => console.log(error))
    }
}
</script>
