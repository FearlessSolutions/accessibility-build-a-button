import { mount } from "@vue/test-utils";
import CustomButton from "../../custom-button";

describe("CustomButton - Exercise 4", () => {
    it("has a role of button", () => {
       const componentWrapper = mount(CustomButton);
       expect(componentWrapper.element.attributes.getNamedItem("role").value).toEqual("button");
    });
});