import useGlobalReducer from "../hooks/useGlobalReducer";
import logoUrl from "../assets/img/The_Simpsons_yellow_logo.svg";
import { FavoritoCard } from "./FavoritoCard";

export const Offcanvas = () => {

   
  const { store, dispatch } = useGlobalReducer()

	return (
        <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">                
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   

            </div>
            <div className="offcanvas-body mt-0 pt-0">

                <div className="d-flex w-100 justify-content-center mt-0 mb-2">
                    <img src={logoUrl} className="col-6 m-auto"/>
                </div>


                <blockquote className="blockquote mb-5">
                    <p className="mb-4">{store.randomQuote.quote}</p>
                    <footer className="blockquote-footer">{store.randomQuote.author} <cite title="The Simpson">en The Simpsons</cite></footer>
                </blockquote>
            

                { store.favorites.characters.map((character, index) => (
                        <FavoritoCard key={index} tipo="characters" favorito={character} />                                                    
                    ))
                }

                { store.favorites.locations.map((location, index) => (
                        <FavoritoCard key={index} tipo="locations" favorito={location} />                                                    
                    ))
                }


            </div>
        </div>
	);
};