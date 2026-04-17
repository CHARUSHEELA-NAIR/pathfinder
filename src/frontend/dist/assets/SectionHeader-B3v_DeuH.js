import { j as jsxRuntimeExports } from "./index-DLmsKBlQ.js";
function CompassDivider({
  className = "",
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex items-center gap-4 my-10 px-6 ${className}`,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base rotate-45 inline-block", children: "✦" }),
          label ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.22em] uppercase font-body font-medium px-2 text-muted-foreground", children: label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🧭" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base -rotate-45 inline-block", children: "✦" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" })
      ]
    }
  );
}
function ExplorerCard({
  children,
  tilt = "none",
  className = "",
  hover = true,
  "data-ocid": ocid
}) {
  const tiltClass = tilt === "left" ? "rotate-[-1.5deg]" : tilt === "right" ? "rotate-[1.5deg]" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": ocid,
      className: `
        bg-card border border-border rounded-lg parchment-texture shadow-maritime
        ${tiltClass}
        ${hover ? "float-on-hover hover:shadow-maritime-lg hover:rotate-0 cursor-default" : ""}
        transition-smooth
        ${className}
      `,
      children
    }
  );
}
function SectionHeader({
  icon,
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = ""
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col gap-2 ${alignClass} ${className}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs tracking-[0.22em] uppercase font-body text-muted-foreground font-medium", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", "aria-hidden": "true", children: icon }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl text-foreground leading-tight", children: [
      !eyebrow && icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-3", "aria-hidden": "true", children: icon }),
      title
    ] }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground max-w-2xl leading-relaxed mt-1", children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex items-center gap-3 mt-2 ${align === "center" ? "justify-center" : ""}`,
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "⚓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-border" })
        ]
      }
    )
  ] });
}
export {
  CompassDivider as C,
  ExplorerCard as E,
  SectionHeader as S
};
