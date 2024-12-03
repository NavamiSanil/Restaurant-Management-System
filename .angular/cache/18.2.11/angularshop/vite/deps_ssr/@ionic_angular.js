import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  iosTransitionAnimation
} from "./chunk-YIRFHENR.js";
import {
  mdTransitionAnimation
} from "./chunk-U54LHDJX.js";
import {
  bootstrapLazy,
  componentOnReady,
  createAnimation,
  doc,
  getIonMode,
  getIonPageElement,
  getPlatforms,
  initialize,
  isPlatform,
  printIonWarning
} from "./chunk-LDPVG2KH.js";
import {
  AngularDelegate,
  Config,
  ConfigToken,
  DomController,
  IonBackButton,
  IonModal,
  IonNav,
  IonPopover,
  IonRouterOutlet,
  IonTabs,
  IonicRouteStrategy,
  MaxValidator,
  MenuController,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NavController,
  NavParams,
  OverlayBaseController,
  Platform,
  RouterLinkDelegateDirective,
  RouterLinkWithHrefDelegateDirective,
  ValueAccessor,
  provideComponentInputBinding,
  raf,
  setIonicClasses
} from "./chunk-DXPXYZVF.js";
import "./chunk-PA7I63PU.js";
import "./chunk-N4FYAG3W.js";
import "./chunk-GJDIE6SX.js";
import "./chunk-X6NTSWHZ.js";
import "./chunk-I5X3O2IP.js";
import "./chunk-KIQCUZF5.js";
import "./chunk-QYICLN72.js";
import "./chunk-DIQG4PJJ.js";
import "./chunk-KUWSRKO4.js";
import "./chunk-O2WTECMY.js";
import {
  __awaiter,
  __decorate,
  __generator,
  __spreadArray
} from "./chunk-WSIYCBTN.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-HPBI7HAQ.js";
import "./chunk-4TGYEPLX.js";
import {
  CommonModule,
  DOCUMENT,
  Location,
  NgIf,
  NgTemplateOutlet
} from "./chunk-27RC6EER.js";
import {
  APP_INITIALIZER,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  Injectable,
  Injector,
  NgModule,
  NgZone,
  Optional,
  SkipSelf,
  ViewChild,
  ViewContainerRef,
  forwardRef,
  inject,
  require_cjs,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-GLHOXQI6.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KVUAJD3Y.js";

// node_modules/@ionic/angular/fesm2022/ionic-angular.mjs
var import_rxjs = __toESM(require_cjs(), 1);

// node_modules/@ionic/core/dist/esm-es5/cubic-bezier-fe2083dc.js
var getTimeGivenProgression = function(t, a, r, e, i) {
  return solveCubicBezier(t[1], a[1], r[1], e[1], i).map(function(i2) {
    return solveCubicParametricEquation(t[0], a[0], r[0], e[0], i2);
  });
};
var solveCubicParametricEquation = function(t, a, r, e, i) {
  var n = 3 * a * Math.pow(i - 1, 2);
  var u = -3 * r * i + 3 * r + e * i;
  var o = t * Math.pow(i - 1, 3);
  return i * (n + i * u) - o;
};
var solveCubicBezier = function(t, a, r, e, i) {
  t -= i;
  a -= i;
  r -= i;
  e -= i;
  var n = solveCubicEquation(e - 3 * r + 3 * a - t, 3 * r - 6 * a + 3 * t, 3 * a - 3 * t, t);
  return n.filter(function(t2) {
    return t2 >= 0 && t2 <= 1;
  });
};
var solveQuadraticEquation = function(t, a, r) {
  var e = a * a - 4 * t * r;
  if (e < 0) {
    return [];
  } else {
    return [(-a + Math.sqrt(e)) / (2 * t), (-a - Math.sqrt(e)) / (2 * t)];
  }
};
var solveCubicEquation = function(t, a, r, e) {
  if (t === 0) {
    return solveQuadraticEquation(a, r, e);
  }
  a /= t;
  r /= t;
  e /= t;
  var i = (3 * r - a * a) / 3;
  var n = (2 * a * a * a - 9 * a * r + 27 * e) / 27;
  if (i === 0) {
    return [Math.pow(-n, 1 / 3)];
  } else if (n === 0) {
    return [Math.sqrt(-i), -Math.sqrt(-i)];
  }
  var u = Math.pow(n / 2, 2) + Math.pow(i / 3, 3);
  if (u === 0) {
    return [Math.pow(n / 2, 1 / 2) - a / 3];
  } else if (u > 0) {
    return [Math.pow(-(n / 2) + Math.sqrt(u), 1 / 3) - Math.pow(n / 2 + Math.sqrt(u), 1 / 3) - a / 3];
  }
  var o = Math.sqrt(Math.pow(-(i / 3), 3));
  var v = Math.acos(-(n / (2 * Math.sqrt(Math.pow(-(i / 3), 3)))));
  var h = 2 * Math.pow(o, 1 / 3);
  return [h * Math.cos(v / 3) - a / 3, h * Math.cos((v + 2 * Math.PI) / 3) - a / 3, h * Math.cos((v + 4 * Math.PI) / 3) - a / 3];
};

// node_modules/@ionic/core/dist/esm-es5/gesture-controller-314a54f6.js
var GestureController = function() {
  function t() {
    this.gestureId = 0;
    this.requestedStart = /* @__PURE__ */ new Map();
    this.disabledGestures = /* @__PURE__ */ new Map();
    this.disabledScroll = /* @__PURE__ */ new Set();
  }
  t.prototype.createGesture = function(t2) {
    var i;
    return new GestureDelegate(this, this.newID(), t2.name, (i = t2.priority) !== null && i !== void 0 ? i : 0, !!t2.disableScroll);
  };
  t.prototype.createBlocker = function(t2) {
    if (t2 === void 0) {
      t2 = {};
    }
    return new BlockerDelegate(this, this.newID(), t2.disable, !!t2.disableScroll);
  };
  t.prototype.start = function(t2, i, n) {
    if (!this.canStart(t2)) {
      this.requestedStart.delete(i);
      return false;
    }
    this.requestedStart.set(i, n);
    return true;
  };
  t.prototype.capture = function(t2, i, n) {
    if (!this.start(t2, i, n)) {
      return false;
    }
    var e = this.requestedStart;
    var s = -1e4;
    e.forEach(function(t3) {
      s = Math.max(s, t3);
    });
    if (s === n) {
      this.capturedId = i;
      e.clear();
      var r = new CustomEvent("ionGestureCaptured", {
        detail: {
          gestureName: t2
        }
      });
      document.dispatchEvent(r);
      return true;
    }
    e.delete(i);
    return false;
  };
  t.prototype.release = function(t2) {
    this.requestedStart.delete(t2);
    if (this.capturedId === t2) {
      this.capturedId = void 0;
    }
  };
  t.prototype.disableGesture = function(t2, i) {
    var n = this.disabledGestures.get(t2);
    if (n === void 0) {
      n = /* @__PURE__ */ new Set();
      this.disabledGestures.set(t2, n);
    }
    n.add(i);
  };
  t.prototype.enableGesture = function(t2, i) {
    var n = this.disabledGestures.get(t2);
    if (n !== void 0) {
      n.delete(i);
    }
  };
  t.prototype.disableScroll = function(t2) {
    this.disabledScroll.add(t2);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  };
  t.prototype.enableScroll = function(t2) {
    this.disabledScroll.delete(t2);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  };
  t.prototype.canStart = function(t2) {
    if (this.capturedId !== void 0) {
      return false;
    }
    if (this.isDisabled(t2)) {
      return false;
    }
    return true;
  };
  t.prototype.isCaptured = function() {
    return this.capturedId !== void 0;
  };
  t.prototype.isScrollDisabled = function() {
    return this.disabledScroll.size > 0;
  };
  t.prototype.isDisabled = function(t2) {
    var i = this.disabledGestures.get(t2);
    if (i && i.size > 0) {
      return true;
    }
    return false;
  };
  t.prototype.newID = function() {
    this.gestureId++;
    return this.gestureId;
  };
  return t;
}();
var GestureDelegate = function() {
  function t(t2, i, n, e, s) {
    this.id = i;
    this.name = n;
    this.disableScroll = s;
    this.priority = e * 1e6 + i;
    this.ctrl = t2;
  }
  t.prototype.canStart = function() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  };
  t.prototype.start = function() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  };
  t.prototype.capture = function() {
    if (!this.ctrl) {
      return false;
    }
    var t2 = this.ctrl.capture(this.name, this.id, this.priority);
    if (t2 && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return t2;
  };
  t.prototype.release = function() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  };
  t.prototype.destroy = function() {
    this.release();
    this.ctrl = void 0;
  };
  return t;
}();
var BlockerDelegate = function() {
  function t(t2, i, n, e) {
    this.id = i;
    this.disable = n;
    this.disableScroll = e;
    this.ctrl = t2;
  }
  t.prototype.block = function() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (var t2 = 0, i = this.disable; t2 < i.length; t2++) {
        var n = i[t2];
        this.ctrl.disableGesture(n, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  };
  t.prototype.unblock = function() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (var t2 = 0, i = this.disable; t2 < i.length; t2++) {
        var n = i[t2];
        this.ctrl.enableGesture(n, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  };
  t.prototype.destroy = function() {
    this.unblock();
    this.ctrl = void 0;
  };
  return t;
}();
var BACKDROP_NO_SCROLL = "backdrop-no-scroll";
var GESTURE_CONTROLLER = new GestureController();

// node_modules/@ionic/core/dist/esm-es5/index-39782642.js
var addEventListener = function(e, r, t, a) {
  var n = supportsPassive(e) ? {
    capture: !!a.capture,
    passive: !!a.passive
  } : !!a.capture;
  var i;
  var f;
  if (e["__zone_symbol__addEventListener"]) {
    i = "__zone_symbol__addEventListener";
    f = "__zone_symbol__removeEventListener";
  } else {
    i = "addEventListener";
    f = "removeEventListener";
  }
  e[i](r, t, n);
  return function() {
    e[f](r, t, n);
  };
};
var supportsPassive = function(e) {
  if (_sPassive === void 0) {
    try {
      var r = Object.defineProperty({}, "passive", {
        get: function() {
          _sPassive = true;
        }
      });
      e.addEventListener("optsTest", function() {
        return;
      }, r);
    } catch (e2) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
var _sPassive;
var MOUSE_WAIT = 2e3;
var createPointerEvents = function(e, r, t, a, n) {
  var i;
  var f;
  var v;
  var u;
  var s;
  var o;
  var c;
  var d = 0;
  var l = function(a2) {
    d = Date.now() + MOUSE_WAIT;
    if (!r(a2)) {
      return;
    }
    if (!f && t) {
      f = addEventListener(e, "touchmove", t, n);
    }
    if (!v) {
      v = addEventListener(a2.target, "touchend", m, n);
    }
    if (!u) {
      u = addEventListener(a2.target, "touchcancel", m, n);
    }
  };
  var E = function(a2) {
    if (d > Date.now()) {
      return;
    }
    if (!r(a2)) {
      return;
    }
    if (!o && t) {
      o = addEventListener(getDocument(e), "mousemove", t, n);
    }
    if (!c) {
      c = addEventListener(getDocument(e), "mouseup", p, n);
    }
  };
  var m = function(e2) {
    _();
    if (a) {
      a(e2);
    }
  };
  var p = function(e2) {
    L();
    if (a) {
      a(e2);
    }
  };
  var _ = function() {
    if (f) {
      f();
    }
    if (v) {
      v();
    }
    if (u) {
      u();
    }
    f = v = u = void 0;
  };
  var L = function() {
    if (o) {
      o();
    }
    if (c) {
      c();
    }
    o = c = void 0;
  };
  var D = function() {
    _();
    L();
  };
  var G = function(r2) {
    if (r2 === void 0) {
      r2 = true;
    }
    if (!r2) {
      if (i) {
        i();
      }
      if (s) {
        s();
      }
      i = s = void 0;
      D();
    } else {
      if (!i) {
        i = addEventListener(e, "touchstart", l, n);
      }
      if (!s) {
        s = addEventListener(e, "mousedown", E, n);
      }
    }
  };
  var P = function() {
    G(false);
    a = t = r = void 0;
  };
  return {
    enable: G,
    stop: D,
    destroy: P
  };
};
var getDocument = function(e) {
  return e instanceof Document ? e : e.ownerDocument;
};
var createPanRecognizer = function(e, r, t) {
  var a = t * (Math.PI / 180);
  var n = e === "x";
  var i = Math.cos(a);
  var f = r * r;
  var v = 0;
  var u = 0;
  var s = false;
  var o = 0;
  return {
    start: function(e2, r2) {
      v = e2;
      u = r2;
      o = 0;
      s = true;
    },
    detect: function(e2, r2) {
      if (!s) {
        return false;
      }
      var t2 = e2 - v;
      var a2 = r2 - u;
      var c = t2 * t2 + a2 * a2;
      if (c < f) {
        return false;
      }
      var d = Math.sqrt(c);
      var l = (n ? t2 : a2) / d;
      if (l > i) {
        o = 1;
      } else if (l < -i) {
        o = -1;
      } else {
        o = 0;
      }
      s = false;
      return true;
    },
    isGesture: function() {
      return o !== 0;
    },
    getDirection: function() {
      return o;
    }
  };
};
var createGesture = function(e) {
  var r = false;
  var t = false;
  var a = true;
  var n = false;
  var i = Object.assign({
    disableScroll: false,
    direction: "x",
    gesturePriority: 0,
    passive: true,
    maxAngle: 40,
    threshold: 10
  }, e);
  var f = i.canStart;
  var v = i.onWillStart;
  var u = i.onStart;
  var s = i.onEnd;
  var o = i.notCaptured;
  var c = i.onMove;
  var d = i.threshold;
  var l = i.passive;
  var E = i.blurOnStart;
  var m = {
    type: "pan",
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: void 0,
    data: void 0
  };
  var p = createPanRecognizer(i.direction, i.threshold, i.maxAngle);
  var _ = GESTURE_CONTROLLER.createGesture({
    name: e.gestureName,
    priority: e.gesturePriority,
    disableScroll: e.disableScroll
  });
  var L = function(e2) {
    var r2 = now(e2);
    if (t || !a) {
      return false;
    }
    updateDetail(e2, m);
    m.startX = m.currentX;
    m.startY = m.currentY;
    m.startTime = m.currentTime = r2;
    m.velocityX = m.velocityY = m.deltaX = m.deltaY = 0;
    m.event = e2;
    if (f && f(m) === false) {
      return false;
    }
    _.release();
    if (!_.start()) {
      return false;
    }
    t = true;
    if (d === 0) {
      return P();
    }
    p.start(m.startX, m.startY);
    return true;
  };
  var D = function(e2) {
    if (r) {
      if (!n && a) {
        n = true;
        calcGestureData(m, e2);
        requestAnimationFrame(G);
      }
      return;
    }
    calcGestureData(m, e2);
    if (p.detect(m.currentX, m.currentY)) {
      if (!p.isGesture() || !P()) {
        O();
      }
    }
  };
  var G = function() {
    if (!r) {
      return;
    }
    n = false;
    if (c) {
      c(m);
    }
  };
  var P = function() {
    if (!_.capture()) {
      return false;
    }
    r = true;
    a = false;
    m.startX = m.currentX;
    m.startY = m.currentY;
    m.startTime = m.currentTime;
    if (v) {
      v(m).then(y);
    } else {
      y();
    }
    return true;
  };
  var g = function() {
    if (typeof document !== "undefined") {
      var e2 = document.activeElement;
      if (e2 === null || e2 === void 0 ? void 0 : e2.blur) {
        e2.blur();
      }
    }
  };
  var y = function() {
    if (E) {
      g();
    }
    if (u) {
      u(m);
    }
    a = true;
  };
  var R = function() {
    r = false;
    t = false;
    n = false;
    a = true;
    _.release();
  };
  var T = function(e2) {
    var t2 = r;
    var n2 = a;
    R();
    if (!n2) {
      return;
    }
    calcGestureData(m, e2);
    if (t2) {
      if (s) {
        s(m);
      }
      return;
    }
    if (o) {
      o(m);
    }
  };
  var h = createPointerEvents(i.el, L, D, T, {
    capture: false,
    passive: l
  });
  var O = function() {
    R();
    h.stop();
    if (o) {
      o(m);
    }
  };
  return {
    enable: function(e2) {
      if (e2 === void 0) {
        e2 = true;
      }
      if (!e2) {
        if (r) {
          T(void 0);
        }
        R();
      }
      h.enable(e2);
    },
    destroy: function() {
      _.destroy();
      h.destroy();
    }
  };
};
var calcGestureData = function(e, r) {
  if (!r) {
    return;
  }
  var t = e.currentX;
  var a = e.currentY;
  var n = e.currentTime;
  updateDetail(r, e);
  var i = e.currentX;
  var f = e.currentY;
  var v = e.currentTime = now(r);
  var u = v - n;
  if (u > 0 && u < 100) {
    var s = (i - t) / u;
    var o = (f - a) / u;
    e.velocityX = s * 0.7 + e.velocityX * 0.3;
    e.velocityY = o * 0.7 + e.velocityY * 0.3;
  }
  e.deltaX = i - e.startX;
  e.deltaY = f - e.startY;
  e.event = r;
};
var updateDetail = function(e, r) {
  var t = 0;
  var a = 0;
  if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
      var i = n[0];
      t = i.clientX;
      a = i.clientY;
    } else if (e.pageX !== void 0) {
      t = e.pageX;
      a = e.pageY;
    }
  }
  r.currentX = t;
  r.currentY = a;
};
var now = function(e) {
  return e.timeStamp || Date.now();
};

// node_modules/@ionic/core/dist/esm-es5/config-49c88215.js
var IonicSafeString = /* @__PURE__ */ function() {
  function e(e2) {
    this.value = e2;
  }
  return e;
}();
var setupConfig = function(e) {
  var r = window;
  var n = r.Ionic;
  if (n && n.config && n.config.constructor.name !== "Object") {
    return;
  }
  r.Ionic = r.Ionic || {};
  r.Ionic.config = Object.assign(Object.assign({}, r.Ionic.config), e);
  return r.Ionic.config;
};

// node_modules/@ionic/core/dist/esm-es5/theme-01f3f29c.js
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function(r, t, n, e) {
  return __awaiter(void 0, void 0, void 0, function() {
    var o;
    return __generator(this, function(a) {
      if (r != null && r[0] !== "#" && !SCHEME.test(r)) {
        o = document.querySelector("ion-router");
        if (o) {
          if (t != null) {
            t.preventDefault();
          }
          return [2, o.push(r, n, e)];
        }
      }
      return [2, false];
    });
  });
};

// node_modules/@ionic/core/dist/esm-es5/hardware-back-button-06ef3c3e.js
var MENU_BACK_BUTTON_PRIORITY = 99;

// node_modules/@ionic/core/dist/esm-es5/index-24b48b06.js
var baseAnimation = function(n) {
  return createAnimation().duration(n ? 400 : 300);
};
var menuOverlayAnimation = function(n) {
  var r;
  var e;
  var t = n.width + 8;
  var i = createAnimation();
  var a = createAnimation();
  if (n.isEndSide) {
    r = t + "px";
    e = "0px";
  } else {
    r = -t + "px";
    e = "0px";
  }
  i.addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(r, ")"), "translateX(".concat(e, ")"));
  var o = getIonMode(n);
  var u = o === "ios";
  var s = u ? 0.2 : 0.25;
  a.addElement(n.backdropEl).fromTo("opacity", 0.01, s);
  return baseAnimation(u).addAnimation([i, a]);
};
var menuPushAnimation = function(n) {
  var r;
  var e;
  var t = getIonMode(n);
  var i = n.width;
  if (n.isEndSide) {
    r = -i + "px";
    e = i + "px";
  } else {
    r = i + "px";
    e = -i + "px";
  }
  var a = createAnimation().addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(e, ")"), "translateX(0px)");
  var o = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(r, ")"));
  var u = createAnimation().addElement(n.backdropEl).fromTo("opacity", 0.01, 0.32);
  return baseAnimation(t === "ios").addAnimation([a, o, u]);
};
var menuRevealAnimation = function(n) {
  var r = getIonMode(n);
  var e = n.width * (n.isEndSide ? -1 : 1) + "px";
  var t = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(e, ")"));
  return baseAnimation(r === "ios").addAnimation(t);
};
var createMenuController = function() {
  var n = /* @__PURE__ */ new Map();
  var r = [];
  var e = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2, true)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, r2.open()];
            }
            return [2, false];
        }
      });
    });
  };
  var t = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, n2 !== void 0 ? c(n2, true) : f()];
          case 1:
            r2 = e2.sent();
            if (r2 !== void 0) {
              return [2, r2.close()];
            }
            return [2, false];
        }
      });
    });
  };
  var i = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2, true)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, r2.toggle()];
            }
            return [2, false];
        }
      });
    });
  };
  var a = function(n2, r2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var e2;
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return [4, c(r2)];
          case 1:
            e2 = t2.sent();
            if (e2) {
              e2.disabled = !n2;
            }
            return [2, e2];
        }
      });
    });
  };
  var o = function(n2, r2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var e2;
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return [4, c(r2)];
          case 1:
            e2 = t2.sent();
            if (e2) {
              e2.swipeGesture = n2;
            }
            return [2, e2];
        }
      });
    });
  };
  var u = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2, r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (!(n2 != null)) return [3, 2];
            return [4, c(n2)];
          case 1:
            r2 = e2.sent();
            return [2, r2 !== void 0 && r2.isOpen()];
          case 2:
            return [4, f()];
          case 3:
            r2 = e2.sent();
            return [2, r2 !== void 0];
        }
      });
    });
  };
  var s = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, !r2.disabled];
            }
            return [2, false];
        }
      });
    });
  };
  var c = function(n2) {
    var e2 = [];
    for (var t2 = 1; t2 < arguments.length; t2++) {
      e2[t2 - 1] = arguments[t2];
    }
    return __awaiter(void 0, __spreadArray([n2], e2, true), void 0, function(n3, e3) {
      var t3, i2, a2;
      if (e3 === void 0) {
        e3 = false;
      }
      return __generator(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, x()];
          case 1:
            o2.sent();
            if (n3 === "start" || n3 === "end") {
              t3 = r.filter(function(r2) {
                return r2.side === n3 && !r2.disabled;
              });
              if (t3.length >= 1) {
                if (t3.length > 1 && e3) {
                  printIonWarning('menuController queried for a menu on the "'.concat(n3, '" side, but ').concat(t3.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), t3.map(function(n4) {
                    return n4.el;
                  }));
                }
                return [2, t3[0].el];
              }
              i2 = r.filter(function(r2) {
                return r2.side === n3;
              });
              if (i2.length >= 1) {
                if (i2.length > 1 && e3) {
                  printIonWarning('menuController queried for a menu on the "'.concat(n3, '" side, but ').concat(i2.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), i2.map(function(n4) {
                    return n4.el;
                  }));
                }
                return [2, i2[0].el];
              }
            } else if (n3 != null) {
              return [2, b(function(r2) {
                return r2.menuId === n3;
              })];
            }
            a2 = b(function(n4) {
              return !n4.disabled;
            });
            if (a2) {
              return [2, a2];
            }
            return [2, r.length > 0 ? r[0].el : void 0];
        }
      });
    });
  };
  var f = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, w()];
        }
      });
    });
  };
  var v = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, g()];
        }
      });
    });
  };
  var d = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, A()];
        }
      });
    });
  };
  var _ = function(r2, e2) {
    n.set(r2, e2);
  };
  var m = function(n2) {
    if (r.indexOf(n2) < 0) {
      r.push(n2);
    }
  };
  var l = function(n2) {
    var e2 = r.indexOf(n2);
    if (e2 > -1) {
      r.splice(e2, 1);
    }
  };
  var h = function(n2, r2, e2, t2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var i2;
      return __generator(this, function(a2) {
        switch (a2.label) {
          case 0:
            if (A()) {
              return [2, false];
            }
            if (!r2) return [3, 3];
            return [4, f()];
          case 1:
            i2 = a2.sent();
            if (!(i2 && n2.el !== i2)) return [3, 3];
            return [4, i2.setOpen(false, false)];
          case 2:
            a2.sent();
            a2.label = 3;
          case 3:
            return [2, n2._setOpen(r2, e2, t2)];
        }
      });
    });
  };
  var p = function(r2, e2) {
    var t2 = n.get(r2);
    if (!t2) {
      throw new Error("animation not registered");
    }
    var i2 = t2(e2);
    return i2;
  };
  var w = function() {
    return b(function(n2) {
      return n2._isOpen;
    });
  };
  var g = function() {
    return r.map(function(n2) {
      return n2.el;
    });
  };
  var A = function() {
    return r.some(function(n2) {
      return n2.isAnimating;
    });
  };
  var b = function(n2) {
    var e2 = r.find(n2);
    if (e2 !== void 0) {
      return e2.el;
    }
    return void 0;
  };
  var x = function() {
    return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(n2) {
      return new Promise(function(r2) {
        return componentOnReady(n2, r2);
      });
    }));
  };
  _("reveal", menuRevealAnimation);
  _("push", menuPushAnimation);
  _("overlay", menuOverlayAnimation);
  doc === null || doc === void 0 ? void 0 : doc.addEventListener("ionBackButton", function(n2) {
    var r2 = w();
    if (r2) {
      n2.detail.register(MENU_BACK_BUTTON_PRIORITY, function() {
        return r2.close();
      });
    }
  });
  return {
    registerAnimation: _,
    get: c,
    getMenus: v,
    getOpen: f,
    isEnabled: s,
    swipeGesture: o,
    isAnimating: d,
    isOpen: u,
    enable: a,
    toggle: i,
    close: t,
    open: e,
    _getOpenSync: w,
    _createAnimation: p,
    _register: m,
    _unregister: l,
    _setOpen: h
  };
};
var menuController = createMenuController();

