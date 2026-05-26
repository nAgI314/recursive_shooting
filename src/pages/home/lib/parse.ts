import type{ Stage } from "./type";

export const parseStage = (json: string): Stage => {
    const stage = JSON.parse(json)
    return stage
}