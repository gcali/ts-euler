const entrySize = 6;

export type EntryCallback = () => Promise<string | number>;

export type EntryData = {
    title: string;
    callback: EntryCallback;
}

export const entryList: EntryData[] = [];

for (let i = 1; i <= entrySize; i++) {
    const key = i.toString().padStart(4, "0");
    const entry = require('./single-entries/' + key).entry as EntryData;
    entryList.push(entry);
}