// node_modules/@ionic/core/dist/esm-es5/overlays-ae10d43d.js
var createController = function(e) {
  return {
    create: function(n) {
      return createOverlay(e, n);
    },
    dismiss: function(n, r, t) {
      return dismissOverlay(document, n, r, e, t);
    },
    getTop: function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
          return [2, getPresentedOverlay(document, e)];
        });
      });
    }
  };
};
var alertController = createController("ion-alert");
var actionSheetController = createController("ion-action-sheet");
var loadingController = createController("ion-loading");
var modalController = createController("ion-modal");
var pickerController = createController("ion-picker-legacy");
var popoverController = createController("ion-popover");
var toastController = createController("ion-toast");
var createOverlay = function(e, n) {
  if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
    return window.customElements.whenDefined(e).then(function() {
      var r = document.createElement(e);
      r.classList.add("overlay-hidden");
      Object.assign(r, Object.assign(Object.assign({}, n), {
        hasController: true
      }));
      getAppRoot(document).appendChild(r);
      return new Promise(function(e2) {
        return componentOnReady(r, e2);
      });
    });
  }
  return Promise.resolve();
};
var isOverlayHidden = function(e) {
  return e.classList.contains("overlay-hidden");
};
var dismissOverlay = function(e, n, r, t, o) {
  var a = getPresentedOverlay(e, t, o);
  if (!a) {
    return Promise.reject("overlay does not exist");
  }
  return a.dismiss(n, r);
};
var getOverlays = function(e, n) {
  if (n === void 0) {
    n = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast";
  }
  return Array.from(e.querySelectorAll(n)).filter(function(e2) {
    return e2.overlayIndex > 0;
  });
};
var getPresentedOverlays = function(e, n) {
  return getOverlays(e, n).filter(function(e2) {
    return !isOverlayHidden(e2);
  });
};
var getPresentedOverlay = function(e, n, r) {
  var t = getPresentedOverlays(e, n);
  return r === void 0 ? t[t.length - 1] : t.find(function(e2) {
    return e2.id === r;
  });
};
var getAppRoot = function(e) {
  return e.querySelector("ion-app") || e.body;
};

