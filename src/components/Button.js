import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
             <Link to={props.link}> <button className='button_orange'>  {props.name} </button></Link>

             
  
        </div>
    )
}

export default Button
