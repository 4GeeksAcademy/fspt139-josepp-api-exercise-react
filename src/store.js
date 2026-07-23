export const initialStore=()=>{
  const randomQuote = simpsonsQuotes[Math.floor(Math.random() * simpsonsQuotes.length)];
  
  return{
    errorMessage: null,
    successMessage: null,
    characterList: [],
    locationsList: [],
    favorites: {characters: [], locations: []},
    randomQuote: randomQuote
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set-success': return { ...store, successMessage: action.payload }
    case 'set-error': return { ...store, errorMessage: action.payload }

    case 'set-characters-list': return { ...store, characterList: action.payload }

    case 'set-locations-list': return { ...store, locationsList: action.payload }
    
    case 'update-favoritos': 
      const { tipo, elemento } = action.payload;
      const favoritos = store.favorites[tipo];
      
      const yaIsFavorite = favoritos.some(item => item.id === elemento.id);
      
      let favoritosList = []
      if(yaIsFavorite){
          favoritosList = favoritos.filter(item => item.id !== elemento.id)
      }else{
        favoritosList = [...favoritos, elemento]
      }
      

      return { 
        ...store, 
        favorites: {
          ...store.favorites,
          [tipo]: favoritosList
        }
      };
    
    default:
      throw Error('Unknown action.');
  }    
}