// node_modules/@ionic/core/dist/esm-es5/index.js
var IonicSlides = function(e) {
  var o = e.swiper, t = e.extendParams;
  var s = {
    effect: void 0,
    direction: "horizontal",
    initialSlide: 0,
    loop: false,
    parallax: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: "container",
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: false
    },
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    touchStartPreventDefault: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loopAdditionalSlides: 0,
    noSwiping: true,
    runCallbacksOnInit: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    fadeEffect: {
      crossFade: false
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide"
    }
  };
  if (o.pagination) {
    s.pagination = {
      type: "bullets",
      clickable: false,
      hideOnClick: false
    };
  }
  if (o.scrollbar) {
    s.scrollbar = {
      hide: true
    };
  }
  t(s);
};

// node_modules/@ionic/core/dist/esm/polyfills/index.js
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win2 = window;
    if (!win2.customElements || win2.Element && (!win2.Element.prototype.closest || !win2.Element.prototype.matches || !win2.Element.prototype.remove || !win2.Element.prototype.getRootNode)) {
      promises.push(import(
        /* webpackChunkName: "polyfills-dom" */
        "./dom-BLQN6AJG.js"
      ));
    }
    var checkIfURLIsSupported = function() {
      try {
        var u = new URL("b", "http://a");
        u.pathname = "c%20d";
        return u.href === "http://a/c%20d" && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win2.NodeList && !win2.NodeList.prototype.forEach || !win2.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") {
      promises.push(import(
        /* webpackChunkName: "polyfills-core-js" */
        "./core-js-VHV4WWND.js"
      ));
    }
  }
  return Promise.all(promises);
}

// node_modules/@ionic/core/dist/esm-es5/app-globals-5dbb61a5.js
var globalScripts = initialize;

