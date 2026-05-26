import * as v from "valibot";
import { coordinateSchema, directionSchema } from "../../lib/baseType"

export const bulletEntitySchema = v.object({
    id: v.string(),
    type: v.literal("bullet"),
    position: coordinateSchema,
    direction: directionSchema,
    speed: v.number(),
    ownerId: v.string(),
})

export type BulletEntity = v.InferOutput<typeof bulletEntitySchema>