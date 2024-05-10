import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg';

export function Header(){
    return(
        <header className={styles.header}>
                <img src={rocketLogo} alt="" />
                <p>to<span className={styles.lastLetters}>do</span></p>
        </header>
    )
}