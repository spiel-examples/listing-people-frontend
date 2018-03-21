import { h, IPage, render, State} from "spiel-client";
import { Table, TBody, THeader } from "../../app/components";
import { IField, IPerson, ISure } from "../../app/helpers";
import { fieldsTable } from "../mocksFields";
import { people } from "../mocksPeople";

export interface IStateTest {
    people: IPerson[];
    fields: IField[];
    sort: boolean;
    orderBy: string;
    titles: string[];
    sure: ISure;
}

export class TableTest implements IPage {
    public state = {
        fields: fieldsTable,
        orderBy: "",
        people,
        sort: true,
        sure: {},
        titles: ["Name", "Super Power", "Rich", "Genius", "Delete"],
    };

    public view(state: IStateTest) {
        const compare = (person1: IPerson, person2: IPerson) => {
            const a = person1[state.orderBy];
            const b = person2[state.orderBy];

            if ( a && b) {
                if (a < b) {
                    return (state.sort) ? -1 : 1;
                }
                if (a > b) {
                    return (state.sort) ? 1 : -1;
                }
            }

            return 0;
        };

        const orderCols = (colName: string) => {
            state.sort = !state.sort;
            state.orderBy = colName;
            state.people = state.people.sort(compare);
        };

        const deleteRow = (id: string) => {
            const index = state.people.findIndex((person: IPerson) => person._id === id);
            state.people.splice(index, 1);
        };

        const changeSure = (id: string) => {
            state.sure[id] = !state.sure[id];
            render(tableTest.view, tableTest.state);
        };

        return (
            <div>
                <Table>
                    <THeader
                        cols={state.fields}
                        orderCols={orderCols.bind(this)}
                        titles={state.titles}></THeader>
                    <TBody
                        cols={state.fields}
                        elements={state.people}
                        deleteRow={deleteRow.bind(this)}
                        sure={state.sure}
                        changeSure={changeSure.bind(this)}></TBody>
                </Table>
            </div>
        );
    }
}

export const tableTest = new TableTest();
