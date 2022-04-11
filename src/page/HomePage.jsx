import React from 'react'
import ListLanguage from '../components/ListLanguage'
import Navbar from '../components/Navbar'
import "./homepage.css"

export const HomePage = () => {
    return (
        <>
        <ListLanguage/>
              <Navbar />
        <div className='fondo'>
            
            <div className="caja">
                <h1 className="title">GAMES OF THRONES</h1>
            </div>
        </div>
        </>
    )

}
