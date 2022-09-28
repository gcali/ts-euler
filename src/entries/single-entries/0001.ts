import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Multiples of 3 or 5",
    callback: async () => {
        const limit = 1000;

        let result = 0;

        for (let i = 1; i < limit; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                result += i;
            }
        }

        return "" + result;
    }
}