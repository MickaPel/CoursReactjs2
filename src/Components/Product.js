import React from 'react'
import PropTypes from "prop-types";

export const Product = (props) => {
  const name = props.name;
  return (
    <div className='card'>
      <h3>{name}</h3>
    </div>
  )
}
export const ProductObj = ({name, price, currency = "€"}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Prix(HT): {price}{currency}</p>
      <p>Prix(TTC): {price * 1.2}{currency}</p>
    </div>
  )
}
export const ProductTyped = ({name, price, action, currency = "€"}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Prix(HT): {price}{currency}</p>
      <p>Prix(TTC): {price * 1.2}{currency}</p>
      <p>{action && <button onClick={action}>click</button>}</p>
    </div>
  )
}
//avec la librairie prop-types: rendre des données obligatoires et typés
ProductTyped.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  action: PropTypes.func
}