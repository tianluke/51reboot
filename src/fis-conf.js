// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

// 取消下面的注释设置打包规则
fis.config.set('pack', {
    // '/pkg/main.js': '**.js',
    // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
    // '/pkg/main.css': '**.css'
});
fis.config.set('modules.optimizer.html', 'html-minifier');
// 取消下面的注释可以开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.config.set('settings.optimizer.html-minifier', {
	minifyJS: true
});
