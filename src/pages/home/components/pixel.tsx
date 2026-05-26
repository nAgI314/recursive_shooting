import type { Coordinate } from "../lib/baseType";
import styles from "./pixel.module.scss"

type PixelProps = {
    position: Coordinate
    children?: React.ReactNode
}

export const Pixel = ({ position, children }: PixelProps) => {
    return (
        <div
            className={styles.pixel}
            style={{
                gridRow: position.y,
                gridColumn: position.x,
            }}
        >
            {children}
        </div>
    );
};