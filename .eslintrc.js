module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    "plugin:vue/essential",
    'eslint:recommended',
    '@vue/typescript/recommended',
    "plugin:@typescript-eslint/recommended",
    '@vue/prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-typescript/recommended',
    ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  "plugins": [
    "vue"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': "off",
    '@typescript-eslint/no-unused-vars': "off",
    '@typescript-eslint/no-require-imports': "off",
    '@typescript-eslint/no-unused-expressions': "off",
    'vue/multi-word-component-names': "off",
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
  },
};
