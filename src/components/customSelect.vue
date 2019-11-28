<template>
  <div :id="getRandom('custom-select-', 1, 100)" class="custom-select" v-clickOut="hideSelect">
    <p :id="getRandom('select-default-', 1, 100)" class="selected-item" :class="{'default-item' : selectedItem.key === 0 || selectedItem.key === ''}" @click="showSel=!showSel">{{selectedItem.value}}<i class="icon-arrow"></i></p>
    <ul :id="getRandom('select-list-', 1, 100)" v-show="showSel" class="select-item-list" style="display:none;">
      <vperfect-scrollbar class="tabel" :settings="settings" ref="scroll" @ps-scroll-y="scrollY" @ps-y-reach-end="scrollEnd">
        <li :class="{'active' : (selectedItem.key === item.key || ((selectedItem.key === 0 || selectedItem.key === '') && index === 0))}" v-for="(item, index) in dataArr" :key="'time_'+index" @click.stop="selectCallback(item)">{{item.value}}</li>
      </vperfect-scrollbar>
    </ul>
  </div>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'CustomSelect',
    props: {
      selectedItem: {
        type: Object,
        default: function () {
          return {};
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      },
      dataArr: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    data () {
      return {
        showSel: false,
        counter: 0,
        settings: {
          wheelSpeed: 0.5,
          mark: false
        }
      };
    },
    directives: {
      clickOut: {
        bind: function (el, binding) {
          function handler (e) {
            if (!el.contains(e.target) && binding.expression) {
              binding.value();
            }
          }

          el.handler = handler;
          document.addEventListener('click', el.handler);
        },

        unbind: function (el) {
          document.removeEventListener('click', el.handler);
        }
      }
    },
    watch: {
      showSelect: function (newVal, oldVal) {
        this.showSel = newVal;
      }
    },
    mounted () {
      let _this = this;

      _this.showSel = _this.showSelect;
    },
    methods: {
      selectCallback: function (item) {
        this.$emit('selectCallback', item);
        this.showSel = false;
      },

      hideSelect: function () {
        this.showSel = false;
      },

      getRandom: function (name, min, max) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;

        return name + num;
      },

      scrollY: function () {
        this.settings.mark = true;
      },
      scrollEnd: function () {
        // 
      }
    }
  };
</script>

<style scoped lang="scss">
  .custom-select{
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #DDDDDD;
    padding: 0 10px;
    border-radius: 2px;
    font-size: 12px;
    display: block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;

    .selected-item{
      width: 100%;
      position: relative;
      color: #333333;

      &.default-item{
        color: #C7C7C7;
      }
    }

    .icon-arrow{
      width: 10px;
      height: 10px;
      position: relative;
      border-bottom: 5px transparent dashed;
      border-left: 5px transparent dashed;
      border-right: 5px transparent dashed;
      border-top: 5px solid #999999;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      margin-top: 2px;
    }

    .select-item-list{
      width: calc(100% + 2px);
      max-height: 250px;
      overflow: hidden;
      border: 1px solid #DDDDDD;
      position: absolute;
      top: 32px;
      left: 0;
      background: #ffffff;
      border-radius: 1px;
      z-index: 99;
      padding-top: 8px;
      box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 0px 6px 0px rgba(0, 0, 0, 0.04);

      li{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #333333;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover{
          background: #d1e7ff;
        }

        &.active{
          color: #ffffff;
          background: #0079ff;

          &:hover{
            background: #0079ff;
          }
        }
      }
    }

    .tabel{
      max-height: 200px;
    }
  }
</style>