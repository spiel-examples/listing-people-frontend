import picostyle from "picostyle";
import {VNode} from "picostyle";
import { h } from "spiel-client";

const ps = picostyle(h);

export const FormComponent = ps("div")({
    margin: "20px 0 20px",
});

export const Label = ps("label")({
    margin: "0 5px 0 5px",
});

export const Submit = ps("button")({
    marginLeft: "10px",
});

export const Error = ps("span")({
    color: "red",
});
