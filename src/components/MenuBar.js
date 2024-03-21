import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  template: `
    <nav class="menu">
        <a v-for="c of categories" :key="c" 
        :href="'/' + categories[0].toLowerCase()" 
        class="category"
        @click.prevent="$emit('clickCategory', c)">
        {{ c }}
        </a>
    </nav>
  `,

  setup() {
    const categories = ["HTML", "CSS", "Javascript"];

    return {
      categories,
    };
  },
};
