<template>
  <router-link :to="'/posts/' + post.id">
    <div class="rounded shadow">
      <img
        class="w-full h-auto object-cover rounded-t-md"
        src="https://picsum.photos/300/200"
      />
      <main class="px-3 py-6">
        <header class="text-xl font-bold">
          <slot name="title"></slot>
        </header>
        <div>
          <slot name="tags"></slot>
        </div>
      </main>
    </div>
  </router-link>
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
