<template>
  <div class="home">
    

    <div class="item-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  

  export default {
    name: 'home',
    data () {
      return {};
    },
    mounted () {
      //
    },
    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    display: block;
    background: #ffffff;
    padding: 0 0 50px;

    
  }
</style>