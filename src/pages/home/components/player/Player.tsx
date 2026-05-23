import { useEffect, useState } from "react";
import { PlayerSprite } from "./PlayerSprite";
import { Pixel } from "../pixel";
import type { Coordinate } from "../../lib/type";

type PlayerProps = {
    firstPosition: Coordinate
};

export const Player = ({ firstPosition }: PlayerProps) => {
    const [pos, setPos] = useState(firstPosition);

    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            switch (evt.key) {
                case "ArrowUp":
                    setPos((prev) => ({
                        ...prev,
                        y: Math.max(1, prev.y - 1),
                    }));
                    break;
                case "ArrowDown":
                    setPos((prev) => ({
                        ...prev,
                        y: Math.min(10, prev.y + 1),
                    }));
                    break;
                case "ArrowLeft":
                    setPos((prev) => ({
                        ...prev,
                        x: Math.max(1, prev.x - 1),
                    }));
                    break;
                case "ArrowRight":
                    setPos((prev) => ({
                        ...prev,
                        x: Math.min(10, prev.x + 1),
                    }));
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Pixel position={pos}>
            <PlayerSprite />
        </Pixel>
    );
};