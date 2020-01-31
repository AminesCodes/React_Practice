import React, { useState } from 'react'

import Burger from './Burger'

export default function BurgerBuilder() {
    const [ cheese, setCheese] = useState(2)
    const [ salad, setSalad] = useState(2)
    const [ meat, setMeat] = useState(1)
    const [ fish, setFish] = useState(1)

    const ingredients = {
        salad,
        meat,
        fish,
        cheese,
    }

    return (
        <>
            <Burger ingredients={ingredients}/>
            <div>Ingredients</div>
        </>
    )
    
}