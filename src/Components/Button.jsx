import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className={`${props.color}  `} >{props.title}</button>
    </>
  )
}

export default Button
