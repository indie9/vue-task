const path = require('path')

module.exports = {
	watch: false,
	entry: {
		app: path.resolve(__dirname, './src/entry.js')
	},
	dev: {
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			['/api']: {
				target: 'https://fe-school-api.herokuapp.com',
				pathRewrite: {
					['^/api']: ['/api']
				},
				changeOrigin: true,
				secure: false
			},
		},
		host: 'localhost', // can be overwritten by process.env.HOST
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
	},
	
	build: {
		assetsRoot: path.resolve(__dirname, './build'),
		assetsSubDirectory: '',
		assetsPublicPath: '/',
		require: {
			modules: {
				rules: [
					{
					 test: /\.svg$/,
					 loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
					},
				  ],
				},
			args: [],
		},

		bundleAnalyzerReport: process.env.npm_config_report
	}
}
