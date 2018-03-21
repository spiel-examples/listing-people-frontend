import { IConfigRouters } from "spiel-client";
import { listHooks } from "./hooks";
import {list} from "./page";

export const routes: IConfigRouters = {
    default: "/list",
    hash: "!#",
    rootPath: "http://localhost:3000",
    routers: [{
        hooks: listHooks,
        page: list,
        path: "/list/:filter",
    },
    {
        hooks: listHooks,
        page: list,
        path: "/list",
    }],
};
