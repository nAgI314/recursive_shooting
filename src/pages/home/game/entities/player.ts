import type { Coordinate, Direction } from "../../lib/type"

export type PlayerEntity = {
    id: string
    type: "player"

    position: Coordinate

    hp: number

    direction: Direction
}