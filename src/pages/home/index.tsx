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
import { checkWallCollision } from "./game/systems/collision";

const Home = () => {
    const mockStage =v.parse(stageSchema, MockStage)
    // console.log(mockStage)

    const [player, setPlayer] = useState<PlayerEntity>(mockStage.player)
    const [enemies, setEnemies] = useState<EnemyEntity[]>(mockStage.enemies)
    const [bullets, setBullets] = useState<BulletEntity[]>(mockStage.bullets)
    const [obstacles, setObstacles] = useState<ObstacleEntity[]>(mockStage.obstacles)

    const movePlayer = (newPosition: { x: number, y: number }) => {
        // ステージの範囲外に移動しないようにする
        if (checkWallCollision(newPosition, { x: mockStage.width, y: mockStage.height })) {
            return
        }
        setPlayer({ ...player, position: newPosition })
    }
    return (
        <div className={styles.layout}>
            <div className={styles.stage} style={{gridTemplateColumns:`repeat(${mockStage.width}, 1fr)`,gridTemplateRows:`repeat(${mockStage.height}, 1fr)`}}>
                <Player position={player.position} onMove={movePlayer} />
                <NormalEnemy firstPosition={{ x: 7, y: 8 }} />
            </div>
        </div>
    )
}

export default Home