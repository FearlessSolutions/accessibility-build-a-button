import { mount } from "@vue/test-utils";
import CustomButton from "../../custom-button";

describe("CustomButton - Exercise 1", () => {
    it("has the button class from sass", () => {
        const elemWrapper = mount(CustomButton);
        expect(Array(...elemWrapper.element.classList)).toContain("custom-button");
    });
});