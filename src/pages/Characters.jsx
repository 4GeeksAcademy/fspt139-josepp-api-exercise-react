import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Character } from "../components/Character.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { useEffect, useState } from "react";
import { loadPersonajesData } from "../services/SimponsApi.js";

export const Characters = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()

	const { page } = useParams();
    const currentPage = parseInt(page) || 1;
    const [totalPages, setTotalPages] = useState(1);

	const handlePage = (p) => {
		if(p==1){p=''}
        navigate(`/${p}`);
    };

	const [totalPersonajes, setTotalPersonajes] = useState(0);
    const [isLoading, setIsLoading] = useState(false)


	const fetchPersonajes = async () => {
			let tt = null
            try {
				tt = setTimeout(()=>setIsLoading(true), 1000);
                const data = await loadPersonajesData({page:currentPage})        
                dispatch({type: 'set-characters-list', payload: data.results || []})

				if(data.pagination){
					setTotalPages(data.pagination.pages || 1)
					setTotalPersonajes(data.pagination.total || 0)
				}			                
                
            } catch(error) {   
				console.log(error)         
                dispatch({type: 'set-error', payload: error.message})
				
            } finally{
				clearTimeout(tt)
            	setIsLoading(false)
			}
	}


    useEffect(() => {		        
        fetchPersonajes()
    }, [currentPage])

   if (isLoading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        )
    }

	return (
		<div className="container py-5">
			<div className="row">
				<div className="col">

					<Pagination 
						currentPage={currentPage} 
                        setCurrentPage={handlePage} 
                        totalPages={totalPages}/>					

        			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
						{ 					
							(store.characterList.length)?
								store.characterList.map((character, index) => (
									<Character key={index} character={character} />
								))
								:
								<h3 className="text-center">No hay datos</h3>						
						}		
					</div>

					<Pagination 
						currentPage={currentPage} 
                        setCurrentPage={handlePage} 
                        totalPages={totalPages}/>	

				</div>
			</div>		
		</div>
	)
}