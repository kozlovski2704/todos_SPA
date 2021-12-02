const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const config = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: ''
    },

    module: {
        rules: [
            //babel
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"]
                    }
                }
            },



            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.MODE==="development" ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: process.env.CSS_PATH,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },

            //css
            // {
            //     test: /\.css$/i,
            //     exclude: /(node_modules|bower_components)/,
            //     use: [{
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //             publicPath: '/css/',
            //         },
            //     }, "css-loader"], //"style-loader"
            // },
            // // pre-processor (scss|sass)
            // {
            //     test: /\.(scss|sass)$/i,
            //     exclude: /(node_modules|bower_components)/,
            //     use: ["css-loader", "sass-loader"],
            // },

            // html loader (static html )
            {
                test: /\.html$/i,
                exclude: /(node_modules|bower_components)/,
                use: ["html-loader"],
            },



            {
                test: /\.(eot|woff|ttf)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    outputPath: 'fonts',
                    name : "[contenthash].[ext]"
                }
            },


            {
                test: /\.(jpg|png|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    outputPath: 'images',
                    publicPath: "/images/",
                    name : "[contenthash].[ext]"
                }
            },


            {
                test: /\.css$/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    outputPath: 'css',
                    name : "some.css"
                }
            },
        ]
    },




    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },

    devtool: process.env.MODE==="development" ? "eval" : false,
    mode: process.env.MODE==="development" ? "development" : "production",
    watch: process.env.MODE==="development" ? true : false,
    watchOptions: {
        aggregateTimeout: 600
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template : "./src/html/index.html",
            filename: "index.html"
        }),



        new webpack.ProvidePlugin({
            axios : 'axios'
            //React : 'react'
        }),


        new MiniCssExtractPlugin({
            filename: "css/app.css", // relative to output.path
        })
    ],

    resolve: {
        alias: {
            "@images": path.resolve(__dirname, 'src/static/images/'),
            "@static": path.resolve(__dirname, 'src/static/'),
            "@elems": path.resolve(__dirname, 'src/elements/'),
            "@comp": path.resolve(__dirname, 'src/components/'),
            "@pages": path.resolve(__dirname, 'src/pages/'),
            "@redux": path.resolve(__dirname, 'src/redux/')
        }
    }
}

module.exports = config;