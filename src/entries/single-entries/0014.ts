import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Longest Collatz sequence",
    async callback() {

        const memoized: {[key: number]: number} = {};

        const collatzLength = (n: number): number => {
            const start = n;
            let steps = 0;
            const full: Array<{v: number; s: number}> = [{v: start, s: 0}];
            while(n > 1) {
                if (memoized[n] !== undefined) {
                    const length = memoized[n] + steps;
                    for (const item of full) {
                        memoized[item.v] = length - item.s;
                    }
                    return length;
                }
                if (n % 2 === 0) {
                    n /= 2;
                } else {
                    n = (n*3) + 1;
                }
                steps++;
                full.push({v: n, s: steps});
            }
            const length = steps + 1;
            for (const item of full) {
                memoized[item.v] = length - item.s;
            }
            return length;
        };

        const limit = 1000000;
        let max = 0;
        let best = 0;
        for (let i = 1; i < limit; i++) {
            const v = collatzLength(i);
            if (v > max) {
                max = v;
                best = i;
            }
        }
        return best;
    }
};