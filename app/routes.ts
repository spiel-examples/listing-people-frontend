import { IConfigRouters } from "spiel-client";
import { genericHooks } from "./hooks";
import {list} from "./page";

export const routes: IConfigRouters = {
    default: "/list",
    genericHooks,
    hash: "!#",
    rootPath: "http://localhost:3000",
    routers: [{
        page: list,
        path: "/list/:filter",
    },
    {
        page: list,
        path: "/list",
    }],
};
