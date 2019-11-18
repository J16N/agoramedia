import css from 'styled-jsx/css'

export default css`
	body, html {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		height: 100%;
	}

	:global(.space) {
		min-width: 0 !important;
		width: 80%;
		background-color: #f49e70;
		margin: 4% auto;
	}

	@media (max-width: 768px) {
		:global(.space) {
			width: 100%;
		}
	}
`