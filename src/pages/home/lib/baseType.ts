import * as v from "valibot";

export const coordinateSchema = v.object({
    x: v.number(),
    y: v.number(),
})

export type Coordinate = v.InferOutput<typeof coordinateSchema>

export const directionSchema = v.picklist([
  "up",
  "down",
  "left",
  "right",
])

export type Direction = v.InferOutput<typeof directionSchema>