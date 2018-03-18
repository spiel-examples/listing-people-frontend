import { IConfigRouters } from "spiel-client";
import {list} from "./page";

export const routes: IConfigRouters = {
    default: "/list",
    hash: "!#",
    rootPath: "http://localhost:3000",
    routers: [{
        page: list,
        path: "/list",
    },
    {
        page: list,
        path: "/list/:filter",
    }],
};
