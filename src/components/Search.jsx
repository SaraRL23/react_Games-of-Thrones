
import React from 'react'
import "./search.css"

function Search() {
  return (
    <div className='c-search'>
      <img className='c-search__img' src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg" alt="lupa_img" />
    <input placeholder='Buscar...' className='c-search__button' type="text" />
    </div>
  )
}

export default Search
