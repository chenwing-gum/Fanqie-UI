import { defineComponent, computed, createElementBlock, openBlock, normalizeClass } from "vue";
import "./style/index.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "fq-icon" },
  __name: "icon",
  props: {
    type: {}
  },
  setup(__props) {
    const iconProps = __props;
    const iconStyle = computed(() => {
      return { [`fq-icon--${iconProps.type}`]: iconProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["fq-icon", iconStyle.value])
      }, "Icon", 2);
    };
  }
});
export {
  _sfc_main as default
};
