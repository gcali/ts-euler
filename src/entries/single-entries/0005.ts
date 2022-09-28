import { lcm } from "../../support/algebra";
import { EntryData } from "../main";

export const entry: EntryData = {
    title: "Smallest multiple",
    async callback() {
        let current = 1;

        for (let i = 1; i <= 20; i++) {
            current = lcm(current, i);
        }

        return current;
    }
}