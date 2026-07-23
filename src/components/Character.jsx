import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Character = ({character}) => {

    const { store, dispatch } = useGlobalReducer()

    const handleFavorito = () => {
      dispatch({type: 'update-favoritos', payload:{ tipo: "characters", elemento: character}});	
    }

    return (
      
      <div className="col">
        <div className="carta-personaje card h-100 border-0 shadow-sm p-3 rounded-4 text-center">
          <div className="carta-personaje-img p-3 mb-3">
            <img src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} 
            alt="{character.name}" 
            className="img-fluid"             
            />
          </div>
          <div className="card-body p-0 d-flex flex-column">

            <h5 className="d-flex align-items-center justify-content-center gap-1">         
                <span style={{fontSize: "0.6em", lineHeight: 1}}>{(character.status == 'Alive')? <>🟢</> :<>🔴</> }</span>
                <span>{character.name}</span>
            </h5>

            <p className="text-muted small mb-3">{character.occupation}</p>

            <div className="mb-3 d-flex justify-content-between">
                <span className="badge bg-light text-dark border px-2 py-1 me-1">Edad: {(character.age)?character.age:<b>??</b>}</span>
                <span className="badge bg-white-subtle text-success px-2 py-1">
                    { ((character.gender == 'Male')? <b>♂️</b> : <b>♀️</b> )}
                </span>
               
            </div>
            
            <div className="card-footer d-flex justify-content-between p-0 m-0">
                <Link to={`/personaje/${character.id}`}>
                  <button className="btn btn-outline-primary btn-sm text-uppercase fw-bold" >➕ DETALLES</button>
                </Link>
                <button className="btn btn-outline-primary btn-sm text-uppercase fw-bold" onClick={handleFavorito} >                  
                  { store.favorites.characters.some(personaje => personaje.id === character.id) ?'🗑️':'♥️' }
                  </button>
              
            </div>

          </div>
        </div>
      </div>


      
        )
}
