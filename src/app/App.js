import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import s from './App.module.css'

import Nav from '../components/nav/Nav.jsx';
import Cards from '../components/cards/Cards.jsx'
import About from '../components/about/About.jsx';
import City from '../components/city/City.jsx';
import NotFound from '../components/notFound/NotFound.jsx'

function App() {

  const [cities, setCities] = useState([])

  function onClose(id) {
    setCities(oldCities => oldCities.filter(el => el.id !== id))
  }

  const apiKey = 'b335a17a43a839a733450cf5fab3c851'

  function onSearch(city) {

    for (let ciudad of cities) {
      if (ciudad.name.toLowerCase() === city.toLowerCase()) {
        alert('La ciudad buscada ya esta en la lista')
        return
      }
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(recurso => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }
          setCities(oldCities => [...oldCities, city])
        } else {
          alert('Ciudad no encontrada')
        }
      })
      .catch(error => console.log(error))
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId))
    if (ciudad.length > 0) {
      return ciudad[0]
    } else {
      return null
    }
  }

  return (
    <div className={s.app}>

      <Routes>
        <Route path='/' element={<Nav onSearch={onSearch} />}>
          <Route index element={<Cards cities={cities} onClose={onClose} />} />
          <Route path='about' element={<About />} />
          <Route path='ciudad/:ciudadId' element={<City onFilter={onFilter} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
