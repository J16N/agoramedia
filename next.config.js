const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');


const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './themes/primary-theme.less'), 'utf8')
)


// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined')
	require.extensions['.less'] = file => {}


module.exports = withLess({
	lessLoaderOptions: {
		javascriptEnabled: true,
		// pass your customized theme variables here.
		// if you want less to be imported from a file, use less-vars-to-js instead.
		modifyVars: themeVariables,
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			const antStyles = /antd\/.*?\/style.*?/
			const origExternals = [...config.externals]
			config.externals = [
				(context, request, callback) => {
					if (request.match(antStyles)) return callback()
					if (typeof origExternals[0] === 'function') {
						origExternals[0](context, request, callback)
					} else {
						callback()
					}
				},
				...(typeof origExternals[0] === 'function' ? [] : origExternals),
			]


			config.module.rules.unshift({
				test: antStyles,
				use: 'null-loader',
			})

			config.stats = {
				warningsFilter: (warning) => /Conflicting order between/m.test(warning),
			};
		}
		return config
	},
})