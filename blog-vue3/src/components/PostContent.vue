<template>
  <main class="post-content">
    <NotionRenderer :blockMap="blockMap"></NotionRenderer>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import { NotionRenderer, getPageBlocks } from 'vue-notion';

const props = defineProps(['id']);
const blockMap = ref(null);
 blockMap.value = null
  getPageBlocks(props.id).then((v)=>{
    blockMap.value = v;
  })

</script>



<style>
@import "vue-notion/src/styles.css";

</style>