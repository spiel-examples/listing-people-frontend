import { render, srouter, View } from "spiel-client";
import { IEvent, IField, IListState, IPeople, IPerson, IQuery, ISort, ISure, services } from "../helpers";

export class ListController {
    public fields: IField[] = [
        {
            name: "name",
            placeholder: "name",
            tag: "input",
            type: "text",
        },
        {
            name: "superPower",
            tag: "input",
            title: "Super power",
            type: "checkbox",
        },
        {
            name: "rich",
            tag: "input",
            title: "Rich",
            type: "checkbox",
        },
        {
            name: "genius",
            tag: "input",
            title: "Genius",
            type: "checkbox",
        },
    ];
    public titles: string[] = ["Name", "Super Power", "Rich", "Genius", "Delete"];
    public state: IListState;
    private view: View;
    private peopleService: IPeople = services.People;
    private orderBy!: string;

    constructor(state: IListState, view: View) {
        this.state = state;
        this.view = view;
    }

    public async getPeople() {
        const query: IQuery = {
            sort: null,
        };
        let people;

        if (this.orderBy) {
            query.sort = {
                [this.orderBy]: (this.state.order) ? 1 : -1,
            };
        }

        people = await this.peopleService.getPeople(null, query);
        this.state.totalPeople.splice(0, this.state.totalPeople.length, ...people);

        if (this.state.params && this.state.params.filter) {
            people = people.filter((person: IPerson) => person[this.state.params.filter]);
        }

        this.state.people.splice(0, this.state.people.length, ...people);
        render(this.view, this.state);
    }

    public async addPerson(person: IPerson) {
        try {
            await this.peopleService.addPerson(null, null, person);
            this.cleanForm();
            this.filterTable("");
            this.getPeople();
        } catch (error) {
            console.log(this.state.form);

            if (!this.state.form.name) {
                this.state.message = "The field is empty";
            } else {
                this.state.message = "The name is already in the list";
            }

            render(this.view, this.state);
            setTimeout(() => {
                this.state.message = "";
                render(this.view, this.state);
            }, 2000);
        }
    }

    public async deletePerson(id: string) {
        try {
            const user = {
                id,
            };
            const newPerson = await this.peopleService.deletePerson(user);
            const index = this.state.people.findIndex((person: IPerson) => person._id === id);
            this.state.people.splice(index, 1);
            this.state.totalPeople.splice(0, this.state.totalPeople.length, ...this.state.people);
            render(this.view, this.state);
        } catch (error) {
            console.log(error);
        }
    }

    public getCheckInput(event: IEvent, field: IField) {
        this.state.form[field.name] = event.target.checked;
    }

    public getTextInput(event: IEvent, field: IField) {
        this.state.form[field.name] = event.target.value;
    }

    public filterTable(filter: string) {
        const path = (filter) ? `/list/${filter}` : "/list";
        srouter.go(path);
    }

    public orderCols(colName: string) {
        this.state.order = !this.state.order;
        this.orderBy = colName;
        this.getPeople();
    }

    public changeSure(id: string) {
        this.state.sure[id] = !this.state.sure[id];
        render(this.view, this.state);
    }

    private cleanForm() {
        Object.keys(this.state.form).forEach((element: any) => {
            let isTypeText: boolean;
            isTypeText = this.fields.some((field: IField) =>
                field.name === element && field.type === "text");

            if (isTypeText) {
                this.state.form[element] = "";
            } else {
                this.state.form[element] = null;
            }
        });
    }
}
