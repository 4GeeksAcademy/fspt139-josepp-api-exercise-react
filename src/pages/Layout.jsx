import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Offcanvas } from "../components/Offcanvas"

export const Layout = () => {
    const { store, dispatch } = useGlobalReducer()
    
/*
    const loadData = async () => {		    
        try{
            const personajes = await loadPersonajes({page:store.personajesPage})		
            dispatch({type: 'set-character-list', payload: personajes})		

        }catch(error){            
            dispatch({type: 'set-error', payload: error.message})	
        }	        
	}

    useEffect( () =>{           
        loadData()        
    }, [])
*/
    return (
        <ScrollToTop>
            <Navbar />
            { (store.errorMessage)?
                    <div className="alert alert-danger col-11 my-2 m-auto">{store.errorMessage}</div>
                    :
                    '' }
                <Outlet />
                <Offcanvas />              
            <Footer />
        </ScrollToTop>
    )
}