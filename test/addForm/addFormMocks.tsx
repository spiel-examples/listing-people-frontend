import {h, IPage, State} from "spiel-client";
import {AddForm} from "../../app/components";
import {IEvent, IField, IForm} from "../../app/helpers";
import { fieldsAddForm } from "../mocksFields";

export interface IData {
    [key: string]: string;
}

export interface IStateTest {
    fields: IField[];
    form: IForm;
    data: IData;
}

export class AddFormTest implements IPage {
    public state = {
        data: {},
        fields: fieldsAddForm,
        form: {},
    };

    public view(state: IStateTest) {
        const submitForm = (skill: IForm) => {
            state.data = skill;
        };

        const textForm = (event: IEvent, field: IField) => {
            state.form[field.name] = event.target.value;
        };

        const checkboxForm = (event: IEvent, field: IField) => {
            state.form[field.name] = event.target.checked;
        };

        return(
            <div>
                <AddForm fields={state.fields}
                    submitTitle="Add"
                    form={state.form}
                    title="Add data"
                    textForm={textForm.bind(this)}
                    checkForm= {checkboxForm.bind(this)}
                    submitForm={submitForm.bind(this)}
                    >
                </AddForm>

                <span>{state.data.skill}{(state.data.advance !== undefined) ?
                                            state.data.advance.toString() : null}</span>
            </div>
        );
    }
}

export const addFormTest = new AddFormTest();
