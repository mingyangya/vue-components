module.exports = {
  name: 'video-point',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/video-point/',
    },
  },
  site: {
    title: 'video-point',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'test-button',
            title: 'TestButton 按钮',
          }
        ],
      },
    ],
  },
};
