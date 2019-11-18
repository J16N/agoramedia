import css from 'styled-jsx/css'

export default css`
	:global(.ant-form-extra) {
		color: #ec5a09;
	}

	:global(.ant-form-item-label > label) {
		color: #ba4f28;
	}

	:global(.form input, .form textarea) {
		border-color: #ba4f28;
		color: #ec5a09;
		resize: none;
	}

	:global(.form input::placeholder, .form textarea::placeholder) {
		color: #f49e70;
		opacity: 1;
	}

	:global(.form input:-ms-input-placeholder, .form textarea:-ms-input-placeholder) {
		color: #f49e70;
	}

	:global(.form input::-ms-input-placeholder, .form textarea::-ms-input-placeholder) {
		color: #f49e70;
	}

	:global(.custom-form-items) {
		margin-bottom: 3%;
	}

	@media (max-width: 768px) {
		:global(.form) {
			padding: 0 5% 0 5%;
		}
	}
`