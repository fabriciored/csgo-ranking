import Player from "@/elements/Player/Player";
import styles from "@/styles/TeamCard.module.css";

interface teamProps {
  rank: string;
  teamName: string;
  logoUrl: string;
  player_picture: [string, string, string, string, string];
  player_name: [string, string, string, string, string];
  player_flag: [string, string, string, string, string];
  minimal?: boolean;
}

export default function TeamCard(props: teamProps) {
  return (
    <div className={!props.minimal ? styles.card : styles.cardMinimal}>
      <div className={styles.upper}>
        <div className={!props.minimal ? styles.left : styles.leftMinimal}>
          {props.rank == "#1" ? (
            <h2 className={styles.rank1}>{props.rank}</h2>
          ) : props.rank == "#2" ? (
            <h2 className={styles.rank2}>{props.rank}</h2>
          ) : props.rank == "#3" ? (
            <h2 className={styles.rank3}>{props.rank}</h2>
          ) : (
            <h2 className={styles.rank}>{props.rank}</h2>
          )}
          <img className={!props.minimal ? styles.logo : styles.logoMinimal} src={props.logoUrl} alt="" />
        </div>
        <div className={!props.minimal ? styles.right : styles.rightMinimal}>
          <h2 className={styles.name}>{props.teamName}</h2>
        </div>
      </div>

      <div className={styles.lower}>
        {!props.minimal ? (
          <>
            <Player
              picture={props.player_picture[0]}
              name={props.player_name[0]}
              flag={props.player_flag[0]}
            ></Player>
            <Player
              picture={props.player_picture[1]}
              name={props.player_name[1]}
              flag={props.player_flag[1]}
            ></Player>
            <Player
              picture={props.player_picture[2]}
              name={props.player_name[2]}
              flag={props.player_flag[2]}
            ></Player>
            <Player
              picture={props.player_picture[3]}
              name={props.player_name[3]}
              flag={props.player_flag[3]}
            ></Player>
            <Player
              picture={props.player_picture[4]}
              name={props.player_name[4]}
              flag={props.player_flag[4]}
            ></Player>
          </>
        ) : (
          <>
            <Player
              picture={props.player_picture[0]}
              name={props.player_name[0]}
              flag={props.player_flag[0]}
              minimal
            ></Player>
            <Player
              picture={props.player_picture[1]}
              name={props.player_name[1]}
              flag={props.player_flag[1]}
              minimal
            ></Player>
            <Player
              picture={props.player_picture[2]}
              name={props.player_name[2]}
              flag={props.player_flag[2]}
              minimal
            ></Player>
            <Player
              picture={props.player_picture[3]}
              name={props.player_name[3]}
              flag={props.player_flag[3]}
              minimal
            ></Player>
            <Player
              picture={props.player_picture[4]}
              name={props.player_name[4]}
              flag={props.player_flag[4]}
              minimal
            ></Player>
          </>
        )}
      </div>
    </div>
  );
}
