import React from 'react'

import BuildControl from './BuildControl'

export default function IngredientForm (props) {

    return (
        <div>
            <h4>Total: {props.price}</h4>
            <h3>Ingredients</h3>
            {Object.keys(props.ingredients).map(ing => <BuildControl 
                    key={ing} 
                    ingredient={ing}
                    handleQuantity={props.handleQuantity}
                    quantity={props.ingredients[ing]}
                />)}
        </div>
    )
}