/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  ignoreFiles: ["**/*.ts", "**/*.(cj|j)s"],
  plugins: [
    'stylelint-use-logical'
  ],
  rules: {
    'block-no-empty': true,
    'csstools/use-logical': 'always'
  }
};
