import * as v from "valibot";
import { coordinateSchema, directionSchema} from "../../lib/baseType"

export const playerEntitySchema = v.object({
  id: v.string(),
  type: v.literal("player"),

  position: coordinateSchema,

  hp: v.number(),

  direction: directionSchema,
})

export type PlayerEntity = v.InferOutput<typeof playerEntitySchema>