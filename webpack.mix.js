const mix = require('laravel-mix');

const src = 'resources/',
    public = 'public/';

const folder = {
    src: {
        font: src + 'fonts',
        image: src + 'images',
        css: src + 'css/',
        js: src + 'js/',
    },
    public: {
        font: public + 'fonts',
        image: public + 'images',
        css: public + 'css/',
        js: public + 'js/'
    }
};

mix.copyDirectory(folder.src.font, folder.public.font)
    .copyDirectory(folder.src.image, folder.public.image);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    folder.src.css + 'font-awesome.min.css',
], folder.public.css + 'font-awesome.min.css');

mix.styles([
    folder.src.css + 'bootstrap.min.css',
], folder.public.css + 'bootstrap.min.css');

mix.styles([
    folder.src.css + 'app.css',
], folder.public.css + 'app.css');

mix.styles([
    folder.src.css + 'animate.css',
], folder.public.css + 'animate.css');

mix.styles([
    folder.src.css + 'prettyPhoto.css',
], folder.public.css + 'prettyPhoto.css');

mix.styles([
    folder.src.css + 'price-range.css',
], folder.public.css + 'price-range.css');

mix.styles([
    folder.src.css + 'responsive.css',
], folder.public.css + 'responsive.css');

mix.js([
    folder.src.js + 'app.js',
], folder.public.js).version();

// mix.js([
//     folder.src.js + 'frontend.js',
//     // folder.src.js + 'common/jquery.prettyPhoto.js'
// ], folder.public.js).version();

// mix.js([
//     folder.src.js + 'common/bootstrap.min.js',
//     // folder.src.js + 'common/jquery.prettyPhoto.js'
// ], folder.public.js).version();


mix.js([
    folder.src.js + 'common/jquery.scrollUp.min.js',
], folder.public.js).version();

// mix.js([
//     folder.src.js + 'common/jquery.prettyPhoto.js',
// ], folder.public.js).version();

mix.js([
    folder.src.js + 'common/price-range.js',
], folder.public.js).version();



