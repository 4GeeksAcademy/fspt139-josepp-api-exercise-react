import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const FavoritoCard = ({tipo, favorito}) => {

    const { store, dispatch } = useGlobalReducer()

    const handleFavorito = () => {
      dispatch({type: 'update-favoritos', payload:{ tipo: tipo, elemento: favorito}});	
    }


    return (
      
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={
              (tipo=='characters')?
              `https://cdn.thesimpsonsapi.com/200${favorito.portrait_path}`:
              `https://cdn.thesimpsonsapi.com/200${favorito.image_path}`
            } 
            
            className="w-100 h-100 rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column h-100">
              <h6 className="card-title">{favorito.name}</h6>
              <div className="d-flex justify-content-end p-0 m-0 mt-auto">
                <Link to={
                   (tipo=='characters')?
                    `/personaje/${favorito.id}`:
                    `/escenario/${favorito.id}`              
                  }>
                  <button className="btn btn-outline-primary btn-sm text-uppercase fw-bold"  data-bs-dismiss="offcanvas" >➕ DETALLES</button>
                </Link>                
                <button className="btn btn-outline-primary btn-sm text-uppercase fw-bold" onClick={handleFavorito} >🗑️</button>
              </div>
            </div>            
          </div>
          
        </div>
      </div>

 


      
        )
}
