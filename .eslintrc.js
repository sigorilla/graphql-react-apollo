module.exports = {
    extends: ['eslint:recommended', 'loris/es6', 'loris-react'],
    root: true,
    env: {
        node: true,
        es6: true,
        mocha: true,
        browser: true
    },
    plugins: ['react'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            es6: true
        }
    },
    rules: {
        camelcase: ['error', {properties: 'never'}],
        indent: ['error', 4, {SwitchCase: 1, MemberExpression: 1}],
        'no-empty': ['error', {allowEmptyCatch: true}],

        'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}]
    }
};
