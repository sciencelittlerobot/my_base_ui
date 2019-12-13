<template>
  <div class="home">
    <p class="title">自定义组件汇总</p>
    <div class="item-wrap">
      <p class="item-title"><span>select组件</span></p>
      <div class="item-cpm">
        <cpm-CustomSelect v-bind="selectConfig" @selectCallback="selectCallback"></cpm-CustomSelect>
      </div>
    </div>

    <div class="item-wrap">
      <p class="item-title"><span>tableList组件</span></p>
      <div class="item-cpm" style="width: 100%;">
        <p class="line-box">
          <button class="btn btn-def" @click="showCheckList">显示选中的内容</button>
          <button class="btn btn-del" @click="showCheckList">批量删除</button>
          </p>
        <cpm-TableList v-bind="tableConfig" @tableCallback="tableCallback" @pageCallback="pageCallback" @checkCallback="checkCallback"></cpm-TableList>
      </div>
    </div>

    <div class="item-wrap">
      <p class="item-title"><span>commonCss组件</span></p>
      <div class="item-cpm" style="width: 100%;">
        <cpm-commoncss></cpm-commoncss>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CustomSelect from "@/components/customSelect.vue";
  import TableList from "@/components/tableList.vue";
  import CommonCss from "@/components/commonCss.vue";
  import {ajaxGetDataList} from '@/ajax.js';
  import '@/mock.js';

  export default {
    name: 'home',
    components: {
      'cpmCustomSelect': CustomSelect,
      'cpmTableList': TableList,
      'cpmCommoncss': CommonCss
    },
    data () {
      return {
        // select组件配置
        selectConfig: {
          selectedItem: {key: 0, value: '请选择项目'},
          showSelect: false,
          dataArr: [
            {key: 1, value: '选择项一'},
            {key: 2, value: '选择项二'},
            {key: 3, value: '选择项三'},
            {key: 4, value: '选择项四'},
            {key: 5, value: '选择项五'},
            {key: 6, value: '选择项六'},
            {key: 7, value: '选择项七'},
            {key: 8, value: '选择项八'}
          ]
        },
        // tableList组件配置
        tableConfig: {
          tableCols: [
            {
              title: '列一',
              name: 'colOne'
            },
            {
              title: '列二',
              name: 'colTwo'
            },
            {
              title: '列三',
              name: 'colThree'
            },
            {
              title: '列四',
              name: 'colFour'
            },
            {
              title: '列五',
              name: 'colFive'
            },
            {
              title: '操作',
              name: 'button'
            },
            {
              title: '内嵌标签',
              name: 'innerHtml'
            }
          ],
          dataList: [],
          curPage: 1,
          pageSize: 12,
          totalPage: 1,
          showCheckbox: true
        }
      };
    },
    mounted () {
      this.getTableDataList();
    },
    methods: {
      // select组件回调
      selectCallback: function (result) {
        this.selectConfig.selectedItem = result;
        console.log('selectCallback-----result=', JSON.stringify(result));
      },

      // 获取tableList组件数据列表
      getTableDataList: function () {
        let _this = this;

        _this.tableConfig.dataList = [];
        ajaxGetDataList('', function (result) {
          _this.tableConfig.dataList = result.result.data.map(function (item, index) {
            item.checked = false;
            item.button = [
              {theme: 'info', text: '详情'},
              {theme: 'def', text: '编辑'},
              {theme: 'del', text: '删除'}
            ];
            item.innerHtml = '<a href="http://www.baidu.com" style="color:#0079FF;">标签</a>';
            return item;
          });
          _this.tableConfig.totalPage = Math.ceil(result.result.totalSize / _this.tableConfig.pageSize);
        });
      },

      showCheckList: function () {
        let _this = this;
        let tempArr = _this.tableConfig.dataList.filter((item, index) => {
          return item.checked === true;
        });

        console.log('选中的内容暂时在控制台显示：', tempArr);
      },

      // tableList组件表格按钮回调
      tableCallback: function (result) {
        console.log('tableCallback-----result=', JSON.stringify(result));
      },

      // tableList组件表格分页回调
      pageCallback: function (result) {
        this.tableConfig.curPage = result.currentPage;
        this.getTableDataList();
        console.log('pageCallback-----result=', JSON.stringify(result));
      },

      checkCallback: function (result) {
        this.tableConfig.dataList = result;
      }
    }
  };
</script>

<style>
.home .table-viewer .table th:nth-last-of-type(2),
.home .table-viewer .table td:nth-last-of-type(2){
  width: 230px;
}
</style>

<style lang="scss" scoped>
  .home{
    width: 100%;
    display: block;
    background: #ffffff;
    padding: 0 0 50px;

    .title{
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 22px;
      color: #333333;
      background: #e9f1f9;
    }

    .item-wrap{
      width: 1200px;
      display: block;
      margin: 20px auto 40px;

      .item-title{
        font-size: 16px;
        color: #333333;
        text-align: left;
        margin-bottom: 20px;

        span{
          background: #e9f1f9;
          padding: 6px 50px;
          border-radius: 2px;
          display: inline-block;
        }
      }

      .item-cpm{
        width: 200px;
        // min-height: 200px;

        .line-box{
          text-align: left;
          margin-bottom: 10px;
        }

        .btn{
          padding: 5px 12px;
          display: inline-block;
          font-size: 14px;
          border-radius: 2px;
          margin-right: 10px;

          &.btn-def{
            border: 1px solid #298fff;
            background: #ffffff;
            color: #298fff;

            &:active{
              border: 1px solid #6eb3ff;
              color: #6eb3ff;
            }
          }

          &.btn-del{
            border: 1px solid #ff2d2d;
            background: #ffffff;
            color: #ff2d2d;

            &:active{
              border: 1px solid #ff8f8f;
              color: #ff8f8f;
            }
          }
        }
      }

      .table-viewer{
        height: 640px;
      }
    }
  }
</style>
