import { defineComponent, computed, createElementBlock, openBlock, normalizeClass } from "vue";
import "./style/index.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "fq-button" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`fq-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["fq-button", buttonStyle.value])
      }, "测试按钮", 2);
    };
  }
});
export {
  _sfc_main as default
};
