import './Random.css'
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import Cocktail from '../Cocktail/Cocktail'

const Random = () => {

    const [random , setRandom] = useState(null)

     useEffect(() => {
            const getRandom = () =>{
                axios
                    .get(`https://thecocktaildb.com/api/json/v1/1/random.php`)
                    .then((res)=>{
                        setRandom(res.data)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            };
            getRandom()
     }, [])

    return (
        <div className='Random'>
            {random &&
                <Cocktail drink={random.drinks[0]}/>
            }
        </div>
    )
}

export default Random
