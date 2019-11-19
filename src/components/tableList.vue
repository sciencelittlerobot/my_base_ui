<template>
  <div class="table-viewer">
    <table class="table table-title">
        <tr>
          <th v-for="(item,index) in tableCols" :key="'title_'+index">{{item.title}}</th>
        </tr>
    </table>
    <vperfect-scrollbar class="tabel" :settings="settings" ref="scroll" @ps-scroll-y="scrollY" @ps-y-reach-end="scrollEnd">
      <table class="table table-2">
        <tr v-for="(data, index) in dataList" :key="'tr_'+index">
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
    <div class="page-bar clearfix">
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
      }
    },
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    data () {
      return {
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
        initTableHeight: 0,
        firstLoad: true
      };
    },
    watch: {
      currentPage: function (newVal, oldVal) {
        if (newVal === 1) {
          this.getPageList(newVal);
        }
      },
      totalPage: function (newVal, oldVal) {
        this.getPageList(1);
      },
      dataList: function () {
        let _this = this;

        _this.$nextTick(function () {
          let eleHeight = document.querySelector('.tabel').offsetHeight;
          let curHeight = document.querySelector('.table-2').offsetHeight;

          if (_this.firstLoad === true) {
            _this.initTableHeight = eleHeight;
          }
          _this.firstLoad = _this.initTableHeight === 0;
          if (_this.initTableHeight > curHeight && curHeight !== 0) {
            document.querySelector('.tabel').style.height = curHeight + 'px';
          }
        });
      }
    },
    mounted () {
      let _this = this;

      _this.currentPage = this.curPage;
      _this.minNum = this.currentPage;
      _this.getPageList(this.minNum);
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
        } else if (type === 'current' && page.key === 'more') {
          let midNum = (_this.maxNum / 2) + 1;

          _this.currentPage = (Math.floor(_this.currentPage / midNum) + 1) * midNum;
        } else {
          _this.currentPage = page.value;
        }

        if (_this.currentPage < _this.perMoveNum || _this.totalPage <= _this.maxNum) {
          _this.minNum = 1;
        } else if (_this.currentPage < _this.totalPage - _this.maxNum + 1 && _this.currentPage !== 1) {
          _this.minNum = (_this.currentPage % _this.perMoveNum) !== 0 ? (_this.currentPage - (_this.currentPage % _this.perMoveNum)) : _this.currentPage;
        } else {
          _this.minNum = _this.totalPage - _this.maxNum + 1;
        }
        _this.getPageList(_this.minNum);
        _this.$emit('pageCallback', {currentPage: _this.currentPage});
      },
      getPageList: function (initNum) {
        let _this = this;

        _this.pageList = [];
        if (_this.totalPage - initNum + 1 > _this.maxNum) {
          for (let i = initNum;i <= _this.maxNum / 2 + initNum;i++) {
            let item = i;

            _this.pageList.push({key: 'number', value: item});
          }
          _this.pageList.push({key: 'more', value: '...'});
          for (let i = _this.totalPage - 1;i <= _this.totalPage;i++) {
            let item = i;

            _this.pageList.push({key: 'number', value: item});
          }
        } else {
          for (let i = initNum;i <= _this.totalPage;i++) {
            let item = i;

            _this.pageList.push({key: 'number', value: item});
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
    font-family: "微软雅黑";

    .table{
      width: 100%;
      border: none;
      table-layout: fixed;
      word-break: break-all;
      font-size: 14px;

      tr{
        width: 100%;
        text-align: left;

        &:nth-child(even){
          background: #ffffff;
        }

        &:nth-child(odd){
          background: #f0f0f0;
        }
      }

      th{
        height: 40px;
        color: #262626;
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

      &.btn-def{
        color:#0079ff;
        border-color:#0079ff;

        &:hover{
          color:#298fff;
          border-color:#298fff;
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
  }
</style>