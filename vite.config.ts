import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import postcssLogical from 'postcss-logical';
import postcssNesting from 'postcss-nesting';
import postcssPrefixer from 'postcss-prefixer';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssLogical({
          // @ts-expect-error: looks like bugged types
          blockDirection: 'top-to-bottom',
          // @ts-expect-error: looks like bugged types
          inlineDirection: 'left-to-right',
        }),
        postcssNesting({
          edition: '2024-02',
        }),
        postcssPresetEnv({
          browsers: 'last 2 versions',
        }),
        postcssPrefixer({
          ignore: ['.visually-hidden'],
          prefix: 'dermodays-',
        }),
      ],
    },
  },
});
