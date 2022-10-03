import { Coordinate, serialization } from "../../support/geometry";
import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Lattice paths",
    async callback() {
        const size: Coordinate = {x: 20, y: 20};

        const memoized: {[key: string]: number} = {};

        const calculate = (currentSize: Coordinate): number => {
            const key = serialization.serialize(currentSize);
            if (memoized[key] !== undefined) {
                return memoized[key];
            }
            if (currentSize.x === 0 && currentSize.y === 0) {
                return 1;
            }
            let res = 0;
            if (currentSize.y > 0) {
                res += calculate({x: currentSize.x, y: currentSize.y - 1});
            }
            if (currentSize.x > 0) {
                res += calculate({x: currentSize.x - 1, y: currentSize.y});
            }
            memoized[key] = res;
            return res;
        }


        return calculate(size);
    }
};