import type { Coordinate } from "../../lib/type"

export type ObstacleEntity = {
    id: string
    type: "obstacle"

    position: Coordinate

    breakable: boolean
    hp: number|null
}