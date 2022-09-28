import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Sum square difference",
    async callback() {
        const limit = 100;
        let squareSum = 0;
        for(let i = 1; i <= limit; i++) {
            squareSum += (i**2);
        }

        let sumSquared = limit*(limit+1)/2;
        sumSquared = sumSquared**2;

        return sumSquared - squareSum;
        
    }
};