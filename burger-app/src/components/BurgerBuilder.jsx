import React, { useState } from 'react'

import Burger from './Burger'
import IngredientsForm from './IngredientsForm'

const INGREDIENTS_PRICE = {
    salad: 0.5,
    meat: 1.5,
    fish: 1,
    cheese: 0.7,
}

export default function BurgerBuilder() {
    const [ cheese, setCheese] = useState(0)
    const [ salad, setSalad] = useState(0)
    const [ meat, setMeat] = useState(0)
    const [ fish, setFish] = useState(0)
    const [price, setPrice] = useState(5)

    const ingredients = {
        salad,
        meat,
        fish,
        cheese,
    }

    const handleQuantity = (ing, action) => {
        if (action === 'more') {
            setPrice(price + INGREDIENTS_PRICE[ing])
            switch (ing) {
                case 'salad':
                    setSalad(salad + 1)
                    break;
                case 'meat':
                    setMeat(meat + 1)
                    break;
                case 'fish':
                    setFish(fish + 1)
                    break;
                case 'cheese':
                    setCheese(cheese + 1)
                    break;
                default:
                    break;
            }
        } else if (action === 'less' && ingredients[ing]) {
            if (price > 0) {
                setPrice(price - INGREDIENTS_PRICE[ing])
            }
            switch (ing) {
                case 'salad':
                    setSalad(salad - 1)
                    break;
                case 'meat':
                    setMeat(meat - 1)
                    break;
                case 'fish':
                    setFish(fish - 1)
                    break;
                case 'cheese':
                    setCheese(cheese - 1)
                    break;
                default:
                    break;
            }
        }
        
    }

    return (
        <>
            <Burger ingredients={ingredients}/>
            <IngredientsForm ingredients={ingredients} handleQuantity={handleQuantity}  price={price}/>
        </>
    )
    
}