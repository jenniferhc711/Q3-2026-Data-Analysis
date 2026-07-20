/* @ds-bundle: {"format":4,"namespace":"OmnidianDesignSystem_05330b","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"0977a048caa3","components/display/Card.jsx":"b9b38e86f50c","components/display/Stat.jsx":"0af0fab2eedb","components/display/Tag.jsx":"faeae74faee1","components/feedback/Alert.jsx":"7a30f9bb41da","components/forms/Button.jsx":"b6bb98cbae69","components/forms/Checkbox.jsx":"7a5dcef40b2d","components/forms/IconButton.jsx":"d350b47f158f","components/forms/Input.jsx":"23b242243ddc","components/forms/Radio.jsx":"e3660d4acb73","components/forms/Select.jsx":"42f6001d931a","components/forms/Switch.jsx":"ad2db2ad5ec5","components/forms/Textarea.jsx":"5b14937ab009","components/navigation/Tabs.jsx":"75fbac693856","ui_kits/website/CaseStudies.jsx":"5b39364fcd50","ui_kits/website/CtaBand.jsx":"7a016ee2c243","ui_kits/website/Hero.jsx":"a4d024bf8f8c","ui_kits/website/ServicesSection.jsx":"2fc5ba9d89cc","ui_kits/website/SiteFooter.jsx":"59aea1bb68f9","ui_kits/website/SiteNav.jsx":"3b7dde02a9ed","ui_kits/website/StatsBar.jsx":"f6c04380ed87","ui_kits/website/WhoWeServe.jsx":"047adc6f5dc7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OmnidianDesignSystem_05330b = window.OmnidianDesignSystem_05330b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-badge{font-family:var(--font-display);display:inline-flex;align-items:center;gap:5px;font-weight:var(--fw-medium);border-radius:var(--radius-pill);white-space:nowrap;line-height:1}
.odn-badge--sm{font-size:11px;padding:3px 9px}
.odn-badge--md{font-size:12px;padding:5px 11px}
.odn-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.odn-badge--neutral{background:var(--carbon-50);color:var(--carbon-500)}
.odn-badge--accent{background:var(--orange-50);color:var(--orange-700)}
.odn-badge--info{background:var(--info-soft);color:var(--steel-700)}
.odn-badge--success{background:var(--success-soft);color:var(--success)}
.odn-badge--warning{background:var(--warning-soft);color:var(--orange-700)}
.odn-badge--danger{background:var(--danger-soft);color:var(--danger)}
.odn-badge--solid{background:var(--carbon-blue);color:#fff}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-badge-css")) {
    const el = document.createElement("style");
    el.id = "odn-badge-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Badge({
  tone = "neutral",
  size = "md",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  inject();
  const cls = ["odn-badge", `odn-badge--${tone}`, `odn-badge--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "odn-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-card{font-family:var(--font-display);background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);overflow:hidden;transition:box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)}
.odn-card--flat{box-shadow:none}
.odn-card--raised{box-shadow:var(--shadow-md)}
.odn-card--interactive{cursor:pointer}
.odn-card--interactive:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px);border-color:var(--border-default)}
.odn-card--dark{background:var(--surface-dark);border-color:var(--carbon-700);color:#fff}
.odn-card--sand{background:var(--surface-sand);border-color:var(--sand-200)}
.odn-card__media{display:block;width:100%;object-fit:cover}
.odn-card__body{padding:var(--pad)}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-card-css")) {
    const el = document.createElement("style");
    el.id = "odn-card-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const PAD = {
  sm: "16px",
  md: "22px",
  lg: "28px"
};
function Card({
  variant = "raised",
  surface = "default",
  padding = "md",
  media,
  interactive = false,
  style = {},
  className = "",
  children,
  ...rest
}) {
  inject();
  const cls = ["odn-card", `odn-card--${variant}`, surface !== "default" ? `odn-card--${surface}` : "", interactive ? "odn-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      "--pad": PAD[padding] || PAD.md,
      ...style
    }
  }, rest), media && (typeof media === "string" ? /*#__PURE__*/React.createElement("img", {
    className: "odn-card__media",
    src: media,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "odn-card__media"
  }, media)), /*#__PURE__*/React.createElement("div", {
    className: "odn-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-stat{font-family:var(--font-display)}
.odn-stat__label{font-size:12px;font-weight:var(--fw-medium);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-muted)}
.odn-stat__value{font-size:44px;font-weight:var(--fw-bold);letter-spacing:var(--ls-tight);color:var(--text-strong);line-height:1.02;margin-top:6px;display:flex;align-items:baseline;gap:4px}
.odn-stat__value em{font-style:normal;color:var(--accent);font-size:.6em}
.odn-stat__delta{font-size:13px;font-weight:var(--fw-medium);margin-top:8px;display:inline-flex;align-items:center;gap:4px}
.odn-stat__delta--up{color:var(--success)}
.odn-stat__delta--down{color:var(--danger)}
.odn-stat--inverse .odn-stat__label{color:var(--carbon-200)}
.odn-stat--inverse .odn-stat__value{color:#fff}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-stat-css")) {
    const el = document.createElement("style");
    el.id = "odn-stat-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Stat({
  label,
  value,
  unit,
  delta,
  inverse = false,
  className = "",
  ...rest
}) {
  inject();
  const cls = ["odn-stat", inverse ? "odn-stat--inverse" : "", className].filter(Boolean).join(" ");
  const dir = typeof delta === "number" ? delta >= 0 ? "up" : "down" : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    className: "odn-stat__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "odn-stat__value"
  }, value, unit && /*#__PURE__*/React.createElement("em", null, unit)), delta != null && /*#__PURE__*/React.createElement("div", {
    className: `odn-stat__delta odn-stat__delta--${dir}`
  }, /*#__PURE__*/React.createElement("span", null, dir === "up" ? "▲" : "▼"), Math.abs(delta), "%"));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-tag{font-family:var(--font-display);display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:var(--fw-medium);color:var(--carbon-500);background:var(--white);border:1px solid var(--border-default);border-radius:var(--radius-sm);padding:5px 10px;line-height:1}
