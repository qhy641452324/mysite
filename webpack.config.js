var path = require('path')
var webpack = require('webpack')
const glob = require('glob')

let jslist = glob.sync('./jssrc/*.ts')
let entrylist = {}
jslist.forEach(v => {
  let name = path.basename(v, '.ts')
  entrylist[name] = v
})

module.exports = {
  // entry: {
  //     main: './jssrc/main.js'
  // },
  entry: entrylist,
  output: {
    path: path.resolve(__dirname, './static/js/'),
    filename: '[name].js'
  },

  module: //加载器配置
  {
    rules: [
      {
        test: /\.(html|ejs)$/,
        use: 'raw-loader'
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'fe_tsconfig.json'
          }
        },

      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  externals: {
    jquery: "jQuery",
    lodash: "_"
  },
  devtool: 'source-map',
  mode: 'development'
};