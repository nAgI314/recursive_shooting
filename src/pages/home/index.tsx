import { Player } from "./components/player"
import styles from "./index.module.scss"
import type { Coordinate } from "./lib/type"

const Home = () => {
    const firstPosition: Coordinate = { x: 3, y: 2 }
    return (
        <div className={styles.layout}>
            <div className={styles.stage}>
                <Player firstPosition={firstPosition} />
            </div>
        </div>
    )
}

export default Home