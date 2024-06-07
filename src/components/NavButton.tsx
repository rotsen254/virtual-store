import styles from "./NavButton.module.css"
import { Link } from 'react-router-dom';

export function NavButton({titulo, link}){
    return(
        <>
        <li className={styles["nav-li"]}>
            <Link className={styles["nav-a"]} to={link}>
              {titulo}
           </Link>
          </li>
          </>
    )
}