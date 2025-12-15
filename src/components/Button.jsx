import React from 'react'

const Button = ({text,style}) => {
  return (
    <button style={style ? style : {background : "red"}}>{text}</button>
  )
}

export default Button
