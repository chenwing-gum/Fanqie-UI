"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "fq-icon" },
  __name: "icon",
  props: {
    type: {}
  },
  setup(__props) {
    const iconProps = __props;
    const iconStyle = vue.computed(() => {
      return { [`fq-icon--${iconProps.type}`]: iconProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["fq-icon", iconStyle.value])
      }, "Icon", 2);
    };
  }
});
exports.default = _sfc_main;
