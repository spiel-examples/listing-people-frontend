import "bootstrap/scss/bootstrap.scss";
import {IConfigRouters, srouter} from "spiel-client";
import {Connect, IRequestConfigConnect} from "spiel-connect";
import {services} from "./helpers";
import {routes} from "./routes";

const options: IRequestConfigConnect = {
    domain: "http://localhost:8000",
};

const connect = new Connect(options).getEndpoints();

connect.then((endpoints) => {
    Object.assign(services, endpoints);

    srouter.setRouters(routes).resolve();
});
