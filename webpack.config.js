module.exports = {
    resolve: {
        extensions: ['','.js','.jsx']
    },
    entry: {
        app: ['./src/index.jsx']
    },
    output:{
        filename: 'app.js',
        path: './build',
        publicPath: '/'
    },
    devServer: {
        host:'0.0.0.0',
        port: 8080,
        inLine: true 
    },
    module: {
        loaders: [
            { test: /(\.js|.jsx)$/,exclude: /node_modules/,loader: 'babel'},
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
        
            }
        ]
    }, 
}