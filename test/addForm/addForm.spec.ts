require("jsdom-global")();

import {assert, expect} from "chai";
import {spy} from "sinon";
import {Children, h, VNode} from "spiel-client";
import {addFormTest} from "./addFormMocks";

interface ITarget {
    value?: string;
    checked?: boolean;
}

interface IEventInput {
    target: ITarget;
}

describe("AddForm", () => {
    let nodes: VNode<any>;
    let addForm: any;
    let eventInput: IEventInput;
    before(() => {
        nodes = h(addFormTest.view, addFormTest.state);
        addForm = nodes.children[0];
        eventInput = {
            target: {},
        };
    });

    it("has to contain the title Add data", () => {
        const title = addForm.children[0];
        expect(title.nodeName).has.to.be.equal("h2");
        expect(title.children[0]).has.to.be.equal("Add data");
    });

    it("has to contaim the text input form", () => {
        const form = addForm.children[1].children[0].children[0];
        const input = form.children[0];
        expect(input.nodeName).has.to.be.equal("input");
        expect(input.attributes.type).has.to.be.equal("text");
    });

    it("has to contain the checkbox input form", () => {
        const form = addForm.children[1].children[0].children[1];
        const label = form.children[0];
        expect(label.children[0]).has.to.be.equal("Advance");
        const input = form.children[1];
        expect(input.nodeName).has.to.be.equal("input");
        expect(input.attributes.type).has.to.be.equal("checkbox");
    });

    it("has to contain the add button submiter", () => {
        const submit = addForm.children[1].children[0].children[2];
        expect(submit.nodeName).has.to.be.equal("button");
        expect(submit.children[0]).has.to.be.equal("Add");
    });

    it("Has to submit the data", () => {
        const textForm = addForm.children[1].children[0].children[0];
        const textInput = textForm.children[0];
        eventInput.target.value = "javascript";
        const textOninput = spy(textInput.attributes, "oninput");
        textInput.attributes.oninput(eventInput);
        assert(textOninput.calledOnce, "The oninput was no called");

        const checkboxForm = addForm.children[1].children[0].children[1];
        const checkboxInput = checkboxForm.children[1];
        eventInput.target.checked = true;
        const checkboxOninput = spy(checkboxInput.attributes, "onchange");
        checkboxInput.attributes.onchange(eventInput);
        assert(checkboxOninput.calledOnce, "The onchange was no called");

        const submit = addForm.children[1].children[0].children[2];
        const onSubmit = spy(submit.attributes, "onclick");
        submit.attributes.onclick(addFormTest.state.form);
        assert(onSubmit.calledOnce, "The onclick was no called");

        nodes = h(addFormTest.view, addFormTest.state);
        const data: any = nodes.children[1];
        expect(data.children[0]).has.to.be.equal("javascript");
        expect(data.children[1]).has.to.be.equal("true");
    });
});
