import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-slate-400 h-10 pt-2">
        <div className='flex justify-between items-center max-w6xl mx-auto p3 '>
            <h1 className='font-bold'>Auth App</h1>
            <ul className='flex gap-4'>
                <Link to ='/'>
                <li>home</li>
                </Link>
                <Link to ='/about'>
                <li>about</li>
                </Link>
                <Link to ='/sign-in'>
                <li>sign In</li>
                </Link>
            </ul>

        </div>

    </div>
  )
}