//biblioteca propia de frases
const simpsonsQuotes = [
  {
    quote: "¡Estúpido Flanders y su erotismo!",
    author: "Homer"
  },
  {
    quote: "¡Oh, mírame, Marge!!! Estoy haciendo feliz a mucha gente, soy el hombre mágico del pais feliz de la casa de la gominola en la calle de la piruleta.",
    author: "Homer"
  },
  {
    quote: "¡Por favor, no me comáis! Tengo mujer e hijos ¡Comeros a ellos!",
    author: "Homer"
  },
  {
    quote: "¡Qué suerte Marge!, Nuestros hijos son cada vez más inteligentes, si tenemos otro podría construir una máquina del tiempo para viajar al pasado y no tener hijos.",
    author: "Homer"
  },
  {
    quote: "¡Yuhuuu! ¡Soy universitario! Ya no necesito el diploma del insti, qué listo soy yo, qué listo soy yo, qué listo soy yo, L S T O, digo L I S T O.",
    author: "Homer"
  },
  {
    quote: "¿Me podría decir dónde está el lavabo? Me gustaría fingir que me lavo las manos.",
    author: "Homer"
  },
  {
    quote: "¿Recuerdas aquella postal que nos envió el abuelo desde Florida de un aligator mordiendo el trasero de una mujer? A todos nos pareció muy divertida. Pero estábamos equivocados. Ese aligator estaba acosando sexualmente a esa mujer.",
    author: "Homer"
  },
  {
    quote: "¿Y si nos equivocamos de religión? Dios estaría más furioso cada semana.",
    author: "Homer"
  },
  {
    quote: "A diferencia del amor, el respeto no se compra.",
    author: "Homer"
  },
  {
    quote: "Cuando miro las caras sonrientes de los niños, sólo sé que están planeando golpearme con algo.",
    author: "Homer"
  },
  {
    quote: "Hay dos tipos de estudiantes: los fuertes y los gilis. ¡Como atleta es mi deber hacerle la vida imposible a los gilis!",
    author: "Homer"
  },
  {
    quote: "Hijos, os habéis esforzado. Y, ¿Para qué? Para hacer el ridículo. La moraleja es: No os esforcéis.",
    author: "Homer"
  },
  {
    quote: "La menopausia es cuando a la cigüeña le pega un disparo un cazador borracho.",
    author: "Homer"
  },
  {
    quote: "Librarte de formar parte de un jurado popular es fácil. Solo tienes que decir que tienes prejuicios contra todas las razas.",
    author: "Homer"
  },
  {
    quote: "Lisa, los vampiros son seres inventados, como los duendes, los gremlins y los esquimales.",
    author: "Homer"
  },
  {
    quote: "Mar, retrete del mundo. Los griegos te llamaban Poseidón, los romanos, eeeeh Aquaman.",
    author: "Homer"
  },
  {
    quote: "Marge, ¿Dónde está eso… esa cosa… que sirve para “taca” y a comer?",
    author: "Homer"
  },
  {
    quote: "Marge, eres tan hermosa como la Princesa Leia y tan lista como Yoda.",
    author: "Homer"
  },
  {
    quote: "No es fácil organizarse con una mujer embarazada e hijos con problemas. Pero de alguna forma consigo organizarme para ver la televisión 8 horas al día.",
    author: "Homer"
  },
  {
    quote: "No veo por qué no puedo castigarlos, son mis hijos, yo soy su dueño, (gruñido de Marge). ¡Está, bien, está bien! SOMOS sus dueños.",
    author: "Homer"
  },
  {
    quote: "Normalmente no rezo, pero si estás ahí, por favor, sálvame Superman.",
    author: "Homer"
  },
  {
    quote: "Oh, sí, ¿Qué vas a hacer? ¿Soltar los perros? ¿O las abejas? ¿O los perros con abejas en la boca para que cuando ladren las disparen contra ti?",
    author: "Homer"
  },
  {
    quote: "Para mentir se necesitan dos: Uno que mienta y otro que escuche.",
    author: "Homer"
  },
  {
    quote: "Puede tener todo el dinero del mundo, pero hay algo que nunca podrá comprar… Un dinosaurio.",
    author: "Homer"
  },
  {
    quote: "Sabéis hijos, un reactor nuclear es como una mujer. Solo tienes que leer el manual y apretar los botones adecuados.",
    author: "Homer"
  },
  {
    quote: "Sí, Marge, en teoría estoy contigo, pero en teoría funciona hasta el comunismo.",
    author: "Homer"
  },
  {
    quote: "Solo porque no me importa no significa que no lo entienda.",
    author: "Homer"
  },
  {
    quote: "Tres pequeñas frases que te ayudarán a lo largo de tu vida: la primera ¡Cúbreme!, la segunda ¡Buena idea jefe!, y la tercera; Estaba así cuando llegué.",
    author: "Homer"
  },
  {
    quote: "Voy a matar a Moe… Wiiiiii… Voy a matar a Moe… Wiiii.",
    author: "Homer"
  },
  {
    quote: "Ya me conoces, Marge; me gusta la cerveza fria, la tele a todo volumen y que los gais revoloteen.",
    author: "Homer"
  },
  {
    quote: "¡Milhouse, ¿Cómo alguien con unas gafas tan grandes puede ser tan tonto?!",
    author: "Bart"
  },
  {
    quote: "¿Besarte? ¡Papá, sólo soy tu hijo!",
    author: "Bart"
  },
  {
    quote: "¡Soy un unicornio retrasado!",
    author: "Ralph"
  },
  {
    quote: "¡Todo ha salido a pedir de Milhouse!",
    author: "Milhouse"
  },
  {
    quote: "Familia, amistad y religión, tres demonios a destruir si quieres triunfar en los negocios.",
    author: "Sr. Burns"
  },
  {
    quote: "Dicen que el alcohol borra la memoria… de lo demás no me acuerdo.",
    author: "Barney"
  },
  {
    quote: "Judías, judías legumbre musical. Cuántas más comas, más música habrá.",
    author: "Bart"
  },
  {
    quote: "¿Cuánto cobran los extras de cine? Porque dicen que me parezco a Macaulay Culkin.",
    author: "Moe"
  },
  {
    quote: "Yo creía que buscarse en Google significaba otra cosa.",
    author: "Marge"
  },
  {
    quote: "La opresión y la tiranía son una pequeña tasa por vivir en el país de la libertad.",
    author: "Sr. Burns"
  },
  {
    quote: "¡Oh, no! ¡Elecciones! ¿Es uno de esos días en que cierran las tabernas, no es cierto?",
    author: "Barney"
  },
  {
    quote: "¿Y para qué estudiar? Cuando sea grande quiero ser un gordo discapacitado como mi papá.",
    author: "Bart"
  },
  {
    quote: "Tenía una muñeca hinchable… y ella también me abandonó. No debí usar helio.",
    author: "Moe"
  }
]