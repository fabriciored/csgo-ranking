import { useState, useEffect } from "react";
import styles from "@/styles/TopTeams.module.css";
import MatchCard from "../MatchCard/MatchCard";


export default function MatchesList() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({
    result: {
      robotTasks: {
        items: [
          {
            capturedLists: {
              top_matches: [
                {
                  Position: "",
                  matchTime: "",
                  matchType: "",
                  team1Logo: "",
                  team1Name: "",
                  team2Logo: "",
                  team2Name: "",
                  eventLogo: "",
                  eventName: "",
                  matchDay: "string",
                },
              ],
            },
            inputParameters: {
              originUrl: "",
            },
          },
        ],
      },
    },
  });

  const apiEndpoint = `${process.env.NEXT_PUBLIC_MATCHES_API_URL}`;
  useEffect(() => {
    console.log(isLoading);
    fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json));

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

  }, []);

  // console.log(data.result.robotTasks.items[data.result.robotTasks.items.length - 1].capturedLists.top10_worldwide)

  const info =
    data.result.robotTasks.items[data.result.robotTasks.items.length - 1]
      .capturedLists.top_matches;


  function isNumber(str: string) {
    return /\d/.test(str);
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.lds_roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <h1>
            Next CSGO Matches
            <br />
          </h1>

          {info.map((info) => (
            
            <>

               {
                

               (info.matchDay !== null) ? 
                (info.matchDay[0] !== '1') ? <h3>{info.matchDay}</h3> :               
                <div className={styles.showTeams}>
                  <MatchCard
                    eventLogo={info.eventLogo}
                    eventName={info.eventName}
                    team1Logo={info.team1Logo}
                    team2Logo={info.team2Logo}
                    team1Name={info.team1Name}
                    team2Name={info.team2Name}
                    matchTime={info.matchTime}
                  />
                </div> : null
               
      
              } 
              
            </>
          ))}
        </>
      )}
    </>
  );
}
