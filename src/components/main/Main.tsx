import React from "react";
import { entryList } from "../../entries/main";
import { Entry } from "../entry/Entry";

import './Main.css';

export function Main() {
    const entries = entryList.map((e, index) => (
        <Entry index={index} entry={e} key={index}/>
    )).reverse();

    return (
        <div className="entry-list">
            {entries}
        </div>
    )
}