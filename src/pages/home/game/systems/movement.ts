import type { Coordinate, Direction } from "../../lib/baseType";

/** 
* 指定方向に座標を移動させる関数
* @param position 移動させる座標
* @param direction 移動させる方向
* @param length 移動させる距離。省略した場合は1
* @returns 移動後の座標
*/
export const movePosition = (
    position: Coordinate,
    direction: Direction,
    length: number = 1,
): Coordinate => {
    switch (direction) {
        case "up":
            return {
                ...position,
                y: position.y - length,
            };

        case "down":
            return {
                ...position,
                y: position.y + length,
            };

        case "left":
            return {
                ...position,
                x: position.x - length,
            };

        case "right":
            return {
                ...position,
                x: position.x + length,
            };
    }
};