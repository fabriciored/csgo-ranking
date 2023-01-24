import styles from '@/styles/TopTeams.module.css'
import RankingList from '@/components/RankingList/RankingList';


export default function Ranking() {

  return (   
    <>  

      <main className={styles.main}>    

      <RankingList/>
      </main>
 
    </>
  )
}

