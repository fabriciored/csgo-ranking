import MatchesList from "@/components/MatchesList/MatchesList"
import styles from '@/styles/Matches.module.css'

export default function Matches() {
    return(
        <>  

      <main className={styles.main}>    
      <MatchesList/>
      </main>
        </>
    )
}