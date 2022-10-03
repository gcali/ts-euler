import { buildSieve } from "../../support/prime";
import { EntryData } from "../main";

export const entry: EntryData = {
    title: "10001st prime",
    async callback() {
        const target = 10001;
        let limit = target * 10;
        while(true) {
            const sieve = await buildSieve(limit);
            if (sieve.length >= target) {
                return sieve[target-1];
            }
            limit *= 2;
        }
    }
};