<template>
<div class="group  bg-no-repeat bg-cover overflow-hidden w-[400px] m-8 h-[250px] mt-8 shadow-lg rounded-lg p-8"
            style="background-image:url('data:image/png;base64,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');">
            
                <h1 class="text-2xl pb-5 text-slate-800 font-bold">{{post.title}}</h1>

                <div class="flex flex-row justify-between">
                    <span class="text-xl font-medium  text-slate-700 "><i class="fa-solid fa-user-tag">:</i></span>
                    <div v-for="tags in post.tags" :key="tags">
                    <h1 class="text-xl font-medium  text-slate-700 pb-5">{{tags}}</h1>
                    </div>
                </div>
                <div>
                    <p class="font-xl font-medium text-slate-800">June 7 ,2022</p>
                </div>

                <div class="flex flex-row  justify-center items-center">
                    <router-link :to="'/posts/' + post.id " class="flex flex-col justify-center items-center pl-10 pt-2 hidden group-hover:block  bg-gray-500 text-white h-10 w-40 rounded-lg font-bold">Read more</router-link>
                </div>
            </div>
</template>

<script>
export default {
    name: 'postCard',

    props: {
        post: {
             required: true,
           type: Object
        },

    }
}
</script>
