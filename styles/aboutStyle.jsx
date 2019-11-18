import css from 'styled-jsx/css'

export default css`
	.about-content {
		padding: 5% 0 5% 0;
	}

	.about-content p {
		padding: 0 5% 0 5%;
		text-align: justify;
		color: #ec5a09;
		line-height: 1.5;
		font-size: 1.0rem;
	}

	.blockquote-header {
		color: #ba4f28;
		padding: 0 6%;
		line-height: 1.2;
		font-size: 0.9rem;
	}

	.blockquote {
		color: #ba4f28;
		padding: 0 3%;
	}

	.about-content p:first-child div {
		text-align: center;
	}

	h1:not(:first-child), h2, h3 {
		padding: 0 5% 0 5%;
	}
	
	h1 { color: #ba4f28; }
	h2 { color: #ba4f28; margin-bottom: 0; margin-top: 4rem;}
	h3 { color: #e26c41; margin-top: 0}

	blockquote:after {
		background-color: red;
	}

	img {
		display: inline-block;
		max-width: 100%;
		height: 353px;
	}

	@media (max-width: 768px) {
		img {
			height: auto
		}
	}

	img:not(:last-child) {
		margin-right: 2%;
	}

	@media (max-width: 768px) {
		img:not(:last-child) {
			margin-bottom: 5%;
		}
	}

	.disclaimer {
		text-align: center;
		color: #ec5a09;
		margin-top: 5rem;
	}

	@media (max-width: 768px) {
		.disclaimer {
			font-size: 0.65rem;
			text-align: justify;
			padding: 0 5%;
		}
	}
`