import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
//! Handlebars
// import handlebars from 'vite-plugin-handlebars';
// import { resolve } from 'path';

export default defineConfig({
  base: '/be-different/', //! 👈 ВАЖЛИВО: вкажіть базу
  root: 'src',
  publicDir: '../public', //! ❗️❗️❗️ ВАЖЛИВО: для завнтаження зображень на GitHub
  build: {
    rollupOptions: {
      //! ❌ Це шукає тільки HTML-файли верхнього рівня src/, і не включає HTML-файли нижнього рівня
      // input: glob.sync('./src/*.html'),
      //! ✅ Це шукає ВСІ HTML-файли, включаючи HTML-файли нижнього рівня
      input: glob.sync('./src/**/*.html'),
    },
    outDir: '../dist',
  },
  // plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    //! Handlebars
    // handlebars({
    //   partialDirectory: resolve(__dirname, 'src/handlebars'),
    //   include: '**/*.hbs'
    // })
  ],
});

