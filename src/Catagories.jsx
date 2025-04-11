import React from 'react'

function Catagories(props) {
    const {data} = props
  return (
    <>
        <button className='diffCat'>{data.name}</button>
    </>
  )
}

export default Catagories