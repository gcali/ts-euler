import { buildSieve, factorize } from "../../support/prime";
import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Largest prime factor",
    callback: async () => {
        const target = 600851475143;
        const factorization = await factorize(target);
        return factorization[factorization.length-1];
    }
}