import * as v from "valibot";
import { stageSchema,type Stage } from "./type";

export const parseStage = (json: string): Stage => {
    const stage = JSON.parse(json)
    return v.parse(stageSchema, stage)
}