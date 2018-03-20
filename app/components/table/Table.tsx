import { Children, h } from "spiel-client";
import "./Table.scss";

export function Table({}, children: Children) {
    return (
        <table class="table table-bordered table-component">{children}</table>
    );
}
