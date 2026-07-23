import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Escenario = ({escenario}) => {

    const { store, dispatch } = useGlobalReducer()

    const handleFavorito = () => {
      dispatch({type: 'update-favoritos', payload:{ tipo: "locations", elemento: escenario}});	
    }


    return (
      
      <div className="col">
        <div className="carta-personaje card h-100 border-0 shadow-sm p-3 rounded-4 text-center">
          <div className="carta-personaje-img p-3 mb-3  ratio ratio-1x1">
            <img src={`https://cdn.thesimpsonsapi.com/200${escenario.image_path}`} 
            alt="{character.name}" 
            className="img-fluid object-fit-cover border rounded"             
            />
          </div>
          <div className="card-body p-0 d-flex flex-column">

            <h6 className="d-flex align-items-center justify-content-center gap-1">         
                <span>{escenario.name}</span>
            </h6>

            <div className="mb-3 d-flex justify-content-between">
              {((escenario.town)&&<span className="badge bg-light text-dark border px-2 py-1 me-1">{escenario.town}</span>)}
              {((escenario.use)&&<span className="badge bg-white-subtle text-success px-2 py-1">{escenario.use}</span>)}
               
            </div>
            
            <div className="card-footer d-flex justify-content-between p-0 m-0">
                <Link to={`/escenario/${escenario.id}`}>
                  <button className="btn btn-outline-primary btn-sm text-uppercase fw-bold" >➕ DETALLES</button>
                </Link>
                <button className="btn btn-outline-primary btn-sm text-uppercase fw-bold" onClick={handleFavorito} >
      { store.favorites.locations.some(e => e.id === escenario.id) ?'🗑️':'♥️' }
                </button>
            </div>

          </div>
        </div>
      </div>


      
        )
}
