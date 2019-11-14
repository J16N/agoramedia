import css from 'styled-jsx/css'

export default css`
	:global(.ant-menu-horizontal) {
		border-bottom: none !important;
	}

	:global(.ant-menu-horizontal .ant-menu-item-selected, .ant-menu-horizontal .ant-menu-item-active) {
		border-bottom: none !important;
	}

	:global(.ant-menu-horizontal .ant-menu-item) {
		padding: 0px 5px;
		border-bottom: none;
	}

	:global(.ant-menu-horizontal .ant-menu-item-selected a) {
		color: yellow !important;
	}

	:global(.agora-menu) {
		background: transparent;
		float: right;
	}

	:global(.agora-menu li a) {
		color: white !important;
		padding: 10px 15px;
	}

	:global(.agora-menu li a:hover) {
		color: white !important;
		vertical-align: center !important;
	}

	:global(.agora-menu:hover a) {
		color: rgba(255, 255, 255, 0.5) !important;
	}

	.header {
		padding: 0 20px;
		overflow: hidden;
		background-color: rgba(228, 87, 34, 0.6);
		width: 100%;
		top: 0;
		transition: top 0.6s;
		z-index: 1000;
	}

	.agora-logo {
		width: 10%;
		padding-top: 0.5%;
		float: left;
	}

	@media (max-width: 768px) {
		.agora-menu-lg {
			display: none;
		}

		.agora-logo {
			width: 90%;
			text-align: center;
			padding: 1.5% 0;
		}
	}
`