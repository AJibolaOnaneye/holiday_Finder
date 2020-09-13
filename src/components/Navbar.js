import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='navbar'>
                <div className='ellipse1'><div className='ellipse2'>&nbsp; </div> </div>
        <ul>
            <li id='links'>  <Link className='link' to='/'>Home</Link> </li>
            <li id='links'> <Link className='link' to='/destination'>Destinations</Link> </li>
            <li id='links'> <Link className='link' to='/about'>About</Link> </li>
            <li id='links'> <Link className='link' to='/partner'>Partner</Link> </li>
            <li> <Link to='/login'> <button className='button_white'> Login </button> </Link> </li>
            <li> <Button link= '/register' name='Register' /></li>
            
        </ul>
        </div>
    )
}

export default Navbar
