import { NormalEnemy } from "./components/enemy/normal/NormalEnemy"
import { Player } from "./components/player/Player"
import styles from "./index.module.scss"
import type { Coordinate } from "./lib/type"

const Home = () => {
    const firstPosition: Coordinate = { x: 3, y: 2 }
    return (
        <div className={styles.layout}>
            <div className={styles.stage}>
                <Player firstPosition={firstPosition} />
                <NormalEnemy firstPosition={{ x: 7, y: 8 }} />
            </div>
        </div>
    )
}

export default Home