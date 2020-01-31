import React from 'react'
import './burgerIngredients.css'
import propTypes from 'prop-types'

export default function BurgerIngredient(props) {

    switch (props.type) {
        case 'bread-bottom':
            return <div className='BreadBottom'></div>

        case 'bread-top':
            return (<div className='BreadTop'> 
                        <div className='Seeds1'></div>
                        <div className='Seeds2'></div>
                    </div>)

        case 'meat':
            return <div className='Meat'></div>

        case 'cheese':
            return <div className='Cheese'></div>

        case 'salad':
            return <div className='Salad'></div>

        case 'fish':
            return <div className='Fish'></div>

        default:
            return null;
    }
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}