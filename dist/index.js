import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as q, useId as v, useRef as I, useState as $, useCallback as g, isValidElement as x, cloneElement as C } from "react";
const j = "_button_eqr16_66", B = "_loading_eqr16_136", R = "_spinner_eqr16_140", T = "_spin_eqr16_140", k = "_label_eqr16_149", w = {
  button: j,
  "size-sm": "_size-sm_eqr16_89",
  "size-md": "_size-md_eqr16_95",
  "size-lg": "_size-lg_eqr16_101",
  "variant-primary": "_variant-primary_eqr16_107",
  "variant-secondary": "_variant-secondary_eqr16_118",
  "variant-danger": "_variant-danger_eqr16_128",
  loading: B,
  spinner: R,
  spin: T,
  label: k
};
function se({
  variant: a = "primary",
  size: p = "md",
  isLoading: s = !1,
  disabled: i,
  className: u,
  children: l,
  type: m = "button",
  ..._
}) {
  const c = i || s;
  return /* @__PURE__ */ h(
    "button",
    {
      type: m,
      disabled: c,
      "aria-busy": s || void 0,
      "aria-disabled": c || void 0,
      className: [
        w.button,
        w[`variant-${a}`],
        w[`size-${p}`],
        s ? w.loading : "",
        u
      ].filter(Boolean).join(" "),
      ..._,
      children: [
        s && /* @__PURE__ */ e("span", { className: w.spinner, "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { className: w.label, children: l })
      ]
    }
  );
}
const E = "_wrapper_yhop8_66", F = "_label_yhop8_73", M = "_required_yhop8_80", O = "_srOnly_yhop8_85", V = "_inputContainer_yhop8_97", D = "_error_yhop8_110", S = "_disabled_yhop8_113", A = "_startIcon_yhop8_133", G = "_input_yhop8_97", H = "_hint_yhop8_158", J = "_hintError_yhop8_165", r = {
  wrapper: E,
  label: F,
  required: M,
  srOnly: O,
  inputContainer: V,
  error: D,
  disabled: S,
  "size-sm": "_size-sm_yhop8_118",
  "size-md": "_size-md_yhop8_123",
  "size-lg": "_size-lg_yhop8_128",
  startIcon: A,
  input: G,
  hint: H,
  hintError: J
}, oe = q(function({
  label: p,
  hint: s,
  hasError: i = !1,
  size: u = "md",
  startIcon: l,
  id: m,
  disabled: _,
  required: c,
  type: y = "text",
  className: b,
  ...o
}, t) {
  const n = v(), f = m ?? n, z = s ? `${f}-hint` : void 0;
  return /* @__PURE__ */ h("div", { className: [r.wrapper, b].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ h("label", { htmlFor: f, className: r.label, children: [
      p,
      c && /* @__PURE__ */ e("span", { className: r.required, "aria-hidden": "true", children: "*" }),
      c && /* @__PURE__ */ e("span", { className: r.srOnly, children: "(required)" })
    ] }),
    /* @__PURE__ */ h(
      "div",
      {
        className: [
          r.inputContainer,
          r[`size-${u}`],
          i ? r.error : "",
          _ ? r.disabled : ""
        ].filter(Boolean).join(" "),
        children: [
          l && /* @__PURE__ */ e("span", { className: r.startIcon, "aria-hidden": "true", children: l }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: t,
              id: f,
              type: y,
              disabled: _,
              required: c,
              "aria-invalid": i || void 0,
              "aria-describedby": z,
              className: r.input,
              ...o
            }
          )
        ]
      }
    ),
    s && /* @__PURE__ */ e(
      "p",
      {
        id: z,
        className: [r.hint, i ? r.hintError : ""].filter(Boolean).join(" "),
        role: i ? "alert" : void 0,
        children: s
      }
    )
  ] });
}), K = "_wrapper_ch418_66", P = "_labelRow_ch418_70", Q = "_textContent_ch418_78", U = "_label_ch418_70", W = "_description_ch418_91", X = "_input_ch418_103", Y = "_track_ch418_113", Z = "_thumb_ch418_125", d = {
  wrapper: K,
  labelRow: P,
  textContent: Q,
  label: U,
  description: W,
  switch: "_switch_ch418_97",
  input: X,
  track: Y,
  thumb: Z
};
function re({
  label: a,
  description: p,
  id: s,
  checked: i,
  defaultChecked: u,
  disabled: l,
  className: m,
  onChange: _,
  ...c
}) {
  const y = v(), b = s ?? y, o = p ? `${b}-description` : void 0;
  return /* @__PURE__ */ e("div", { className: [d.wrapper, m].filter(Boolean).join(" "), children: /* @__PURE__ */ h("label", { htmlFor: b, className: d.labelRow, children: [
    /* @__PURE__ */ h("span", { className: d.textContent, children: [
      /* @__PURE__ */ e("span", { className: d.label, children: a }),
      p && /* @__PURE__ */ e("span", { id: o, className: d.description, children: p })
    ] }),
    /* @__PURE__ */ h("span", { className: d.switch, children: [
      /* @__PURE__ */ e(
        "input",
        {
          id: b,
          type: "checkbox",
          role: "switch",
          className: d.input,
          checked: i,
          defaultChecked: u,
          disabled: l,
          "aria-describedby": o,
          onChange: _,
          ...c
        }
      ),
      /* @__PURE__ */ e("span", { className: d.track, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: d.thumb }) })
    ] })
  ] }) });
}
const L = "_wrapper_p4ze7_66", ee = "_tooltip_p4ze7_72", N = {
  wrapper: L,
  tooltip: ee,
  "placement-top": "_placement-top_p4ze7_88",
  "placement-bottom": "_placement-bottom_p4ze7_94",
  "placement-left": "_placement-left_p4ze7_100",
  "placement-right": "_placement-right_p4ze7_106"
};
function ae({
  children: a,
  content: p,
  placement: s = "top",
  delay: i = 200
}) {
  const u = v(), l = I(null), [m, _] = $(!1), c = g(() => {
    l.current = setTimeout(() => _(!0), i);
  }, [i]), y = g(() => {
    l.current && (clearTimeout(l.current), l.current = null), _(!1);
  }, []);
  if (!x(a))
    throw new Error("Tooltip requires a single valid React element as its child.");
  const b = C(a, {
    "aria-describedby": m ? u : void 0,
    onMouseEnter: (o) => {
      var t, n;
      (n = (t = a.props).onMouseEnter) == null || n.call(t, o), c();
    },
    onMouseLeave: (o) => {
      var t, n;
      (n = (t = a.props).onMouseLeave) == null || n.call(t, o), y();
    },
    onFocus: (o) => {
      var t, n;
      (n = (t = a.props).onFocus) == null || n.call(t, o), c();
    },
    onBlur: (o) => {
      var t, n;
      (n = (t = a.props).onBlur) == null || n.call(t, o), y();
    }
  });
  return /* @__PURE__ */ h("span", { className: N.wrapper, children: [
    b,
    m && /* @__PURE__ */ e(
      "span",
      {
        id: u,
        role: "tooltip",
        className: [N.tooltip, N[`placement-${s}`]].join(" "),
        children: p
      }
    )
  ] });
}
export {
  se as Button,
  oe as Input,
  re as Toggle,
  ae as Tooltip
};
