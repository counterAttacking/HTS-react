module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'max-len': [
            'error',
            {
                code: 150,
                ignoreTemplateLiterals: true,
            }
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'import/prefer-default-export': 'off',
        'arrow-body-style': 'off',
        'import/extensions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'import/no-duplicates': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};