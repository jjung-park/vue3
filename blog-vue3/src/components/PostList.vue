<template>
  <input class="search" v-model="search" ref="input"/>
  <main class="post-list">
    <h2 v-show="!search">카테고리 : {{ selectedCategory }}</h2>
    <ul>
      <li v-for="item in filterList" :key="item.id">
        <button @click="$emit('click-post', item.id)">{{ item.title }}</button>
      </li>
    </ul>
  </main>
</template>
<script setup>
import { ref, watch, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import { getPageTable } from "vue-notion";

// $ref 사용법
const input = ref(null)
onMounted(() => {
    input.value.focus();
})



const props = defineProps(["selectedCategory"]);
const postList = ref({});
// const filterList = ref(null);
getPageTable("bb3671a33ad340598d62af0febbc935d").then((v) => {
  const result = {};
  for (const post of v) {
    const c = post.category;
    if (!result[c]) {
      result[c] = [];
    }
    result[c].push(post);

  }
  postList.value = result;
  // filterList.value = postList.value[props.selectedCategory]
});

//검색을 watch로 구현
 const search = ref("");
/*watch(search, (s) => {
  if(s == ""){
    filterList.value = postList.value[props.selectedCategory]
  }else{
    const result = [];
  for (const category in postList.value){
    for (const item of postList.value[category]){
      if(item.title.includes(s)){
        result.push(item);
      }
    }
  }
  filterList.value = result;
  console.log(filterList.value)
  }
  
}); */

const filterList = computed(() => {
    const result = [];
    if(search.value == ""){
    return postList.value[props.selectedCategory];
    }else{
    for (const category in postList.value){
        for (const item of postList.value[category]){
            if(item.title.includes(search.value)){
                result.push(item);
            }
        }
    }
    return result;
    }
});


</script>


<style>

.post-list button {
  border: 0;
  background-color: transparent;
  color: rgb(101, 129, 139);
  cursor: pointer;
}

.post-list button:hover {
  color: blue;
}
.search {
  margin-top: 10px;
  padding: 5px 3px;
  border-radius: 5px;
  border: 1px solid #777;
}

</style>