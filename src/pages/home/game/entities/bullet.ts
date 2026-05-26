import type { Coordinate, Direction } from "../../lib/type"

export type BulletEntity = {
    id: string
    type: "bullet"

    position: Coordinate

    direction: Direction

    speed: number

    ownerId: string
}