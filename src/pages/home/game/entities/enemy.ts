import * as v from "valibot";
import { coordinateSchema } from "../../lib/baseType"

export const enemyEntitySchema = v.object({
    id: v.string(),
    type: v.literal("enemy"),
    position: coordinateSchema,
    hp: v.number(),
    aiType: v.picklist(["chase", "random"]),
})

export type EnemyEntity = v.InferOutput<typeof enemyEntitySchema>