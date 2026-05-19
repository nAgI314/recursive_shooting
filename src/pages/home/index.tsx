import { Pixel } from "./components/pixel"
import styles from "./index.module.scss"

const Home = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.stage}>
                <Pixel x={4} y={3}/>
            </div>
        </div>
    )
}

export default Home