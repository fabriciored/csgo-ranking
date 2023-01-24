import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { GiTrophy, GiCrossedSwords } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai'
import { MdEventNote } from 'react-icons/md'


export default function Navbar() {
    return (
        <div className={styles.navbar}>
        <Link href="/">
          <p className={styles.navItem}><AiFillHome/> Home</p>
        </Link>
        <Link href="/ranking">
          <p className={styles.navItem}><GiTrophy/> Ranking</p>
        </Link>
        <Link href="/matches">
          <p className={styles.navItem}><GiCrossedSwords/> Matches</p>
        </Link>
        <Link href="/events">
          <p className={styles.navItem}><MdEventNote/> Events</p>
        </Link>
    </div>
    )
}