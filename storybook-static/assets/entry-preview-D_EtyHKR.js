import { R as n, r as i } from './index-CsdIBAqE.js';
import { u as m, r as h } from './react-18-Te5-Jngr.js';
import './index-5f0m1pej.js';
var u = Object.defineProperty,
    E = (e, r) => {
        for (var t in r) u(e, t, { get: r[t], enumerable: !0 });
    };
const { global: _ } = __STORYBOOK_MODULE_GLOBAL__;
var f = {};
E(f, { parameters: () => w, render: () => v, renderToCanvas: () => g });
var v = (e, r) => {
        let { id: t, component: o } = r;
        if (!o)
            throw new Error(
                `Unable to render story ${t} as the component annotation is missing from the default export`,
            );
        return n.createElement(o, { ...e });
    },
    { FRAMEWORK_OPTIONS: s } = _,
    x = class extends i.Component {
        constructor() {
            super(...arguments), (this.state = { hasError: !1 });
        }
        static getDerivedStateFromError() {
            return { hasError: !0 };
        }
        componentDidMount() {
            let { hasError: e } = this.state,
                { showMain: r } = this.props;
            e || r();
        }
        componentDidCatch(e) {
            let { showException: r } = this.props;
            r(e);
        }
        render() {
            let { hasError: e } = this.state,
                { children: r } = this.props;
            return e ? null : r;
        }
    },
    c = s != null && s.strictMode ? i.StrictMode : i.Fragment;
async function g({ storyContext: e, unboundStoryFn: r, showMain: t, showException: o, forceRemount: d }, a) {
    let p = n.createElement(x, { showMain: t, showException: o }, n.createElement(r, { ...e })),
        l = c ? n.createElement(c, null, p) : p;
    return d && m(a), await h(l, a), () => m(a);
}
var w = { renderer: 'react' };
export { w as parameters, v as render, g as renderToCanvas };
