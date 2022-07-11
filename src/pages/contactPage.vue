<template>
<navbar></navbar>
<div class="w-full min-h-screen bg-no-repeat  m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">
<div class="flex justify-center items-center min-h-screen pb-16">
        <div class="bg-white sm:w-3/5 lg:w-2/5  rounded-lg">
            <h1 class="flex justify-center items-center text-2xl font-bold m-6">Contact me</h1>
            <div class="flex flex-col justify-center items-center">
                <input type="text" placeholder="Name" class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                <input type="text" placeholder="Email" class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                <input type="text" placeholder="Number"
                    class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                <input type="text" placeholder="Subject" class="p-4 mb-3  outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                <textarea type="text" placeholder="message"
                    class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50"></textarea>
                    <button type="button" class="border-2 mb-4 rounded-lg bg-gray-400 text-white w-28 h-10 font-bold">Send</button>
            </div>
        </div>
    </div>

    <div class="bg-white w-full h-40 border-t-2 sm:space-x-8  sm:justify-between  sm:flex sm:justify-center sm:items-center">
        <div>
            <h1 class="sm:pl-8"><i class="fa-solid fa-copyright"></i>2022 blog | Contact</h1>
        </div>
        
        <div class="sm:space-x-3" >
        <span class="lg:pl-8 font-medium hover:text-indigo-500">Facebook</span><i class="fa-brands fa-facebook"></i>
        <span class="lg:pl-8 font-medium hover:text-indigo-500">Twitter</span><i class="fa-brands fa-twitter-square"></i>
        <span class="lg:pl-8 font-medium hover:text-indigo-500">Instagram</span><i class="fa-brands fa-instagram-square"></i>
        <span class="lg:pl-8 font-medium hover:text-indigo-500">E-mail</span><i class="fa-solid fa-envelope"></i>
        <span class="lg:pl-8 font-medium hover:text-indigo-500">Call</span><i class="fa-solid fa-phone lg:pr-10"></i>
    </div>
    </div>
    </div>
</template>
<script>
import navbar from '../components/nav.vue'
export default{
    name:'contactPage',
    components:{
        navbar
    }
}

</script>
