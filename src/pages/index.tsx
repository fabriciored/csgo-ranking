import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import TeamCard from '@/components/TeamCard/TeamCard';

export default function Home() {
  const [data, setData] = useState({
    result: {
      robotTasks: {
        items: [
          {
            capturedLists: {
              top10_worldwide: [{
                Position: "",
								rank: "#1",
								logo: "",
								name: "",
                player_picture1: "",
                player_name1: "",
                player_picture2: "",
                player_name2: "",
                player_picture3: "",
                player_name3:"",
                player_picture4: "",
                player_name4: "",
								player_picture5: "",
								player_name5: "",
								player_flag1: "",
								player_flag2: "",
								player_flag3: "",
								player_flag4: "",
								player_flag5: ""
              }, 
            ]
            },
            inputParameters: {
              originUrl: ""
            }
          }
        ]
      }
    }
  });
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}`
  useEffect(()=>{
    fetch(apiEndpoint, {
      method: "GET",
      headers: {"Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN}`}
    }).then(res => res.json()).then(json => setData(json));
  },[]);

// console.log(data.result.robotTasks.items[data.result.robotTasks.items.length - 1].capturedLists.top10_worldwide)

const info = data.result.robotTasks.items[data.result.robotTasks.items.length - 1].capturedLists.top10_worldwide

const originUrl = `${data.result.robotTasks.items[data.result.robotTasks.items.length - 1].inputParameters.originUrl}`

const day = originUrl.slice(48, 50)
const monthLowerCase = originUrl.slice(40, 47)
const month = monthLowerCase.charAt(0).toUpperCase() + monthLowerCase.slice(1);
const year = originUrl.slice(35, 39)

  return (
  
    <>
      <Head>
        <title>CSGO Ranking</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="width=1024"/>
      </Head>
      <main className={styles.main}>

        <h1>CSGO Top 10 Teams Ranking: {`${month} ${day}, ${year}`}<br/></h1>
        <div style={{
          "display": "flex",
          "flexDirection": "column",
          "alignContent": "space-between",
          "justifyContent": "center",
          "alignItems": "baseline",
        }}>
        {info.map((info) => 
        <>
                <TeamCard rank={info.rank} 
                teamName={info.name} 
                logoUrl={info.logo} 

                player_picture={[info.player_picture1, info.player_picture2, info.player_picture3, info.player_picture4, info.player_picture5]}

                player_name={[info.player_name1, info.player_name2, info.player_name3, info.player_name4, info.player_name5,]}
                
                player_flag={[info.player_flag1, info.player_flag2, info.player_flag3, info.player_flag4, info.player_flag5, ]}


                ></TeamCard>
        </>
        )}
        </div>
      </main>

    </>
  )
}
