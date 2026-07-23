import useGlobalReducer from "../hooks/useGlobalReducer";

export const Footer = () => {



  const { store, dispatch } = useGlobalReducer()

return (
	<footer className="footer-sw text-center border-top border-warning border-3 mt-5 py-5 bg-simpsons">
		<div className="container">

			<h3 className="small text-secondary mb-3 pt-3 border-top border-secondary border-opacity-25 w-50 mx-auto">
				{ `${store.randomQuote.quote} - ${store.randomQuote.author}` }
			</h3>
			
		</div>
	</footer>
)
}