import {h, IPage, State} from "spiel-client";
import {Sidebar} from "../../app/components";
import {IPerson} from "../../app/helpers";
import {people} from "../mocksPeople";

export interface ISidebarStateTest {
    people: IPerson[];
}

export class SidebarTest implements IPage {
    public state = {
        people,
    };

    public view(state: ISidebarStateTest) {
        return (
            <div>
                <Sidebar people={state.people}></Sidebar>
            </div>
        );
    }
}

export const sidebarTest = new SidebarTest();
