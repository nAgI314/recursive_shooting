import type { Coordinate } from "../../lib/baseType";

/**
 * 2つの座標が衝突しているかを判定する関数
 * @param position1 座標1
 * @param position2 座標2
 * @returns 衝突している場合はtrue、そうでない場合はfalse
 */
export const checkCollision = (
    position1: Coordinate,
    position2: Coordinate,
): boolean => {
    return position1.x === position2.x && position1.y === position2.y;
};
