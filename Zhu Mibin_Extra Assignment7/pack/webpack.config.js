const path = require('path');

module.exports={
    //入口文件
    entry:['./src/Font.js', './src/Image.js', './src/InputText.js', './src/PPT.js'],
    //出口文件
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    }
}
