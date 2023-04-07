module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        'parser': '@babel/eslint-parser',
    },
    'settings': {
        'import/resolver': {
          'node': {
            'paths': ['src'],
            'extensions': ['.js', '.ts', '.d.ts'],
          },
        },
      },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    plugins: ['vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'vue/valid-v-on': 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'space-before-function-paren': ['error', 'never'],
        'no-unused-vars': ['error', { 'args': 'after-used' }],
        'vue/html-indent': ['error', 2, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': [],
          }],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'vue/no-v-html': 'off',
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            'ignores': ['/^c1-/'],
            'registeredComponentsOnly': false,
        }],
        'vue/match-component-file-name': ['error', {
            'extensions': ['vue'],
            'shouldMatchCase': false,
        }],
        'import/no-absolute-path': 'error',
        'import/newline-after-import': 'error',
        'import/no-unresolved': ['error'],
    },
};
