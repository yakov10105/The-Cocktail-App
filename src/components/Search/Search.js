import './Search.css'
import React, { useRef ,useState , useEffect} from 'react'
import CocktailPrev from '../CocktailPreview/CocktailPrev'
import axios from 'axios'


const INITIAL_STATE = {
    term:'',
}
const Search = () => {

    const searchInputRef = useRef();
    const [resultData,setResultData] = useState({})
    const [values ,setValues] = useState(INITIAL_STATE)

    //#region UseEffects
    useEffect(() => {
        const timerSearch = setTimeout(() => {
            if(values.term){
                runSearch(values.term)
            }
        }, 500);
        return ()=>{
            clearTimeout(timerSearch);
        }
    
    }, [values.term])

    useEffect(() => {
        searchInputRef.current.focus();
    })
    //#endregion

    const handleSetValues = (event) =>{
        const {name,value}= event.target;
        setValues((previousState) => ({...previousState,[name]:value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        runSearch(values.term)
    }
    
    const runSearch = (term) =>{
        axios
            .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
            .then((res)=>{
                setResultData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <div className='Search'>
            <form onSubmit={handleSubmit}>
                <input
                    ref={searchInputRef}
                    type='text'
                    name='term'
                    className='search-input'
                    placeholder='Search for a Cocktail ...'
                    value={values.term}
                    onChange={handleSetValues}
                    autocomplete='off'/>

            </form>
            {resultData.drinks &&
                resultData.drinks.map((drink)=>
                    <CocktailPrev key={drink.idDrink} drink={drink} />
                )}
        </div>
    )
}

export default Search
