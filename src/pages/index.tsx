import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import RankingList from '@/components/RankingList/RankingList'
import MatchesList from '@/components/MatchesList/MatchesList'

export default function Home() {

  return (   
    <>
      <Head>
        <title>CSGO Ranking</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="width=1024"/>       
      </Head>      

      <main className={styles.main}>


      <div className={styles.homeItems}>
        <div>      <RankingList minimal /></div>
        <div>      <MatchesList /></div>


      </div>
      </main>
 
    </>
  )
}

