import css from 'styled-jsx/css'

export default css`
	.jumbotron {
		width: 100%;
		text-align: center;
		background: url('/images/banner-edited.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding-bottom: 3%;
		padding-top: 5%;
	}

	h1 {
		font-size: 4.5rem;
		font-weight: 300;
		line-height: 1.2;
		font-weight: bold;
		color: #ffd7c9;
		letter-spacing: 0.07em;
	}

	:global(.jumbotron .ant-divider-horizontal) {
		min-width: 0 !important;
		width: 80%;
		background-color: #f49e70;
		margin: 24px auto;
	}

	:global(.ant-input-search) {
		max-width: 50%;
		margin-bottom: 2%;
	}

	:global(.ant-input-search input) {
		background-color: transparent;
		border-radius: 50px;
		padding: 0 1.5vw;
		border-color: #f49e70;
		color: #ffff;
	}

	:global(.ant-input-search:hover input) {
		border-color: #ffff !important;
	}

	:global(.ant-input-search input:focus) {
		border-color: #ffff !important;
		box-shadow: 0 0 0 0.2rem rgb(255, 255, 255, 0.25) !important;
		color: #ffff !important;
	}

	:global(.ant-input-search input::placeholder) { /* Chrome, Firefox, Opera, Safari 10.1+ */
	  color: #ffd7c9;
	  opacity: 1; /* Firefox */
	}

	:global(.ant-input-search input:-ms-input-placeholder) { /* Internet Explorer 10-11 */
	  color: #ffd7c9;
	}

	:global(.ant-input-search input::-ms-input-placeholder) { /* Microsoft Edge */
	  color: #ffd7c9;
	}

	:global(.ant-input-search svg) {
		fill: #ffd7c9;
	}

	:global(.ant-input-search svg:hover) {
		fill: #ffff;
	}

	@media (max-width: 768px) {
		:global(.jumbotron .ant-divider-horizontal) {
			width: 100%;
		}

		:global(.ant-input-search) {
			max-width: 95%;
		}

		:global(.ant-input-search input) {
			padding-left: 5vw;
		}
	}
`