import { EntryData } from "../main";

const isPalindrome = (n: number): boolean => {
    const stringed = n.toString();

    for (let i = 0; i < stringed.length/2; i++) {
        if (stringed[i] !== stringed[stringed.length-1-i]) {
            return false;
        }
    }

    return true;
}

export const entry: EntryData = {
    title: "Largest palindrom product",
    callback: async () => {
        let max = 0;
        for (let x = 0; x < 1000; x++) {
            for (let y = 0; y < 1000; y++) {
                const t = x * y;
                if (isPalindrome(t)) {
                    max = Math.max(t, max);
                }
            }
        }
        return max;
    }
};