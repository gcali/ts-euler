import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Special Pythagorean triplet",
    async callback() {
        for (let a = 1; a < 1000; a++) {
            for(let b = a+1; b < 1000-a-1; b++) {
                const c = 1000 - a - b;
                if (c > 0 && (a**2)+(b**2)===(c**2)) {
                    return a * b * c;
                }
            }
        }
        return "Not found";
    }
};