import React from 'react'
import ListLanguage from '../components/ListLanguage'
import Navbar from '../components/Navbar'
import "./homepage.css"

export const HomePage = () => {
    return (
        <div>
            <ListLanguage/>
              <Navbar />
            <div className="caja">
                <h1 className="title">GAMES OF THRONES</h1>
                <img className="image" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/6065c636-48ca-4142-8b36-8fd60a70402b.png" alt="Trono de Hierro" />
            </div>
        </div>
    )
}
