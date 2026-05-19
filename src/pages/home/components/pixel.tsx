import { useEffect, useState } from "react"
import type { Coordinate } from "../lib/type"
import { Character } from "./character"
import styles from "./pixel.module.scss"

type PixelProps = {
    firstPosition: Coordinate
    isPlayer?: boolean
}

export const Pixel = ({ firstPosition, isPlayer }: PixelProps) => {
    const [pos, setPos] = useState(firstPosition);

    // キー入力での移動処理
    useEffect(() => {
        if (!isPlayer) return;
        const handleKeyDown = (evt: KeyboardEvent) => {
            evt.preventDefault();

            switch (evt.key) {
                case "ArrowUp":
                    setPos((prev) => ({
                        ...prev,
                        y: prev.y > 1 ? prev.y - 1 : prev.y,
                    }));
                    break;

                case "ArrowDown":
                    setPos((prev) => ({
                        ...prev,
                        y: prev.y < 10 ? prev.y + 1 : prev.y,
                    }));
                    break;

                case "ArrowLeft":
                    setPos((prev) => ({
                        ...prev,
                        x: prev.x > 1 ? prev.x - 1 : prev.x,
                    }));
                    break;

                case "ArrowRight":
                    setPos((prev) => ({
                        ...prev,
                        x: prev.x < 10 ? prev.x + 1 : prev.x,
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
        <div className={styles.pixel} style={{
            gridRow: `${pos.y}`,
            gridColumn: `${pos.x}`,
        }}>
            <Character />
        </div>
    )
}