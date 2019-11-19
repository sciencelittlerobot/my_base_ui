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
</style>