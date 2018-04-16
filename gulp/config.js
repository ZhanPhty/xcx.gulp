var src = './';
var srcAssets = './assets'; //wxss资源-源代码
// var developAssets = '../weiChat-CRM/assets'; //wxss资源-生产代码
var developAssets = '../xcx_mall/assets'; //wxss资源-生产代码

module.exports = {
    styles: {
        src: srcAssets + '/css/**/*.{wxss,css}',
        dest: developAssets + '/styles',
        options: {
            precss: {},
            autoprefixer: {
                browsers: [
                    'iOS >= 8',
                    'Android >= 4.1'
                ],
                cascade: true,
                remove: true
            },
            cleancss: {
                advanced: false, //是否开启高级优化（合并选择器等）
                compatibility: 'ie8', //保留ie8兼容写法
                keepBreaks: false, //是否保留换行
                keepSpecialComments: '*' //保留所有特殊前缀
            },
            mqpacker: {}
        }
    },
    sass: {
        src: srcAssets + '/sass/**/*.{wxss,scss}',
        dest: srcAssets + '/css',
        options: {
            outputstyle: {
                outputStyle: 'expanded'
            }
        }
    },
    less: {
        src: srcAssets + '/less/**/weui.{wxss,less}', // 仅编译框架样式
        dest: srcAssets + '/css'
    },
    images: {
        src: srcAssets + '/images/**/*',
        dest: developAssets + '/images',
        optimize: {
            src: developAssets + '/images/**/*.{jpg,jpeg,png,gif}',
            dest: developAssets + '/',
            options: {
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }
        }
    },
    base64: {
        src: developAssets + '/**/*.{wxss,css}',
        dest: developAssets + '/',
        options: {
            extensions: ['svg', 'png', /\.jpg#datauri$/i, /\.svg#iconfont$/i],
            exclude: [/\.server\.(com|net|cn)\/dynamic\//, 'mgl-logo', 'favicon'],
            maxImageSize: 100 * 1024, // bytes
            debug: false
        }
    },
    watch: {
        sass: srcAssets + '/sass/**/*.{wxss,scss}',
        less: srcAssets + '/less/**/*.{wxss,less}',
        styles: srcAssets + '/css/**/*.css',
        base64: srcAssets + '/**/*.css',
        images: srcAssets + '/images/**/*'
    },
    pkg: {
        name: 'gulp-wx',
        description: 'gulp Bulid Project (http://www.uizph.com) by：ZhanPhty',
        version: '1.0.0',
        link: 'http://www.uizph.com',
        license: 'MIT'
    }
};
