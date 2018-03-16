import {RequestFunction} from "spiel-connect";

export interface ISure {
    [key: string]: boolean;
}

export interface IPeople {
    getPeople: RequestFunction;
    addPerson: RequestFunction;
    deletePerson: RequestFunction;
}

export interface IPerson {
    name: string;
    rich: boolean;
    superPower: boolean;
    genius: boolean;
    _id?: string;
}

export interface ISidebar {
    people: IPerson[];
}

export interface IField {
    name: string;
    placeholder?: string;
    tag: string;
    title?: string;
    type: string;
}

export interface IForm {
    [key: string]: FormData;
}

export interface IAddForm {
    addForm: (form: IForm) => void;
    fields: IField[];
    textForm: (event: Event) => void;
    checkForm: (event: Event) => void;
    form: IForm;
    submitTitle: string;
    title: string;
}

export interface IBody {
    changeSure: (id: string) => void;
    cols: IField[];
    deleteRow: (row: any) => void;
    elements: any[];
    sure: ISure;
}

export interface IHeader {
    cols: IField[];
    orderCols: (colName: string) => void;
    titles: string[];
}