// node_modules/@ionic/core/dist/esm-es5/loader.js
var defineCustomElements = function(e, o) {
  return __awaiter(void 0, void 0, void 0, function() {
    return __generator(this, function(e2) {
      switch (e2.label) {
        case 0:
          if (typeof window === "undefined") return [2, void 0];
          return [4, globalScripts()];
        case 1:
          e2.sent();
          return [2, bootstrapLazy(JSON.parse('[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":["typeChanged"],"disabled":["disabledChanged"],"side":["sideChanged"],"swipeGesture":["swipeGestureChanged"]}],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[33,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":["onTypeChange"]}]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":["activatedChanged"]}],[1,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":["activatedChanged"]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":["swipeGestureChanged"],"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]},null,{"value":["valueChanged"]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":["valueChanged"],"disabled":["disabledChanged"],"readonly":["readonlyChanged"]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":["thresholdChanged"],"disabled":["disabledChanged"]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-segment_2",[[33,"ion-segment-button",{"contentId":[513,"content-id"],"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":["valueChanged"]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[16,"ionSegmentViewScroll","handleSegmentViewScroll"],[0,"keydown","onKeyDown"]],{"color":["colorChanged"],"swipeGesture":["swipeGestureChanged"],"value":["valueChanged"],"disabled":["disabledChanged"]}]]],["ion-chip",[[33,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-input",[[38,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearInputIcon":[1,"clear-input-icon"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"type":["onTypeChange"],"value":["valueChanged"]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":["onLangChanged"],"dir":["onDirChanged"],"debounce":["debounceChanged"],"value":["valueChanged"],"showCancelButton":["showCancelButtonChanged"]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"activated":[32]},null,{"disabled":["disabledChanged"]}]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":["swipeGestureChanged"],"root":["rootChanged"]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":["changeActive"]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-textarea",[[38,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"value":["valueChanged"]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":["maxItemsChanged"],"itemsBeforeCollapse":["maxItemsChanged"],"itemsAfterCollapse":["maxItemsChanged"]}]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":["selectedTabChanged"]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":["propDidChange"],"to":["propDidChange"]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":["srcChanged"]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]},null,{"debounce":["debounceChanged"],"min":["minChanged"],"max":["maxChanged"],"activeBarStart":["activeBarStartChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-segment-content",[[1,"ion-segment-content"]]],["ion-segment-view",[[33,"ion-segment-view",{"disabled":[4],"isManualScroll":[32],"setContent":[64]},[[1,"scroll","handleScroll"],[1,"touchstart","handleScrollStart"],[1,"touchend","handleTouchEnd"]]]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":["visibleChanged"],"disabled":["updateState"],"when":["updateState"]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-select-modal",[[34,"ion-select-modal",{"header":[1],"multiple":[4],"options":[16]}]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"formatOptions":["formatOptionsChanged"],"disabled":["disabledChanged"],"min":["minChanged"],"max":["maxChanged"],"presentation":["presentationChanged"],"yearValues":["yearValuesChanged"],"monthValues":["monthValuesChanged"],"dayValues":["dayValuesChanged"],"hourValues":["hourValuesChanged"],"minuteValues":["minuteValuesChanged"],"value":["valueChanged"]}],[34,"ion-picker-legacy",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}],[32,"ion-picker-legacy-column",{"col":[16]},null,{"col":["colChanged"]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"],"buttons":["buttonsChanged"],"inputs":["inputsChanged"]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"focusTrap":[4,"focus-trap"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-picker",[[33,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[1,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"ariaLabel":[32],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"aria-label":["ariaLabelChanged"],"value":["valueChange"]}]]],["ion-picker-column-option",[[33,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":["onAriaLabelChange"]}]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"focusTrap":[4,"focus-trap"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":["onTriggerChange"],"triggerAction":["onTriggerChange"],"isOpen":["onIsOpenChange"]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"setFocus":[64]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[33,"ion-note",{"color":[513]}],[1,"ion-skeleton-text",{"animated":[4]}],[38,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":["colorChanged"],"position":["positionChanged"]}],[33,"ion-list-header",{"color":[513],"lines":[1]}],[33,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[516],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":["buttonChanged"]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":["swipeHandlerChanged"]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"fixedSlotPlacement":[1,"fixed-slot-placement"],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[33,"ion-title",{"color":[513],"size":[1]},null,{"size":["sizeChanged"]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[38,"ion-buttons",{"collapse":[4]}]]],["ion-select_3",[[33,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"isExpanded":[32],"open":[64]},null,{"disabled":["styleChanged"],"isExpanded":["styleChanged"],"placeholder":["styleChanged"],"value":["styleChanged"]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":["valueChanged"]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]],{"value":["valueChanged"]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":["disabledChanged"]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"ios":["loadIcon"],"md":["loadIcon"]}]]]]'), o)];
      }
    });
  });
};

// node_modules/@ionic/core/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();

