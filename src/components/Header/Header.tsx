import styles from '@/styles/Header.module.css'

import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

export default function Header() {
return(
    <div className={styles.header}>
        <h1>CSGORanking</h1>
        <a href="https://fabriciodev.me" target={'_blank'}><h3 className={styles.visitMyWebsite}>Visit my website <HiArrowTopRightOnSquare/></h3></a>
    </div>
)
}