import React from 'react'

const Button = ({name,colorBg,onClick}) => {

  return (
    <button className={`${colorBg} py-[14px] px-5 font-light`} onClick={onClick}>{name}</button>
  )
}

export default Button