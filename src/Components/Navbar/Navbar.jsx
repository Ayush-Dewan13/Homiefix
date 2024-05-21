import React, {useEffect, useState} from 'react'
import './navbar.css';

export const Navbar = () => {

    const [sticky, setSticky] = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 60){
                setSticky(true);
            }else{
                setSticky(false);
            }
        })
    },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <span className='headerlogo'>
            HomieFix
        </span>
        
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact Us
            </li>
            <li><button className='btn'>
                Login
            </button></li>
            <li><button className='btn'>
                Sign Up
            </button></li>
            
        </ul>
    </nav>
  )
}
