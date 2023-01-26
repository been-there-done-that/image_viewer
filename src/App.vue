<template>
  <div>
    <div class="mx-16 my-[8%]">
      <div v-viewer="options">
        <div
            class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-x-3 gap-y-5 my-auto">
          <img
              v-for="{ low, high } in images"
              :key="high"
              :alt="high.split('?image=').pop()"
              :data-source="high"
              :src="low"
              class="cursor-pointer rounded-xl p-2 shadow-cs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {directive as viewer} from "v-viewer";

const sourceImages = [
  {
    "low": "https://picsum.photos/340/250?random=1",
    "high": "https://picsum.photos/340/250?random=1"
  }, {
    "low": "https://picsum.photos/340/250?random=2",
    "high": "https://picsum.photos/340/250?random=2"
  }, {
    "low": "https://picsum.photos/340/250?random=3",
    "high": "https://picsum.photos/340/250?random=3"
  }, {
    "low": "https://picsum.photos/340/250?random=4",
    "high": "https://picsum.photos/340/250?random=4"
  }, {
    "low": "https://picsum.photos/340/250?random=5",
    "high": "https://picsum.photos/340/250?random=5"
  }, {
    "low": "https://picsum.photos/340/250?random=3",
    "high": "https://picsum.photos/340/250?random=3"
  }, {
    "low": "https://picsum.photos/340/250?random=4",
    "high": "https://picsum.photos/340/250?random=4"
  }, {
    "low": "https://picsum.photos/340/250?random=5",
    "high": "https://picsum.photos/340/250?random=5"
  },
]

export default {
  // let;s add a custom directive so that we can use the vue directives syntax v-<name>
  // Example:: v-viewer
  // ::ref:: https://www.tutorialspoint.com/vuejs/vuejs_directives.htm
  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  data() {
    return {
      options: {
        toolbar: true,
        url: "data-source",
      },
      images: sourceImages,
    };
  },
};
</script>
