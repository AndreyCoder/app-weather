import React, { useState } from 'react';
import s from './SearchBar.module.css'
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {

  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className={s.contenedor}>
      <div className={s.search}>

        <form onSubmit={(e) => {
          e.preventDefault()
          onSearch(input)
          setInput('')
        }}>
          <input
            className={s.searchinput}
            type="text"
            placeholder="Busca tu ciudad"
            onChange={handleInput}
            value={input}
          />
          <button
            className={s.searchbutton}>
            <span className={s.searchicon}>
              <FiSearch />
            </span>
          </button>
        </form>

      </div>
    </div>
  )
};

