import { useState } from "react";
import { EntryData } from "../../entries/main";

import './Entry.css';

export type EntryProps = {
    entry: EntryData;
    index: number;
}

const unbreakable = "\u00A0";

export function Entry(props: EntryProps) {

    const [output, setOutput] = useState(unbreakable);

    const {title, callback} = props.entry;
    const handleClick = async () => {
        setOutput((await callback()).toString() || unbreakable);
    }
    const formattedIndex = (props.index + 1).toString().padStart(4, "0");

    return (
        <div className="entry">
            <div className="entry-title">Problem {formattedIndex}: {title}</div>
            <div className="entry-output">{output}</div>
            <button onClick={handleClick}>Run</button>
        </div>
    );
}