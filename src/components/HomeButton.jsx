import React from 'react'
import { Link } from 'react-router-dom'
import "./homebutton.css"

const HomeButton = () => {
  return (
    <>
    <Link to="/"><img className='homebutton' src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/dbfeb53b-7b64-4e55-984b-6e3f413a161c.svg" alt="LogoHome" /></Link>
    </>
  )
}

export default HomeButton