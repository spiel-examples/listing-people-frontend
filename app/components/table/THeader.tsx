import { h } from "spiel-client";
import { IHeader } from "../../helpers";
import { Icon } from "./TableStyles";

export function THeader({cols, orderCols, titles}: IHeader) {
    const headers = titles.map((col, index) => {
        if (cols[index]) {
            return (<td onclick={() => orderCols(cols[index].name)}>{col}
                 <i class="glyphicon glyphicon-sort"></i></td>);
        }
        return (<td>{col}</td>);
    });

    return(
        <thead>
            {cols}
        </thead>
    );
}
