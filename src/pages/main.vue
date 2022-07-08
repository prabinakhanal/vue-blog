<template>
<div>
    <navBar></navBar>
    <div class=" w-full overflow-hidden bg-no-repeat bg-cover bg-center" style="background-image:url('https://socialmedia4us.files.wordpress.com/2018/01/blog.jpg');">
        <div class="sm:flex  sm:flex-col sm:justify-center sm:items-center sm:min-h-screen sm:space-y-16">
            <div class="lg:bg-white sm:w-96  lg:w-2/5 sm:rounded-lg sm:p-10  sm:flex sm:flex-col sm:justify-center sm:items-center">
                <h1 class="font-bold text-3xl text-gray-700">Explore Yourself</h1>
                <p class="text-gray-500 font-medium p-5">Start your day with some deep breaths, sit quietly by yourself, contemplate
                    about life and ask the bigger
                    questions. Take the weekend off from the technology .</p>

                <router-link to="/posts/" class="bg-gray-400 hover:bg-gray-500 text-white rounded-lg flex flex-col items-center justify-center  w-32 h-10 font-bold" id="btn">My Blogs</router-link>

            </div>
        </div>

    </div>
    
</div>
</template>

<script>
import navBar from '../components/nav.vue'
export default {
    name: 'mainPage',
    components: {
       navBar
    }
}
</script>
