import { h } from "spiel-client";
import { IHeader } from "../../helpers";

export function THeader({cols, orderCols, titles}: IHeader) {
    const headers = titles.map((col, index) => {
        if (cols[index]) {
            return (<td onclick={() => orderCols(cols[index].name)}>{col}
                 <i class="ion-chevron-down"></i></td>);
        }
        return (<td>{col}</td>);
    });

    return(
        <thead>
            {headers}
        </thead>
    );
}
