<template>
  <div class="category-scroll-page-warp">
    <p>分类滚动页面</p>
    <cmp-categoryscroll></cmp-categoryscroll>
  </div>
</template>

<script>
  import CategoryScroll from '@/components/categoryScroll.vue';

  export default {
    name: 'CategoryScrollPage',
    components: {
      'cmpCategoryscroll': CategoryScroll
    },
    data () {
      return {};
    }
  };
</script>

<style scoped>

</style>