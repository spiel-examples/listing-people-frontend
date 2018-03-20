import {IGenericHooks, IHooks, Params} from "spiel-client";

export const genericHooks: IGenericHooks = {
    after: () => {
        console.log("generic after");
    },
    before: (done: (suppress?: boolean) => void) => {
        console.log("generic before");
        done();
    },
};
