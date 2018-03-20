import {h, IPage, JSXElements, State} from "spiel-client";
import {AddForm, Sidebar, Table, TBody, THeader} from "../components";
import { IListState, IPerson } from "../helpers";
import {ListController} from "./listController";

export class List implements IPage {
    public state = {
        error: false,
        form: {},
        message: "",
        order: false,
        people: [],
        sure: {},
        totalPeople: [],
    };

    public view(state: IListState): JSXElements {
        const listController = new ListController(state, list.view);
        const qualities =
            listController.fields.map((field: any) => {
                let button = null;
                if (field.name !== "name") {
                    button = <button
                        onclick={(event: Event) => {
                                listController.filterTable(field.name);
                        }}
                        class={"btn btn-primary " +
                            (state.params && state.params.filter === field.name ? "active" : "")}
                        disabled={!state.totalPeople.some((person: any) => person[field.name])}>{field.title}
                        </button>;
                }
                return button;
            });

        return(
            <div class="container-fluid">
                <div class="row justify-content-end">
                    <div class="col-12 col-md-8 col-lg-8 col-xl-8">
                        <div class="col-xs-auto">
                            <AddForm
                                submitForm= {listController.addPerson.bind(listController)}
                                fields= {listController.fields}
                                form= {state.form}
                                textForm= {listController.getTextInput.bind(listController)}
                                checkForm= {listController.getCheckInput.bind(listController)}
                                submitTitle= "Add person"
                                title = "Person"
                            ></AddForm>
                            <div
                                key="tablePeople"
                                oncreate={() => listController.getPeople()}>
                                {(state.people) ? <Table>
                                    <THeader
                                        cols={listController.fields}
                                        titles={listController.titles}
                                        orderCols={listController.orderCols.bind(listController)}
                                    ></THeader>
                                    <TBody
                                        elements={state.people}
                                        cols={listController.fields}
                                        changeSure={listController.changeSure.bind(listController)}
                                        deleteRow={listController.deletePerson.bind(listController)}
                                        sure={state.sure}
                                    ></TBody>
                                </Table> : null}
                            </div>
                            {(state.people.length) ? <div class="col-xs-auto btn-group">
                                <button
                                    onclick={() => listController.filterTable("")}
                                    class={"btn btn-primary " +
                                        (state.totalPeople.length === state.people.length ? "active" : "")}> All
                                </button>
                                {qualities}
                            </div> : null}
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                        <Sidebar people={state.totalPeople}></Sidebar>
                    </div>
                </div>
            </div>
        );
    }
}

export const list = new List();
