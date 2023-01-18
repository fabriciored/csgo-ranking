import styles from "@/styles/Player.module.css";

interface playerProps {
    picture: string,
    name: string,
    flag: string
}

export default function Player(props: playerProps) {
    return (
    <>
        <div className={styles.player}>
        <img className={styles.playerImage} src={props.picture} alt={props.name} />
        <div className={styles.nameAndFlag}>
        <h4>{props.name}</h4>
        <img src={props.flag}/>
        </div>

        </div>
    </>
    )
}