<template>
<div class="m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">
    <div class="border-b-2 shadow-md">

        <nav class="flex container sm:space-x-60 lg:justify-between p-10 align-middle">
            <div>
                <h1 class="font-bold text-gray-500"><i class="fa-solid fa-blog"></i>Blog</h1>
            </div>
            <div class="sm:hidden lg:flex">
                <ul class="flex space-x-10 text-gray-400 text-xl">
                    <li><a href="" class="border-b-[2px] border-indigo-300">Home</a></li>
                    <li><a href="" class="hover:border-b-[2px] border-indigo-300">Posts</a></li>
                    <li><a href="" class="hover:border-b-[2px] border-indigo-300">Contact us</a></li>
                    <li><a href="" class="hover:border-b-[2px] border-indigo-300">Details</a></li>
                    <li><a href="" class="hover:border-b-[2px] border-indigo-300">Comments</a></li>

                </ul>
            </div>
            <div class="lg:hidden sm:space-x-5">
                <i id="toogler" class="fa-solid fa-bars"></i>
                <button type="button" class="border-2 rounded bg-gray-500 text-white font-medium w-32 h-10">sign
                    in</button>
            </div>
            <div class="sm:hidden lg:flex lg:space-x-3 ">
                <button type="button" class="border-2 rounded bg-gray-500 text-white font-medium w-32 h-10">sign
                    in</button>
            </div>
        </nav>
    </div>

    <div class="bg-gradient-to-r from-indigo-400 to-purple-400  bg-no-repeat bg-cover">

        <div id="box" class="sm:hidden lg:hidden sm:flex  sm:justify-center sm:items-center">
            <div class="sm:overflow-hidden h-52 w-52 sm:bg-gray-200  sm:flex  sm:justify-center sm:items-center mt-0 sm:rounded-lg sm:border-2 sm:shadow-lg">
                <ul class="sm:flex sm:flex-col sm:space-y-5  sm:text-gray-400 text-xl">
                    <li><a href="" class="border-b-[2px] border-indigo-300">Home</a></li>
                    <li><a href="" class="hover:border-b-[2px] border-indigo-300">Posts</a></li>
                    <li><a href="" class="hover:border-b-[2px] border-indigo-300">Contact us</a></li>
                    <li><a href="" class=" hover:border-b-[2px] border-indigo-300">Details</a></li>
                    <li><a href="" class=" hover:border-b-[2px] border-indigo-300">Comments</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'navBar',
};
</script>
