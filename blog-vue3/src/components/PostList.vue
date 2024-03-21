<template>
  <main class="post-list">
    <h2>카테고리 : {{ selectedCategory }}</h2>
    <ul>
      <li v-for="item in postList[selectedCategory]" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </main>
</template>
<script setup>
import { getPageTable } from "vue-notion";
getPageTable("bb3671a33ad340598d62af0febbc935d").then((v) => {
  console.log(v);
});
const props = defineProps(["selectedCategory"]);
const postList = {
  HTML: [
    { id: 0, title: "HTML 기본 1" },
    { id: 1, title: "HTML 기본 2" },
  ],
  CSS: [{ id: 2, title: "CSS 기본 1" }],
};
</script>
