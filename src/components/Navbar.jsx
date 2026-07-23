import { Link } from "react-router-dom";
import logoUrl from "../assets/img/The_Simpsons_yellow_logo.svg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light shadow-sm border-bottom border-primary border-2 p-0" 
		style={{backgroundColor: "rgba(0,0,0,0.85) !important", backdropFilter: "blur(10px)"}}>
			<div className="container-fluid d-flex justify-content-center py-3 px-4">
				
					<Link to="/">
						<img className="img-responsive"
							src={logoUrl} 
							alt="Star Wars Logo" 
							style={{ height: "150px" }}
						/>
					</Link>
				
			</div>

			<div className="border-top border-warning border-opacity-25 bg-primary w-100 text-light">
				<div className="container">
					<ul className="navbar-nav d-flex flex-row justify-content-center py-1">
						<li className="nav-item">
							<Link to="/" className="nav-link text-uppercase fw-bold px-3 py-2 text-white">Personajes</Link>
						</li>
						<li className="nav-item">
							<Link to="/escenarios" className="nav-link text-uppercase fw-bold px-3 py-2 text-white">Escenarios</Link>
						</li>		

						<li className="nav-item dropdown">
						{/*	<Link to="/escenarios" className="nav-link text-uppercase fw-bold px-3 py-2 text-white position-relative">
							
								Favoritos
								<span
								style={{top:"9px"}}
								className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
									33									
								</span>

							
							</Link>*/}
<Link to="/escenarios" className="nav-link text-uppercase fw-bold px-3 py-2 text-white position-relative" 
 data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasExample"
data-bs-target="#offcanvasExample"
>
  Favoritos
								<span
								style={{top:"9px"}}
								className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
{store.favorites.characters.length + store.favorites.locations.length}
								</span>



</Link>
						</li>	

					</ul>
				</div>
			</div>


		</nav>

		
	);
};