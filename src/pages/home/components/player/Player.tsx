import { useEffect} from "react";
import { PlayerSprite } from "./PlayerSprite";
import { Pixel } from "../pixel";
import type { Coordinate, Direction} from "../../lib/baseType";
import { movePosition } from "../../game/systems/movement";

type PlayerProps = {
    position: Coordinate
    onMove?: (newPosition: Coordinate) => void
};

type keyDirectionMap = {
    [key: string]: Direction
}

const keyDirection: keyDirectionMap = {
    "ArrowUp": "up",
    "ArrowDown": "down",
    "ArrowLeft": "left",
    "ArrowRight": "right"
}

export const Player = ({ position, onMove }: PlayerProps) => {
    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            const direction = keyDirection[evt.key];
            if (direction) {
                onMove?.(movePosition(position, direction));
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [position, onMove]);

    return (
        <Pixel position={position}>
            <PlayerSprite />
        </Pixel>
    );
};
                  