import {
    src,
    dest,
    parallel,
    series,
    watch
} from 'gulp';
// const path = require('path');
// const less = require('gulp-less');
// const minifyCSS = require('gulp-clean-css');
// const postcss = require('gulp-postcss');
// const prefixer = require('autoprefixer');
// const conct = require('gulp-concat');
// const del = require('del');
// const pugToHtml = require('gulp-pug');
// const browserSync = require('browser-sync').create();
// const sourcemap = require('gulp-sourcemaps');
// const img = require('gulp-imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const rename = require('gulp-rename');
// const plumber = require('gulp-plumber');
// const changed = require('gulp-changed');
// const svgSprite = require('gulp-svg-sprite');
// const svgmin = require('gulp-svgmin');
// const cheerio = require('gulp-cheerio');
// const replace = require('gulp-replace');
// const spritesmith = require('gulp.spritesmith');
// const webpack = require('webpack-stream');
// const log = require('fancy-log');
// const critical = require('critical').stream;
import { fileURLToPath } from 'url';
import path from 'path';
import less from 'gulp-less';
import minifyCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import prefixer from 'autoprefixer';
import conct from 'gulp-concat';
import { deleteSync as del } from 'del';
import pugToHtml from 'gulp-pug';
import browserSync from 'browser-sync';
import sourcemap from 'gulp-sourcemaps';
import img from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import changed, { compareContents } from 'gulp-changed';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import spritesmith from 'gulp.spritesmith';
import webpack from 'webpack-stream';
import log from 'fancy-log';
import { stream as critical } from 'critical';

const browserSyncInstance = browserSync.create();

// Get the __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const isDev = false;
const isProd = !isDev;

const webConfig = {
    entry: {
        'index': './app/js/index.min.js',
        'catalog': './app/js/catalog.min.js',
        'cart': './app/js/cart.min.js',
        'single': './app/js/single.min.js',
        'compare': './app/js/compare.min.js',
        'order': './app/js/order.min.js',
        'about': './app/js/about.min.js',
        'contacts': './app/js/contacts.min.js',
        'blog': './app/js/blog.min.js',
        'single-article': './app/js/single-article.min.js',
        'portfolio': './app/js/portfolio.min.js',
        'portfolio-single': './app/js/portfolio-single.min.js',
        'warranty-and-service': './app/js/warranty-and-service.min.js',
        'payment-and-delivery': './app/js/payment-and-delivery.min.js',
        'installation-center': './app/js/installation-center.min.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, ],
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-source-map' : false,
    externals: {
        moment: 'moment'
    }
};

const webConfig2 = {
    output: {
        filename: 'libs.min.js'
    },
    mode: isDev ? 'development' : 'production',
    //  externals: {
    //     moment: 'moment'
    // }
};

const plugin = [
    prefixer({
        overrideBrowserslist: ['> 0.01%']
    })

];

function compress() {
    return src('./app/testimg/**/*.*')

        .pipe(img({
                progressive: true,
                use: [imageminMozjpeg({
                        quality: 70
                    }),
                    pngquant()
                ],
                interlaced: true
            }

        ))

        .pipe(dest('./dist/testimg'));

}

function fonts() {
    return src('./app/fonts/**/*')
        .pipe(dest('./dist/fonts'))
        .pipe(browserSyncInstance.stream());

}

function css() {
    return src(['./app/less/**/main.less', './app/less/**/index.less'])
        .pipe(changed('./dist/css/', {
            extension: '.css',
            hasChanged: compareContents
        }))
        .pipe(sourcemap.init())
        // .pipe(conct('style.min.less'))
        .pipe(less({
            
        }))
        .pipe(minifyCSS({
            level: 2
        }))
        .pipe(postcss(plugin))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemap.write('./maps'))

        .pipe(dest('./dist/css/'))
        .pipe(browserSyncInstance.stream());
}

function scripts() {
    return src('./app/js/main.js', {
            allowEmpty: true
        })
        .pipe(changed('./dist/js', {
            extension: '.js',
            hasChanged: compareContents
        }))
        .pipe(plumber())
        .pipe(webpack(webConfig))
        .pipe(dest('./dist/js'))
        .pipe(browserSyncInstance.stream());

}

function libs() {
    return src('./app/libs/libs.js')
        .pipe(plumber())
        .pipe(webpack(webConfig2))
        .pipe(dest('./dist/js'))
        .pipe(browserSyncInstance.stream());

}

