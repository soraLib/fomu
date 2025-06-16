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
    'vue/no-setup-props-reactivity-loss': 'warn',
    'vue/no-deprecated-functional-template': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-prop-types': 'off',
    'no-throw-literal': 'off',
    'no-console': 'warn',
    'unused-imports/no-unused-vars': 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['#__PURE__'] }],
    'node/no-callback-literal': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'node/prefer-global/process': 'off',
    'ts/no-use-before-define': 'off',
    'ts/ban-types': 'off',
    'ts/no-namespace': 'warn',
    'ts/unified-signatures': 'off',
    'ts/no-unsafe-function-type': 'off',
    'ts/no-dynamic-delete': 'off',
  },
})
