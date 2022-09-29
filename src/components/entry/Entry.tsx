import { useState } from "react";
import { EntryData } from "../../entries/main";
import { serializeTime, TimeCalculator } from "../../support/time";

import './Entry.css';

export type EntryProps = {
    entry: EntryData;
    index: number;
}

const unbreakable = "\u00A0";

export function Entry(props: EntryProps) {

    const [output, setOutput] = useState(unbreakable);
    const [time, setTime] = useState(null as number|null);

    const {title, callback} = props.entry;
    const handleClick = async () => {
        const timeCalculator = new TimeCalculator();
        timeCalculator.start();
        setOutput((await callback()).toString() || unbreakable);
        const delta = timeCalculator.getDelta();
        setTime(Math.max(delta));
    }
    const formattedIndex = (props.index + 1).toString().padStart(4, "0");

    return (
        <div className="entry">
            <div className="entry-title">Problem {formattedIndex}: {title}</div>
            {time !== null && <div className="entry-time">{time === 0 ? "<1" : time}ms</div>}
            <div className="entry-output">{output}</div>
            <button onClick={handleClick}>Run</button>
        </div>
    );
}