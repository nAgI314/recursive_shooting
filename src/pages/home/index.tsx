import { Pixel } from "./components/pixel"
import styles from "./index.module.scss"

const Home = () => {
    const firstPosition = { x: 3, y: 2 }
    return (
        <div className={styles.layout}>
            <div className={styles.stage}>
                <Pixel firstPosition={firstPosition} isPlayer={true} />
                <Pixel firstPosition={firstPosition} isPlayer={false} />
            </div>
        </div>
    )
}

export default Home