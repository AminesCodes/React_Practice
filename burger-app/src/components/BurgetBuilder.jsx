import React, { useState } from 'react'

import Burger from './Burger'
import IngredientsForm from './IngredientsForm'

export default function BurgerBuilder() {
    const [ cheese, setCheese] = useState(0)
    const [ salad, setSalad] = useState(0)
    const [ meat, setMeat] = useState(0)
    const [ fish, setFish] = useState(0)

    const ingredients = {
        salad,
        meat,
        fish,
        cheese,
    }

    const handleQuantity = (ing, action) => {
        if (action === 'more') {
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
        } else if (action === 'less') {
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
            <IngredientsForm ingredients={ingredients} handleQuantity={handleQuantity} />
        </>
    )
    
}