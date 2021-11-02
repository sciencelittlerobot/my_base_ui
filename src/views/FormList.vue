<template>
  <div class="form-list-page-wrap">
    <div class="item-wrap">
      <p class="item-title"><span>select单选组件</span></p>
      <div class="item-cpm">
        <cpm-CustomSelect v-bind="selectConfig" @selectCallback="selectCallback"></cpm-CustomSelect>
      </div>
    </div>

    <div class="item-wrap">
      <p class="item-title"><span>select多选组件</span></p>
      <div class="item-cpm"></div>
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
      <p class="item-title"><span>弹窗组件</span></p>
      <div class="item-cpm" style="width: 100%;">
        <button class="btn btn-def" @click="showPopupLoad">显示加载弹窗</button>
        <button class="btn btn-def" @click="showPopupToast">显示toast弹窗</button>
        <button class="btn btn-def" @click="showPopupConfirm">显示confirm弹窗</button>
        <button class="btn btn-def" @click="showPopupPrompt">显示prompt弹窗</button>
        <cpm-PopupToast v-bind="popupLoadConfig"></cpm-PopupToast>
        <cpm-PopupToast v-bind="popupToastConfig"></cpm-PopupToast>
        <cpm-PopupConfirm v-bind="PopupConfirmConfig" @callback="confirmCallback">
          <template v-slot:content>{{PopupConfirmConfig.msg}}</template>
        </cpm-PopupConfirm>
        <cpm-PopupPrompt v-bind="PopupPromptConfig" @callback="promptCallback"></cpm-PopupPrompt>
      </div>
    </div>
  </div>
</template>

<script>
import { TableList, PopupToast, PopupConfirm, PopupPrompt } from 'littlerobot_base_ui';
import CustomSelect from '@/components/customSelect.vue';
import { ajaxGetDataList } from '@/ajax.js';
import '@/mock.js';

export default {
  name: 'FormListPage',
  components: {
    'cpmCustomSelect': CustomSelect,
    'cpmTableList': TableList,
    'cpmPopupToast': PopupToast,
    'cpmPopupConfirm': PopupConfirm,
    'cpmPopupPrompt': PopupPrompt
  },
  data () {
    return {
      // select组件配置
      selectConfig: {
        selectedItem: { key: 0, value: '请选择项目' },
        showSelect: false,
        dataArr: [
          {
            key: 1,
            value: '选择项一'
          },
          {
            key: 2,
            value: '选择项二'
          },
          {
            key: 3,
            value: '选择项三'
          },
          {
            key: 4,
            value: '选择项四'
          },
          {
            key: 5,
            value: '选择项五'
          },
          {
            key: 6,
            value: '选择项六'
          },
          {
            key: 7,
            value: '选择项七'
          },
          {
            key: 8,
            value: '选择项八'
          }
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
      },
      popupLoadConfig: {
        msg: '加载中...',
        direction: 'vr', // hr表示水平方向，vr表示垂直方向
        duration: 3000,
        type: 'loading'
      },
      popupToastConfig: {
        msg: '依赖包完成',
        direction: 'vr', // hr表示水平方向，vr表示垂直方向
        duration: 3000,
        type: 'success'
      },
      PopupConfirmConfig: {
        show: false,
        title: '提示',
        msg: '您已经成功引入自定义的弹窗组件了吗？'
      },
      PopupPromptConfig: {
        show: false,
        title: '输入信息',
        inputType: 'password'
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
            {
              theme: 'info',
              text: '详情'
            },
            {
              theme: 'def',
              text: '编辑'
            },
            {
              theme: 'del',
              text: '删除'
            }
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
    },

    showPopupLoad: function () {
      let _this = this;

      _this.$eventbus.$emit('toast', _this.popupLoadConfig);
    },

    showPopupToast: function () {
      this.$eventbus.$emit('toast', this.popupToastConfig);
    },

    showPopupConfirm: function () {
      this.PopupConfirmConfig.show = true;
    },

    confirmCallback: function (data) {
      this.PopupConfirmConfig.show = false;

      if (data.index === 0) {
        this.popupToastConfig.msg = '更新成功';
        this.$eventbus.$emit('toast', this.popupToastConfig);
      }
    },

    showPopupPrompt: function () {
      this.PopupPromptConfig.show = true;
    },

    promptCallback: function (data) {
      this.PopupPromptConfig.show = false;
      if (data.index === 0) {
        this.popupToastConfig.msg = '您输入的内容是：' + data.text;
        this.popupToastConfig.type = 'info';
        this.$eventbus.$emit('toast', this.popupToastConfig);
      }
    }
  }
};
</script>

<style>
.home .table-viewer .table th:nth-last-of-type(2),
.home .table-viewer .table td:nth-last-of-type(2){
  width: 230px;
}
.home .table-viewer .page-bar .page-list li{
  min-width: 24px;
}
</style>
<style lang="scss" scoped>
  @import '../../node_modules/littlerobot_base_ui/lib/littlerobot_base_ui.css';

  .form-list-page-wrap{
    width: 100%;
    padding: 20px 50px;
    background: #ffffff;
  }
  .item-wrap{
    width: 1200px;
    display: block;
    margin: 20px auto;

    .item-title{
      font-size: 16px;
      color: #666666;
      text-align: left;
      margin-bottom: 20px;

      span{
        background: #badbfb;
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 2px;
        display: block;
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
</style>