// node_modules/@ionic/angular/fesm2022/ionic-angular.mjs
var _c0 = ["*"];
var _c1 = ["outletContent"];
var _c2 = ["outlet"];
var _c3 = [[["", "slot", "top"]], "*", [["ion-tab"]]];
var _c4 = ["[slot=top]", "*", "ion-tab"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ion-router-outlet", 5, 1);
    ɵɵlistener("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onStackWillChange($event));
    })("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onStackDidChange($event));
    });
    ɵɵelementEnd();
  }
}
function IonTabs_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2, ["*ngIf", "tabs.length > 0"]);
  }
}
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementContainer(1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
var BooleanValueAccessorDirective = class _BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  _handleIonChange(el) {
    this.handleValueChange(el, el.checked);
  }
  /** @nocollapse */
  static ɵfac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BooleanValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _BooleanValueAccessorDirective,
    selectors: [["ion-checkbox"], ["ion-toggle"]],
    hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleIonChange($event.target);
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _BooleanValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-checkbox,ion-toggle",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleIonChange: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var NumericValueAccessorDirective = class _NumericValueAccessorDirective extends ValueAccessor {
  el;
  constructor(injector, el) {
    super(injector, el);
    this.el = el;
  }
  handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    if (this.el.nativeElement.tagName === "ION-INPUT") {
      super.registerOnChange((value) => {
        fn(value === "" ? null : parseFloat(value));
      });
    } else {
      super.registerOnChange(fn);
    }
  }
  /** @nocollapse */
  static ɵfac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _NumericValueAccessorDirective,
    selectors: [["ion-input", "type", "number"], ["ion-range"]],
    hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx.handleInputEvent($event.target);
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _NumericValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number],ion-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var SelectValueAccessorDirective = class _SelectValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleChangeEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static ɵfac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _SelectValueAccessorDirective,
    selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
    hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleChangeEvent($event.target);
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _SelectValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleChangeEvent: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var TextValueAccessorDirective = class _TextValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static ɵfac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _TextValueAccessorDirective,
    selectors: [["ion-input", 3, "type", "number"], ["ion-textarea"], ["ion-searchbar"]],
    hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx._handleInputEvent($event.target);
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _TextValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = (0, import_rxjs.fromEvent)(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var IonAccordion = class IonAccordion2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordion2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAccordion2,
    selectors: [["ion-accordion"]],
    inputs: {
      disabled: "disabled",
      mode: "mode",
      readonly: "readonly",
      toggleIcon: "toggleIcon",
      toggleIconSlot: "toggleIconSlot",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAccordion_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordion = __decorate([ProxyCmp({
  inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
    type: Component,
    args: [{
      selector: "ion-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAccordionGroup = class IonAccordionGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonAccordionGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordionGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAccordionGroup2,
    selectors: [["ion-accordion-group"]],
    inputs: {
      animated: "animated",
      disabled: "disabled",
      expand: "expand",
      mode: "mode",
      multiple: "multiple",
      readonly: "readonly",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAccordionGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordionGroup = __decorate([ProxyCmp({
  inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
    type: Component,
    args: [{
      selector: "ion-accordion-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonActionSheet = class IonActionSheet2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonActionSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonActionSheet2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonActionSheet2,
    selectors: [["ion-action-sheet"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonActionSheet_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonActionSheet = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
    type: Component,
    args: [{
      selector: "ion-action-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAlert = class IonAlert2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonAlert_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAlert2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAlert2,
    selectors: [["ion-alert"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      inputs: "inputs",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAlert_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAlert = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
    type: Component,
    args: [{
      selector: "ion-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonApp = class IonApp2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonApp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonApp2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonApp2,
    selectors: [["ion-app"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonApp_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonApp = __decorate([ProxyCmp({
  methods: ["setFocus"]
})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
    type: Component,
    args: [{
      selector: "ion-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAvatar = class IonAvatar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAvatar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAvatar2,
    selectors: [["ion-avatar"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAvatar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAvatar = __decorate([ProxyCmp({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
    type: Component,
    args: [{
      selector: "ion-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBackdrop = class IonBackdrop2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionBackdropTap"]);
  }
  /** @nocollapse */
  static ɵfac = function IonBackdrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackdrop2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBackdrop2,
    selectors: [["ion-backdrop"]],
    inputs: {
      stopPropagation: "stopPropagation",
      tappable: "tappable",
      visible: "visible"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBackdrop_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBackdrop = __decorate([ProxyCmp({
  inputs: ["stopPropagation", "tappable", "visible"]
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
    type: Component,
    args: [{
      selector: "ion-backdrop",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["stopPropagation", "tappable", "visible"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBadge = class IonBadge2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBadge2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBadge2,
    selectors: [["ion-badge"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBadge_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBadge = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
    type: Component,
    args: [{
      selector: "ion-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBreadcrumb = class IonBreadcrumb2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonBreadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumb2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBreadcrumb2,
    selectors: [["ion-breadcrumb"]],
    inputs: {
      active: "active",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      separator: "separator",
      target: "target"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumb = __decorate([ProxyCmp({
  inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBreadcrumbs = class IonBreadcrumbs2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCollapsedClick"]);
  }
  /** @nocollapse */
  static ɵfac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumbs2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBreadcrumbs2,
    selectors: [["ion-breadcrumbs"]],
    inputs: {
      color: "color",
      itemsAfterCollapse: "itemsAfterCollapse",
      itemsBeforeCollapse: "itemsBeforeCollapse",
      maxItems: "maxItems",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumbs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumbs = __decorate([ProxyCmp({
  inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonButton = class IonButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonButton2,
    selectors: [["ion-button"]],
    inputs: {
      buttonType: "buttonType",
      color: "color",
      disabled: "disabled",
      download: "download",
      expand: "expand",
      fill: "fill",
      form: "form",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      shape: "shape",
      size: "size",
      strong: "strong",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButton = __decorate([ProxyCmp({
  inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
    type: Component,
    args: [{
      selector: "ion-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonButtons = class IonButtons2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonButtons_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButtons2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonButtons2,
    selectors: [["ion-buttons"]],
    inputs: {
      collapse: "collapse"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonButtons_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButtons = __decorate([ProxyCmp({
  inputs: ["collapse"]
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
    type: Component,
    args: [{
      selector: "ion-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCard = class IonCard2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCard2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCard2,
    selectors: [["ion-card"]],
    inputs: {
      button: "button",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCard_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCard = __decorate([ProxyCmp({
  inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
    type: Component,
    args: [{
      selector: "ion-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardContent = class IonCardContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardContent2,
    selectors: [["ion-card-content"]],
    inputs: {
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardContent = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
    type: Component,
    args: [{
      selector: "ion-card-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardHeader = class IonCardHeader2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardHeader2,
    selectors: [["ion-card-header"]],
    inputs: {
      color: "color",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardHeader = __decorate([ProxyCmp({
  inputs: ["color", "mode", "translucent"]
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
    type: Component,
    args: [{
      selector: "ion-card-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardSubtitle = class IonCardSubtitle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardSubtitle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardSubtitle2,
    selectors: [["ion-card-subtitle"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardSubtitle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardSubtitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
    type: Component,
    args: [{
      selector: "ion-card-subtitle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardTitle = class IonCardTitle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardTitle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardTitle2,
    selectors: [["ion-card-title"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardTitle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardTitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
    type: Component,
    args: [{
      selector: "ion-card-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCheckbox = class IonCheckbox2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCheckbox2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCheckbox2,
    selectors: [["ion-checkbox"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      indeterminate: "indeterminate",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCheckbox = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "indeterminate", "justify", "labelPlacement", "mode", "name", "value"]
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
    type: Component,
    args: [{
      selector: "ion-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "indeterminate", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonChip = class IonChip2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonChip2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonChip2,
    selectors: [["ion-chip"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      outline: "outline"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonChip_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonChip = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "outline"]
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
    type: Component,
    args: [{
      selector: "ion-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "outline"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCol = class IonCol2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCol_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCol2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCol2,
    selectors: [["ion-col"]],
    inputs: {
      offset: "offset",
      offsetLg: "offsetLg",
      offsetMd: "offsetMd",
      offsetSm: "offsetSm",
      offsetXl: "offsetXl",
      offsetXs: "offsetXs",
      pull: "pull",
      pullLg: "pullLg",
      pullMd: "pullMd",
      pullSm: "pullSm",
      pullXl: "pullXl",
      pullXs: "pullXs",
      push: "push",
      pushLg: "pushLg",
      pushMd: "pushMd",
      pushSm: "pushSm",
      pushXl: "pushXl",
      pushXs: "pushXs",
      size: "size",
      sizeLg: "sizeLg",
      sizeMd: "sizeMd",
      sizeSm: "sizeSm",
      sizeXl: "sizeXl",
      sizeXs: "sizeXs"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCol_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCol = __decorate([ProxyCmp({
  inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
    type: Component,
    args: [{
      selector: "ion-col",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonContent = class IonContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
  /** @nocollapse */
  static ɵfac = function IonContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonContent2,
    selectors: [["ion-content"]],
    inputs: {
      color: "color",
      fixedSlotPlacement: "fixedSlotPlacement",
      forceOverscroll: "forceOverscroll",
      fullscreen: "fullscreen",
      scrollEvents: "scrollEvents",
      scrollX: "scrollX",
      scrollY: "scrollY"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonContent = __decorate([ProxyCmp({
  inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
  methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
    type: Component,
    args: [{
      selector: "ion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonDatetime = class IonDatetime2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonDatetime_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetime2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonDatetime2,
    selectors: [["ion-datetime"]],
    inputs: {
      cancelText: "cancelText",
      clearText: "clearText",
      color: "color",
      dayValues: "dayValues",
      disabled: "disabled",
      doneText: "doneText",
      firstDayOfWeek: "firstDayOfWeek",
      formatOptions: "formatOptions",
      highlightedDates: "highlightedDates",
      hourCycle: "hourCycle",
      hourValues: "hourValues",
      isDateEnabled: "isDateEnabled",
      locale: "locale",
      max: "max",
      min: "min",
      minuteValues: "minuteValues",
      mode: "mode",
      monthValues: "monthValues",
      multiple: "multiple",
      name: "name",
      preferWheel: "preferWheel",
      presentation: "presentation",
      readonly: "readonly",
      showClearButton: "showClearButton",
      showDefaultButtons: "showDefaultButtons",
      showDefaultTimeLabel: "showDefaultTimeLabel",
      showDefaultTitle: "showDefaultTitle",
      size: "size",
      titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
      value: "value",
      yearValues: "yearValues"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonDatetime_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetime = __decorate([ProxyCmp({
  inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
  methods: ["confirm", "reset", "cancel"]
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
    type: Component,
    args: [{
      selector: "ion-datetime",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonDatetimeButton = class IonDatetimeButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonDatetimeButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetimeButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonDatetimeButton2,
    selectors: [["ion-datetime-button"]],
    inputs: {
      color: "color",
      datetime: "datetime",
      disabled: "disabled",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonDatetimeButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetimeButton = __decorate([ProxyCmp({
  inputs: ["color", "datetime", "disabled", "mode"]
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
    type: Component,
    args: [{
      selector: "ion-datetime-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "datetime", "disabled", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFab = class IonFab2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFab2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFab2,
    selectors: [["ion-fab"]],
    inputs: {
      activated: "activated",
      edge: "edge",
      horizontal: "horizontal",
      vertical: "vertical"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFab = __decorate([ProxyCmp({
  inputs: ["activated", "edge", "horizontal", "vertical"],
  methods: ["close"]
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
    type: Component,
    args: [{
      selector: "ion-fab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "edge", "horizontal", "vertical"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFabButton = class IonFabButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonFabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFabButton2,
    selectors: [["ion-fab-button"]],
    inputs: {
      activated: "activated",
      closeIcon: "closeIcon",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      show: "show",
      size: "size",
      target: "target",
      translucent: "translucent",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFabButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabButton = __decorate([ProxyCmp({
  inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
    type: Component,
    args: [{
      selector: "ion-fab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFabList = class IonFabList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFabList2,
    selectors: [["ion-fab-list"]],
    inputs: {
      activated: "activated",
      side: "side"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFabList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabList = __decorate([ProxyCmp({
  inputs: ["activated", "side"]
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
    type: Component,
    args: [{
      selector: "ion-fab-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFooter = class IonFooter2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFooter2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFooter2,
    selectors: [["ion-footer"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFooter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFooter = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
    type: Component,
    args: [{
      selector: "ion-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonGrid = class IonGrid2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonGrid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonGrid2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonGrid2,
    selectors: [["ion-grid"]],
    inputs: {
      fixed: "fixed"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonGrid_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonGrid = __decorate([ProxyCmp({
  inputs: ["fixed"]
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
    type: Component,
    args: [{
      selector: "ion-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fixed"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonHeader = class IonHeader2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonHeader2,
    selectors: [["ion-header"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonHeader = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
    type: Component,
    args: [{
      selector: "ion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonIcon = class IonIcon2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonIcon2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonIcon2,
    selectors: [["ion-icon"]],
    inputs: {
      color: "color",
      flipRtl: "flipRtl",
      icon: "icon",
      ios: "ios",
      lazy: "lazy",
      md: "md",
      mode: "mode",
      name: "name",
      sanitize: "sanitize",
      size: "size",
      src: "src"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonIcon = __decorate([ProxyCmp({
  inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
    type: Component,
    args: [{
      selector: "ion-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonImg = class IonImg2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
  /** @nocollapse */
  static ɵfac = function IonImg_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonImg2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonImg2,
    selectors: [["ion-img"]],
    inputs: {
      alt: "alt",
      src: "src"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonImg_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonImg = __decorate([ProxyCmp({
  inputs: ["alt", "src"]
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
    type: Component,
    args: [{
      selector: "ion-img",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alt", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInfiniteScroll = class IonInfiniteScroll2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInfinite"]);
  }
  /** @nocollapse */
  static ɵfac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScroll2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInfiniteScroll2,
    selectors: [["ion-infinite-scroll"]],
    inputs: {
      disabled: "disabled",
      position: "position",
      threshold: "threshold"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScroll_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScroll = __decorate([ProxyCmp({
  inputs: ["disabled", "position", "threshold"],
  methods: ["complete"]
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "position", "threshold"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScrollContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInfiniteScrollContent2,
    selectors: [["ion-infinite-scroll-content"]],
    inputs: {
      loadingSpinner: "loadingSpinner",
      loadingText: "loadingText"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScrollContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScrollContent = __decorate([ProxyCmp({
  inputs: ["loadingSpinner", "loadingText"]
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["loadingSpinner", "loadingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInput = class IonInput2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static ɵfac = function IonInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInput2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInput2,
    selectors: [["ion-input"]],
    inputs: {
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      autofocus: "autofocus",
      clearInput: "clearInput",
      clearInputIcon: "clearInputIcon",
      clearOnEdit: "clearOnEdit",
      color: "color",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      maxlength: "maxlength",
      min: "min",
      minlength: "minlength",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      pattern: "pattern",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      shape: "shape",
      spellcheck: "spellcheck",
      step: "step",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInput_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInput = __decorate([ProxyCmp({
  inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
    type: Component,
    args: [{
      selector: "ion-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInputPasswordToggle = class IonInputPasswordToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputPasswordToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInputPasswordToggle2,
    selectors: [["ion-input-password-toggle"]],
    inputs: {
      color: "color",
      hideIcon: "hideIcon",
      mode: "mode",
      showIcon: "showIcon"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInputPasswordToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInputPasswordToggle = __decorate([ProxyCmp({
  inputs: ["color", "hideIcon", "mode", "showIcon"]
})], IonInputPasswordToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
    type: Component,
    args: [{
      selector: "ion-input-password-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "hideIcon", "mode", "showIcon"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItem = class IonItem2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItem2,
    selectors: [["ion-item"]],
    inputs: {
      button: "button",
      color: "color",
      detail: "detail",
      detailIcon: "detailIcon",
      disabled: "disabled",
      download: "download",
      href: "href",
      lines: "lines",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItem = __decorate([ProxyCmp({
  inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
    type: Component,
    args: [{
      selector: "ion-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemDivider = class IonItemDivider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemDivider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemDivider2,
    selectors: [["ion-item-divider"]],
    inputs: {
      color: "color",
      mode: "mode",
      sticky: "sticky"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemDivider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemDivider = __decorate([ProxyCmp({
  inputs: ["color", "mode", "sticky"]
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
    type: Component,
    args: [{
      selector: "ion-item-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "sticky"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemGroup = class IonItemGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemGroup2,
    selectors: [["ion-item-group"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemGroup = __decorate([ProxyCmp({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
    type: Component,
    args: [{
      selector: "ion-item-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemOption = class IonItemOption2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOption2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemOption2,
    selectors: [["ion-item-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      download: "download",
      expandable: "expandable",
      href: "href",
      mode: "mode",
      rel: "rel",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemOption_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
    type: Component,
    args: [{
      selector: "ion-item-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemOptions = class IonItemOptions2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSwipe"]);
  }
  /** @nocollapse */
  static ɵfac = function IonItemOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOptions2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemOptions2,
    selectors: [["ion-item-options"]],
    inputs: {
      side: "side"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemOptions_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOptions = __decorate([ProxyCmp({
  inputs: ["side"]
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
    type: Component,
    args: [{
      selector: "ion-item-options",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemSliding = class IonItemSliding2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionDrag"]);
  }
  /** @nocollapse */
  static ɵfac = function IonItemSliding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemSliding2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemSliding2,
    selectors: [["ion-item-sliding"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemSliding_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemSliding = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"]
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
    type: Component,
    args: [{
      selector: "ion-item-sliding",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonLabel = class IonLabel2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLabel2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonLabel2,
    selectors: [["ion-label"]],
    inputs: {
      color: "color",
      mode: "mode",
      position: "position"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonLabel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLabel = __decorate([ProxyCmp({
  inputs: ["color", "mode", "position"]
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
    type: Component,
    args: [{
      selector: "ion-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "position"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonList = class IonList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonList2,
    selectors: [["ion-list"]],
    inputs: {
      inset: "inset",
      lines: "lines",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonList = __decorate([ProxyCmp({
  inputs: ["inset", "lines", "mode"],
  methods: ["closeSlidingItems"]
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
    type: Component,
    args: [{
      selector: "ion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inset", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonListHeader = class IonListHeader2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonListHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonListHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonListHeader2,
    selectors: [["ion-list-header"]],
    inputs: {
      color: "color",
      lines: "lines",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonListHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonListHeader = __decorate([ProxyCmp({
  inputs: ["color", "lines", "mode"]
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
    type: Component,
    args: [{
      selector: "ion-list-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonLoading = class IonLoading2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonLoading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLoading2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonLoading2,
    selectors: [["ion-loading"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      showBackdrop: "showBackdrop",
      spinner: "spinner",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonLoading_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLoading = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
    type: Component,
    args: [{
      selector: "ion-loading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenu = class IonMenu2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
  /** @nocollapse */
  static ɵfac = function IonMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonMenu2,
    selectors: [["ion-menu"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      maxEdgeStart: "maxEdgeStart",
      menuId: "menuId",
      side: "side",
      swipeGesture: "swipeGesture",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenu = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
  methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
    type: Component,
    args: [{
      selector: "ion-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenuButton = class IonMenuButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenuButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonMenuButton2,
    selectors: [["ion-menu-button"]],
    inputs: {
      autoHide: "autoHide",
      color: "color",
      disabled: "disabled",
      menu: "menu",
      mode: "mode",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenuButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuButton = __decorate([ProxyCmp({
  inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
    type: Component,
    args: [{
      selector: "ion-menu-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenuToggle = class IonMenuToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenuToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonMenuToggle2,
    selectors: [["ion-menu-toggle"]],
    inputs: {
      autoHide: "autoHide",
      menu: "menu"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenuToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuToggle = __decorate([ProxyCmp({
  inputs: ["autoHide", "menu"]
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
    type: Component,
    args: [{
      selector: "ion-menu-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "menu"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonNavLink = class IonNavLink2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonNavLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNavLink2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonNavLink2,
    selectors: [["ion-nav-link"]],
    inputs: {
      component: "component",
      componentProps: "componentProps",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNavLink_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNavLink = __decorate([ProxyCmp({
  inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
    type: Component,
    args: [{
      selector: "ion-nav-link",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonNote = class IonNote2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonNote_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNote2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonNote2,
    selectors: [["ion-note"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNote_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNote = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
    type: Component,
    args: [{
      selector: "ion-note",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPicker = class IonPicker2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPicker2,
    selectors: [["ion-picker"]],
    inputs: {
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPicker = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
    type: Component,
    args: [{
      selector: "ion-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerColumn = class IonPickerColumn2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonPickerColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumn2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPickerColumn2,
    selectors: [["ion-picker-column"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerColumn_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumn = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "value"],
  methods: ["setFocus"]
})], IonPickerColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
    type: Component,
    args: [{
      selector: "ion-picker-column",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerColumnOption = class IonPickerColumnOption2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumnOption2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPickerColumnOption2,
    selectors: [["ion-picker-column-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerColumnOption_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumnOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "value"]
})], IonPickerColumnOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
    type: Component,
    args: [{
      selector: "ion-picker-column-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerLegacy = class IonPickerLegacy2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionPickerDidPresent", "ionPickerWillPresent", "ionPickerWillDismiss", "ionPickerDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonPickerLegacy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerLegacy2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPickerLegacy2,
    selectors: [["ion-picker-legacy"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      columns: "columns",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerLegacy_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerLegacy = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss", "getColumn"]
})], IonPickerLegacy);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerLegacy, [{
    type: Component,
    args: [{
      selector: "ion-picker-legacy",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonProgressBar = class IonProgressBar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonProgressBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonProgressBar2,
    selectors: [["ion-progress-bar"]],
    inputs: {
      buffer: "buffer",
      color: "color",
      mode: "mode",
      reversed: "reversed",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonProgressBar = __decorate([ProxyCmp({
  inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
    type: Component,
    args: [{
      selector: "ion-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRadio = class IonRadio2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonRadio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadio2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRadio2,
    selectors: [["ion-radio"]],
    inputs: {
      alignment: "alignment",
      color: "color",
      disabled: "disabled",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRadio_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadio = __decorate([ProxyCmp({
  inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
    type: Component,
    args: [{
      selector: "ion-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRadioGroup = class IonRadioGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadioGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRadioGroup2,
    selectors: [["ion-radio-group"]],
    inputs: {
      allowEmptySelection: "allowEmptySelection",
      compareWith: "compareWith",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadioGroup = __decorate([ProxyCmp({
  inputs: ["allowEmptySelection", "compareWith", "name", "value"]
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
    type: Component,
    args: [{
      selector: "ion-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEmptySelection", "compareWith", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRange = class IonRange2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"]);
  }
  /** @nocollapse */
  static ɵfac = function IonRange_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRange2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRange2,
    selectors: [["ion-range"]],
    inputs: {
      activeBarStart: "activeBarStart",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      dualKnobs: "dualKnobs",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      min: "min",
      mode: "mode",
      name: "name",
      pin: "pin",
      pinFormatter: "pinFormatter",
      snaps: "snaps",
      step: "step",
      ticks: "ticks",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRange_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRange = __decorate([ProxyCmp({
  inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
    type: Component,
    args: [{
      selector: "ion-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRefresher = class IonRefresher2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
  }
  /** @nocollapse */
  static ɵfac = function IonRefresher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresher2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRefresher2,
    selectors: [["ion-refresher"]],
    inputs: {
      closeDuration: "closeDuration",
      disabled: "disabled",
      mode: "mode",
      pullFactor: "pullFactor",
      pullMax: "pullMax",
      pullMin: "pullMin",
      snapbackDuration: "snapbackDuration"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRefresher_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresher = __decorate([ProxyCmp({
  inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
  methods: ["complete", "cancel", "getProgress"]
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
    type: Component,
    args: [{
      selector: "ion-refresher",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRefresherContent = class IonRefresherContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRefresherContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresherContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRefresherContent2,
    selectors: [["ion-refresher-content"]],
    inputs: {
      pullingIcon: "pullingIcon",
      pullingText: "pullingText",
      refreshingSpinner: "refreshingSpinner",
      refreshingText: "refreshingText"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRefresherContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresherContent = __decorate([ProxyCmp({
  inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
    type: Component,
    args: [{
      selector: "ion-refresher-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonReorder = class IonReorder2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonReorder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorder2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonReorder2,
    selectors: [["ion-reorder"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonReorder_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorder = __decorate([ProxyCmp({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
    type: Component,
    args: [{
      selector: "ion-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonReorderGroup = class IonReorderGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionItemReorder"]);
  }
  /** @nocollapse */
  static ɵfac = function IonReorderGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorderGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonReorderGroup2,
    selectors: [["ion-reorder-group"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonReorderGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorderGroup = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["complete"]
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
    type: Component,
    args: [{
      selector: "ion-reorder-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRippleEffect = class IonRippleEffect2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRippleEffect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRippleEffect2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRippleEffect2,
    selectors: [["ion-ripple-effect"]],
    inputs: {
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRippleEffect_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRippleEffect = __decorate([ProxyCmp({
  inputs: ["type"],
  methods: ["addRipple"]
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
    type: Component,
    args: [{
      selector: "ion-ripple-effect",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRow = class IonRow2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRow2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRow2,
    selectors: [["ion-row"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRow_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRow = __decorate([ProxyCmp({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
    type: Component,
    args: [{
      selector: "ion-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSearchbar = class IonSearchbar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static ɵfac = function IonSearchbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSearchbar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSearchbar2,
    selectors: [["ion-searchbar"]],
    inputs: {
      animated: "animated",
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      cancelButtonIcon: "cancelButtonIcon",
      cancelButtonText: "cancelButtonText",
      clearIcon: "clearIcon",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      inputmode: "inputmode",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      searchIcon: "searchIcon",
      showCancelButton: "showCancelButton",
      showClearButton: "showClearButton",
      spellcheck: "spellcheck",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSearchbar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSearchbar = __decorate([ProxyCmp({
  inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
    type: Component,
    args: [{
      selector: "ion-searchbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegment = class IonSegment2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonSegment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegment2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegment2,
    selectors: [["ion-segment"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      scrollable: "scrollable",
      selectOnFocus: "selectOnFocus",
      swipeGesture: "swipeGesture",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegment_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegment = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
    type: Component,
    args: [{
      selector: "ion-segment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentButton = class IonSegmentButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegmentButton2,
    selectors: [["ion-segment-button"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      layout: "layout",
      mode: "mode",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentButton = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
    type: Component,
    args: [{
      selector: "ion-segment-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentContent = class IonSegmentContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegmentContent2,
    selectors: [["ion-segment-content"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentContent = __decorate([ProxyCmp({})], IonSegmentContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentContent, [{
    type: Component,
    args: [{
      selector: "ion-segment-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentView = class IonSegmentView2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSegmentViewScroll"]);
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentView2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegmentView2,
    selectors: [["ion-segment-view"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentView_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentView = __decorate([ProxyCmp({
  inputs: ["disabled"]
})], IonSegmentView);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentView, [{
    type: Component,
    args: [{
      selector: "ion-segment-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelect = class IonSelect2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelect2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSelect2,
    selectors: [["ion-select"]],
    inputs: {
      cancelText: "cancelText",
      color: "color",
      compareWith: "compareWith",
      disabled: "disabled",
      expandedIcon: "expandedIcon",
      fill: "fill",
      interface: "interface",
      interfaceOptions: "interfaceOptions",
      justify: "justify",
      label: "label",
      labelPlacement: "labelPlacement",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      okText: "okText",
      placeholder: "placeholder",
      selectedText: "selectedText",
      shape: "shape",
      toggleIcon: "toggleIcon",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelect_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelect = __decorate([ProxyCmp({
  inputs: ["cancelText", "color", "compareWith", "disabled", "expandedIcon", "fill", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "shape", "toggleIcon", "value"],
  methods: ["open"]
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
    type: Component,
    args: [{
      selector: "ion-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "color", "compareWith", "disabled", "expandedIcon", "fill", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "shape", "toggleIcon", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelectModal = class IonSelectModal2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelectModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectModal2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSelectModal2,
    selectors: [["ion-select-modal"]],
    inputs: {
      header: "header",
      multiple: "multiple",
      options: "options"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelectModal_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectModal = __decorate([ProxyCmp({
  inputs: ["header", "multiple", "options"]
})], IonSelectModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectModal, [{
    type: Component,
    args: [{
      selector: "ion-select-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["header", "multiple", "options"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelectOption = class IonSelectOption2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectOption2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSelectOption2,
    selectors: [["ion-select-option"]],
    inputs: {
      disabled: "disabled",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelectOption_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectOption = __decorate([ProxyCmp({
  inputs: ["disabled", "value"]
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
    type: Component,
    args: [{
      selector: "ion-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSkeletonText = class IonSkeletonText2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSkeletonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSkeletonText2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSkeletonText2,
    selectors: [["ion-skeleton-text"]],
    inputs: {
      animated: "animated"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSkeletonText_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSkeletonText = __decorate([ProxyCmp({
  inputs: ["animated"]
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
    type: Component,
    args: [{
      selector: "ion-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSpinner = class IonSpinner2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSpinner2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSpinner2,
    selectors: [["ion-spinner"]],
    inputs: {
      color: "color",
      duration: "duration",
      name: "name",
      paused: "paused"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSpinner_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSpinner = __decorate([ProxyCmp({
  inputs: ["color", "duration", "name", "paused"]
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
    type: Component,
    args: [{
      selector: "ion-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "duration", "name", "paused"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSplitPane = class IonSplitPane2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
  }
  /** @nocollapse */
  static ɵfac = function IonSplitPane_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSplitPane2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSplitPane2,
    selectors: [["ion-split-pane"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      when: "when"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSplitPane_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSplitPane = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "when"]
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
    type: Component,
    args: [{
      selector: "ion-split-pane",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "when"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTab = class IonTab2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTab2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTab2,
    selectors: [["ion-tab"]],
    inputs: {
      component: "component",
      tab: "tab"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTab = __decorate([ProxyCmp({
  inputs: ["component", "tab"],
  methods: ["setActive"]
})], IonTab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTab, [{
    type: Component,
    args: [{
      selector: "ion-tab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "tab"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTabBar = class IonTabBar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTabBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTabBar2,
    selectors: [["ion-tab-bar"]],
    inputs: {
      color: "color",
      mode: "mode",
      selectedTab: "selectedTab",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTabBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabBar = __decorate([ProxyCmp({
  inputs: ["color", "mode", "selectedTab", "translucent"]
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
    type: Component,
    args: [{
      selector: "ion-tab-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "selectedTab", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTabButton = class IonTabButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTabButton2,
    selectors: [["ion-tab-button"]],
    inputs: {
      disabled: "disabled",
      download: "download",
      href: "href",
      layout: "layout",
      mode: "mode",
      rel: "rel",
      selected: "selected",
      tab: "tab",
      target: "target"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTabButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabButton = __decorate([ProxyCmp({
  inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
    type: Component,
    args: [{
      selector: "ion-tab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonText = class IonText2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonText2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonText2,
    selectors: [["ion-text"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonText_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonText = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
    type: Component,
    args: [{
      selector: "ion-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTextarea = class IonTextarea2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static ɵfac = function IonTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTextarea2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTextarea2,
    selectors: [["ion-textarea"]],
    inputs: {
      autoGrow: "autoGrow",
      autocapitalize: "autocapitalize",
      autofocus: "autofocus",
      clearOnEdit: "clearOnEdit",
      color: "color",
      cols: "cols",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      rows: "rows",
      shape: "shape",
      spellcheck: "spellcheck",
      value: "value",
      wrap: "wrap"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTextarea_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTextarea = __decorate([ProxyCmp({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
  methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
    type: Component,
    args: [{
      selector: "ion-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonThumbnail = class IonThumbnail2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonThumbnail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonThumbnail2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonThumbnail2,
    selectors: [["ion-thumbnail"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonThumbnail_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonThumbnail = __decorate([ProxyCmp({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
    type: Component,
    args: [{
      selector: "ion-thumbnail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTitle = class IonTitle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTitle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTitle2,
    selectors: [["ion-title"]],
    inputs: {
      color: "color",
      size: "size"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTitle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTitle = __decorate([ProxyCmp({
  inputs: ["color", "size"]
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
    type: Component,
    args: [{
      selector: "ion-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToast = class IonToast2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonToast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToast2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonToast2,
    selectors: [["ion-toast"]],
    inputs: {
      animated: "animated",
      buttons: "buttons",
      color: "color",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      icon: "icon",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      layout: "layout",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      position: "position",
      positionAnchor: "positionAnchor",
      swipeGesture: "swipeGesture",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToast_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToast = __decorate([ProxyCmp({
  inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
    type: Component,
    args: [{
      selector: "ion-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToggle = class IonToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static ɵfac = function IonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonToggle2,
    selectors: [["ion-toggle"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      enableOnOffLabels: "enableOnOffLabels",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToggle = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "justify", "labelPlacement", "mode", "name", "value"]
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
    type: Component,
    args: [{
      selector: "ion-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToolbar = class IonToolbar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToolbar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonToolbar2,
    selectors: [["ion-toolbar"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToolbar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToolbar = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
    type: Component,
    args: [{
      selector: "ion-toolbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRouterOutlet2 = class _IonRouterOutlet extends IonRouterOutlet {
  parentOutlet;
  /**
   * `static: true` must be set so the query results are resolved
   * before change detection runs. Otherwise, the view container
   * ref will be ion-router-outlet instead of ng-container, and
   * the first view will be added as a sibling of ion-router-outlet
   * instead of a child.
   */
  outletContent;
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
  /** @nocollapse */
  static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    viewQuery: function IonRouterOutlet_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outletContent = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["outletContent", ""]],
    template: function IonRouterOutlet_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementContainerStart(0, null, 0);
        ɵɵprojection(2);
        ɵɵelementContainerEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet2, [{
    type: Component,
    args: [{
      selector: "ion-router-outlet",
      template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["name"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }]
    }, {
      type: Location
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: NgZone
    }, {
      type: ActivatedRoute
    }, {
      type: IonRouterOutlet2,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }]
    }];
  }, {
    outletContent: [{
      type: ViewChild,
      args: ["outletContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var IonTabs2 = class _IonTabs extends IonTabs {
  outlet;
  tabBar;
  tabBars;
  tabs;
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonTabs_BaseFactory;
    return function IonTabs_Factory(__ngFactoryType__) {
      return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = ɵɵgetInheritedFactory(_IonTabs)))(__ngFactoryType__ || _IonTabs);
    };
  })();
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, IonTabBar, 5);
        ɵɵcontentQuery(dirIndex, IonTabBar, 4);
        ɵɵcontentQuery(dirIndex, IonTab, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBars = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
      }
    },
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 5, IonRouterOutlet2);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outlet = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c4,
    decls: 6,
    vars: 2,
    consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
    template: function IonTabs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c3);
        ɵɵprojection(0);
        ɵɵelementStart(1, "div", 2, 0);
        ɵɵtemplate(3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
        ɵɵelementEnd();
        ɵɵprojection(5, 1);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.tabs.length === 0);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tabs.length > 0);
      }
    },
    dependencies: [NgIf, IonRouterOutlet2],
    styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs2, [{
    type: Component,
    args: [{
      selector: "ion-tabs",
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
      styles: [":host{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;flex:1;contain:layout size style}\n"]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: ["outlet", {
        read: IonRouterOutlet2,
        static: false
      }]
    }],
    tabBar: [{
      type: ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: ContentChildren,
      args: [IonTabBar]
    }],
    tabs: [{
      type: ContentChildren,
      args: [IonTab]
    }]
  });
})();
var IonBackButton2 = class _IonBackButton extends IonBackButton {
  constructor(routerOutlet, navCtrl, config2, r, z, c) {
    super(routerOutlet, navCtrl, config2, r, z, c);
  }
  /** @nocollapse */
  static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonBackButton)(ɵɵdirectiveInject(IonRouterOutlet2, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonBackButton,
    selectors: [["ion-back-button"]],
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBackButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton2, [{
    type: Component,
    args: [{
      selector: "ion-back-button",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: IonRouterOutlet2,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NavController
    }, {
      type: Config
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var IonNav2 = class _IonNav extends IonNav {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
    super(ref, environmentInjector, injector, angularDelegate, z, c);
  }
  /** @nocollapse */
  static ɵfac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonNav,
    selectors: [["ion-nav"]],
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNav_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav2, [{
    type: Component,
    args: [{
      selector: "ion-nav",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: EnvironmentInjector
    }, {
      type: Injector
    }, {
      type: AngularDelegate
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var RouterLinkDelegateDirective2 = class _RouterLinkDelegateDirective extends RouterLinkDelegateDirective {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRouterLinkDelegateDirective_BaseFactory;
    return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
      return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(_RouterLinkDelegateDirective)))(__ngFactoryType__ || _RouterLinkDelegateDirective);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], null, null);
})();
var RouterLinkWithHrefDelegateDirective2 = class _RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
    return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
      return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(_RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], null, null);
})();
var IonModal2 = class _IonModal extends IonModal {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonModal_BaseFactory;
    return function IonModal_Factory(__ngFactoryType__) {
      return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = ɵɵgetInheritedFactory(_IonModal)))(__ngFactoryType__ || _IonModal);
    };
  })();
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonModal,
    selectors: [["ion-modal"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
    template: function IonModal_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, IonModal_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal2, [{
    type: Component,
    args: [{
      selector: "ion-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();
var IonPopover2 = class _IonPopover extends IonPopover {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonPopover_BaseFactory;
    return function IonPopover_Factory(__ngFactoryType__) {
      return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = ɵɵgetInheritedFactory(_IonPopover)))(__ngFactoryType__ || _IonPopover);
    };
  })();
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonPopover,
    selectors: [["ion-popover"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function IonPopover_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover2, [{
    type: Component,
    args: [{
      selector: "ion-popover",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();
var ION_MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMaxValidator),
  multi: true
};
var IonMaxValidator = class _IonMaxValidator extends MaxValidator {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonMaxValidator_BaseFactory;
    return function IonMaxValidator_Factory(__ngFactoryType__) {
      return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = ɵɵgetInheritedFactory(_IonMaxValidator)))(__ngFactoryType__ || _IonMaxValidator);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonMaxValidator,
    selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    features: [ɵɵProvidersFeature([ION_MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
      providers: [ION_MAX_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, null);
})();
var ION_MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMinValidator),
  multi: true
};
var IonMinValidator = class _IonMinValidator extends MinValidator {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonMinValidator_BaseFactory;
    return function IonMinValidator_Factory(__ngFactoryType__) {
      return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = ɵɵgetInheritedFactory(_IonMinValidator)))(__ngFactoryType__ || _IonMinValidator);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonMinValidator,
    selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    features: [ɵɵProvidersFeature([ION_MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
      providers: [ION_MIN_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, null);
})();
var AlertController = class _AlertController extends OverlayBaseController {
  constructor() {
    super(alertController);
  }
  /** @nocollapse */
  static ɵfac = function AlertController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AlertController,
    factory: _AlertController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var AnimationController = class _AnimationController {
  /**
   * Create a new animation
   */
  create(animationId) {
    return createAnimation(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p2, p3, progression) {
    return getTimeGivenProgression(p0, p1, p2, p3, progression);
  }
  /** @nocollapse */
  static ɵfac = function AnimationController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationController,
    factory: _AnimationController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ActionSheetController = class _ActionSheetController extends OverlayBaseController {
  constructor() {
    super(actionSheetController);
  }
  /** @nocollapse */
  static ɵfac = function ActionSheetController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ActionSheetController,
    factory: _ActionSheetController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var GestureController2 = class _GestureController {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach((key) => {
        if (typeof opts[key] === "function") {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return createGesture(opts);
  }
  /** @nocollapse */
  static ɵfac = function GestureController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestureController)(ɵɵinject(NgZone));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _GestureController,
    factory: _GestureController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var LoadingController = class _LoadingController extends OverlayBaseController {
  constructor() {
    super(loadingController);
  }
  /** @nocollapse */
  static ɵfac = function LoadingController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _LoadingController,
    factory: _LoadingController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var MenuController2 = class _MenuController extends MenuController {
  constructor() {
    super(menuController);
  }
  /** @nocollapse */
  static ɵfac = function MenuController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _MenuController,
    factory: _MenuController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ModalController = class _ModalController extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(modalController);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal")
    }));
  }
  /** @nocollapse */
  static ɵfac = function ModalController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ModalController,
    factory: _ModalController.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var PickerController = class _PickerController extends OverlayBaseController {
  constructor() {
    super(pickerController);
  }
  /** @nocollapse */
  static ɵfac = function PickerController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PickerController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _PickerController,
    factory: _PickerController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var PopoverController = class extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(popoverController);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover")
    }));
  }
};
var ToastController = class _ToastController extends OverlayBaseController {
  constructor() {
    super(toastController);
  }
  /** @nocollapse */
  static ɵfac = function ToastController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ToastController,
    factory: _ToastController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var appInitialize = (config2, doc2, zone) => {
  return () => {
    const win2 = doc2.defaultView;
    if (win2 && typeof window !== "undefined") {
      setupConfig(__spreadProps(__spreadValues({}, config2), {
        _zoneGate: (h) => zone.run(h)
      }));
      const aelFn = "__zone_symbol__addEventListener" in doc2.body ? "__zone_symbol__addEventListener" : "addEventListener";
      return applyPolyfills().then(() => {
        return defineCustomElements(win2, {
          exclude: ["ion-tabs"],
          syncQueue: true,
          raf,
          jmp: (h) => zone.runOutsideAngular(h),
          ael(elm, eventName, cb, opts) {
            elm[aelFn](eventName, cb, opts);
          },
          rel(elm, eventName, cb, opts) {
            elm.removeEventListener(eventName, cb, opts);
          }
        });
      });
    }
  };
};
var DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPickerLegacy, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
var DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
  // manual proxies
  IonModal2,
  IonPopover2,
  // ngModel accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  // navigation
  IonTabs2,
  IonRouterOutlet2,
  IonBackButton2,
  IonNav2,
  RouterLinkDelegateDirective2,
  RouterLinkWithHrefDelegateDirective2,
  // validators
  IonMinValidator,
  IonMaxValidator
];
var IonicModule = class _IonicModule {
  static forRoot(config2 = {}) {
    return {
      ngModule: _IonicModule,
      providers: [{
        provide: ConfigToken,
        useValue: config2
      }, {
        provide: APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [ConfigToken, DOCUMENT, NgZone]
      }, AngularDelegate, provideComponentInputBinding()]
    };
  }
  /** @nocollapse */
  static ɵfac = function IonicModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonicModule)();
  };
  /** @nocollapse */
  static ɵmod = ɵɵdefineNgModule({
    type: _IonicModule,
    declarations: [
      IonAccordion,
      IonAccordionGroup,
      IonActionSheet,
      IonAlert,
      IonApp,
      IonAvatar,
      IonBackdrop,
      IonBadge,
      IonBreadcrumb,
      IonBreadcrumbs,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCheckbox,
      IonChip,
      IonCol,
      IonContent,
      IonDatetime,
      IonDatetimeButton,
      IonFab,
      IonFabButton,
      IonFabList,
      IonFooter,
      IonGrid,
      IonHeader,
      IonIcon,
      IonImg,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonInput,
      IonInputPasswordToggle,
      IonItem,
      IonItemDivider,
      IonItemGroup,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonLabel,
      IonList,
      IonListHeader,
      IonLoading,
      IonMenu,
      IonMenuButton,
      IonMenuToggle,
      IonNavLink,
      IonNote,
      IonPicker,
      IonPickerColumn,
      IonPickerColumnOption,
      IonPickerLegacy,
      IonProgressBar,
      IonRadio,
      IonRadioGroup,
      IonRange,
      IonRefresher,
      IonRefresherContent,
      IonReorder,
      IonReorderGroup,
      IonRippleEffect,
      IonRow,
      IonSearchbar,
      IonSegment,
      IonSegmentButton,
      IonSegmentContent,
      IonSegmentView,
      IonSelect,
      IonSelectModal,
      IonSelectOption,
      IonSkeletonText,
      IonSpinner,
      IonSplitPane,
      IonTab,
      IonTabBar,
      IonTabButton,
      IonText,
      IonTextarea,
      IonThumbnail,
      IonTitle,
      IonToast,
      IonToggle,
      IonToolbar,
      // manual proxies
      IonModal2,
      IonPopover2,
      // ngModel accessors
      BooleanValueAccessorDirective,
      NumericValueAccessorDirective,
      SelectValueAccessorDirective,
      TextValueAccessorDirective,
      // navigation
      IonTabs2,
      IonRouterOutlet2,
      IonBackButton2,
      IonNav2,
      RouterLinkDelegateDirective2,
      RouterLinkWithHrefDelegateDirective2,
      // validators
      IonMinValidator,
      IonMaxValidator
    ],
    imports: [CommonModule],
    exports: [
      IonAccordion,
      IonAccordionGroup,
      IonActionSheet,
      IonAlert,
      IonApp,
      IonAvatar,
      IonBackdrop,
      IonBadge,
      IonBreadcrumb,
      IonBreadcrumbs,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCheckbox,
      IonChip,
      IonCol,
      IonContent,
      IonDatetime,
      IonDatetimeButton,
      IonFab,
      IonFabButton,
      IonFabList,
      IonFooter,
      IonGrid,
      IonHeader,
      IonIcon,
      IonImg,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonInput,
      IonInputPasswordToggle,
      IonItem,
      IonItemDivider,
      IonItemGroup,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonLabel,
      IonList,
      IonListHeader,
      IonLoading,
      IonMenu,
      IonMenuButton,
      IonMenuToggle,
      IonNavLink,
      IonNote,
      IonPicker,
      IonPickerColumn,
      IonPickerColumnOption,
      IonPickerLegacy,
      IonProgressBar,
      IonRadio,
      IonRadioGroup,
      IonRange,
      IonRefresher,
      IonRefresherContent,
      IonReorder,
      IonReorderGroup,
      IonRippleEffect,
      IonRow,
      IonSearchbar,
      IonSegment,
      IonSegmentButton,
      IonSegmentContent,
      IonSegmentView,
      IonSelect,
      IonSelectModal,
      IonSelectOption,
      IonSkeletonText,
      IonSpinner,
      IonSplitPane,
      IonTab,
      IonTabBar,
      IonTabButton,
      IonText,
      IonTextarea,
      IonThumbnail,
      IonTitle,
      IonToast,
      IonToggle,
      IonToolbar,
      // manual proxies
      IonModal2,
      IonPopover2,
      // ngModel accessors
      BooleanValueAccessorDirective,
      NumericValueAccessorDirective,
      SelectValueAccessorDirective,
      TextValueAccessorDirective,
      // navigation
      IonTabs2,
      IonRouterOutlet2,
      IonBackButton2,
      IonNav2,
      RouterLinkDelegateDirective2,
      RouterLinkWithHrefDelegateDirective2,
      // validators
      IonMinValidator,
      IonMaxValidator
    ]
  });
  /** @nocollapse */
  static ɵinj = ɵɵdefineInjector({
    providers: [ModalController, PopoverController],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [ModalController, PopoverController],
      imports: [CommonModule]
    }]
  }], null, null);
})();
export {
  ActionSheetController,
  AlertController,
  AngularDelegate,
  AnimationController,
  BooleanValueAccessorDirective as BooleanValueAccessor,
  Config,
  DomController,
  GestureController2 as GestureController,
  ION_MAX_VALIDATOR,
  ION_MIN_VALIDATOR,
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonAlert,
  IonApp,
  IonAvatar,
  IonBackButton2 as IonBackButton,
  IonBackdrop,
  IonBadge,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonMaxValidator,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonMinValidator,
  IonModal2 as IonModal,
  IonNav2 as IonNav,
  IonNavLink,
  IonNote,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonPickerLegacy,
  IonPopover2 as IonPopover,
  IonProgressBar,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRefresher,
  IonRefresherContent,
  IonReorder,
  IonReorderGroup,
  IonRippleEffect,
  IonRouterOutlet2 as IonRouterOutlet,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonSelect,
  IonSelectModal,
  IonSelectOption,
  IonSkeletonText,
  IonSpinner,
  IonSplitPane,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs2 as IonTabs,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar,
  IonicModule,
  IonicRouteStrategy,
  IonicSafeString,
  IonicSlides,
  LoadingController,
  MenuController2 as MenuController,
  ModalController,
  NavController,
  NavParams,
  NumericValueAccessorDirective as NumericValueAccessor,
  PickerController,
  Platform,
  PopoverController,
  RouterLinkDelegateDirective2 as RouterLinkDelegate,
  RouterLinkWithHrefDelegateDirective2 as RouterLinkWithHrefDelegate,
  SelectValueAccessorDirective as SelectValueAccessor,
  TextValueAccessorDirective as TextValueAccessor,
  ToastController,
  createAnimation,
  createGesture,
  getIonPageElement,
  getPlatforms,
  getTimeGivenProgression,
  iosTransitionAnimation,
  isPlatform,
  mdTransitionAnimation,
  openURL
};
/*! Bundled license information:

@ionic/core/dist/esm-es5/cubic-bezier-fe2083dc.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/gesture-controller-314a54f6.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-39782642.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/config-49c88215.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/theme-01f3f29c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/hardware-back-button-06ef3c3e.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-24b48b06.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/framework-delegate-63d1a679.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/overlays-ae10d43d.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/app-globals-5dbb61a5.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/loader.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/loader/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=@ionic_angular.js.map