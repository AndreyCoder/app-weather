import React from 'react'
import s from './City.module.css'
import Atras from '../../media/atras.png'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const City = ({ onFilter, }) => {

  const params = useParams()
  const city = onFilter(params.ciudadId)

  return (
    <div>
      {
        city ?
          <div className={s.container}>
            <h3 className={s.title}>{city.name}</h3>

            <div className={s.contenedor}>
              <button className={s.btn}>
                <Link to='/'>
                  <img className={s.btnBack} src={Atras} alt='boton de retroseder' />
                </Link>
              </button>

              <div>
                <p>Max {city.max}</p>
                <p>Min {city.min}</p>
              </div>

              <div>
                <p>Temp {city.temp}</p>
                <p>Wind {city.wind}</p>
              </div>

              <div>
                <p>Latitud {city.latitud}</p>
                <p>Longitud {city.longitud}</p>
              </div>

              <div>
                <p>Clouds {city.clouds}</p>
                <p>Weather {city.weather}</p>
              </div>
            </div>

          </div>
          : <div><h3>Informacion no encontrada</h3></div>
      }
    </div>
  )
}

export default City

