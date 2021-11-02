<template>
  <div id="app">
    <p class="title">自定义组件汇总</p>
    <ul class="menu-list">
      <li class="menu-item"><router-link to="/">表单组件</router-link></li>
      <li class="menu-item"><router-link to="/commoncss">常用样式</router-link></li>
      <li class="menu-item"><router-link to="/dragSortPage">拖动排序</router-link></li>
    </ul>

    <div class="main-wrap">
      <router-view />
    </div>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ffffff;
  width: 100%;
  height: 100%;
}

</style>

<style lang="scss" scoped>
.title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  color: #333333;
}

.menu-list{
  width: 100%;
  display: block;

  .menu-item{
    width: calc(100%/3);
    height: 45px;
    line-height: 45px;
    float: left;
    background: #d7e5f3;

    a{
      width: 100%;
      height: 100%;
      display: block;
      font-size: 16px;
      color: #666666;

      &:hover{
        background: #badbfb;
      }

      &.router-link-exact-active {
        background: #badbfb;
      }
    }
  }
}

.main-wrap{
  width: 100%;
  height: calc(100% - 95px);
  display: block;
  overflow-y: auto;
  background: #ffffff;
}
</style>
