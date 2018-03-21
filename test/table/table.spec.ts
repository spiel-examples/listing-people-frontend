require("jsdom-global")();

import {assert, expect} from "chai";
import {spy} from "sinon";
import {h, VNode} from "spiel-client";
import { tableTest } from "./tableMocks";

describe("Table", () => {
    let nodes: VNode<any>;
    let table: any;
    let thead: any;
    let tbody: any;

    before(() => {
        nodes = h(tableTest.view, tableTest.state);
        table = nodes.children[0];
        thead = table.children[0];
        tbody = table.children[1];
    });

    it("has to include the table structure", () => {
        expect(thead.nodeName).has.to.equal("thead");
        expect(thead.children).has.to.length(5);
        expect(thead.children[0].children[0]).has.to.contain("Name");
        expect(thead.children[1].children[0]).has.to.contain("Super Power");
        expect(thead.children[2].children[0]).has.to.contain("Rich");
        expect(thead.children[3].children[0]).has.to.contain("Genius");
        expect(thead.children[4].children[0]).has.to.contain("Delete");
        expect(thead.children[0].children[1].nodeName && thead.children[1].children[1].nodeName)
            .has.to.equal("i");

        expect(tbody.children).has.to.length(5);
        expect(tbody.children[0].children).has.to.length(5);
    });

    it("has to sort a column by name", () => {
        const sort = thead.children[0];
        const orderCols = spy(sort.attributes, "onclick");
        sort.attributes.onclick("name");
        expect(tableTest.state.people[4].name).has.to.equal("Carmen");
        sort.attributes.onclick("name");
        expect(tableTest.state.people[4].name).has.to.equal("Ramon");
        assert(orderCols.calledTwice, "orderCols function is not called 2 times");
    });

    it("has to delete a person", () => {
        const deletePerson = tbody.children[2].children[4].children[0];
        const changeSure = spy(deletePerson.attributes, "onclick");
        deletePerson.attributes.onclick("2");
        assert(changeSure.calledOnce, "changeSure function is not called");

        nodes = h(tableTest.view, tableTest.state);
        table = nodes.children[0];
        tbody = table.children[1];
        const confirm = tbody.children[0].children[4].children[0].children[1];
        const deleteRow = spy(confirm.attributes, "onclick");
        confirm.attributes.onclick("2");
        assert(deleteRow.calledOnce, "deleteRow function is not called");
        expect(tableTest.state.people).has.to.length(4);
    });

});
