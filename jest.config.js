module.exports = {
    preset: 'ts-jest',
    modulePaths: ['<rootDir>', '<rootDir>/src'],
    roots: ['<rootDir>/src'],
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
};
  