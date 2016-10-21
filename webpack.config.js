const webpack = require('webpack');

module.exports = {
    //*************************************************
    //     E N T R Y   P O I N T S
    //*************************************************
    entry: [
        // use `script!` to make script files pacakges for webpack
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            // takes in one key value arguemet
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    //*************************************************
    //   T O   B E  R E S O L V E D  F I L E S
    //*************************************************
    resolve: {
        root: __dirname,//variable available in node.js by default
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.css'
        },//when updating webpack aliases restart webpack
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};//basics of webpack config file
