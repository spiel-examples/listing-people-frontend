import { h } from "spiel-client";
import { IAddForm, IField, IForm } from "../../helpers";
import { FormComponent, Label, Submit } from "./AddFormStyles";

export function AddForm({addForm, checkForm, fields, form, title, submitTitle, textForm}: IAddForm) {
    const template = fields.map((field: IField) => {
        let fragment = null;

        if (field.type === "text") {
            fragment = <div class="form-group">
                {(field.title) ? <Label></Label> : null}
                <input
                    class="form-control"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    oninput={(event: Event) => textForm(event)}>
                </input>
            </div>;
        } else if (field.type === "checkbox") {
            fragment = <div class="form-group">
                {(field.title) ? <Label>{field.title}</Label> : null}
                <input
                    type={field.type}
                    checked={form[field.name]}
                    onchange={(event: any) => checkForm(event)}>
                </input>
            </div>;
        }
    });
    return (
        <FormComponent>
            <h2>{title}</h2>
            <div class="form">
                <div class="form-inline">
                    {template}
                    <Submit class="btn btn-success" onclick={() => addForm(form)}>Add</Submit>
                </div>
            </div>
            <div class="message">
                <span></span>
            </div>
        </FormComponent>
    );
}
