import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { loadEscenario } from "../services/SimponsApi.js"; 

export const EscenarioView = () => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const { id } = useParams()
    
    const [escenario, setEscenario] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchEscenario = async () => {
        try {
            setIsLoading(true);
            const data = await loadEscenario(id);                                
            setEscenario(data);                                                                     
        } catch(error) {   
            console.log(error);         
            dispatch({type: 'set-error', payload: error.message});  
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {               
        fetchEscenario();
    }, [id])

    const handleFavorito = () => {
      dispatch({type: 'update-favoritos', payload:{ tipo: "locations", elemento: escenario}})
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
                
                <div className="col-12 col-md-8 order-2 order-md-1">                    
                    <div className="d-flex justify-content-between align-items-center mb-3 mt-4 mt-md-0">
                        <h1 className="fw-bold display-5 mb-0">{escenario.name}</h1>
                        <button className="btn btn-outline-danger rounded-circle p-2 lh-1" onClick={handleFavorito}>

      { store.favorites.locations.some(e => e.id === escenario.id) ?'🗑️':'♥️' }

                        </button>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {escenario.town && (<span className="badge bg-primary px-3 py-2 fs-6 rounded-pill shadow-sm">📍 {escenario.town}</span>)}
                        {escenario.use && (<span className="badge bg-success px-3 py-2 fs-6 rounded-pill shadow-sm">🏗️ Uso: {escenario.use}</span>)}
                    </div>                 
                    
                    {/* INFO */}
                    <div className="card shadow-sm border-0 rounded-4 mb-4">
                        <div className="card-body p-4">
                            <h5 className="card-title fw-bold mb-3 border-bottom pb-2">Información:</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                                    <span className="text-muted fw-bold">Ubicación:</span> 
                                    <span>{escenario.town}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                                    <span className="text-muted fw-bold">Tipo:</span> 
                                    <span className="badge bg-dark rounded-pill">{escenario.use}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                   
                    <div className="mt-5">
                        <Link to="/escenarios">
                            <button className="btn btn-secondary btn-lg fw-bold px-4 rounded-pill shadow-sm text-uppercase">Volver a escenarios</button>
                        </Link>
                    </div>


                </div>
                
                <div className="col-12 col-md-4 mb-4 mb-md-0 order-1 order-md-2">
                    <div className="card shadow-sm border-0 rounded-4 overflow-hidden position-sticky">
                        <img 
                            className="img-fluid w-100 object-fit-cover"                             
                            src={`https://cdn.thesimpsonsapi.com/1280${escenario.image_path}`} 
                            alt={escenario.name}
                        />
                    </div>
                </div>

            </div>      
        </div>
    )
}