module.exports = {
    env: {browser: true, es2021: true},
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },},
    rules: {
        "indent": "error",
        "prettier/prettier": "error",
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'react/jsx-no-bind': [0, { allowFunctions: true }],
        'react/react-in-jsx-scope': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
    },
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
}
