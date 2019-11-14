export default () => (
	<div className='footer'>
		<footer>
			© 2019. AGORA Media, Inc. All Rights Reserved.
		</footer>

		<style jsx> {`
			.footer {
				width: 100%;
				height: 50vh;
				background-color: black;
				display: flex;
				align-items: center;
				justify-content:center;
				position: relative;
			}

			footer {
				color: #ffff;
				font-size: 1rem;
			}

			@media (max-width: 768px) {
				.footer {
					height: 20vh;
				}

				footer {
					font-size: 0.8rem !important;
				}
			}
		`} </style>
	</div>
)