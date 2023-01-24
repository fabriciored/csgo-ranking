import styles from "@/styles/Player.module.css";

interface playerProps {
    picture: string,
    name: string,
    flag: string,
    minimal?: boolean
}

export default function Player(props: playerProps) {
    return (
    <>
        <div className={styles.player}>
        <img className={!props.minimal ? styles.playerImage
        : styles.playerImageMinimal} src={props.picture} alt={props.name} />
        <div className={!props.minimal ? styles.nameAndFlag
        : styles.nameAndFlagMinimal}>
        <h4>{props.name}</h4>
        <img src={props.flag}/>
        </div>

        </div>
    </>
    )
}