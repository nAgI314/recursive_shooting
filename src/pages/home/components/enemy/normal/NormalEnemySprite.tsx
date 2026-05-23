import styles from "./NormalEnemySprite.module.scss"

export const NormalEnemySprite = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftArm}/>
            <div className={styles.rightArm}/>
            <div className={styles.leftLeg}/>
            <div className={styles.rightLeg}/>
            <div className={styles.BlackEye}/>
            <div className={styles.whiteOfEyes}/>
        </div>
    )
}