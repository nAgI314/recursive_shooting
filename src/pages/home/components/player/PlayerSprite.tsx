import styles from "./PlayerSprite.module.scss"

export const Character = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftEye}/>
            <div className={styles.rightEye}/>
            <div className={styles.leftArm}/>
            <div className={styles.rightArm}/>
            <div className={styles.leftLeg}/>
            <div className={styles.rightLeg}/>
        </div>
    )
}