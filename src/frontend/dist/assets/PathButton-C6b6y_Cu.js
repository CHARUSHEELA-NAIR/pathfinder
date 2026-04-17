import { j as jsxRuntimeExports } from "./index-DLmsKBlQ.js";
import { B as Button } from "./button-C0nt2FMv.js";
function PathButton({
  children = "Set Course",
  icon = "🧭",
  variant = "default",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      variant,
      className: `
        font-body font-medium tracking-wide
        bg-secondary border border-border text-foreground
        hover:bg-primary hover:text-primary-foreground hover:shadow-maritime
        transition-smooth active:scale-95
        ${className}
      `,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-base", "aria-hidden": "true", children: icon }),
        children
      ]
    }
  );
}
export {
  PathButton as P
};
