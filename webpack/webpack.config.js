const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development': 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
    
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtractPlugin.loader,
                // 'style-loader', //adc css a dom injetando a tag style
                'css-loader', // interpreta @import, url()
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }
}