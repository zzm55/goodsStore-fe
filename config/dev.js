/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    hot:true
  },
  h5: {},
  config :{
    plugins: [
      '@tarojs/plugin-react-devtools'
    ],
    enable: true
    // ...
  }
}


