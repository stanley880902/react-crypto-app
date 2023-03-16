import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ back }) {
  return (
    <header className='header'>
        <div className='width'>
            {back && (
            <Link to='/'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 48 48"
                    width="24"
                >
                    <path 
                        fill="currentColor"
                        d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"
                    />
                </svg>
            </Link>
            )}
            <h1>
                <Link to='/'> STTS Coiner </Link>
            </h1>
        </div>
    </header>
  )
}
