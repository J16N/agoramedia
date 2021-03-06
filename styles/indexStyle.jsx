import css from 'styled-jsx/css'

export default css`
	:global(.card-container) {
		padding: 5%;
	}

	:global(.card-container .ant-tabs-card .ant-tabs-content .ant-tabs-tabpane) {
		background: transparent;
		padding: 1.5%;
		border-right: 1px solid #ba4f28;
		border-bottom: 1px solid #ba4f28;
		border-left: 1px solid #ba4f28;
	}

	:global(.card-container .ant-tabs-card .ant-tabs-bar) {
		border-color: #ba4f28;
		margin-bottom: 0;
	}

	:global(.card-container .ant-tabs-card .ant-tabs-bar .ant-tabs-tab) {
		border-color: transparent;
		background: transparent;
		color: #ec5a09;
		font-size: 1.8rem;
		font-weight: 300;
		letter-spacing: 5px;
	}

	:global(.card-container .ant-tabs-card .ant-tabs-bar .ant-tabs-tab:hover) {
		color: #f49e70;
	}

	:global(.card-container .ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active) {
		border-color: #ba4f28;
		border-bottom-color: #fff;
		background: transparent;
		color: #ba4f28;
	}

	:global(.card-container .ant-card-cover img) {
		width: 100% !important;
		height: 40vh !important;
		object-fit: cover !important;
	}

	.content {
		width: 100%;
		padding: 5% 5% 2% 5%;
	}

	.newsletter {
		color: #ec5a09;
		font-size: 2rem;
		font-weight: 100;
		letter-spacing: 5px;
		text-align: center;
	}

	:global(.newsletter-inp) {
		width: 40% !important;
		border-top-left-radius: 50px !important;
		border-bottom-left-radius: 50px !important;
		background-color: transparent;
		border-color: #f49e70;
		color: #e45722;
		padding: 0 1.5vw;
		border-right: none;
	}

	:global(.newsletter-btn) {
		border-top-right-radius: 50px !important;
		border-bottom-right-radius: 50px !important;
		border-color: #f49e70;
		color: #f49e70;
		letter-spacing: 3px;
		border-left: none;
	}

	:global(.newsletter-btn:hover) {
		background-color: #e45722;
		color: white;
	}

	:global(.newsletter-inp:focus) {
		width: 41vmax !important;
		box-shadow: none;
		border-right: none;
	}

	:global(.newsletter-inp:hover) {
		border-right: none;
	}

	.scroll-bg {
		width: 100%;
		height: 130vh;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.img-text {
		position: absolute;
		text-align: center;
	}

	.img-text:hover {
		opacity: 0.1;
	}

	.quote-container {
		width: 100%;
		height: 50vh;
		display: block;
		align-items: center;
		justify-content: center;
	}

	.quote {
		width: 55%;
		height: 50%;
		text-align: center;
		margin: 10% auto;
	}

	.embed-responsive {
		position: relative;
		display: block;
		width: 80%;
		padding: 0;
		overflow: hidden;
	}

	.embed-responsive::before {
		display: block;
		content: "";
	}

	.embed-responsive .embed-responsive-item,
	.embed-responsive embed,
	.embed-responsive iframe,
	.embed-responsive object,
	.embed-responsive video {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	.embed-responsive-16by9::before {
		padding-top: 56.25%;
	}



	@media (max-width: 768px) {
		:global(.card-container) {
			padding: 5% 0;
		}

		:global(.card-container .ant-tabs-card .ant-tabs-content .ant-tabs-tabpane) {
			border-left: none;
			border-right: none;
		}

		:global(.card-container .ant-tabs-card .ant-tabs-bar .ant-tabs-tab) {
			font-size: 1.5rem !important;
		}

		:global(.card-container .ant-tabs-card .ant-tabs-content .ant-tabs-tabpane) {
			padding: 2% 0;
		}

		:global(.newsletter-inp) {
			padding-left: 5vw;
			width:50% !important;
		}

		:global(.newsletter-inp:focus) {
			width: 80% !important;
		}

		.scroll-bg {
			height: 50vh;
		}

		.img-text a {
			font-size: 2rem !important;
		}

		.img-text h3 {
			font-size: 1rem !important;
		}

		.quote-container {
			height: 75vh;
		}

		.quote {
			width: 90%;
			height: 80%;
			padding: 5% 0;
		}

		.embed-responsive {
			width: 100%;
		}
	}
`