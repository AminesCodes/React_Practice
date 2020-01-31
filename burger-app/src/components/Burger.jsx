import React from 'react'

import BurgerIngredient from './BurgerIngredient'

export default function Burger(props) {
    let ingredients = []
    for (let ing in props.ingredients) {
        ingredients = [...ingredients, ...Array(props.ingredients[ing]).fill(ing)]
    }

    return (
        <div style={{height: '250px', overflow: 'auto'}}>
            <BurgerIngredient type='bread-top' />
            {ingredients.length 
                ? ingredients.map((ing, i) => <BurgerIngredient key={ing+i} type={ing}/>)
                : <h4>Please start adding ingredients</h4>
            }
            <BurgerIngredient type='bread-bottom' />
            <h4>Total: {props.price}</h4>
        </div>
    )
}