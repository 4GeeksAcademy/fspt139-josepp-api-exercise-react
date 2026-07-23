export const loadPersonajesData = async (filtros) => {    
    if(!filtros || (filtros && !filtros.page)){
        filtros = {page: 1}
    }

    //{"count":1182,"next":null,"prev":null,"pages":60,"results":[]}

    const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${filtros.page}`)
    const data = await response.json()

      
    if(response.status != 200){            
        const errorMessage = data.detail || data.error || 'Error no identificado';
        throw new Error(`Error ${response.status}: ${errorMessage}`);           

    }
    return {results: data.results, pagination:{pages:data.pages, total:data.total}}
}


export const loadEscenariosData = async (filtros) => {    
    if(!filtros || (filtros && !filtros.page)){
        filtros = {page: 1}
    }

    //{"count":1182,"next":null,"prev":null,"pages":60,"results":[]}

    const response = await fetch(`https://thesimpsonsapi.com/api/locations?page=${filtros.page}`)
    const data = await response.json()

      
    if(response.status != 200){            
        const errorMessage = data.detail || data.error || 'Error no identificado';
        throw new Error(`Error ${response.status}: ${errorMessage}`);           

    }
    return {results: data.results, pagination:{pages:data.pages, total:data.total}}
}


export const loadPersonaje = async (id) => {    
    if(!id){
        throw new Error('Indica un ID')
    }

    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
    const data = await response.json()

          if(response.status != 200){            
        const errorMessage = data.detail || data.error || 'Error no identificado';
        throw new Error(`Error ${response.status}: ${errorMessage}`);           

    }
    return data
}


export const loadEscenario = async (id) => {    
    if(!id){
        throw new Error('Indica un ID')
    }

    const response = await fetch(`https://thesimpsonsapi.com/api/locations/${id}`)
    const data = await response.json()

          if(response.status != 200){            
        const errorMessage = data.detail || data.error || 'Error no identificado';
        throw new Error(`Error ${response.status}: ${errorMessage}`);           

    }
    return data
}
