import './CocktailPrev.css'
import React, { useState } from 'react'
import { Card ,Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
const CocktailPrev = ({drink}) => {
    const [isSelected , setIsSelected] = useState(false)
    const handleOnClick =() =>{
        setIsSelected(true)
    }

    if(!isSelected){
        return (
            <div className='CocktailPrev'>
                <Card className='card'>
                    <Card.Img className='img' variant='top' src={drink.strDrinkThumb}/>
                    <Card.Title>{drink.strDrink}</Card.Title>
                    <Button variant="outline-dark" onClick={handleOnClick} >Select</Button>
                </Card>
            </div>
        )
    }
    else{
        //return <Redirect to={{ 'cocktail/'+drink.idDrink},{idDrink={drink.idDrink></Redirect>
        return (
            <Redirect to={{
                pathname: 'cocktail/'+drink.idDrink,
                state: {id: drink.idDrink }
            }} 
            />  
        )
    }
}

export default CocktailPrev
