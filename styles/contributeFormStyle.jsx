import css from 'styled-jsx/css'

export default css`
	:global(.ant-form-extra) {
		color: rgba(236, 90, 9, 0.9);
	}


	:global(.form textarea) {
		resize: none;
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