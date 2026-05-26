import type { Coordinate } from "../../lib/type"

export type EnemyEntity = {
    id: string
    type: "enemy"

    position: Coordinate

    hp: number

    aiType: "chase" | "random"
}