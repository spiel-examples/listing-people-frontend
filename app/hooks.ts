import { IGenericHooks, srouter } from "spiel-client";
import { list, ListController } from "./page";

export const listHooks: IGenericHooks = {
    after: (params) => {
        const listController = new ListController(list.state as any, list.view);
        if (params && params.filter) {
            listController.state.params = { filter: params.filter };
            listController.getPeople();
        } else {
            listController.state.params = { filter: "" };
            listController.getPeople();
        }
    },
};
