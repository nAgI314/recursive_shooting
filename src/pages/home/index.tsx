import { NormalEnemy } from "./components/enemy/normal/NormalEnemy"
import { Player } from "./components/player/Player"
import styles from "./index.module.scss"
import MockStage from "./lib/stages/mock.json"
import * as v from "valibot";
import { stageSchema} from "./lib/type";
import { useState } from "react";
import type { EnemyEntity } from "./game/entities/enemy";
import type { PlayerEntity } from "./game/entities/player";
import type { ObstacleEntity } from "./game/entities/obstacle";
import type { BulletEntity } from "./game/entities/bullet";

const Home = () => {
    const mockStage =v.parse(stageSchema, MockStage)
    // console.log(mockStage)

    const [player, setPlayer] = useState<PlayerEntity>(mockStage.player)
    const [enemies, setEnemies] = useState<EnemyEntity[]>(mockStage.enemies)
    const [bullets, setBullets] = useState<BulletEntity[]>(mockStage.bullets)
    const [obstacles, setObstacles] = useState<ObstacleEntity[]>(mockStage.obstacles)

    return (
        <div className={styles.layout}>
            <div className={styles.stage} style={{gridTemplateColumns:`repeat(${mockStage.width}, 1fr)`,gridTemplateRows:`repeat(${mockStage.height}, 1fr)`}}>
                <Player position={player.position} onMove={(newPosition) => setPlayer({...player, position: newPosition})} />
                <NormalEnemy firstPosition={{ x: 7, y: 8 }} />
            </div>
        </div>
    )
}

export default Home