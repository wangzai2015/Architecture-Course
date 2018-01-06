//webpack.config.js
var webpack = require('webpack');//����Webpackģ�鹩���ǵ��ã�����ֻ��ʹ��ES5�﷨��ʹ��ES6�﷨�ᱨ��

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()//��ģ���滻���
    ],

    devServer: {
        contentBase: './build',
        //colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8080,
        //process: true
    }
};