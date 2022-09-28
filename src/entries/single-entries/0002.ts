import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Even Fibonacci numbers",
    callback: async () => {
        let a = 1;
        let b = 2;
        let sum = 0;
        while (b < 4000000) {
            if (b % 2 === 0) {
                sum += b;
            }

            const current = a + b;
            a = b;
            b = current;
        }
        return sum;
    }
}