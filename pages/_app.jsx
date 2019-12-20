import App from 'next/app'
import React from 'react'
import PageLoader from '../components/PageLoader'

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<PageLoader color='#a8411c' options={{showSpinner: false}} />
				<Component {...pageProps} />
			</>
		)
	}
}