import { IConfigRouters } from "spiel-client";

export const routes: IConfigRouters = {
    default: "/list",
    hash: "!#",
    rootPath: "http://localhost:3000",
    routers: [{
        path: "/list:filter",
    }],
};
