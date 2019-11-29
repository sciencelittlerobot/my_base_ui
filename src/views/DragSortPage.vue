<template>
  <div class="drag-sort-page-warp">
    <p>排序拖拽页面</p>
    <cmp-dragsort></cmp-dragsort>
  </div>
</template>

<script>
  import DragSort from '@/components/dragSort.vue';

  export default {
    name: 'DragSortPage',
    components: {
      'cmpDragsort': DragSort
    },
    data () {
      return {};
    }
  };
</script>

<style lang="scss" scoped>

</style>