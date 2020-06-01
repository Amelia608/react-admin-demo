## antd 按需加载 自定义主题
## 步骤
## 1、在项目的根目录下创建config-overrides.js文件
## 2、安装 babel-plugin-import  (yarn add babel-plugin-import -D)
## 3、安装 react-app-rewired (yarn add react-app-rewired customize-cra -D)
## 配置config-overrides.js 文件
const { override, fixBabelImports ,addLessLoader} = require('customize-cra');


module.exports = override(
  //针对antd实现按需打包：根据import来打包（使用babel-plugin-import）
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,//自动打包相关的样式
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars:{
      "@primary-color":"#1DA57A"
    }
  })
 );
## 操作中可能会报less相关的错误  根据提示安装了less、less-loader还是报错，报错信息如下
 ValidationError: Invalid options object. Less Loader has been initialized using an options object that does not match the API schema. 

## 解决办法
## 1、yarn remove less-loader
## 2、yarn add less-loader@5.0.0