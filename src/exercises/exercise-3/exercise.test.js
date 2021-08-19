import { mount } from "@vue/test-utils";
import CustomButton from "../../custom-button";

describe("CustomButton - Exercise 3", () => {
    it("has a tab index of 0", () => {
        const wrapper = mount(CustomButton);
        expect(wrapper.element).toBeTruthy();
        expect(wrapper.element.attributes.getNamedItem("tabindex").value).toEqual("0");
    });
});