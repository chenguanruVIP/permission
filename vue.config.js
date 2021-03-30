module.exports = {
    pages:{
        index:{
            entry: 'src/views/index/main.js',
            template: 'src/public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        system1:{
            entry: 'src/views/system1/main.js',
            template: 'src/public/system1.html',
            filename: 'system1.html',
            chunks: ['chunk-vendors', 'chunk-common', 'system1']
        },
        system2:{
            entry: 'src/views/system2/main.js',
            template: 'src/public/system2.html',
            filename: 'system2.html',
            chunks: ['chunk-vendors', 'chunk-common', 'system2']
        }
    }
}