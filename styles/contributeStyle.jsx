import css from 'styled-jsx/css'

export default css`
	.contribute-content {
		padding: 5% 0 5% 0;
	}

	.contribute-content h2 {
		margin-bottom: 1.5rem;
		font-weight: 300;
		line-height: 1.2;
		font-size: 2.5rem;
		color: #ba4f28;
		letter-spacing: 1.5px;
		padding: 0 5% 0 5%;
	}

	@media (max-width: 768px) {
		.contribute-content h2 {
			font-size: 2.0rem;
		}
	}

	.contribute-content p {
		color: #ec5a09;
		line-height: 1.5;
		font-size: 1.0rem;
		text-align: justify;
		padding: 0 5% 0 5%;
	}

	.contribute-content h3 {
		margin-top: 1.5rem;
		font-weight: 350;
		line-height: 1.2;
		font-size: 1.8rem;
		color: #ba4f28;
		letter-spacing: 1.5px;
		padding: 0 5% 0 5%;
	}

	@media (max-width: 768px) {
		.contribute-content h3 {
			font-size: 1.3rem;
		}
	}

	.topics {
		padding: 5% 5% 3% 5%;
	}

	.guidelines {
		padding: 3% 5% 5% 5%;
	}

	@media (max-width: 768px) {
		.topics, .guidelines {
			padding: 0 5% 0 0;
		}
	}

	.topics, .guidelines {
		overflow: auto;
	}

	.topics div {
		margin: 8% 0 0 0;
		height: inherit;
		padding-left: 40%;
	}

	@media (max-width: 768px) {
		.topics div {
			padding: 0;
		}
	}

	.topics div ul {
		columns: 2;
		line-height: 2;
		color: #ec5a09;
		font-size: 0.95rem;
		width: 60%;
	}

	@media (max-width: 768px) {
		.topics div ul {
			width: 95%;
		}
	}

	.guidelines div ul {
		line-height: 1.5;
		color: #ec5a09;
		font-size: 0.95rem;
	}

	.topics div ul li, .guidelines div ul li {
		margin-bottom: 1%;
	}

	@media (max-width: 768px) {
		.guidelines div ul li {
			margin-bottom: 5%;
		}
	}

	@media (max-width: 768px) {
		.topics img, .guidelines img {
			display: none;
		}
	}

	:global(.contribute-content .ant-divider-horizontal) {
		min-width: 0 !important;
		width: 80%;
		background-color: #f49e70;
		margin: 4% auto;
	}

	@media (max-width: 768px) {
		:global(.contribute-content .ant-divider-horizontal) {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.form {
			padding: 0 5% 0 5%;
		}
	}
`