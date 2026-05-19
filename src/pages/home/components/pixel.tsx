import type { Coordinate } from "../lib/type"
import { Character } from "./character"
import styles from "./pixel.module.scss"

export const Pixel = (position:Coordinate) => {
    return (
        <div className={styles.pixel} style={{
        gridRow: `${position.y}`,
        gridColumn: `${position.x}`,
      }}>
            <Character/>
        </div>
    )
}