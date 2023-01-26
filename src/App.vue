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
import getImages from '@/components/api'

const sourceImages = [
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_0997.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=794303f2f7cc9bd0d66baeb73f2a8991b1d180d8df1afd4bf29defbb5f0a84f1",
    "high": "http://127.0.0.1:9000/images/IMG_0997.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=21ece745da0475db905bea1238518a7417d1cc15d9f790dc3d0cf5bea1888ad5"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_1173.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=616b45a687c139bd30352eaaee0fb873a11e9f8ba1a008477875d1158fbe7a6f",
    "high": "http://127.0.0.1:9000/images/IMG_1173.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8b6cb2988bff7d9b73cbb524abf51e7232ac2e79c211e877cbc2f2c35c2b1e1a"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_1110.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b99edf93ae17b2754de78f3a622f4176a14787186587addc3660b779522c72fc",
    "high": "http://127.0.0.1:9000/images/IMG_1110.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9b0ea8b1c8f448c23318dad64a2f9544cc3cc407462f38ee17cbfd7994b11fd2"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_0761.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fa980f9dce213cb4c220ab287e1e35638f996aad89701644440e50036e973e48",
    "high": "http://127.0.0.1:9000/images/IMG_0761.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4da17dbb00df2430eebd5e2372ff430d51f35341a1b073c524176d5d31e5e2a6"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_0778.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe18c82479ed8e0f11487672638903cc6742f4efb1826e0f33f259e498c4a251",
    "high": "http://127.0.0.1:9000/images/IMG_0778.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b8d666cc06ec73d5d8b2a620097ab03f8a10638d532644a83529a2bf771abdf9"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_1025.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8b9c9006e8c862237812b76b10990ade78d4a5f80e9c65ac384e1c7d776a6250",
    "high": "http://127.0.0.1:9000/images/IMG_1025.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2193ae3a7df52ec29db5050c44bfc026e5e03f163c81f9757a5ef44feec9f369"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_1132.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9189f4d265d7b638cfeddef599d4ad24ac0cb9116a4003b2233bd42f1564ed4a",
    "high": "http://127.0.0.1:9000/images/IMG_1132.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9bfefa9150ff54f740436dc0a523fcd17de8f00a015addc2262c9217dc3022d4"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_0979.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=15ff96612f6719f06266e079035b20faa4f359ff0901cd98bf9921fd6133f09e",
    "high": "http://127.0.0.1:9000/images/IMG_0979.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3dd6294eacd1f3d4ade7a260dc00bff1e0ae1d25e7fd04675874fb4a4feedeb9"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_0878.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5b2eafcaf0b6675b3f5cc00b00dbb66b2ae0f442d3a781050f70c1550c1d4663",
    "high": "http://127.0.0.1:9000/images/IMG_0878.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a039159f39b51b7c38cc21eb277f4447d55151e735857d23ecc8497d34f22ea3"
  },
  {
    "low": "http://127.0.0.1:9000/images/lower/IMG_0988.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4caa735e37f4a460b7e421909cf6b33e61e0d940f578287521e598f9494119fc",
    "high": "http://127.0.0.1:9000/images/IMG_0988.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=XV2e6UbSAlsxAoIW%2F20230126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230126T193623Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9654062b62c654c6d79cadd2fd4ac3168cbe43f2ac021f748a0ce7037450845a"
  }
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
  mounted() {
    getImages().then(
        (resp) => (
            console.log(resp)
        )
    ).catch(
        (err) => (
            console.log(
                err
            )
        )
    );
  }
};
</script>
