import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Power digit sum",
    async callback() {
        const base = 2n;
        let exp = 1000n;

        let res = 1n;

        res = base ** exp;

        let sum = 0;

        while (res > 0) {
            const rest = res % 10n;
            sum += Number(rest);
            res /= 10n;
        }

        return sum;
    }
}