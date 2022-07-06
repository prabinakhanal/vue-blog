<template>
<div class="m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">
    <div class="border-b-2 shadow-md">

        <nav class="flex container sm:space-x-60 lg:justify-between p-10 align-middle">
            <div>
                <h1 class="font-bold text-gray-500"><i class="fa-solid fa-blog"></i>Blog</h1>
            </div>
            <div class="sm:hidden lg:flex">
                <ul class="flex space-x-10 text-gray-400 text-xl">
                    <router-link  class="hover:border-b-[2px] border-indigo-300" to="/" >Home</router-link>
                    <router-link  class="hover:border-b-[2px] border-indigo-300" to="/post">Posts</router-link>
                    <router-link  class="hover:border-b-[2px] border-indigo-300" to="">Contact us</router-link>
                    <router-link  class="hover:border-b-[2px] border-indigo-300" to="/post/details/:postId">Details</router-link>
                    <router-link  class="hover:border-b-[2px] border-indigo-300" to="/post/details/comment/:postId">Comments</router-link>

                </ul>
            </div>
            <div class="lg:hidden sm:space-x-5">
                <i id="toogler" class="fa-solid fa-bars"></i>
                <button type="button" class="border-2 rounded bg-gray-500 text-white font-medium w-32 h-10">sign
                    in</button>
            </div>
        </nav>
    </div>

</div>
</template>

<script>
export default {
    name: 'navBar',
};
</script>
