// import React, { useContext } from 'react'
// import { useForm } from 'react-hook-form'
// import { useLocation, useParams } from 'react-router-dom'
// import { FindContext } from '../Context/FindContext'

// const Finder = () => {
//     const {register, watch} = useForm()
//     const location = useLocation()
//     const {setFind} = useContext(FindContext)
//     const {name} = useParams();

//     setFind(watch('NewFind'))
//   return (
//     <>
//     {location.pathname=== '/characters' || location.pathname === "/houses" ? <div className='find-contain'>
//     <img className='find-img' src = 'https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg' alt = 'find'></img>
//     <input className='finder' type="text" placeholder='buscar'{... register('NewFind')}></input>
//     </div>:null}
//     </>
//   )
// }

// export default Finder