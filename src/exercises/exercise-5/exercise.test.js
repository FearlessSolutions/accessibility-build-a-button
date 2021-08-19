import { mount } from "@vue/test-utils";
import CustomButton from "../../custom-button";

const CustomButtonTestHarness = {
    template: `
        <custom-button v-on:click="timesClicked++" v-bind:disabled="buttonDisabled"/>
    `,
    components: { CustomButton },
    props: {
        buttonDisabled: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        timesClicked: 0,
    }),
};

describe("CustomButton - Exercise 5", () => {
    it("adds the custom-button-disabled class only when the disabled prop is true", () => {
        const enabledWrapper = mount(CustomButton, {
            propsData: {
                disabled: false,
            }
        });
        const disabledWrapper = mount(CustomButton, {
            propsData: {
                disabled: true,
            },
        });

        expect(Array(...enabledWrapper.element.classList)).not.toContain("custom-button-disabled");
        expect(Array(...disabledWrapper.element.classList)).toContain("custom-button-disabled");
    });

    it("adds the aria-disabled attribute only when the disabled prop is true", () => {
        const enabledWrapper = mount(CustomButton, {
            propsData: {
                disabled: false,
            }
        });
        const disabledWrapper = mount(CustomButton, {
            propsData: {
                disabled: true,
            }
        });

        expect(enabledWrapper.element.attributes.getNamedItem("aria-disabled")).toBeNull();
        expect(disabledWrapper.element.attributes.getNamedItem("aria-disabled")).not.toBeNull();
    });

    it("does not emit the click event while disabled", async () => {
        const harnessWrapper = mount(CustomButtonTestHarness, {
            propsData: {
                buttonDisabled: false,
            },
        });

        const buttonDivWrapper = harnessWrapper.find("div.custom-button");
        expect(buttonDivWrapper.element).toBeTruthy();
        await buttonDivWrapper.trigger("click");
        expect(harnessWrapper.vm.$data.timesClicked).toEqual(1);

        await harnessWrapper.setProps({ buttonDisabled: true });
        await buttonDivWrapper.trigger("click");
        expect(harnessWrapper.vm.$data.timesClicked).toEqual(1);
    })
});