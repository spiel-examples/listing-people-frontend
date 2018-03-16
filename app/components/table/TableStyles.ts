import { picostyle, VNode } from "picostyle";
import { h } from "spiel-client";

const ps = picostyle(h);

export const Icon = ps("i")({
    marginLeft: "3px",
});

export const Link = ps("a")({
    margin: "0 5px 0 5px",
});
