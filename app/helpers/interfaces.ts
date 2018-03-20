import {RequestFunction} from "spiel-connect";

export interface IEvent {
    target: HTMLInputElement;
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
    [key: string]: string | boolean | undefined;
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
    [key: string]: any;
}

export interface IAddForm {
    submitForm: (form: any) => Promise<void>;
    fields: IField[];
    textForm?: (event: IEvent, field: IField) => void;
    checkForm?: (event: IEvent, field: IField) => void;
    form: IForm;
    submitTitle: string;
    title: string;
}

export interface ISure {
    [key: string]: boolean;
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

export interface IFilter {
    filter: string;
}

export interface IListState extends ISidebar {
    lastState: any;
    totalPeople: IPerson[];
    error: boolean;
    form: IForm;
    message: string;
    params: IFilter;
    sure: ISure;
    order: boolean;
}

export interface ISort {
    [key: string]: number;
}

export interface IQuery {
    sort: ISort | null;
}
