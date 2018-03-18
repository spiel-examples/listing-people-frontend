import {h, IPage, JSXElements, State} from "spiel-client";
import {AddForm, Sidebar, Table, TBody, THeader} from "../components";
import { IListState } from "../helpers";
import {ListController} from "./listController";

export class List implements IPage {
    public state = {
        error: false,
        form: {},
        message: "hello",
        order: false,
        people: [],
        sure: {},
        totalPeople: [],
    };

    public view(state: IListState): JSXElements {
        const listController = new ListController(state, list.view);
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
                                oncreate={listController.getPeople.bind(listController)}>
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
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                        <Sidebar people={state.people}></Sidebar>
                    </div>
                </div>
            </div>
        );
    }
}

export const list = new List();
