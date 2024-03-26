<template>
  <MenuBar @click-category="changeCategory" />
  <PostList :selected-category="selectedCategory" @click-post="changePost" v-if="main == 'list'"/>
  <PostContent :id="selectedId" v-if="main == 'content'"/>

</template>
<script setup>
import { ref } from "vue";
import MenuBar from "./components/MenuBar.vue";
import PostList from "./components/PostList.vue";
import PostContent from "./components/PostContent.vue";

const selectedCategory = ref("HTML");
const changeCategory = function (cate) {
  selectedCategory.value = cate;
  main.value = 'list'
};

const selectedId = ref(null);
const changePost = function (id) {
  selectedId.value = id;
  main.value = 'content'
}

const main = ref('list');
</script>
<style>

</style>