import styles from './Header.module.css'

import ship from '../assets/ship.png'

export function Header(){
  return(
    <header className={styles.header}>
      <img src={ship} alt="Nave espacial azul" />

      <strong>to<span>do</span></strong>
    </header>
  )
}