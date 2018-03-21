import { h } from "spiel-client";
import { IHeader } from "../../helpers";
import { Icon } from "./TableStyles";

export function THeader({cols, orderCols, titles}: IHeader) {
    const headers = titles.map((col, index) => {
        if (cols[index]) {
            return (<td onclick={() => orderCols(cols[index].name)}>{col}
                 <Icon class="ion-chevron-down"></Icon></td>);
        }
        return (<td>{col}</td>);
    });

    return(
        <thead>
            {headers}
        </thead>
    );
}
