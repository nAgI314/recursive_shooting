import * as v from "valibot";
import { coordinateSchema } from "../../lib/baseType"

export const obstacleEntitySchema = v.object({
    id: v.string(),
    type: v.literal("obstacle"),
    position: coordinateSchema,
    breakable: v.boolean(),
    hp: v.nullable(v.number()),
})

export type ObstacleEntity = v.InferOutput<typeof obstacleEntitySchema>