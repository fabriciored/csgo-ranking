import styles from "@/styles/TeamCard.module.css";

interface teamProps {
  rank: string;
  teamName: string,
  logoUrl: string,
  player_picture: [string, string, string, string, string],
  player_name: [string, string, string, string, string],
  player_flag: [string, string, string, string, string],
}

export default function TeamCard(props: teamProps) {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <h2 className={styles.rank}>{props.rank}</h2>
          <img className={styles.logo} src={props.logoUrl} alt="" />
        </div>
        <div className={styles.right}>
        <h2 className={styles.name}>{props.teamName}</h2>
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.player}>
        <img src={props.player_picture[0]} alt={props.player_name[0]} />

        <div className={styles.nameAndFlag}>
          <h4>{props.player_name[0]}</h4>
          <img src={props.player_flag[0]}/>
        </div>


        </div>

        <div className={styles.player}>
        <img src={props.player_picture[1]} alt={props.player_name[1]} />

        <div className={styles.nameAndFlag}>
          <h4>{props.player_name[1]}</h4>
          <img src={props.player_flag[1]}/>
        </div>

        </div>

        <div className={styles.player}>
        <img src={props.player_picture[2]} alt={props.player_name[2]} />

        <div className={styles.nameAndFlag}>
          <h4>{props.player_name[2]}</h4>
          <img src={props.player_flag[2]}/>
        </div>

        </div>

        <div className={styles.player}>
        <img src={props.player_picture[3]} alt={props.player_name[3]} />

        <div className={styles.nameAndFlag}>
          <h4>{props.player_name[3]}</h4>
          <img src={props.player_flag[3]}/>
        </div>

        </div>

        <div className={styles.player}>
        <img src={props.player_picture[4]} alt={props.player_name[4]} />

        <div className={styles.nameAndFlag}>
          <h4>{props.player_name[4]}</h4>
          <img src={props.player_flag[4]}/>
        </div>

        </div>

      </div>
    </div>
  );
}
