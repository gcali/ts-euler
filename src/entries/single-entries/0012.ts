import { factorize, numberOfDivisors, ReusableSieve } from "../../support/prime";
import { subsetGenerator } from "../../support/sequences";
import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Highly divisible triangular number",
    async callback() {
        const limit = 500;
        let sum = 0;
        let next = 1;

        const sieve = new ReusableSieve();

        while (true) {
            sum += (next++);
            const factorization = await factorize(sum, sieve);
            const divisors = numberOfDivisors(factorization);
            if (divisors > limit) {
                return sum;
            }
        }
    }
};