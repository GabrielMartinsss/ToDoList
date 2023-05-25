import style from './Header.module.css'

import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={rocket} alt="Logo de um foguete" />
      <h1>
        to
        <span>do</span>
      </h1>
    </header>
  )
}