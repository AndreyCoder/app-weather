import { Link } from 'react-router-dom'
import s from './Card.module.css'
import Info from '../../media/info.png'
import Borrar from '../../media/borrar.png'

export default function Card({ min, max, name, img, onClose, wind, id }) {

  return (
    <div className={s.card}>

      <h1 className={s.title}>{name}</h1>

      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt={`Clima de la ciudad ${name}`}
      />

      <div className={s.main}>
        <button
          className={s.btn}
          onClick={onClose}>
          <img className={s.svg} src={Borrar} alt='boton de borrar' />
        </button>

        <button className={s.btninfo}>
          <Link to={`/ciudad/${id}`}>
            <img className={s.imginfo} src={Info} alt='boton de info' />
          </Link>
        </button>

        <div>
          <h3>Max</h3>
          <p>{max}°</p>
        </div>

        <div>
          <h3>Min</h3>
          <p>{min}°</p>
        </div>

        <div>
          <h3>Wind</h3>
          <p>{wind}<span>s</span></p>
        </div>

      </div>
    </div >
  )
};

