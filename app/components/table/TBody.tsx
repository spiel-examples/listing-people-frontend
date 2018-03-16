import { h } from "spiel-client";
import { IBody } from "../../helpers";
import { Link } from "./TableStyles";

export function TBody({changeSure, cols, deleteRow, elements, sure}: IBody) {
    const rows = elements.map((element) =>
        <tr key={element._id}>
            {cols.map((col: any) => {
                if (col.type === "checkbox") {
                    return (
                        <td>
                            <input type="checkbox" checked={element[col.name]} disabled></input>
                        </td>
                    );
                }

                return (<td>{element[col.name]}</td>);
            })}
            <td class="text-center delete">
                {sure[element._id] ?
                    <p>Are you sure?
                        <Link class="btn btn-warning" onclick={() => deleteRow(element._id)}>yes</Link>
                        <Link class="btn btn-default" onclick={() => changeSure(element._id)}>No</Link></p>
                    : <button class="btn btn-danger" onclick={() => changeSure(element._id)}>X</button>}
            </td>
        </tr>,
    );

    return(
        <tbody>{rows}</tbody>
    );
}
