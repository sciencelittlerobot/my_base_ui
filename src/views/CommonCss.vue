<template>
  <div class="commoncss-page-wrap">
    <cpm-commoncss></cpm-commoncss>
  </div>
</template>

<script>
  import CommonCss from "@/components/commonCss.vue";

  export default {
    name: 'CommonCssPage',
    components: {
      'cpmCommoncss': CommonCss
    },
    data () {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .commoncss-page-wrap{
    width: 100%;
    padding: 20px 50px;
    background: #ffffff;
  }
</style>