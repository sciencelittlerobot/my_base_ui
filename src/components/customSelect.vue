<template>
  <div :id="getRandom('custom-select-', 1, 100)" class="custom-select" v-clickOut="hideSelect">
    <p :id="getRandom('select-default-', 1, 100)" class="selected-item" :class="{'default-item' : selectedItem.key === 0}" @click="showSel=true">{{selectedItem.value}}<i class="icon-arrow"></i></p>
    <ul :id="getRandom('select-list-', 1, 100)" v-show="showSel" class="select-item-list" style="display:none;">
      <li :class="{'active' : (selectedItem.key === item.key || (selectedItem.key === 0 && item.key === 1))}" v-for="(item, index) in dataArr" :key="'time_'+index" @click.stop="selectCallback(item)">{{item.value}}</li>
    </ul>
  </div>
</template>

<script>
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
    data () {
      return {
        showSel: false,
        counter: 0
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

    .selected-item{
      width: 100%;
      position: relative;
      color: #333333;
    }

    .default-item{
      color: #C7C7C7;
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
      max-height: 500px;
      overflow: auto;
      border: 1px solid #DDDDDD;
      position: absolute;
      top: 32px;
      left: 0;
      background: #ffffff;
      border-radius: 1px;
      z-index: 99;

      li{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #333333;
        padding: 0 10px;

        &.active{
          color: #ffffff;
          background: #0079ff;
        }
      }
    }
  }
</style>