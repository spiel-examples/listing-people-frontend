import { Children, h } from "spiel-client";

export function Table({}, children: Children) {
    return (
        <table class="table table-bordered">{children}</table>
    );
}
