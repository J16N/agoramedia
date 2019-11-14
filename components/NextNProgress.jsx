import React from 'react'
import NProgress from 'nprogress'
import Router from "next/router"
import PropTypes from 'prop-types'
import styles from '../styles/nextNProgressStyle'

/* eslint-disable react/prefer-stateless-function */
class NextNProgress extends React.Component {
	static defaultProps = {
		color: '#2299DD',
		startPosition: 0.3,
		stopDelayMs: 200,
		height: 3,
		spinner: true
	};

	timer = null;

	routeChangeStart = () => {
		NProgress.set(this.props.startPosition);
		NProgress.start();
	};

	routeChangeEnd = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			NProgress.done(true);
		}, this.props.stopDelayMs);
	};

	componentDidMount() {
		const { options } = this.props;

		if (options) {
			NProgress.configure(options);
		}

		Router.events.on('routeChangeStart', this.routeChangeStart);
		Router.events.on('routeChangeComplete', this.routeChangeEnd);
		Router.events.on('routeChangeError', this.routeChangeEnd);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
		Router.events.off('routeChangeStart', this.routeChangeStart);
		Router.events.off('routeChangeComplete', this.routeChangeEnd);
		Router.events.off('routeChangeError', this.routeChangeEnd);
	}

	render() {
		const { color, height } = this.props;
		return (
			<>
				<style jsx global>{styles}</style>
				<style jsx global>{`
					#nprogress .bar {
						background: ${color};
						height: ${height}px;
					}

					#nprogress .peg {
						box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
					}

					#nprogress .spinner-icon {
						border-top-color: ${color};
						border-left-color: ${color};
					}
				`}</style>
			</>
		)
	}
}

NextNProgress.propTypes = {
	color: PropTypes.string,
	startPosition: PropTypes.number,
	stopDelayMs: PropTypes.number,
	options: PropTypes.object,
};

export default NextNProgress;