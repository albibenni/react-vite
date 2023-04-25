module.exports = {
    env: {browser: true, es2021: true},
    parser: '@typescript-eslint/parser',
    plugins: [
        'import',
        // 'import-typescript',
        // 'eslint',
        'prettier',
    ],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        // 'plugin:import/recommended',
        // 'plugin:import/typescript',
        'prettier',
    ],
    parserOptions: {
        project: [
          './tsconfig.node.json',
            './tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        "indent": "error",
        "prettier/prettier": "error",
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        // 'react/jsx-no-bind': [0, { allowFunctions: true }],
        "react/react-in-jsx-scope": "off", //react is not needed to be imported
        '@typescript-eslint/no-unused-vars': 'error',
        // 'no-use-before-define': 'off',
    },
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
}
