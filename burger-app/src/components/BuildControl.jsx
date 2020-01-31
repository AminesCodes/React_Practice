import React from 'react'

export default function IngredientForm (props) {

    return (
        <div>
            <span>{props.ingredient}</span>
            <button onClick={() => props.handleQuantity(props.ingredient, 'less')} disabled={!props.quantity}>Less</button>
            <button onClick={() => props.handleQuantity(props.ingredient, 'more')}>More</button>
            <span>{props.quantity}</span>
        </div>
    )
}