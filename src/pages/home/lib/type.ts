import * as v from "valibot";
import { playerEntitySchema, type PlayerEntity } from "../game/entities/player";
import { enemyEntitySchema, type EnemyEntity } from "../game/entities/enemy";
import { bulletEntitySchema, type BulletEntity } from "../game/entities/bullet";
import { obstacleEntitySchema, type ObstacleEntity } from "../game/entities/obstacle";
import { coordinateSchema } from "./baseType";

const pixelSchema = v.object({
    coordinate: coordinateSchema,
    color: v.string(),
})

export type EntityType = "player" | "enemy" | "bullet" | "obstacle"

export type Pixel = v.InferOutput<typeof pixelSchema>

export const stageSchema = v.object({
  player: playerEntitySchema,

  enemies: v.array(enemyEntitySchema),

  bullets: v.array(bulletEntitySchema),

  obstacles: v.array(obstacleEntitySchema),
})

export type Stage = {
    player: PlayerEntity,
    enemies: EnemyEntity[],
    bullets: BulletEntity[],
    obstacles: ObstacleEntity[],
}