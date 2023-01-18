import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

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
                player_pictue1: "",
                player_name1: "",
                player_pictue2: "",
                player_name2: "",
                player_pictue3: "",
                player_name:"",
                player_pictue4: "",
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

const monthAndDay = originUrl.slice(40)
const year = originUrl.slice(35, 39)

  return (
    
    <>
      <Head>
        <title>CSGO Ranking</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>CSGO Top 10 Teams Ranking as of {`${monthAndDay}/${year}`}<br/></h1>
        <div style={{
          "display": "flex",
          "flexDirection": "column",
          "alignContent": "space-between",
          "justifyContent": "center",
          "alignItems": "baseline",
          "width": "300px"
        }}>
        {info.map((info) => 
        <>
        <div style={{
          "display": "flex",
          "width": "100%",
          "margin": "5px"
      
        }}>
        <h2 style={{
          "display": "flex",
          "alignSelf": 'flex-start'
        }}>{info.rank}</h2>
        <h2 style={{
          "display": "flex",
          "margin": "auto"
        }}>{info.name}</h2>
        <img style={{
          "display": "flex",
          "alignSelf": 'flex-end'
        }} width={"30px"} src={info.logo} alt="" />
        </div>
        </>
        )}
        </div>
      </main>

    </>
  )
}
