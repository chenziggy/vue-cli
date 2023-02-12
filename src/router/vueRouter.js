import Vue from "vue";

class HistoryRoute {
  constructor() {
    this.current = null;
  }
}

export default class VueRouter {
  constructor(options) {
    this.mode = options.mode || "hash";
    this.routes = options.routes || [];
    this.routesMap = this.createMap(this.routes);
    this.history = new HistoryRoute();
    this.init();
  }

  init() {
    if (this.mode === "hash") {
      location.hash ? "" : (location.hash = "/");
    }
    window.addEventListener("load", () => {
      this.history.current = location.hash.slice(1);
    });
    window.addEventListener("hashchange", () => {
      this.history.current = location.hash.slice(1);
    });
  }

  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component;
      return pre;
    });
  }

  static install() {
    Vue.mixin({
      beforeCreate() {
        if (this.$options?.router) {
          this._root = this;
          this._router = this.$options.router;
          Vue.util.defineReactive(this, "xxx", this._router.history);
        } else {
          this._root = this.$parent?._root;
        }
        Object.defineProperty(this, "$router", {
          get() {
            return this._root._router;
          },
        });
        Object.defineProperty(this, "$route", {
          get() {
            return this._root._router._history.current;
          },
        });
      },
    });
    Vue.component("router-view", {
      render(h) {
        let current = this._self._root._router.history.current;
        let routesMap = this._self._root._router.routesMap;
        return h(routesMap[current]);
      },
    });
  }
}