function libsCSS() {
    return src('./app/libsCSS/**/*.less')
        .pipe(sourcemap.init())
        .pipe(conct('libs.less'))
        .pipe(less())
        .pipe(minifyCSS({
            level: 2
        }))
        .pipe(postcss(plugin))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemap.write('./maps'))

        .pipe(dest('./dist/css/'))
        .pipe(browserSyncInstance.stream());

}

function images() {
    return src('./app/img/**/*.*')

        .pipe(img(

            [
                imageminMozjpeg({
                    quality: 70
                })
            ]

        ))

        .pipe(dest('./dist/img'))
        .pipe(browserSyncInstance.stream());

}

function sprites() {
    return src('./app/img/sprites/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                // $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(dest('./dist/img/sprites/svg'))
        .pipe(browserSyncInstance.stream());
}

function spritesPNG() {
    const spriteData = src('./app/img/sprites/png/*.png') // путь, откуда берем картинки для спрайта
        .pipe(plumber()) // plumber
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.less',
            cssFormat: 'less',
            algorithm: 'binary-tree',
            cssTemplate: './app/less/less.template.handlebars',
            cssVarMap: function (sprite) {
                sprite.name = 's-' + sprite.name
            }
        }));

    spriteData.img.pipe(dest('./dist/img/sprites/png')); // путь, куда сохраняем картинку
    spriteData.css.pipe(dest('./app/less')) // путь, куда сохраняем стили
        .pipe(browserSyncInstance.stream());
}

function pug() {
    return src('./app/*.pug')
        .pipe(changed('./dist', {
            extension: '.html',
            hasChanged: compareContents
        }))
        .pipe(plumber()) // plumber
        .pipe(pugToHtml({
            pretty: true,
            basedir: '/'
        }))
        .pipe(rename({
            dirname: ''
        }))

        .pipe(dest('./dist'))
        .pipe(browserSyncInstance.reload({
            stream: true
        }));
}

function criticalCss() {
    return src('dist/index.html')
        .pipe(critical({
            base: 'dist/',
            inline: false,
            css: ['dist/css/libs.min.css', 'dist/css/main.min.css']
        }))
        .on('error', function (err) {
            log.error(err.message);
        })
        .pipe(dest('dist/css/critical.css'));
}

function watching() {
    browserSyncInstance.init({
        server: {
            baseDir: "./dist"
        },
        https: {
            key: path.resolve(__dirname, "localhost-key.pem"),
            cert: path.resolve(__dirname, "localhost.pem"),
        },
        notify: false
    });
    watch('./app/less/**/*.less', css);
    watch('./app/js/**/*.js', scripts);
    watch('./app/libs/**/*.js', libs);
    watch(['./app/img/**/*', '!./app/img/sprites/**/*'], images);
    watch('./app/img/sprites/svg/*.svg', sprites);
    watch('./app/img/sprites/png/*.png', spritesPNG);
    watch('./app/libsCSS/**/*.less', libsCSS);
    watch('./app/fonts/**/*', fonts);
    watch('./app/**/*.pug', pug);
    watch('./dist/**/*.html').on('change', browserSyncInstance.reload);
}

function clean() {
    return del(['dist/*', '!dist/*.html']);
}

function build(){
    return series(clean,
        parallel(watch, css, scripts, images, libs, fonts, libsCSS, pug, sprites, spritesPNG, criticalCss)
    );
}

// module.exports.css = css;
// module.exports.compress = compress;
// module.exports.scripts = scripts;
// module.exports.libsCSS = libsCSS;
// module.exports.libs = libs;
// module.exports.images = images;
// module.exports.fonts = fonts;
// module.exports.pug = pug;
// module.exports.sprites = sprites;
// module.exports.spritesPNG = spritesPNG;
// module.exports.criticalCss = criticalCss;
// module.exports.watch = watching;
// module.exports.clean = clean;
// module.exports.build = series(clean,
//     parallel(watch, css, scripts, images, libs, fonts, libsCSS, pug, sprites, spritesPNG, criticalCss)
// );

export {
    css,
    compress,
    scripts,
    libsCSS,
    libs,
    images,
    fonts,
    pug,
    sprites,
    spritesPNG,
    criticalCss,
    watching as watch,
    clean,
    build
}