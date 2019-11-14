import React, { Component } from 'react'
import Head from 'next/head'
import styles from '../styles/metaStyle'

export default (props) => (
	<div>
		<Head>
			<title>AGORAMedia: { props.title }</title>
			<link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />

			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta charSet="utf-8" />
		</Head>
		<style jsx global>{styles}</style>
	</div>
)