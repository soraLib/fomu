import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  vue: true,

  ignores: ['coverage', 'docs'],

  rules: {
    'node/prefer-global/process': 'off',

    'no-throw-literal': 'off',
    'no-console': 'warn',
    'unused-imports/no-unused-vars': 'off',

    'ts/no-use-before-define': 'off',
    'ts/no-namespace': 'warn',

    'vue/no-setup-props-reactivity-loss': 'warn',
  },
})
