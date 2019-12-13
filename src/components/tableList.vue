<template>
  <div class="table-viewer">
    <table class="table table-title">
        <tr>
          <th style="text-align:center;" v-if="showCheckbox === true"><input type="checkbox" class="table-checkbox" v-model="checkAll" @change="toggleCheckAll"></th>
          <th v-for="(item,index) in tableCols" :key="'title_'+index">{{item.title}}</th>
        </tr>
    </table>
    <vperfect-scrollbar class="tabel" :settings="settings" ref="scroll" @ps-scroll-y="scrollY" @ps-y-reach-end="scrollEnd">
      <table class="table table-2">
        <tr v-for="(data, index) in list" :key="'tr_'+index">
          <th style="text-align:center;" v-if="showCheckbox === true"><input type="checkbox" class="table-checkbox" v-model="data.checked" @change="toggleCheck"></th>
          <template v-for="(item, ind) in tableCols">
            <td v-if="item.name === 'button'" :key="'td_'+ind">
              <a class="btn" :class="'btn-'+btn.theme" v-for="(btn, btnIndex) in data[item.name]" @click="tableCallback(btn, data)" :key="'btn-'+btnIndex">{{btn.text}}</a>
            </td>
            <td v-else-if="item.name === 'innerHtml'" :key="'td_'+ind">
              <span v-html="data[item.name]"></span>
            </td>
            <td v-else :key="'td_'+ind">
              {{data[item.name]}}
            </td>
          </template>
        </tr>
      </table>
    </vperfect-scrollbar>
    <div class="page-bar clearfix" v-if="totalPage > 0 && pageBar.show === true">
      <div class="bar-inside clearfix">
        <ul class="page-list clearfix">
          <li @click="pageCallback('prev')"><span class="prev-page"></span></li>
          <li v-for="(page, index) in pageList" :class="{'active' : page.value === currentPage}" :key="index" @click="pageCallback('current', page)">{{page.value}}</li>
          <li @click="pageCallback('next')"><span class="next-page"></span></li>
        </ul>
        <p class="total-page">共 {{totalPage}} 页</p>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'TableList',
    props: {
      tableCols: {
        type: Array,
        default: function () {
          return [];
        }
      },
      dataList: {
        type: Array,
        default: function () {
          return [];
        }
      },
      curPage: {
        type: Number,
        default: 1
      },
      totalPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 12
      },
      pageBar: {
        type: Object,
        default: function () {
          return {show: true};
        }
      },
      showCheckbox: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    data () {
      return {
        list: [],
        currentPage: 1,
        pageList: [],
        // 最多显示的个数
        maxNum: 8,
        // 每次间隔的个数
        perMoveNum: 4,
        // 初始化最小值
        minNum: 1,
        settings: {
          wheelSpeed: 0.5,
          mark: false
        },
        checkAll: false
      };
    },
    watch: {
      dataList: function (newVal, oldVal) {
        this.list = this.dataList;
      },
      currentPage: function (newVal, oldVal) {
        if (newVal === 1) {
          this.getPageList();
        }
      },
      totalPage: function (newVal, oldVal) {
        this.getPageList();
      },
      curPage: function (newVal, oldVal) {
        this.currentPage = this.curPage;
      },
      pageSize: function (newVal, oldVal) {
        this.getPageList();
      }
    },
    mounted () {
      let _this = this;

      _this.currentPage = _this.curPage;
      _this.list = _this.dataList;
      _this.getPageList();
    },
    methods: {
      pageCallback: function (type, page) {
        let _this = this;

        if (type === 'prev') {
          if (_this.currentPage === 1) {
            return;
          }
          _this.currentPage = _this.currentPage - 1;
        } else if (type === 'next') {
          if (_this.currentPage === _this.totalPage) {
            return;
          }
          _this.currentPage = _this.currentPage + 1;
        } else if (type === 'current' && page.key === 'more_prev') {
          _this.currentPage = (_this.currentPage >= _this.totalPage - ((_this.maxNum / 2) + 1)) ? (_this.totalPage - ((_this.maxNum / 2) + 1) - 1) : ((_this.currentPage - 2) < ((_this.maxNum / 2) + 1) ? ((_this.maxNum / 2) + 1) : (_this.currentPage - 2));
        } else if (type === 'current' && page.key === 'more_next') {
          _this.currentPage = (_this.currentPage <= (_this.maxNum / 2) + 1) ? ((_this.maxNum / 2) + 1 + 1) : (((_this.currentPage + 2) > _this.totalPage - ((_this.maxNum / 2) + 1)) ? (_this.totalPage - ((_this.maxNum / 2) + 1)) : (_this.currentPage + 2));
        } else {
          _this.currentPage = page.value;
        }

        _this.getPageList();
        _this.$emit('pageCallback', {currentPage: _this.currentPage});
      },
      getPageList: function () {
        let _this = this;
        let minLimitNum = (_this.maxNum / 2) + 1;
        let maxLimitNum = _this.totalPage - ((_this.maxNum / 2) + 1);

        _this.pageList = [];
        if (_this.totalPage > 8) {
          if (_this.currentPage <= minLimitNum) {
            for (let i = 1;i <= minLimitNum;i++) {
              _this.pageList.push({
                key: 'number',
                value: i
              });
            }
            _this.pageList.push({
              key: 'more_next',
              value: '...'
            });
            for (let i = _this.totalPage - 1;i <= _this.totalPage;i++) {
              _this.pageList.push({key: 'number', value: i});
            }
          } else if (_this.currentPage > minLimitNum && _this.currentPage < maxLimitNum) {
            _this.pageList.push({
              key: 'number',
              value: 1
            });
            _this.pageList.push({
              key: 'more_prev',
              value: '...'
            });
            _this.pageList.push({
              key: 'number',
              value: _this.currentPage - 1
            });
            _this.pageList.push({
              key: 'number',
              value: _this.currentPage
            });
            _this.pageList.push({
              key: 'number',
              value: _this.currentPage + 1
            });
            _this.pageList.push({
              key: 'more_next',
              value: '...'
            });
            for (let i = _this.totalPage - 1;i <= _this.totalPage;i++) {
              _this.pageList.push({key: 'number', value: i});
            }
          } else {
            _this.pageList.push({
              key: 'number',
              value: 1
            });
            _this.pageList.push({
              key: 'more_prev',
              value: '...'
            });
            for (let i = maxLimitNum;i <= _this.totalPage;i++) {
              _this.pageList.push({
                key: 'number',
                value: i
              });
            }
          }
        } else {
          for (let i = 1;i <= _this.totalPage;i++) {
            _this.pageList.push({
              key: 'number',
              value: i
            });
          }
        }
      },

      tableCallback: function (btn, item) {
        this.$emit('tableCallback', {btnInfo: btn, itemInfo: item});
      },

      scrollY: function () {
        this.settings.mark = true;
      },
      scrollEnd: function () {
        // 
      },

      toggleCheckAll: function () {
        let listStr = JSON.stringify(this.list);

        if (this.checkAll === true) {
          listStr = listStr.replace(new RegExp(/"checked":false/g), '"checked":true');
          this.list = JSON.parse(listStr);
        } else {
          listStr = listStr.replace(new RegExp(/"checked":true/g), '"checked":false');
          this.list = JSON.parse(listStr);
        }
        this.$emit('checkCallback', this.list);
      },

      toggleCheck: function () {
        let listStr = JSON.stringify(this.list);

        if (listStr.indexOf('"checked":false') <= -1) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
        this.$emit('checkCallback', this.list);
      }
    }
  };
