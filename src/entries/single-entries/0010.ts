import { buildSieve } from "../../support/prime";
import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Summation of primes",
    async callback() {
        const limit = 2000000;
        const sieve = await buildSieve(limit);
        return sieve.reduce((acc, next) => acc + next, 0);
    }
}