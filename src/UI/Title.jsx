import React from 'react'

const Title = ({name}) => {
  return (
    <h2 className='text-lg font-bold px-5 py-2 border-black border-2 w-fit bg-transparent'>{name.toUpperCase()}</h2>
  )
}

export default Title