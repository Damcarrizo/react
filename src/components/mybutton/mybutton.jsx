import React from 'react'

function MyButton(props) {
        
    
  return (
    <button style={{BackGroundColor: props.color }} className= "btn">{props.text}</button>
  )
  }

export default MyButton