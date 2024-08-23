module.exports = {
	root: true,
	env: { browser: true, es2021: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-prettier',
		'plugin:perfectionist/recommended-natural',
	],
	settings: {
		'react': {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {
				project: './tsconfig.json',
			},
		},
	},
	plugins: ['react-refresh', '@typescript-eslint', 'perfectionist', 'import', 'unused-imports'],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
	parser: '@typescript-eslint/parser',
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'no-unused-vars': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'react/react-in-jsx-scope': 'off',
		'perfectionist/sort-interfaces': 'error',
		'perfectionist/sort-imports': 'error',
		'perfectionist/sort-objects': 'error',
		'perfectionist/sort-jsx-props': [
			'error',
			{
				type: 'natural',
				order: 'asc',
				groups: ['multiline', 'unknown', 'shorthand'],
			},
		],
		'perfectionist/sort-classes': 'error',
	},
}
