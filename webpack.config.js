/*
* @Author: Living Jiang
* @Date:   2017-02-19 16:08:33
* @Last Modified by:   Living Jiang
* @Last Modified time: 2017-02-19 20:01:17
*/

module.exports = {
    context: __dirname,//上下文
    entry: './index.js',//入口文件
    output: {//输出文件
      path: __dirname + '/public',
      filename: './bundle.js'
    },
    module: {
      loaders: [//加载器
       {test: /\.html$/, loader: 'raw-loader'},
       {test: /\.css$/, loader: 'style!css'},
       {test: /\.scss$/, loader: 'style!css!sass'},
       {test: /\.(png|jpg|ttf)$/, loader: 'url?limit=8192'}
     ]
   }
 };