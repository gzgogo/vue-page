module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            options: {
                //可配置为布尔值，字符串或对象。如果设置为字符串，则为浏览器打开的地址。对象设置示例如下：
                /*
                {
                    target: 'http://localhost:8000', // target url to open, 目标路径
                    appName: 'chrome', // name of the app that opens, ie: open, start, xdg-open，自动启动的应用名称, 比如你的浏览器：chrome
                    callback: function() {} // called when the app has opened
                }
                */
                appName: 'chrome', //自动启动chrome展示页面
                open: true, //自动打开网页

                //静态文件服务器标识符
                //Set the option livereload to true to enable on the
                //default port 35729 or set to a custom port: livereload: 1337
                //要想实现自动刷新，必须设置此选项，可设置为true，35729或其他数字
                //livereload: true,  //等价于livereload: 35729
                livereload: 35729,

                // Change this to '0.0.0.0' to access the server from outside
                // 默认为 '0.0.0.0'，表示可以从任何网络地址来访问
                // 可配置为本机某个 IP，localhost 或域名
                hostname: 'localhost'
            },
            server: {
                options: {
                    port: 6060,
                    base: './'
                }
            }
        },

        watch: {
            livereload: {
                options: {
                    //Set to true or set livereload: 1337 to a port number to
                    //enable live reloading. Default and recommended port is 35729.
                    //livereload: true //等价于livereload: 35729
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [ //下面文件的改变就会实时刷新网页
                    './index.html',
                    './index.css',
                    './index.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default',['connect','watch']);
};