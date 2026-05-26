import * as v from "valibot";
import type { PlayerEntity } from "../game/entities/player";
import type { EnemyEntity } from "../game/entities/enemy";
import type { BulletEntity } from "../game/entities/bullet";
import type { ObstacleEntity } from "../game/entities/obstacle";

const coordinateSchema = v.object({
    x: v.number(),
    y: v.number(),
})

export type Coordinate = v.InferOutput<typeof coordinateSchema>

export type Direction = "up" | "down" | "left" | "right"

const pixelSchema = v.object({
    coordinate: coordinateSchema,
    color: v.string(),
})

export type Pixel = v.InferOutput<typeof pixelSchema>

export type Stage = {
    player: PlayerEntity,
    enemies: EnemyEntity[],
    bullets: BulletEntity[],
    obstacles: ObstacleEntity[],
}