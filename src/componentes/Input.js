import React from 'react'

const Input = ({placeInput, value,setPeso}) => {

  return (
    <input type='number' value={value} onChange={(e) => setPeso(e.target.value)} placeholder={placeInput}/>
  )
}

export default Input