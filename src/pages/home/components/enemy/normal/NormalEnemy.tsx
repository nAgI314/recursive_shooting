import { useEffect, useState } from "react";
import type { Coordinate } from "../../../lib/baseType";
import { Pixel } from "../../pixel";
import { NormalEnemySprite } from "./NormalEnemySprite";

type NormalEnemyProps = {
    firstPosition: Coordinate
};

export const NormalEnemy = ({ firstPosition }: NormalEnemyProps) => {
    const [pos, setPos] = useState(firstPosition);

    return (
        <Pixel position={pos}>
            <NormalEnemySprite />
        </Pixel>
    );
};