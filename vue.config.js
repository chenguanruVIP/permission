module.exports = {
    pages:{
        index:{
            // page 的入口
            entry: 'src/views/index/main.js',
            // 模板来源
            template: 'src/public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 提取出来的通用 chunk 和 vendor chunk。
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