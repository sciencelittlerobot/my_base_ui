<template>
  <div class="common-css-wrap">
    <ul class="list-viewer">
      <li class="list-item">
        <p class="title none-user-select"><i class="title-mark"></i>不让文本被选中，你选中不到我！！！</p>
        <pre>
          -webkit-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;</pre>
      </li>

      <li class="list-item">
        <p class="title text-over-line"><i class="title-mark"></i>单行文本溢出省略号，一大群测试文字来袭，测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
        <pre>
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;</pre>
        <p class="notes">注：该标签的width如果不是100%，则需要设置其width，否则可能无效。</p>
      </li>

      <li class="list-item">
        <p class="title text-over-multiline"><i class="title-mark"></i>多行文本溢出省略号，一大群测试文字来袭，测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
        <pre>
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;</pre>
        <p class="notes">注：该标签的width如果不是100%，则需要设置其width，否则可能无效。</p>
      </li>

      <li class="list-item">
        <p class="title"><i class="title-mark"></i>三角实心箭头，快来看，三角实心箭头在这 >>>>>> <i class="icon-solid-arrow"></i></p>
        <pre>
          .icon-solid-arrow{
            width: 20px;
            height: 20px;
            display: inline-block;
            border-bottom: 10px transparent dashed;
            border-left: 10px transparent dashed;
            border-right: 10px transparent dashed;
            border-top: 10px solid #999999;
          }

          &lt;i class="icon-solid-arrow"&gt;&lt;/i&gt;
        </pre>
        <p class="notes">注：根据箭头方向来调整对应border上面的参数。</p>
      </li>

      <li class="list-item">
        <p class="title"><i class="title-mark"></i>三角空心箭头，快来看，三角空心箭头在这 >>>>>> <i class="icon-hollow-arrow"></i></p>
        <pre>
          .icon-hollow-arrow{
            width: 20px;
            height: 20px;
            display: inline-block;
            position: relative;
            overflow: hidden;

            &amp;::before,
            &amp;::after{
              width: 0;
              height: 0;
              content: '';
              display: block;
              position: absolute;
              border-bottom: 10px transparent dashed;
              border-left: 10px transparent dashed;
              border-right: 10px transparent dashed;
            }

            &amp;::before{
              border-top: 10px solid #999999;
              left: 0;
              top: 0;
            }

            &amp;::after{
              border-top: 10px solid #ffffff;
              left: 0;
              top: -1px;
            }
          }

          &lt;i class="icon-hollow-arrow"&gt;&lt;/i&gt;
        </pre>
        <p class="notes">注：根据箭头方向来调整对应border上面的参数。</p>
      </li>

      <li class="list-item">
        <p class="title"><i class="title-mark"></i>水滴形状，快看！它在这，有点丑的水滴 >>>>>> <i class="icon-water-drop"><span class="text">A</span><span class="water-drop"></span></i></p>
        <pre>
          .icon-water-drop{
            width: 20px;
            height: 20px;
            display: inline-block;
            position: relative;

            .water-drop,
            .text{
              width: 20px;
              height: 20px;
              display: block;
              position: relative;
              color: #fff;
              text-align: center;
              font-size: 14px;
              line-height: 20px;
              font-style: normal;
            }

            .text {
              position: absolute;
              z-index: 100;
            }

            .water-drop:before {
              content: '';
              width: 20px;
              height: 20px;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
              background: #BCBCBC;
              border-radius: 20px;
            }

            .water-drop:after {
              content: '';
              height: 0;
              width: 0;
              border: 8px transparent solid;
              display: block;
              position: absolute;
              top: 2px;
              left: 15px;
              border-right: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-left: 8px solid #BCBCBC;
            }
          }

          &lt;i class="icon-water-drop"&gt;&lt;span class="text"&gt;A&lt;/span&gt;&lt;span class="water-drop"&gt;&lt;/span&gt;&lt;/i&gt;
        </pre>
        <p class="notes"></p>
      </li>

      <li class="list-item">
        <p class="title"><i class="title-mark"></i>input的复选框checkbox的样式修改，他在这！！！ >>>>>> <span class="new-checkbox"><input type="checkbox" id="newCheckbox" /><label for="newCheckbox">选项</label></span></p>
        <pre>
          .new-checkbox{
            height: 18px;
            line-height: 18px;
            display: inline-flex;
            align-items: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;

            input[type="checkbox"]{
              width: 17px;
              height: 17px;
              position: relative;
              border-radius: 2px;
              cursor: pointer;
              margin-right: 8px;

              &amp;::before {
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

              &amp;:checked::before{
                content: "\2713";
                border-color: #298fff;
                color: #298fff;
                font-weight: bold;
              }
            }

            label{
              height: 18px;
              display: inline-block;
              font-size: 14px;
              cursor: pointer;
            }
          }

          &lt;span class="new-checkbox"&gt;&lt;input type="checkbox" id="newCheckbox" /&gt;&lt;label for="newCheckbox"&gt;选项&lt;/label&gt;&lt;/span&gt;
        </pre>
        <p class="notes">注：因为选中项点击快的快，文字会被选中，让文字不被选中，体验效果更好哦。</p>
      </li>

      <li class="list-item">
        <p class="title"><i class="title-mark"></i>input的复选框radio的样式修改，他在这！！！ >>>>>> <span class="new-radio"><input type="radio" id="newRadio1" name="new_radio" checked /><label for="newRadio1">选项一</label></span><span class="new-radio"><input type="radio" id="newRadio2" name="new_radio" /><label for="newRadio2">选项二</label></span></p>
        <pre>
          .new-radio{
            height: 18px;
            line-height: 18px;
            display: inline-flex;
            margin-right: 20px;
            align-items: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;

            input[type="radio"]{
              width: 17px;
              height: 17px;
              appearance: none;
              position: relative;
              cursor: pointer;
              margin-right: 8px;

              &amp;::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 16px;
                height: 16px;
                line-height: 17px;
                text-align: center;
                font-size: 16px;
                background-color: #ffffff;
                border-radius: 50%;
                border: 1px solid #dddddd;
              }

              &amp;:checked::before{
                content: "";
                background-color: #298fff;
                border-color: #298fff;
              }

              &amp;:checked::after{
                content: '';
                width: 10px;
                height: 5px;
                border: 2px solid white;
                border-top: transparent;
                border-right: transparent;
                text-align: center;
                display: block;
                position: absolute;
                top: 4px;
                left: 3px;
                vertical-align: middle;
                transform: rotate(-45deg);
              }
            }

            label{
              height: 18px;
              display: inline-block;
              font-size: 14px;
              cursor: pointer;
            }
          }

          &lt;span class="new-radio"&gt;&lt;input type="radio" id="newRadio1" name="new_radio" checked /&gt;&lt;label for="newRadio1"&gt;选项一&lt;/label&gt;&lt;/span&gt;
          &lt;span class="new-radio"&gt;&lt;input type="radio" id="newRadio2" name="new_radio" /&gt;&lt;label for="newRadio2"&gt;选项二&lt;/label&gt;&lt;/span&gt;
        </pre>
        <p class="notes">注：因为选中项点击快的快，文字会被选中，让文字不被选中，体验效果更好哦。原来打钩也可以写的呀，孤陋寡闻了。。。</p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'CommonCss',
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
  .common-css-wrap{
    width: 100%;
    display: block;

    .list-viewer{
      width: 100%;
      display: block;
      list-style: outside;

      .list-item{
        width: 100%;
        display: block;
        padding: 10px 0;
      }

      .title{
        width: 100%;
        text-align: left;
        color: #585858;
        font-size: 16px;
        min-height: 22px;
        line-height: 22px;

        &.none-user-select{
          -webkit-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }

        &.text-over-line{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &.text-over-multiline{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        &.content-center{
          display: flex;
          align-items: center;
        }

        .title-mark{
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #dddddd;
          display: inline-block;
          margin-right: 20px;
        }

        .icon-solid-arrow{
          width: 20px;
          height: 20px;
          display: inline-block;
          border-bottom: 10px transparent dashed;
          border-left: 10px transparent dashed;
          border-right: 10px transparent dashed;
          border-top: 10px solid #999999;
        }

        .icon-hollow-arrow{
          width: 20px;
          height: 20px;
          display: inline-block;
          position: relative;
          overflow: hidden;

          &::before,
          &::after{
            width: 0;
            height: 0;
            content: '';
            display: block;
            position: absolute;
            border-bottom: 10px transparent dashed;
            border-left: 10px transparent dashed;
            border-right: 10px transparent dashed;
          }

          &::before{
            border-top: 10px solid #999999;
            left: 0;
            top: 0;
          }

          &::after{
            border-top: 10px solid #ffffff;
            left: 0;
            top: -1px;
          }
        }

        .icon-water-drop{
          width: 20px;
          height: 20px;
          display: inline-block;
          position: relative;

          .water-drop,
          .text{
            width: 20px;
            height: 20px;
            display: block;
            position: relative;
            color: #fff;
            text-align: center;
            font-size: 14px;
            line-height: 20px;
            font-style: normal;
          }

          .text {
            position: absolute;
            z-index: 100;
          }

          .water-drop:before {
            content: '';
            width: 20px;
            height: 20px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background: #BCBCBC;
            border-radius: 20px;
          }

          .water-drop:after {
            content: '';
            height: 0;
            width: 0;
            border: 8px transparent solid;
            display: block;
            position: absolute;
            top: 2px;
            left: 15px;
            border-right: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #BCBCBC;
          }
        }

        .new-checkbox{
          height: 18px;
          line-height: 18px;
          display: inline-flex;
          align-items: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;

          input[type="checkbox"]{
            width: 17px;
            height: 17px;
            position: relative;
            border-radius: 2px;
            cursor: pointer;
            margin-right: 8px;

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

          label{
            height: 18px;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
          }
        }

        .new-radio{
          height: 18px;
          line-height: 18px;
          display: inline-flex;
          margin-right: 20px;
          align-items: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;

          input[type="radio"]{
            width: 17px;
            height: 17px;
            appearance: none;
            position: relative;
            cursor: pointer;
            margin-right: 8px;

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 16px;
              height: 16px;
              line-height: 17px;
              text-align: center;
              font-size: 16px;
              background-color: #ffffff;
              border-radius: 50%;
              border: 1px solid #dddddd;
            }

            &:checked::before{
              content: "";
              background-color: #298fff;
              border-color: #298fff;
            }

            &:checked::after{
              content: '';
              width: 10px;
              height: 5px;
              border: 2px solid white;
              border-top: transparent;
              border-right: transparent;
              text-align: center;
              display: block;
              position: absolute;
              top: 4px;
              left: 3px;
              vertical-align: middle;
              transform: rotate(-45deg);
            }
          }

          label{
            height: 18px;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }

      pre{
        text-align: left;
        font-size: 15px;
        border: 5px solid #dddddd;
        border-radius: 4px;
        margin-top: 15px;
        padding: 10px 15px;
        background: #f5f5f5;
        line-height: 20px;
      }
      
      .notes{
        width: 100%;
        margin-top: 7px;
        font-size: 12px;
        text-align: left;
      }
    }
  }

  /*水滴形状图*/
      
      /*水滴形状图*/
</style>