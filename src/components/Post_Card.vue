<template>
<div class="rounded shadow h-[405px]">
    <img class="w-full h-auto object-cover rounded-t-md" src="https://picsum.photos/300/200" />
    <main class="px-3 py-6">
        <router-link :to="'/posts/' + post.id" class="hover:text-slate-500 ">
        <header class="text-xl font-bold">
            <slot name="title"></slot>
        </header>
        </router-link>
        <div>
            <slot name="tags"></slot>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name: 'postCard',
    components: {},
    props: {
        post: {
            required: true,
            type: Object,
        },
    },
};
</script>
