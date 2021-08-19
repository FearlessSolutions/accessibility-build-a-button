import { mount } from "@vue/test-utils";
import CustomButton from "../../custom-button";

const CustomButtonTestHarness = {
    template: `
        <custom-button v-on:click="buttonClick" v-bind:disabled="buttonDisabled"/>
    `,
    components: { CustomButton },
    props: {
        buttonDisabled: Boolean,
    },
    data: () => ({
        buttonClicked: false,
    }),
    methods: {
        buttonClick() {
            this.buttonClicked = true;
        },
    },
};

describe("CustomButton - Exercise 6", () => {
    it.concurrent.each([
        {eventKey: "enter", fireVerb: "fires", disabled: false},
        {eventKey: "space", fireVerb: "fires", disabled: false},
        {eventKey: "enter", fireVerb: "does not fire", disabled: true},
        {eventKey: "space", fireVerb: "does not fire", disabled: true}
    ])("$fireVerb the click event when the component receives a/an $eventKey keyup event", async ({ eventKey, disabled }) => {
        const testHarness = mount(CustomButtonTestHarness, {
            propsData: { buttonDisabled: disabled },
        });
        const innerDivWrapper = testHarness.find("div.custom-button");
        expect(innerDivWrapper.element).toBeTruthy();

        await innerDivWrapper.trigger(`keyup.${eventKey}`);
        expect(testHarness.vm.$data.buttonClicked).toEqual(!disabled);
    });
});