.odn-tag--active{background:var(--carbon-blue);color:#fff;border-color:var(--carbon-blue)}
.odn-tag--removable{padding-right:6px}
.odn-tag__x{display:inline-flex;cursor:pointer;border-radius:50%;padding:1px;transition:background var(--dur-fast) var(--ease-standard)}
.odn-tag__x:hover{background:rgba(0,0,0,.1)}
.odn-tag__x svg{width:13px;height:13px}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-tag-css")) {
    const el = document.createElement("style");
    el.id = "odn-tag-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Tag({
  active = false,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  inject();
  const cls = ["odn-tag", active ? "odn-tag--active" : "", onRemove ? "odn-tag--removable" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "odn-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-alert{font-family:var(--font-display);display:flex;gap:12px;padding:14px 16px;border-radius:var(--radius-md);border:1px solid transparent;font-size:14px;line-height:1.5}
.odn-alert__icon{flex:none;margin-top:1px}
.odn-alert__icon svg{width:20px;height:20px}
.odn-alert__title{font-weight:var(--fw-bold);margin:0 0 2px;color:var(--text-strong)}
.odn-alert__body{color:var(--text-body)}
.odn-alert__close{margin-left:auto;flex:none;background:none;border:none;cursor:pointer;color:var(--text-muted);padding:0;display:flex}
.odn-alert__close svg{width:16px;height:16px}
.odn-alert--info{background:var(--info-soft);border-color:#cfe0ee}
.odn-alert--info .odn-alert__icon{color:var(--steel-700)}
.odn-alert--success{background:var(--success-soft);border-color:#c7e6d8}
.odn-alert--success .odn-alert__icon{color:var(--success)}
.odn-alert--warning{background:var(--warning-soft);border-color:var(--orange-200)}
.odn-alert--warning .odn-alert__icon{color:var(--orange-700)}
.odn-alert--danger{background:var(--danger-soft);border-color:#f3c9c4}
.odn-alert--danger .odn-alert__icon{color:var(--danger)}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-alert-css")) {
    const el = document.createElement("style");
    el.id = "odn-alert-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }),
  success: /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
  })
};
function Alert({
  tone = "info",
  title,
  onClose,
  className = "",
  children,
  ...rest
}) {
  inject();
  const cls = ["odn-alert", `odn-alert--${tone}`, className].filter(Boolean).join(" ");
  const stroke = tone === "success" ? 3 : 2;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "odn-alert__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: tone === "success" ? "0 0 24 24" : "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "odn-alert__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "odn-alert__body"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "odn-alert__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-btn{font-family:var(--font-display);font-weight:var(--fw-medium);border:1.5px solid transparent;border-radius:var(--radius-md);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;line-height:1;letter-spacing:var(--ls-tight);transition:background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard);white-space:nowrap;text-decoration:none}
.odn-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.odn-btn:active{transform:translateY(1px)}
.odn-btn[disabled]{cursor:not-allowed;opacity:.45;transform:none}
.odn-btn--sm{font-size:13px;padding:8px 14px}
.odn-btn--md{font-size:15px;padding:11px 20px}
.odn-btn--lg{font-size:16px;padding:14px 26px}
.odn-btn--block{width:100%}
.odn-btn--primary{background:var(--accent);color:#fff}
.odn-btn--primary:hover:not([disabled]){background:var(--accent-hover)}
.odn-btn--primary:active:not([disabled]){background:var(--accent-press)}
.odn-btn--secondary{background:transparent;color:var(--carbon-blue);border-color:var(--carbon-blue)}
.odn-btn--secondary:hover:not([disabled]){background:var(--carbon-blue);color:#fff}
.odn-btn--ghost{background:transparent;color:var(--carbon-blue)}
.odn-btn--ghost:hover:not([disabled]){background:var(--carbon-50)}
.odn-btn--subtle{background:var(--carbon-50);color:var(--carbon-blue)}
.odn-btn--subtle:hover:not([disabled]){background:var(--carbon-100)}
.odn-btn--inverse{background:#fff;color:var(--carbon-blue)}
.odn-btn--inverse:hover:not([disabled]){background:var(--sand-100)}
.odn-btn svg{width:1.15em;height:1.15em;flex:none}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-btn-css")) {
    const el = document.createElement("style");
    el.id = "odn-btn-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Button({
  variant = "primary",
  size = "md",
  block = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  inject();
  const Tag = as;
  const cls = ["odn-btn", `odn-btn--${variant}`, `odn-btn--${size}`, block ? "odn-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-check{font-family:var(--font-display);display:inline-flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:15px;color:var(--text-strong);line-height:1.4}
.odn-check input{position:absolute;opacity:0;width:0;height:0}
.odn-check__box{flex:none;width:20px;height:20px;border:1.5px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--white);display:flex;align-items:center;justify-content:center;transition:background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard);margin-top:1px}
.odn-check__box svg{width:14px;height:14px;color:#fff;opacity:0;transform:scale(.6);transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)}
.odn-check input:checked+.odn-check__box{background:var(--accent);border-color:var(--accent)}
.odn-check input:checked+.odn-check__box svg{opacity:1;transform:scale(1)}
.odn-check input:focus-visible+.odn-check__box{box-shadow:var(--shadow-focus)}
.odn-check:hover input:not(:disabled)+.odn-check__box{border-color:var(--carbon-400)}
.odn-check input:disabled~*{opacity:.45}
.odn-check__hint{display:block;font-size:13px;color:var(--text-muted);margin-top:2px}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-check-css")) {
    const el = document.createElement("style");
    el.id = "odn-check-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Checkbox({
  label,
  hint,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ["odn-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "odn-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), (label || hint) && /*#__PURE__*/React.createElement("span", null, label, hint && /*#__PURE__*/React.createElement("span", {
    className: "odn-check__hint"
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-iconbtn{font-family:var(--font-display);border:1.5px solid transparent;border-radius:var(--radius-md);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard);color:var(--carbon-blue);background:transparent}
.odn-iconbtn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.odn-iconbtn[disabled]{cursor:not-allowed;opacity:.4}
.odn-iconbtn--sm{width:32px;height:32px}
.odn-iconbtn--md{width:40px;height:40px}
.odn-iconbtn--lg{width:48px;height:48px}
.odn-iconbtn--ghost:hover:not([disabled]){background:var(--carbon-50)}
.odn-iconbtn--subtle{background:var(--carbon-50)}
.odn-iconbtn--subtle:hover:not([disabled]){background:var(--carbon-100)}
.odn-iconbtn--outline{border-color:var(--border-default)}
.odn-iconbtn--outline:hover:not([disabled]){background:var(--carbon-50);border-color:var(--carbon-300)}
.odn-iconbtn--primary{background:var(--accent);color:#fff}
.odn-iconbtn--primary:hover:not([disabled]){background:var(--accent-hover)}
.odn-iconbtn svg{width:1.2em;height:1.2em}
.odn-iconbtn--sm{font-size:15px}.odn-iconbtn--md{font-size:18px}.odn-iconbtn--lg{font-size:21px}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-iconbtn-css")) {
    const el = document.createElement("style");
    el.id = "odn-iconbtn-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  inject();
  const cls = ["odn-iconbtn", `odn-iconbtn--${variant}`, `odn-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-field{font-family:var(--font-display);display:flex;flex-direction:column;gap:6px}
.odn-field__label{font-size:13px;font-weight:var(--fw-medium);color:var(--text-strong)}
.odn-field__req{color:var(--accent);margin-left:2px}
.odn-field__hint{font-size:12px;color:var(--text-muted)}
.odn-field__err{font-size:12px;color:var(--danger)}
.odn-input{font-family:var(--font-display);font-size:15px;color:var(--text-strong);background:var(--white);border:1.5px solid var(--border-default);border-radius:var(--radius-md);padding:10px 13px;transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);width:100%;box-sizing:border-box}
.odn-input::placeholder{color:var(--text-subtle)}
.odn-input:hover:not(:disabled){border-color:var(--carbon-300)}
.odn-input:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.odn-input:disabled{background:var(--vapor);cursor:not-allowed;color:var(--text-muted)}
.odn-input--invalid{border-color:var(--danger)}
.odn-input--invalid:focus{box-shadow:0 0 0 3px var(--danger-soft)}
.odn-input__wrap{position:relative;display:flex;align-items:center}
.odn-input__icon{position:absolute;left:12px;display:flex;color:var(--text-muted);pointer-events:none}
.odn-input__icon svg{width:18px;height:18px}
.odn-input--has-icon{padding-left:40px}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-input-css")) {
    const el = document.createElement("style");
    el.id = "odn-input-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Input({
  label,
  hint,
  error,
  required,
  icon,
  id,
  className = "",
  ...rest
}) {
  inject();
  const fid = id || (label ? "odn-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const inputCls = ["odn-input", icon ? "odn-input--has-icon" : "", error ? "odn-input--invalid" : "", className].filter(Boolean).join(" ");
  const field = /*#__PURE__*/React.createElement("div", {
    className: icon ? "odn-input__wrap" : undefined
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "odn-input__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: inputCls,
    "aria-invalid": !!error
  }, rest)));
  if (!label && !hint && !error) return field;
  return /*#__PURE__*/React.createElement("div", {
    className: "odn-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "odn-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "odn-field__req"
  }, "*")), field, error ? /*#__PURE__*/React.createElement("span", {
    className: "odn-field__err"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "odn-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-radio{font-family:var(--font-display);display:inline-flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:15px;color:var(--text-strong);line-height:1.4}
.odn-radio input{position:absolute;opacity:0;width:0;height:0}
.odn-radio__dot{flex:none;width:20px;height:20px;border:1.5px solid var(--border-strong);border-radius:50%;background:var(--white);display:flex;align-items:center;justify-content:center;transition:border-color var(--dur-fast) var(--ease-standard);margin-top:1px}
.odn-radio__dot::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--accent);transform:scale(0);transition:transform var(--dur-fast) var(--ease-out)}
.odn-radio input:checked+.odn-radio__dot{border-color:var(--accent)}
.odn-radio input:checked+.odn-radio__dot::after{transform:scale(1)}
.odn-radio input:focus-visible+.odn-radio__dot{box-shadow:var(--shadow-focus)}
.odn-radio:hover input:not(:disabled)+.odn-radio__dot{border-color:var(--carbon-400)}
.odn-radio input:disabled~*{opacity:.45}
.odn-radio__hint{display:block;font-size:13px;color:var(--text-muted);margin-top:2px}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-radio-css")) {
    const el = document.createElement("style");
    el.id = "odn-radio-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Radio({
  label,
  hint,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ["odn-radio", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "odn-radio__dot"
  }), (label || hint) && /*#__PURE__*/React.createElement("span", null, label, hint && /*#__PURE__*/React.createElement("span", {
    className: "odn-radio__hint"
  }, hint)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-select__wrap{position:relative;font-family:var(--font-display)}
.odn-select{appearance:none;font-family:var(--font-display);font-size:15px;color:var(--text-strong);background:var(--white);border:1.5px solid var(--border-default);border-radius:var(--radius-md);padding:10px 40px 10px 13px;width:100%;box-sizing:border-box;cursor:pointer;transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)}
.odn-select:hover:not(:disabled){border-color:var(--carbon-300)}
.odn-select:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.odn-select:disabled{background:var(--vapor);cursor:not-allowed;color:var(--text-muted)}
.odn-select__chev{position:absolute;right:13px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--text-muted)}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-select-css")) {
    const el = document.createElement("style");
    el.id = "odn-select-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  placeholder,
  id,
  className = "",
  children,
  ...rest
}) {
  inject();
  const fid = id || (label ? "odn-sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const control = /*#__PURE__*/React.createElement("div", {
    className: "odn-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: ["odn-select", className].filter(Boolean).join(" ")
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "odn-select__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("div", {
    className: "odn-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "odn-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "odn-field__req"
  }, "*")), control, error ? /*#__PURE__*/React.createElement("span", {
    className: "odn-field__err"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "odn-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-switch{font-family:var(--font-display);display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-size:15px;color:var(--text-strong)}
.odn-switch input{position:absolute;opacity:0;width:0;height:0}
.odn-switch__track{flex:none;width:42px;height:24px;border-radius:var(--radius-pill);background:var(--carbon-200);position:relative;transition:background var(--dur-base) var(--ease-standard)}
.odn-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:var(--shadow-sm);transition:transform var(--dur-base) var(--ease-out)}
.odn-switch input:checked+.odn-switch__track{background:var(--accent)}
.odn-switch input:checked+.odn-switch__track::after{transform:translateX(18px)}
.odn-switch input:focus-visible+.odn-switch__track{box-shadow:var(--shadow-focus)}
.odn-switch input:disabled~*{opacity:.45}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-switch-css")) {
    const el = document.createElement("style");
    el.id = "odn-switch-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Switch({
  label,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ["odn-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "odn-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-textarea{font-family:var(--font-display);font-size:15px;line-height:1.5;color:var(--text-strong);background:var(--white);border:1.5px solid var(--border-default);border-radius:var(--radius-md);padding:11px 13px;width:100%;box-sizing:border-box;resize:vertical;min-height:96px;transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)}
.odn-textarea::placeholder{color:var(--text-subtle)}
.odn-textarea:hover:not(:disabled){border-color:var(--carbon-300)}
.odn-textarea:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.odn-textarea:disabled{background:var(--vapor);cursor:not-allowed}
.odn-textarea--invalid{border-color:var(--danger)}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-textarea-css")) {
    const el = document.createElement("style");
    el.id = "odn-textarea-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Textarea({
  label,
  hint,
  error,
  required,
  id,
  className = "",
  ...rest
}) {
  inject();
  const fid = id || (label ? "odn-ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const control = /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: ["odn-textarea", error ? "odn-textarea--invalid" : "", className].filter(Boolean).join(" "),
    "aria-invalid": !!error
  }, rest));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("div", {
    className: "odn-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "odn-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "odn-field__req"
  }, "*")), control, error ? /*#__PURE__*/React.createElement("span", {
    className: "odn-field__err"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "odn-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.odn-tabs{font-family:var(--font-display);display:flex;gap:4px;border-bottom:1px solid var(--border-default)}
.odn-tab{appearance:none;background:none;border:none;font-family:inherit;font-size:15px;font-weight:var(--fw-medium);color:var(--text-muted);padding:11px 14px;cursor:pointer;position:relative;transition:color var(--dur-fast) var(--ease-standard);display:inline-flex;align-items:center;gap:7px}
.odn-tab:hover{color:var(--text-strong)}
.odn-tab::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:2px;background:var(--accent);border-radius:2px 2px 0 0;transform:scaleX(0);transition:transform var(--dur-base) var(--ease-out)}
.odn-tab--active{color:var(--text-strong)}
.odn-tab--active::after{transform:scaleX(1)}
.odn-tab__count{font-size:12px;background:var(--carbon-50);color:var(--carbon-500);border-radius:var(--radius-pill);padding:1px 7px}
.odn-tab--active .odn-tab__count{background:var(--orange-50);color:var(--orange-700)}
`;
function inject() {
  if (typeof document !== "undefined" && !document.getElementById("odn-tabs-css")) {
    const el = document.createElement("style");
    el.id = "odn-tabs-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Tabs({
  items = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["odn-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const count = typeof it === "object" ? it.count : undefined;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      className: ["odn-tab", active ? "odn-tab--active" : ""].filter(Boolean).join(" "),
      onClick: () => onChange && onChange(id)
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      className: "odn-tab__count"
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudies.jsx
try { (() => {
// Case studies — cards with DS Card + Badge.
const {
  Card,
  Badge
} = window.OmnidianDesignSystem_05330b;
function CaseStudies() {
  const cases = [["../../assets/case-1.jpg", "Performance Index Improvement of 14%", "In just six months of working with Omnidian, a prominent commercial solar developer saw a 14% increase in the average monthly performance index."], ["../../assets/case-2.jpg", "60% Reduction in Corrective Maintenance Costs", "A recent commercial portfolio analysis showed a 60% reduction in corrective maintenance—over $3,500 in savings per year per MW."]];
  return /*#__PURE__*/React.createElement("section", {
    className: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--accent"
  }, "Case Studies"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Up and to the Right.")), /*#__PURE__*/React.createElement("div", {
    className: "cases__grid"
  }, cases.map(([img, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    media: img,
    interactive: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    size: "sm"
  }, "Case study"), /*#__PURE__*/React.createElement("h3", {
    className: "case__title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "case__desc"
  }, d), /*#__PURE__*/React.createElement("a", {
    className: "case__link",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Read the study \u2192")))));
}
window.CaseStudies = CaseStudies;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaBand.jsx
try { (() => {
// Full-bleed CTA band over solar photography.
const {
  Button
} = window.OmnidianDesignSystem_05330b;
function CtaBand({
  onExpert
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta",
    style: {
      backgroundImage: "url(../../assets/img-solar-panel.jpg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cta__title"
  }, "See how Omnidian can recover lost production and cut O&M costs."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExpert
  }, "Book a 15-min Portfolio Review")));
}
window.CtaBand = CtaBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero — dark carbon panel with gradient mesh + photography.
const {
  Button
} = window.OmnidianDesignSystem_05330b;
function Check() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
}
function Hero({
  onExpert
}) {
  const bullets = ["AI-powered real-time data insights & business intelligence.", "National scale served by local, expert 5-star technicians.", "Your own team of consultative clean energy experts. Performance, guaranteed."];
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__eyebrow"
  }, "Performance Assurance"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Unmatched Transparency & Control of Your Assets"), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "The industry's trusted performance assurance provider for solar and battery storage performance"), /*#__PURE__*/React.createElement("ul", {
    className: "hero__bullets"
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__check"
  }, /*#__PURE__*/React.createElement(Check, null)), b))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExpert
  }, "Experience Real Performance Assurance")), /*#__PURE__*/React.createElement("div", {
    className: "hero__media",
    style: {
      backgroundImage: "url(../../assets/img-services.jpg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__mediaTint"
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
// Services — intro + 6 numbered capability cards.
function ServicesSection() {
  const items = [["01", "Guaranteed Performance", "If a system generates less than 95% of our projected energy forecast, we'll cover the shortfall."], ["02", "Actionable Transparency", "Live dashboards that translate technical KPIs into data that informs decisions."], ["03", "Consistent Service Delivery", "Familiar, local, expert technicians coordinated anywhere you need them for seamless coverage."], ["04", "Investor-Ready Reporting", "Tailored insights you can share directly with finance teams and investment partners."], ["05", "Predictive Reliability", "AI-driven alerts that prevent underperformance before it costs you."], ["06", "People Who Care", "Managing 2GW+ across 2,000+ sites, our consultative experts treat your assets like our own."]];
  return /*#__PURE__*/React.createElement("section", {
    className: "services",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services__intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--accent"
  }, "Renewable Asset Management"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Built on Trust, Transparency, & Control."), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, "Whether you're expanding into new territories or scaling existing fleets, Omnidian's local trusted teams and proprietary analytics give you the transparency and control you need to make vital performance decisions\u2014even where asset density is low.")), /*#__PURE__*/React.createElement("div", {
    className: "services__grid"
  }, items.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    className: "svc",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__num"
  }, n), /*#__PURE__*/React.createElement("h3", {
    className: "svc__title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "svc__desc"
  }, d)))));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// Site footer — carbon blue, link columns + partner strip.
function SiteFooter() {
  const cols = {
    Solutions: ["Commercial PV + BESS", "Solar Financing Providers"],
    About: ["About Omnidian", "Mission & Vision", "Our Technology", "Our Values", "Careers", "Industry Insights"],
    "Contact & Support": ["800.597.9127", "Residential Customer Support", "Contact a Sales Exec", "Report Security Issues"]
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Omnidian"
  }), /*#__PURE__*/React.createElement("p", null, "Protecting and accelerating investments in clean energy."), /*#__PURE__*/React.createElement("div", {
    className: "footer__social"
  }, ["in", "IG", "X", "▶"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "footer__soc"
  }, s)))), Object.entries(cols).map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    className: "footer__col",
    key: h
  }, /*#__PURE__*/React.createElement("h4", null, h), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 by Omnidian, Inc. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy Policy"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Your Privacy Choices"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Licensing"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteNav.jsx
try { (() => {
// Omnidian marketing site — top navigation. Uses DS Button.
const {
  Button
} = window.OmnidianDesignSystem_05330b;
function SiteNav({
  onExpert
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector(".site-scroll");
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 20);
    (el || window).addEventListener("scroll", onScroll);
    return () => (el || window).removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Commercial", "Solar Financing Providers", "Industry Insights", "About", "Careers", "Support"];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Omnidian"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "nav__link",
    onClick: e => e.preventDefault()
  }, l, (l === "About" || l === "Support") && /*#__PURE__*/React.createElement("span", {
    className: "nav__caret"
  }, "\u25BE")))), /*#__PURE__*/React.createElement("div", {
    className: "nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onExpert
  }, "Talk To An Expert")), /*#__PURE__*/React.createElement("button", {
    className: "nav__burger",
    "aria-label": "Menu",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav__mobile"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: onExpert
  }, "Talk To An Expert")));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsBar.jsx
try { (() => {
// Stats band — headline KPIs on carbon blue. Uses DS Stat.
const {
  Stat
} = window.OmnidianDesignSystem_05330b;
function StatsBar() {
  const stats = [["2000", "+", "Megawatts", "Driving > $6M / yr in avoided O&M costs"], ["95", "%", "Forecast Accuracy", "Backed by our industry-leading performance guarantee"], ["250", "+", "Clients", "Best in class TTR across 48 states, D.C., & Puerto Rico"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "stats"
  }, stats.map(([v, u, l, note]) => /*#__PURE__*/React.createElement("div", {
    className: "stats__cell",
    key: l
  }, /*#__PURE__*/React.createElement(Stat, {
    value: v,
    unit: u,
    inverse: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "stats__label"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "stats__note"
  }, note))));
}
window.StatsBar = StatsBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhoWeServe.jsx
try { (() => {
// Who We Serve — image + copy, with two solution links.
const {
  Button
} = window.OmnidianDesignSystem_05330b;
function WhoWeServe() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wws"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wws__media",
    style: {
      backgroundImage: "url(../../assets/img-who-we-serve.jpg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wws__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--accent"
  }, "Who We Serve"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Commercial & Residential Asset Owners, Financiers, & Investors"), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, "For developers and IPPs requiring complete control, corporations and real estate investors seeking a proven playbook, and asset managers building scale\u2014Omnidian is your single-source, end-to-end provider for solar and battery storage assets."), /*#__PURE__*/React.createElement("div", {
    className: "wws__links"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Commercial & Community Solar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Residential Financiers & Investors"))));
}
window.WhoWeServe = WhoWeServe;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhoWeServe.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