</script>

<style lang="scss" scoped>
  $liArrowBorder: 8px;
  .table-viewer{
    width: 100%;
    height: auto;
    display: block;

    .table{
      width: 100%;
      border: none;
      table-layout: fixed;
      word-break: break-all;
      font-size: 12px;

      tr{
        width: 100%;
        text-align: left;

        &:nth-child(even){
          background: #ffffff;
        }

        &:nth-child(odd){
          background: #f7f7f7;
        }

        &:hover{
          background: #eeeeee;
        }
      }

      th{
        height: 40px;
        color: #262626;
        font-weight: normal;
      }
      td {
        height: 32px;
        color: #333333;
      }

      th, td {
        text-align: left;
        padding: 7px 10px;
      }
    }

    .table-title{
      tr:first-child{
        background: #ffffff;
      }
    }

    .page-bar{
      width: 100%;
      margin-top: 25px;
      display: block;
      -webkit-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;

      .bar-inside{
        float: right;
      }

      .page-list{
        width: auto;
        float: left;

        li{
          width: 24px;
          height: 24px;
          overflow: hidden;
          float: left;
          display: inline-block;
          line-height: 24px;
          text-align: center;
          color: #535353;
          font-size: 13px;
          margin-right: 5px;
          cursor: pointer;

          &.active{
            background: #BBBBBB;
            color: #ffffff;
            border-radius: 50%;
          }

          span{
            margin-top: 2px;
            width: 20px;
            height: 20px;
            display: inline-block;
            position: relative;
            overflow: hidden;

            &:before,
            &:after{
              content: "";
              width: 0;
              height: 0;
              display: block;
              position: absolute;
              top: 2px;
              z-index: 5;
              border-top: $liArrowBorder transparent dashed;
              border-bottom: $liArrowBorder transparent dashed;
            }
          }

          .prev-page{
            &:before{
              left: -4px;
              border-left: $liArrowBorder transparent dashed;
              border-right: $liArrowBorder solid #777777;
            }
            &:after{
              left: -3px;
              border-left: $liArrowBorder transparent dashed;
              border-right: $liArrowBorder solid #ffffff;
            }
          }

          .next-page{

            &:before{
              left: 3px;
              border-right: $liArrowBorder transparent dashed;
              border-left: $liArrowBorder solid #777777;
            }

            &:after{
              left: 2px;
              border-right: $liArrowBorder transparent dashed;
              border-left: $liArrowBorder solid #ffffff;
            }
          }
        }
      }

      .total-page{
        width: auto;
        float: left;
        color: #535353;
        font-size: 14px;
        height: 24px;
        line-height: 24px;
      }
    }

    /* 按钮 */
    .btn{
      display: inline-block;
      padding: 4px 15px;
      // line-height: 1.5;
      font-size: 12px;
      color:#666;
      border: 1px solid #ddd;
      border-radius: 2px;
      background-color:#fff;
      transition: background-color 0.2s;
      cursor: pointer;
      margin-left: 15px;

      &:first-child{
        margin-left: 0;
      }

      .iconfont{
        font-size: 12px;
      }

      &:hover{
        color:#878787;
      }

      &.btn-add{
        color:#fff;
        border-color:#0079ff;
        background-color:#0079ff;

        &:hover{
          color:#fff;
          background:#298fff;
        }
      }
      &.btn-del{
        color:#ff5e5e;
        border-color:#ff5e5e;

        &:hover{
          color:#e64046;
          border-color:#e64046;
        }
      }
    }

    .tabel{
      height: calc(100% - 50px - 40px);
    }

    .table-checkbox[type="checkbox"]{
      width: 17px;
      height: 17px;
      position: relative;
      border-radius: 2px;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        line-height: 17px;
        text-align: center;
        color: #dddddd;
        font-size: 16px;
        background-color: #ffffff;
        border-radius: 2px;
        border: 1px solid #dddddd;
      }

      &:checked::before{
        content: "\2713";
        border-color: #298fff;
        color: #298fff;
        font-weight: bold;
      }
    }
  }
</style>