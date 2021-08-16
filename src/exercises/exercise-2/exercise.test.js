import { mount } from "@vue/test-utils";
import CustomButton from "../../custom-button";

const TestComponent = {
    template: `
        <div>
          <custom-button @click="cbClicked"></custom-button>
        </div>
    `,
    components: { CustomButton },
    data: () => ({
        didClick: false,
    }),
    methods: {
        cbClicked() {
            this.didClick = true;
        }
    }
};

describe("CustomButton - Exercise 2", () => {
    it("emits a click event when clicked", async () => {
        const harnessWrapper = mount(TestComponent);
        const wrappedComponentRoot = harnessWrapper.find("div.custom-button");

        expect(wrappedComponentRoot.element).toBeTruthy();
        await wrappedComponentRoot.trigger('click');
        expect(harnessWrapper.vm.$data.didClick).toEqual(true);
    });
});