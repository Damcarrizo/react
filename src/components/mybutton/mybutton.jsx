import React, {useState} from 'react';
import "./myButton.css" 

function MyButton(props) {
  const [colorBtn, setColorBtn] = useState(props.colorBtn); //

  function handleClick(){
    setColorBtn('grey')
    props.onClick && props.onClick();
  }
  return (
    <div>
    <button
    disabled={props.disabled}
    type={props.type}
     onClick={handleClick}
     style={{backgroundColor: colorBtn}}
     className='btn'>
      {props.children}</button>
    </div>
  )
  }

export default MyButton