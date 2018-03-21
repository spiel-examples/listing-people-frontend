require("jsdom-global")();

import {expect} from "chai";
import {h, VNode} from "spiel-client";
import {sidebarTest} from "./sidedebarMocks";

describe("Sidebar", () => {
    let nodes: VNode<any>;
    before(() => {
        nodes = h(sidebarTest.view, sidebarTest.state);
    });

    it("has to get the total of people", () => {
        const sidebar: any = nodes.children[0];
        const totalPeople = sidebar.children[1];
        expect(totalPeople.children[1]).has.to.be.equal(5);
    });

    it("has to get 2 genius people", () => {
        const sidebar: any = nodes.children[0];
        const genius = sidebar.children[2].children[2];
        expect(genius.children[0]).has.to.contain("Genius");
        expect(genius.children[1]).has.to.be.equal(2);
    });

    it("has to get 2 rich people", () => {
        const sidebar: any = nodes.children[0];
        const rich = sidebar.children[2].children[1];
        expect(rich.children[0]).has.to.contain("Rich");
        expect(rich.children[1]).has.to.be.equal(2);
    });

    it("has to get 3 Super Power people", () => {
        const sidebar: any = nodes.children[0];
        const superPower = sidebar.children[2].children[0];
        expect(superPower.children[0]).has.to.contain("Super Power");
        expect(superPower.children[1]).has.to.be.equal(3);
    });
});
