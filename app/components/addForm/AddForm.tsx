import { h } from "spiel-client";
import { IAddForm, IEvent, IField, IForm } from "../../helpers";
import "./AddForm.scss";

export function AddForm({submitForm, fields, form, title, submitTitle, checkForm, textForm}: IAddForm) {
    const template = fields.map((field: IField) => {
        let fragment = null;

        if (field.type === "text") {
            fragment = <div class="form-group">
                {(field.title) ? <label></label> : null}
                <input
                    class="form-control"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    oninput={(event: IEvent) => {
                        if (textForm) {
                            textForm(event, field);
                        }
                    }}>
                </input>
            </div>;
        } else if (field.type === "checkbox") {
            fragment = <div class="form-group">
                {(field.title) ? <label>{field.title}</label> : null}
                <input
                    type={field.type}
                    checked={form[field.name]}
                    onchange={(event: IEvent) => {
                        if (checkForm) {
                            checkForm(event, field);
                        }
                    }}>
                </input>
            </div>;
        }

        return fragment;
    });
    return (
        <div class= "form-component">
            <h2>{title}</h2>
            <div class="form">
                <div class="form-inline">
                    {template}
                    <button class="submit btn btn-success" onclick={() => submitForm(form)}>Add</button>
                </div>
            </div>
            <div class="message">
                <span></span>
            </div>
        </div>
    );
}
