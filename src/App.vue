<template>
  <h1><p>To show the viewer, you have to click on the images.</p></h1>
  <div>
    <div v-viewer="options" class="images clearfix">
      <img
        v-for="{ source, thumbnail } in images"
        :key="source"
        :src="thumbnail"
        :data-source="source"
        class="image"
        :alt="source.split('?image=').pop()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { directive as viewer } from "v-viewer";

const sourceImages = Array();

const base = Math.floor(Math.random() * 60) + 10;
for (let i = 0; i < 100; i++) {
  console.log(base, base + i)
  sourceImages.push({
    thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
    source: `https://picsum.photos/id/${base + i}/1440/900`,
  });
}


export default {
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

<style scoped>
.image {
  width: calc(30% - 20px);
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
</style>
