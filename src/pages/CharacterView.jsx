import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { loadPersonaje } from "../services/SimponsApi.js";

export const CharacterView = () => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const { id } = useParams()
    
    const [personaje, setPersonaje] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchPersonaje = async () => {
        try {
            setIsLoading(true);
            const data = await loadPersonaje(id)                             
            setPersonaje(data)
        } catch(error) {   
            console.log(error)  
            dispatch({type: 'set-error', payload: error.message}) 
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {               
        fetchPersonaje()
    }, [id])

    const handleFavorito = () => {
      dispatch({type: 'update-favoritos', payload:{ tipo: "characters", elemento: personaje}});	
    }



    //prevengo por si tarda en cargar
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
            <div className="row justify-content-center">
                
                
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="card shadow-sm border-0 rounded-4 overflow-hidden position-sticky">
                        <img className="img-fluid w-100 object-fit-cover" src={`https://cdn.thesimpsonsapi.com/1280${personaje.portrait_path}`} />
                    </div>
                </div>

                
                <div className="col-12 col-md-8">                                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1 className="fw-bold display-5 mb-0">{personaje.name}</h1>
                        <button className="btn btn-outline-danger rounded-circle p-2 lh-1" onClick={handleFavorito}>
							      { store.favorites.characters.some(e => e.id === personaje.id) ?'🗑️':'♥️' }

						</button>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {personaje.gender && (<span className="badge bg-primary px-3 py-2 fs-6 rounded-pill">{personaje.gender === 'Female' ? '♀️' : '♂️'}</span>)}
                        {personaje.age && (<span className="badge bg-success px-3 py-2 fs-6 rounded-pill">🎂 {personaje.age} {personaje.age === 1 ? 'año' : 'años'}</span>)}
                        {personaje.occupation && (<span className="badge bg-secondary px-3 py-2 fs-6 rounded-pill">💼 {personaje.occupation}</span>)}
                    </div>                 
                    {personaje.description && (
                        <div className="card shadow-sm border-0 rounded-4 mb-4">
                            <div className="card-body p-4">
                                <h5 className="card-title fw-bold mb-3 border-bottom pb-2">Info de {personaje.name}</h5>
                                <p className="card-text text-muted" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>{personaje.description}</p>
                            </div>
                        </div>
                    )}


                    <div className="row g-4">                                                
                        <div className="col-12 col-lg-6">
                            <div className="card shadow-sm border-0 rounded-4 h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-3 border-bottom pb-2">Datos Curiosos</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                                            <span className="text-muted fw-bold">Fecha de Nac.:</span> 
                                            <span>{personaje.birthdate || 'Desconocida'}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                                            <span className="text-muted fw-bold">1ª Aparición (Episodio):</span> 
                                            <span className="badge bg-dark rounded-pill">#{personaje.first_appearance_ep_id || '?'}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

          { /*FRASES */}
                        {personaje.phrases && personaje.phrases.length > 0 && (
                            <div className="col-12 col-lg-6">
                                <div className="card shadow-sm border-0 rounded-4 h-100 bg-warning bg-opacity-10">
                                    <div className="card-body p-4">
                                        <h5 className="card-title fw-bold mb-3 border-bottom border-warning pb-2">Qué dice {personaje.name}?</h5>
                                        <ul className="list-unstyled mb-0">
                                            {personaje.phrases.map((phrase, index) => (
                                                <li key={index} className="mb-3 fst-italic text-dark">
                                                    💬 "{phrase}"
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}                        
                    </div>

                  
                    <div className="mt-5">
						<Link to="/">
							<button className="btn btn-secondary btn-lg fw-bold px-4 rounded-pill shadow-sm text-uppercase">Volver al listado</button>
						</Link>
                    </div>

                </div>
            </div>      
        </div>
    )
}