import css from 'styled-jsx/css'

export default css`
	.contribute-content {
		padding: 5% 5% 0 5%;
	}

	.contribute-content h2 {
		margin-bottom: 1.5rem;
		font-weight: 300;
		line-height: 1.2;
		font-size: 2.5rem;
		color: #ba4f28;
		letter-spacing: 1.5px;
	}

	.contribute-content p {
		color: #ec5a09;
		line-height: 1.5;
		font-size: 1.0rem;
		text-align: justify;
	}

	.contribute-content h3 {
		margin-top: 1.5rem;
		font-weight: 350;
		line-height: 1.2;
		font-size: 1.8rem;
		color: #ba4f28;
		letter-spacing: 1.5px;
	}

	.topics, .guidelines {
		overflow: auto;
	}

	.topics div {
		margin: 8% 0 0 0;
		height: inherit;
		padding-left: 40%;
	}

	.topics div ul {
		columns: 2;
		line-height: 2;
		color: #ec5a09;
		font-size: 0.95rem;
		width: 60%;
	}

	.guidelines div ul {
		line-height: 1.5;
		color: #ec5a09;
		font-size: 0.95rem;
	}

	.topics div ul li, .guidelines div ul li {
		margin-bottom: 1%;
	}

	.space {
		margin: 5% auto 5% auto;
	}
`