module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                // tell webpack to use babel for all *.js and *.jsx files
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
