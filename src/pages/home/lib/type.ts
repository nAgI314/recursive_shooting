import * as v from "valibot";

const coordinateSchema = v.object({
    x: v.number(),
    y: v.number(),
})

export type Coordinate = v.InferOutput<typeof coordinateSchema>

const pixelSchema = v.object({
    coordinate: coordinateSchema,
    color: v.string(),
})

export type Pixel = v.InferOutput<typeof pixelSchema>

const objectSchema = v.object({
    position: coordinateSchema,
    shape: v.array(pixelSchema),
})

export type Object = v.InferOutput<typeof objectSchema>

const playerSchema = v.object({
    object: objectSchema,
})

export type Player = v.InferOutput<typeof playerSchema>

const obstacleSchema = v.object({
    object: objectSchema,
})

export type Obstacle = v.InferOutput<typeof obstacleSchema>

export const stageSchema = v.object({
    player: playerSchema,
    obstacles: v.array(obstacleSchema),
})

export type Stage = v.InferOutput<typeof stageSchema>