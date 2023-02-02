import { BsQuestionLg } from 'react-icons/bs'
import styles from "@/styles/MatchCard.module.css";

interface matchProps {
  eventLogo: string,
  eventName: string,
  team1Logo: string,
  team2Logo: string,
  team1Name: string,
  team2Name: string,
  matchTime: string
}

export default function MatchCard(props: matchProps) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={props.eventLogo} alt="" />
        <h4>{props.eventName}<br/>{props.matchTime}</h4>
      </div>
      <div className={styles.right}>
        <div className={styles.team1}>
          {props.team1Logo ? <img width={"30px"} src={props.team1Logo} alt="" /> : <BsQuestionLg className={styles.tbd}/>}
        <h4>{ props.team1Name ? props.team1Name : 'To be Determined'}</h4></div>
        <h3>x</h3>
        <div className={styles.team2}>
        {props.team2Logo ? <img width={"30px"} src={props.team2Logo} alt="" /> : <BsQuestionLg className={styles.tbd}/>}
          <h4>{ props.team2Name ? props.team2Name : 'To be Determined'} </h4></div>
      </div>
    </div>
  );
}
