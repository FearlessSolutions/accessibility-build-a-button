const CustomButton = {
    template: `
        <div 
            class="custom-button" 
            :class="togglableClasses"
            @click.prevent="handleClick" 
            @keyup.enter="handleClick"
            @keyup.space="handleClick"
            :tabindex="tabindex" 
            :aria-disabled="disabled"
            role="button"
        >I'm a {{what}}!</div>
    `,
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        what: "button",
    }),
    computed: {
        tabindex() {
            if (this.disabled) {
              return "-1";
            } else {
              return "0";
            }
        },
        togglableClasses() {
            return { "custom-button-disabled": this.disabled };
        },
    },
    methods: {
        handleClick(evt) {
            if (!this.disabled) {
                this.$emit("click", evt);
            }
        }
    },
};

export default CustomButton;