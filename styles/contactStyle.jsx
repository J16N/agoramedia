import css from 'styled-jsx/css'

export default css`
	p {
		padding: 5%;
		text-align: justify;
		color: #ec5a09;
		line-height: 1.5;
		font-size: 1.0rem;
	}

	p div {
		padding: 0 10%;
		width: 100%;
		margin: 0 auto;
	}

	p div iframe {
		width: 100%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 10px;
	}

	@media (max-width: 768px) {
		p div {
			padding: 0;
		}

		p div iframe {
			height: 300px
	}
`