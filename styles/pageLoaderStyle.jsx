import css from 'styled-jsx/css'

export default css`
	:global(.ant-progress-inner) {
		background-color: transparent;
	}

	:global(.ant-progress-line) {
		z-index: 2000;
		position: fixed;
		top: -10px;
	}
`