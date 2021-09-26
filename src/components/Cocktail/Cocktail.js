import './Cocktail.css'
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'

const Cocktail = (props) => {

    const [id,setId]=useState(props.location? props.location.state.id : null);
    const [drink,setDrink]=useState(null);

    useEffect(()=>{
        if(id){
            axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res)=>{
                setDrink(res.data.drinks[0])
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else return
    },[id])
    
    const getIngridientList = (drink) =>{    
        const filterWantAmount= (item)=>{
            if(item.qty === null){
                return (<span>{item.ing}</span>)
            }
            else{
                return(<span>{item.ing +' : ' + item.qty}</span>)
            }
        }
        const tempList = [
            {ing: drink.strIngredient1,qty:drink.strMeasure1},
            {ing: drink.strIngredient2,qty:drink.strMeasure2},
            {ing: drink.strIngredient3,qty:drink.strMeasure3},
            {ing: drink.strIngredient4,qty:drink.strMeasure4},
            {ing: drink.strIngredient5,qty:drink.strMeasure5},
            {ing: drink.strIngredient6,qty:drink.strMeasure6},
            {ing: drink.strIngredient7,qty:drink.strMeasure7},
            {ing: drink.strIngredient8,qty:drink.strMeasure8},
            {ing: drink.strIngredient9,qty:drink.strMeasure9},
            {ing: drink.strIngredient10,qty:drink.strMeasure10},
            {ing: drink.strIngredient11,qty:drink.strMeasure11},
            {ing: drink.strIngredient12,qty:drink.strMeasure12},
            {ing: drink.strIngredient13,qty:drink.strMeasure13},
            {ing: drink.strIngredient14,qty:drink.strMeasure14},
            {ing: drink.strIngredient15,qty:drink.strMeasure15},
        ]
        const list = tempList
            .filter((item) =>(item.ing !== null ))

        list.forEach((item)=>{
            item.ing='# '+item.ing
        })
        
        return list.map((item)=>{
            return (
                <p>{filterWantAmount(item)}</p>
                )
            })
        }  
        
    const renderCocktail =(drink)=>{
        return(
            <div className='Cocktail'>
                <h1>{drink.strDrink}</h1>
                <img className='drink-img' src={drink.strDrinkThumb} alt={drink.strDrink}/>
                <h3>Category : {drink.strCategory}</h3>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Ingridients</Accordion.Header>
                        <Accordion.Body className='ingredients'>
                            {getIngridientList(drink)}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Preparation Method</Accordion.Header>
                        <Accordion.Body className='recipe'>
                            <p>{drink.strInstructions}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    }

    if(props.drink){
        return renderCocktail(props.drink)
    }
    else return (
        <>
            {drink &&
                renderCocktail(drink)
            }
        </>
    )
}

export default Cocktail