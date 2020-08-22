module.exports = {
    // 配置vant-ui
    presets: [
        '@vue/app'
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: (name) => `${name}/style/less`,
        }, 'vant']
    ]

}