<template>
<navbar></navbar>
<div class="w-full min-h-screen bg-no-repeat  m-0 p-0 outline-0 border-0 font-500 font-outfit text-2xl">

    <form @submit="contact">
        <div class="flex justify-center items-center min-h-screen pb-16">
            <div class="bg-white sm:w-3/5 lg:w-2/5  rounded-lg">

                <div class="bg-gray-300 rounded">
                    <div v-if="error.length">
                        <b class="text-red-800 italic font-thin font-xs">Please fulfil the requirement...!!</b>
                        <ul class="text-red-400 italic font-thin font-xs">
                            <li v-for="e in error" :key="e.id">
                                {{e}}

                            </li>
                        </ul>
                    </div>

                    <h1 class="flex justify-center items-center text-2xl font-bold m-6 ">Contact Us</h1>
                    <div class="flex flex-col justify-center items-center ">
                        <input type="text" placeholder="Name" v-model="name" class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                        <input type="text" placeholder="Email" v-model="email" class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                        <input type="text" placeholder="Number" v-model="number" class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                        <input type="text" placeholder="Subject" v-model="subject" class="p-4 mb-3  outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50">
                        <textarea type="text" placeholder="Message" v-model="message" class="p-4 mb-3 outline-0 border-2 rounded-lg shadow-lg w-96 bg-gray-50"></textarea>
                        <button type="submit" class="border-2 mb-4 rounded-lg bg-gray-400 text-white w-28 h-10 font-bold">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <div class="bg-white w-full h-40 border-t-2 sm:space-x-8  sm:justify-between  sm:flex sm:justify-center sm:items-center">
        <div>
            <h1 class="sm:pl-8"><i class="fa-solid fa-copyright"></i>2022 blog | Contact</h1>
        </div>

        <div class="sm:space-x-3">
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
import navbar from '../components/Nav.vue'
export default {
    name: 'contactPage',
    components: {
        navbar
    },
    data() {
        return {
            error: [],
            name: null,
            email: null,
            number: null,
            subject: null,
            message: null,

        }
    },
    methods: {
        contact(e) {

            if (this.name, this.email, this.number, this.subject && this.message) {
                console.log("response is sent");

            }
            this.error = [];
            if (!this.name) {
                this.error.push("name is required !")
            }

            if (!this.email) {
                this.error.push("email is required !")
            }

            if (!this.number) {
                this.error.push("number is required !")
            }

            if (!this.subject) {
                this.error.push("subject is required !")
            }

            if (!this.message) {
                this.error.push("message is required !")
            }
            console.log("errors", this.error)
            e.preventDefault();
        }
    }
}
</script>
