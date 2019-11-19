import Mock from 'mockjs';

Mock.setup({
  // 表示响应时间介于 1000 和 3000 毫秒之间，默认值是'10-100'。
  timeout: '100-1000'
});

Mock.mock(/(\/testApi\/getDataList)/, {
  'msgCode': 200,
  'result': {
    'data|12': [
      {
        'colOne': '@cname()',
        'colTwo': '@name()',
        'colThree': '@cword(5, 20)',
        'colFour': '@word(5, 20)',
        'colFive': '@csentence()'
      }
    ],
    'totalSize': 200
  }
});
