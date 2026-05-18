import styles from "./pixel.module.scss"

export const Pixel = (children: React.ReactNode) => {
    return (
        <div className={styles.pixel}>
            {children}
        </div>
    )
}