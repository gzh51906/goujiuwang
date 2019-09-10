# Vue项目之购酒网

## 上线

```
    项目官网：http://m.gjw.com/index.html
    WebApp上线地址：http://47.106.178.206:5050/
    后台管理系统地址：http://47.106.178.206:5051/（无账户密码，直接登录）
    github地址：https://github.com/gzh51906/goujiuwang.git
```

## 团队
```
    组长：熊小超
    组员：何新建、袁素兰

    负责模块说明
    熊小超：统筹项目 配置环境 模块开发 模块划分 构建node服务器 首页开发 
    何新建：主要负责注册登录,购物车以及我的模块的实现。还有是负责登录、注册以及购物车后台接口和路由拦截。主要用了element-ui框架、vuex、vue-router、利用axios发送网络请求。
    袁素兰：主要负责分类ui、列表页ui、详情页ui、搜索页面ui、加入购物车功能以及对应的后台接口的实现。还有后台管理系统的UI以及项目上线。主要用了element-ui框架、ant-design-vue框架、vuex、vue-router、利用axios发送网络请求。
```

## 项目目录
```
│  .gitignore
│  babel.config.js
│  datalist.text
│  itemlist.text
│  list.txt
│  package-lock.json
│  package.json
│  README.md
│  sort.text
│  test.txt
│  
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.js
    │  新建文本文档.txt
    │  
    ├─api
    │  │  package-lock.json
    │  │  package.json
    │  │  yarn.lock
    │  │  
    │  └─src
    │      │  config.json
    │      │  index.html
    │      │  server.js
    │      │  
    │      ├─db
    │      │      mongo.js
    │      │      
    │      ├─router
    │      │      cart.js
    │      │      home.js
    │      │      index.js
    │      │      sort.js
    │      │      user.js
    │      │      
    │      └─utils
    │              index.js
    │              token.js
    │              
    ├─assets
    │  │  062060dbf7eb4a559cb4b246c2d8c72e_1.jpg
    │  │  130aae1e17a84b66af3592e04b7bbc71_1.jpg
    │  │  1cf950b6d2a24c19995c6fc7ad965038_1.jpg
    │  │  226326af03f04bac8421669afccac597_1.jpg
    │  │  28fae5969a2047698e149c4c8058ccd9_1.jpg
    │  │  472d0547a9c44a4488d04dc5eabbf2e1_1.jpg
    │  │  66076ce9709a47cdaaef0c8128c6d392_1.jpg
    │  │  68f97f4619a94834b0d10b92d1db37d5_1.jpg
    │  │  8223430ac116464b8dc4d82f81bd3cfb_1.jpg
    │  │  a139ef060f8043a5aea12fa5a55f3680_1.jpg
    │  │  bag.png
    │  │  cb2a83e93b5a46c493d01aceb5f3c4ab_1.jpg
    │  │  e32fb10d420d443688d028f00be09c78_1.jpg
    │  │  icon_collection.png
    │  │  icon_foot_print.png
    │  │  kfrx.png
    │  │  lp_01.jpg
    │  │  lp_02.jpg
    │  │  lp_03.jpg
    │  │  lp_04.jpg
    │  │  lp_05.jpg
    │  │  lp_06.jpg
    │  │  lp_07.jpg
    │  │  lp_08.jpg
    │  │  lp_09.jpg
    │  │  lp_10.jpg
    │  │  lp_11.jpg
    │  │  lp_12.jpg
    │  │  lp_13.jpg
    │  │  lp_14.jpg
    │  │  lp_15.jpg
    │  │  lp_16.jpg
    │  │  lp_17.jpg
    │  │  wd_01dfk.png
    │  │  wd_02dfh.png
    │  │  wd_03dsh.png
    │  │  wd_04dpj.png
    │  │  
    │  └─img
    │          023c3d19394c47428e859e28c6ffeb70.jpg
    │          07223d7582de4438875efedac3d9cd90.jpg
    │          130aae1e17a84b66af3592e04b7bbc71_2.jpg
    │          18abc1ee1b0f45a89d136bb188c44fb9_2.jpg
    │          1bfe984a98ac4a728ca1fc56058e93b3_2.jpg
    │          1ffddd42cd1a4796b8b11652896a9de5.jpg
    │          229cbdd4a909417ba6218c7e21b48131.jpg
    │          28fae5969a2047698e149c4c8058ccd9_2.jpg
    │          2a4c5c46055a4c47a0c9eca9c88e9c2b.jpg
    │          30130a1219984c949512f83eb52db1eb_2.jpg
    │          3063c35de527435495834ad5a0f78173.jpg
    │          3105732755f8468b85dcab789173906c.jpg
    │          34c90a46f767478897208adca7681ae4.jpg
    │          34e13c9c1da64605a2fc75817b633e96.jpg
    │          37d8820d8748489dac15ba96ab2a1f7e_2.jpg
    │          38f8d03e3cb2484e862bd1b45e40a96c.jpg
    │          3b4fd29e71f7464fb9ee7ba02d207aee_2.jpg
    │          3f257a2d80cb49e5a1e65340201329f0.jpg
    │          418ff41a27584913a07cb1645059bd89_2.jpg
    │          4dcf073a9c5c4c8594227c716b0084b0_2.jpg
    │          54e9e4264dc64688b4f527a155c5fa66_2.jpg
    │          5f1891411428456a8124d0ab59088329.jpg
    │          60d38826bf724cf5af4e13ad09b904f2.jpg
    │          68f97f4619a94834b0d10b92d1db37d5.jpg
    │          6a4dcbb3d64247c0afc76c4cafcf8b6d_2.jpg
    │          6d54fc527f404267ac4cc4d722331125.jpg
    │          797e628763c5433b803cf06e5b492c21_2.jpg
    │          7eac9783820a4e48af67f1ed91d91673.jpg
    │          8bf04e420aa64ccfbb9ae530f82ddd7d.jpg
    │          8e9397b74cc04da1bc9051184f2f8c67.jpg
    │          8fccd4a2c00947869641bd32c0a4c42f.jpg
    │          91b5305bbca94bc4b73f82cbb455b288_2.jpg
    │          91c7294745134d2ca597ca8abd4ca694.jpg
    │          97e2ca20ba574c14a99c3155d8f59791_2.jpg
    │          9ab33df7f6124d87a831704b7ffc545b_2.jpg
    │          9c1ea9c32bf4423bb60816212e87b02a.jpg
    │          9c4bdd5450eb4df8b43f50e6f088df66_2.jpg
    │          9c5f04f625314301b624167325fec3dd_2.jpg
    │          a139ef060f8043a5aea12fa5a55f3680_2.jpg
    │          a4b34eda8bc24782994a4d86cd2528ce.jpg
    │          a8da83fed83c44f2a7a9f64862cd6489.jpg
    │          ae148917f33049f3bc3b1d38a945ea56_2.jpg
    │          appdown0105.jpg
    │          b0041913b9844e519782312fa1c66118.jpg
    │          b01c5b4eccdd4d34a5c1feca7175a0d2_2.jpg
    │          b2810c4bc1fd403aaeeb0e271c13a389.jpg
    │          bce12f589920489c97d90d3353de2477_2.jpg
    │          c041433b4149416792f7ce1f90eb8470_2.jpg
    │          c7ee25ce88144ebe9f1c743c64df2000.jpg
    │          cb1c522ab008413a9eb9b69461c24b32_2.jpg
    │          e176bdc2c69b4fc090daf51e971d4a59_2.jpg
    │          ec5bb0b7732b44e48eda3de8fe2f4f1e.jpg
    │          f024d3dbf1db4127897360a0eb41b257_2.jpg
    │          fdfed8b0f2a24b76bd481c145a69f3ed.jpg
    │          hot.png
    │          
    ├─components
    │      benefits.vue
    │      cart.vue
    │      detail.vue
    │      goods.vue
    │      home.vue
    │      Login.vue
    │      mine.vue
    │      Reg.vue
    │      search.vue
    │      sort.vue
    │      
    ├─router
    │      index.js
    │      
    └─store
            cart.js
            common.js
            index.js

```
# myproject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
