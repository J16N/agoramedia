/* eslint-disable */
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined')
	require.extensions['.less'] = file => {}

module.exports = () => {
	return withLess({
		lessLoaderOptions: {
			javascriptEnabled: true,
			// pass your customized theme variables here.
			// if you want less to be imported from a file, use less-vars-to-js instead.
			modifyVars: {
				'@primary-color': '#e45722',
			}
		},
		devIndicators: {
			autoPrerender: false,
		}
	})
};