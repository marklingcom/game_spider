System.register("chunks:///main.js", ["cc"], function (exports, module) {
  "use strict";

  var cclegacy;
  var _decorator;
  var sp;
  var Component;
  var tween;
  var UIOpacity;
  var warn;
  var Enum;
  var v3;
  var v2;
  var macro;
  var SpriteFrame;
  var UITransform;
  var Size;
  var Node;
  var Sprite;
  var color;
  var Label;
  var CCFloat;
  var Prefab;
  var instantiate;
  var log;
  var director;
  var Director;
  var Vec3;
  var UIRenderer;
  var Animation;
  var error;
  var RichText;
  var CCBoolean;
  var Tween;
  var Color;
  var JsonAsset;
  var math;
  var Button;
  var SpriteAtlas;
  var input;
  var Input;
  var KeyCode;
  var screen$1;
  var view;
  var ResolutionPolicy;
  var TweenSystem;
  var ccenum;
  var EventHandler;
  var assetManager;
  var lerp;
  var NodeEventType;
  var TransformBit;
  var CCString;
  var Material;
  var Gradient;
  var v4;
  var Texture2D;
  var clamp01;
  var EffectAsset;
  var CCInteger;
  var ImageAsset;
  var AnimationClip;
  var ParticleSystem2D;
  var Vec2;
  var ScrollView;
  var isValid;
  var CCClass;
  var sys;
  var js;
  var settings;
  var Settings;
  var VERSION;
  var find;
  return {
    setters: [function (e) {
      cclegacy = e.cclegacy;
      _decorator = e._decorator;
      sp = e.sp;
      Component = e.Component;
      tween = e.tween;
      UIOpacity = e.UIOpacity;
      warn = e.warn;
      Enum = e.Enum;
      v3 = e.v3;
      v2 = e.v2;
      macro = e.macro;
      SpriteFrame = e.SpriteFrame;
      UITransform = e.UITransform;
      Size = e.Size;
      Node = e.Node;
      Sprite = e.Sprite;
      color = e.color;
      Label = e.Label;
      CCFloat = e.CCFloat;
      Prefab = e.Prefab;
      instantiate = e.instantiate;
      log = e.log;
      director = e.director;
      Director = e.Director;
      Vec3 = e.Vec3;
      UIRenderer = e.UIRenderer;
      Animation = e.Animation;
      error = e.error;
      RichText = e.RichText;
      CCBoolean = e.CCBoolean;
      Tween = e.Tween;
      Color = e.Color;
      JsonAsset = e.JsonAsset;
      math = e.math;
      Button = e.Button;
      SpriteAtlas = e.SpriteAtlas;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      screen$1 = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
      TweenSystem = e.TweenSystem;
      ccenum = e.ccenum;
      EventHandler = e.EventHandler;
      assetManager = e.assetManager;
      lerp = e.lerp;
      NodeEventType = e.NodeEventType;
      TransformBit = e.TransformBit;
      CCString = e.CCString;
      Material = e.Material;
      Gradient = e.Gradient;
      v4 = e.v4;
      Texture2D = e.Texture2D;
      clamp01 = e.clamp01;
      EffectAsset = e.EffectAsset;
      CCInteger = e.CCInteger;
      ImageAsset = e.ImageAsset;
      AnimationClip = e.AnimationClip;
      ParticleSystem2D = e.ParticleSystem2D;
      Vec2 = e.Vec2;
      ScrollView = e.ScrollView;
      isValid = e.isValid;
      CCClass = e.CCClass;
      sys = e.sys;
      js = e.js;
      settings = e.settings;
      Settings = e.Settings;
      VERSION = e.VERSION;
      find = e.find;
    }],
    execute: function () {
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = function () {
          return e;
        };
        var e = {};
        var t = Object.prototype;
        var i = t.hasOwnProperty;
        var n = "function" == typeof Symbol ? Symbol : {};
        var r = n.iterator || "@@iterator";
        var o = n.asyncIterator || "@@asyncIterator";
        var s = n.toStringTag || "@@toStringTag";
        function a(e, t, i) {
          Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return e[t];
        }
        try {
          a({}, "");
        } catch (e) {
          a = function (e, t, i) {
            return e[t] = i;
          };
        }
        function c(e, t, i, n) {
          var r = t && t.prototype instanceof _ ? t : _;
          var o = Object.create(r.prototype);
          var s = new w(n || []);
          o._invoke = function (e, t, i) {
            var n = "suspendedStart";
            return function (r, o) {
              if ("executing" === n) {
                throw new Error("Generator is already running");
              }
              if ("completed" === n) {
                if ("throw" === r) {
                  throw o;
                }
                return {
                  value: undefined,
                  done: true
                };
              }
              i.method = r;
              for (i.arg = o;;) {
                var s = i.delegate;
                if (s) {
                  var a = S(s, i);
                  if (a) {
                    if (a === p) {
                      continue;
                    }
                    return a;
                  }
                }
                if ("next" === i.method) {
                  i.sent = i._sent = i.arg;
                } else if ("throw" === i.method) {
                  if ("suspendedStart" === n) {
                    n = "completed";
                    throw i.arg;
                  }
                  i.dispatchException(i.arg);
                } else if ("return" === i.method) {
                  i.abrupt("return", i.arg);
                }
                n = "executing";
                var c = l(e, t, i);
                if ("normal" === c.type) {
                  n = i.done ? "completed" : "suspendedYield";
                  if (c.arg === p) {
                    continue;
                  }
                  return {
                    value: c.arg,
                    done: i.done
                  };
                }
                if ("throw" === c.type) {
                  n = "completed";
                  i.method = "throw";
                  i.arg = c.arg;
                }
              }
            };
          }(e, i, s);
          return o;
        }
        function l(e, t, i) {
          try {
            return {
              type: "normal",
              arg: e.call(t, i)
            };
          } catch (e) {
            return {
              type: "throw",
              arg: e
            };
          }
        }
        e.wrap = c;
        var p = {};
        function _() {}
        function d() {}
        function u() {}
        var h = {};
        a(h, r, function () {
          return this;
        });
        var m = Object.getPrototypeOf;
        var f = m && m(m(E([])));
        if (f && f !== t && i.call(f, r)) {
          h = f;
        }
        var y = u.prototype = _.prototype = Object.create(h);
        function g(e) {
          ["next", "throw", "return"].forEach(function (t) {
            a(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function $(e, t) {
          function n(r, o, s, a) {
            var c = l(e[r], e, o);
            if ("throw" !== c.type) {
              var p = c.arg;
              var _ = p.value;
              return _ && "object" == typeof _ && i.call(_, "__await") ? t.resolve(_.__await).then(function (e) {
                n("next", e, s, a);
              }, function (e) {
                n("throw", e, s, a);
              }) : t.resolve(_).then(function (e) {
                p.value = e;
                s(p);
              }, function (e) {
                return n("throw", e, s, a);
              });
            }
            a(c.arg);
          }
          var r;
          this._invoke = function (e, i) {
            function o() {
              return new t(function (t, r) {
                n(e, i, t, r);
              });
            }
            return r = r ? r.then(o, o) : o();
          };
        }
        function S(e, t) {
          var i = e.iterator[t.method];
          if (undefined === i) {
            t.delegate = null;
            if ("throw" === t.method) {
              if (e.iterator.return && (t.method = "return", t.arg = undefined, S(e, t), "throw" === t.method)) {
                return p;
              }
              t.method = "throw";
              t.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return p;
          }
          var n = l(i, e.iterator, t.arg);
          if ("throw" === n.type) {
            t.method = "throw";
            t.arg = n.arg;
            t.delegate = null;
            return p;
          }
          var r = n.arg;
          return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = undefined), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p);
        }
        function b(e) {
          var t = {
            tryLoc: e[0]
          };
          if (1 in e) {
            t.catchLoc = e[1];
          }
          if (2 in e) {
            t.finallyLoc = e[2];
            t.afterLoc = e[3];
          }
          this.tryEntries.push(t);
        }
        function v(e) {
          var t = e.completion || {};
          t.type = "normal";
          delete t.arg;
          e.completion = t;
        }
        function w(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          e.forEach(b, this);
          this.reset(true);
        }
        function E(e) {
          if (e) {
            var t = e[r];
            if (t) {
              return t.call(e);
            }
            if ("function" == typeof e.next) {
              return e;
            }
            if (!isNaN(e.length)) {
              var n = -1;
              var o = function t() {
                for (; ++n < e.length;) {
                  if (i.call(e, n)) {
                    t.value = e[n];
                    t.done = false;
                    return t;
                  }
                }
                t.value = undefined;
                t.done = true;
                return t;
              };
              return o.next = o;
            }
          }
          return {
            next: T
          };
        }
        function T() {
          return {
            value: undefined,
            done: true
          };
        }
        d.prototype = u;
        a(y, "constructor", u);
        a(u, "constructor", d);
        d.displayName = a(u, s, "GeneratorFunction");
        e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
        };
        e.mark = function (e) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, u);
          } else {
            e.__proto__ = u;
            a(e, s, "GeneratorFunction");
          }
          e.prototype = Object.create(y);
          return e;
        };
        e.awrap = function (e) {
          return {
            __await: e
          };
        };
        g($.prototype);
        a($.prototype, o, function () {
          return this;
        });
        e.AsyncIterator = $;
        e.async = function (t, i, n, r, o) {
          if (undefined === o) {
            o = Promise;
          }
          var s = new $(c(t, i, n, r), o);
          return e.isGeneratorFunction(i) ? s : s.next().then(function (e) {
            return e.done ? e.value : s.next();
          });
        };
        g(y);
        a(y, s, "Generator");
        a(y, r, function () {
          return this;
        });
        a(y, "toString", function () {
          return "[object Generator]";
        });
        e.keys = function (e) {
          var t = [];
          for (var i in e) t.push(i);
          t.reverse();
          return function i() {
            for (; t.length;) {
              var n = t.pop();
              if (n in e) {
                i.value = n;
                i.done = false;
                return i;
              }
            }
            i.done = true;
            return i;
          };
        };
        e.values = E;
        w.prototype = {
          constructor: w,
          reset: function (e) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(v);
            if (!e) {
              for (var t in this) if ("t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1))) {
                this[t] = undefined;
              }
            }
          },
          stop: function () {
            this.done = true;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) {
              throw e.arg;
            }
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) {
              throw e;
            }
            var t = this;
            function n(i, n) {
              s.type = "throw";
              s.arg = e;
              t.next = i;
              if (n) {
                t.method = "next";
                t.arg = undefined;
              }
              return !!n;
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              var s = o.completion;
              if ("root" === o.tryLoc) {
                return n("end");
              }
              if (o.tryLoc <= this.prev) {
                var a = i.call(o, "catchLoc");
                var c = i.call(o, "finallyLoc");
                if (a && c) {
                  if (this.prev < o.catchLoc) {
                    return n(o.catchLoc, true);
                  }
                  if (this.prev < o.finallyLoc) {
                    return n(o.finallyLoc);
                  }
                } else if (a) {
                  if (this.prev < o.catchLoc) {
                    return n(o.catchLoc, true);
                  }
                } else {
                  if (!c) {
                    throw new Error("try statement without catch or finally");
                  }
                  if (this.prev < o.finallyLoc) {
                    return n(o.finallyLoc);
                  }
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var o = r;
                break;
              }
            }
            if (o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc) {
              o = null;
            }
            var s = o ? o.completion : {};
            s.type = e;
            s.arg = t;
            return o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(s);
          },
          complete: function (e, t) {
            if ("throw" === e.type) {
              throw e.arg;
            }
            if ("break" === e.type || "continue" === e.type) {
              this.next = e.arg;
            } else if ("return" === e.type) {
              this.rval = this.arg = e.arg;
              this.method = "return";
              this.next = "end";
            } else if ("normal" === e.type && t) {
              this.next = t;
            }
            return p;
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var i = this.tryEntries[t];
              if (i.finallyLoc === e) {
                this.complete(i.completion, i.afterLoc);
                v(i);
                return p;
              }
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var i = this.tryEntries[t];
              if (i.tryLoc === e) {
                var n = i.completion;
                if ("throw" === n.type) {
                  var r = n.arg;
                  v(i);
                }
                return r;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, i) {
            this.delegate = {
              iterator: E(e),
              resultName: t,
              nextLoc: i
            };
            if ("next" === this.method) {
              this.arg = undefined;
            }
            return p;
          }
        };
        return e;
      }
      function asyncGeneratorStep(e, t, i, n, r, o, s) {
        try {
          var a = e[o](s);
          var c = a.value;
        } catch (e) {
          return void i(e);
        }
        if (a.done) {
          t(c);
        } else {
          Promise.resolve(c).then(n, r);
        }
      }
      function _asyncToGenerator(e) {
        return function () {
          var t = this;
          return new Promise(function (n, r) {
            var o = e.apply(t, arguments);
            function s(e) {
              asyncGeneratorStep(o, n, r, s, a, "next", e);
            }
            function a(e) {
              asyncGeneratorStep(o, n, r, s, a, "throw", e);
            }
            s(undefined);
          });
        };
      }
      function _defineProperties(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || false;
          n.configurable = true;
          if ("value" in n) {
            n.writable = true;
          }
          Object.defineProperty(e, n.key, n);
        }
      }
      function _createClass(e, t, i) {
        if (t) {
          _defineProperties(e.prototype, t);
        }
        if (i) {
          _defineProperties(e, i);
        }
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        return e;
      }
      function _inheritsLoose(e, t) {
        e.prototype = Object.create(t.prototype);
        e.prototype.constructor = e;
        _setPrototypeOf(e, t);
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      function _assertThisInitialized(e) {
        if (undefined === e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }
      function _initializerDefineProperty(e, t, i, n) {
        if (i) {
          Object.defineProperty(e, t, {
            enumerable: i.enumerable,
            configurable: i.configurable,
            writable: i.writable,
            value: i.initializer ? i.initializer.call(n) : undefined
          });
        }
      }
      function _applyDecoratedDescriptor(e, t, i, n, r) {
        var o = {};
        Object.keys(n).forEach(function (e) {
          o[e] = n[e];
        });
        o.enumerable = !!o.enumerable;
        o.configurable = !!o.configurable;
        if ("value" in o || o.initializer) {
          o.writable = true;
        }
        o = i.slice().reverse().reduce(function (i, n) {
          return n(e, t, i) || i;
        }, o);
        if (r && undefined !== o.initializer) {
          o.value = o.initializer ? o.initializer.call(r) : undefined;
          o.initializer = undefined;
        }
        if (undefined === o.initializer) {
          Object.defineProperty(e, t, o);
          o = null;
        }
        return o;
      }
      cclegacy._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", undefined);
      var SpineKit = function () {
        function e() {}
        e.ForceCancel = function (e, t) {
          var i;
          var n;
          var r;
          if (!(null == (i = this.m_cancelCbs) || null == (n = (r = i[e])[t]))) {
            n.call(r);
          }
        };
        e.PlayAnimation = function (e, t, i, n, r, o) {
          var s = this;
          if (undefined === i) {
            i = false;
          }
          if (undefined === n) {
            n = 0;
          }
          if (undefined === o) {
            o = true;
          }
          return new Promise(function (a) {
            s.m_cancelCbs[e.name] = {};
            s.m_cancelCbs[e.name][t] = function () {
              a(true);
            };
            var c = true;
            var l = e.getState();
            if (l) {
              var p = l.expandToIndex(n);
              if (p) {
                var _ = p.animation.name + "." + t;
                c = undefined === l.data.animationToMixTime[_];
              }
            }
            if (c) {
              e.clearTrack(n);
              if (o) {
                e.setToSetupPose();
              }
            }
            var d = e.setAnimation(n, t, i);
            if (d) {
              e.setTrackEventListener(d, function (e, t) {
                if (d && d.animation.name == e.animation.name) {
                  if (!(null == r)) {
                    r(t.data.name);
                  }
                }
              });
              e.setTrackCompleteListener(d, function (i) {
                if (d && d.animation.name == i.animation.name) {
                  e.setTrackCompleteListener(d, function () {});
                  e.setTrackInterruptListener(d, function () {});
                  if (s.m_cancelCbs[e.name] && s.m_cancelCbs[e.name][t]) {
                    s.m_cancelCbs[e.name][t] = null;
                  }
                  a(false);
                }
              });
              e.setTrackInterruptListener(d, function (i) {
                if (d && d.animation.name == i.animation.name) {
                  e.setTrackCompleteListener(d, function () {});
                  e.setTrackInterruptListener(d, function () {});
                  if (s.m_cancelCbs[e.name] && s.m_cancelCbs[e.name][t]) {
                    s.m_cancelCbs[e.name][t] = null;
                  }
                  a(true);
                }
              });
            } else {
              e.setCompleteListener(function () {
                e.setCompleteListener(null);
                e.setInterruptListener(null);
                if (s.m_cancelCbs[e.name] && s.m_cancelCbs[e.name][t]) {
                  s.m_cancelCbs[e.name][t] = null;
                }
                a(false);
              });
              e.setInterruptListener(function () {
                e.setCompleteListener(null);
                e.setInterruptListener(null);
                if (s.m_cancelCbs[e.name] && s.m_cancelCbs[e.name][t]) {
                  s.m_cancelCbs[e.name][t] = null;
                }
                a(true);
              });
            }
          });
        };
        return e;
      }();
      var _dec;
      var _dec2;
      var _dec3;
      var _class2;
      var _descriptor;
      var _descriptor2;
      var _descriptor3;
      SpineKit.m_cancelCbs = {};
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "eef7bEaYRdKLZUAdLCHQsxF", "CharacterEffect", undefined);
      var property = _decorator.property;
      var ANIME_NAME = {
        IDLE: "Idle",
        COLLECT: "Collect",
        WIN_START: "Win_Start",
        BIGWIN: "BigWin"
      };
      _dec = property({
        type: sp.Skeleton,
        tooltip: "角色動畫"
      });
      _dec2 = property({
        displayName: "Mixing Time",
        tooltip: "動畫1轉換至動畫2的動作漸變時間"
      });
      _dec3 = property({
        type: sp.Skeleton,
        tooltip: "butterfly anim"
      });
      _class2 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_skl", _descriptor, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mixTime", _descriptor2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_butterflyAnim", _descriptor3, _assertThisInitialized(t));
          t.m_stopIdle = false;
          t.m_isScatterEnd = false;
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.onLoad = function () {
          this.m_mixTime = .25;
          var e = Object.values(ANIME_NAME);
          for (var t = 0; t < e.length; ++t) {
            for (var i = t; i < e.length; ++i) {
              this.m_skl.setMix(e[t], e[i], this.m_mixTime);
              this.m_skl.setMix(e[i], e[t], this.m_mixTime);
            }
          }
          this.m_skl.setMix("Win_Start", "Idle", 0);
          this.m_stopIdle = true;
          this.ShowIdle();
        };
        i.ShowWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_stopIdle = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_skl, "Collect", false, 0);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ShowMysteryWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_stopIdle = true;
                    this.ShowButterfly();
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_skl, "Win_Start", false, 0);
                  case 4:
                    this.ShowIdle();
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ShowButterfly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_butterflyAnim.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_butterflyAnim, "Win_Start");
                  case 3:
                    this.m_butterflyAnim.node.active = false;
                  case 4:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ShowBigWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_stopIdle = true;
                    SpineKit.PlayAnimation(this.m_skl, "BigWin", true, 0);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ShowIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_stopIdle) {
                      SpineKit.PlayAnimation(this.m_skl, "Idle", true);
                      this.m_stopIdle = false;
                    }
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.SetSpeed = function (e) {
          this.m_skl.timeScale = Math.min(e, 10);
        };
        i.SetRotation = function (e) {
          if (e) {
            this.m_skl.setSkin("L");
          } else {
            this.m_skl.setSkin("S");
          }
        };
        return t;
      }(Component);
      _descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_skl", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_mixTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return .2;
        }
      });
      _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_butterflyAnim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$1;
      var _dec2$1;
      var _dec3$1;
      var _dec4;
      var _class2$1;
      var _descriptor$1;
      var _descriptor2$1;
      var _descriptor3$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5596cqu59hI96HYsC8VoJxy", "CoinEffect", undefined);
      var ccclass$1 = _decorator.ccclass;
      var property$1 = _decorator.property;
      _dec$1 = ccclass$1("CoinEffect");
      _dec2$1 = property$1({
        type: sp.Skeleton,
        tooltip: "coin node"
      });
      _dec3$1 = property$1({
        type: sp.Skeleton,
        tooltip: "coin butterfly node"
      });
      _dec4 = property$1({
        type: sp.Skeleton,
        tooltip: "former coin"
      });
      _class2$1 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_coinNode", _descriptor$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_FXCoinNode", _descriptor2$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_formerCoin", _descriptor3$1, _assertThisInitialized(t));
          t.m_currentLvl = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.ShowCoin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === t) {
                      t = false;
                    }
                    if (undefined === i) {
                      i = false;
                    }
                    if (!t) {
                      e.next = 23;
                      break;
                    }
                    this.m_coinNode.node.active = true;
                    e.t0 = this.m_currentLvl;
                    e.next = 0 === e.t0 ? 7 : 1 === e.t0 ? 11 : 2 === e.t0 ? 16 : 21;
                    break;
                  case 7:
                    this.m_currentLvl += 1;
                    e.next = 10;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv0_Upgrade");
                  case 10:
                    return e.abrupt("break", 21);
                  case 11:
                    this.m_currentLvl += 1;
                    this.ShowFXCoin("Lv2_Idle");
                    e.next = 15;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv1_Upgrade");
                  case 15:
                    return e.abrupt("break", 21);
                  case 16:
                    this.m_currentLvl += 1;
                    this.ShowFXCoin("Lv3_Idle");
                    e.next = 20;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv2_Upgrade");
                  case 20:
                    return e.abrupt("break", 21);
                  case 21:
                    e.next = 42;
                    break;
                  case 23:
                    if (!i) {
                      e.next = 42;
                      break;
                    }
                    e.t1 = this.m_currentLvl;
                    e.next = 1 === e.t1 ? 27 : 2 === e.t1 ? 31 : 3 === e.t1 ? 36 : 41;
                    break;
                  case 27:
                    this.m_currentLvl = 0;
                    e.next = 30;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv1_End");
                  case 30:
                    return e.abrupt("break", 41);
                  case 31:
                    this.m_currentLvl = 0;
                    tween(this.m_FXCoinNode.node.getComponent(UIOpacity)).to(2, {
                      opacity: 1
                    }).call(function () {
                      n.m_FXCoinNode.node.active = false;
                    }).start();
                    e.next = 35;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv2_End");
                  case 35:
                    return e.abrupt("break", 41);
                  case 36:
                    this.m_currentLvl = 0;
                    tween(this.m_FXCoinNode.node.getComponent(UIOpacity)).to(2, {
                      opacity: 1
                    }).call(function () {
                      n.m_FXCoinNode.node.active = false;
                    }).start();
                    e.next = 40;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv3_End");
                  case 40:
                    return e.abrupt("break", 41);
                  case 41:
                    this.m_coinNode.node.active = false;
                  case 42:
                    e.t2 = this.m_currentLvl;
                    e.next = 0 === e.t2 ? 45 : 1 === e.t2 ? 48 : 2 === e.t2 ? 51 : 3 === e.t2 ? 54 : 57;
                    break;
                  case 45:
                    e.next = 47;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv0_Idle");
                  case 47:
                    return e.abrupt("break", 57);
                  case 48:
                    e.next = 50;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv1_Idle");
                  case 50:
                    return e.abrupt("break", 57);
                  case 51:
                    e.next = 53;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv2_Idle");
                  case 53:
                    return e.abrupt("break", 57);
                  case 54:
                    e.next = 56;
                    return SpineKit.PlayAnimation(this.m_coinNode, "Lv3_Idle");
                  case 56:
                    return e.abrupt("break", 57);
                  case 57:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, i) {
            return e.apply(this, arguments);
          };
        }();
        i.ShowFXCoin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_FXCoinNode.node.active = true;
                    e.t0 = t;
                    e.next = "Lv2_Idle" === e.t0 ? 4 : "Lv3_Idle" === e.t0 ? 8 : 12;
                    break;
                  case 4:
                    this.m_FXCoinNode.node.getComponent(UIOpacity).opacity = 0;
                    tween(this.m_FXCoinNode.node.getComponent(UIOpacity)).to(1, {
                      opacity: 255
                    }).start();
                    SpineKit.PlayAnimation(this.m_FXCoinNode, "Lv2_Idle", true);
                    return e.abrupt("break", 14);
                  case 8:
                    this.m_FXCoinNode.node.getComponent(UIOpacity).opacity = 0;
                    tween(this.m_FXCoinNode.node.getComponent(UIOpacity)).to(1, {
                      opacity: 255
                    }).start();
                    SpineKit.PlayAnimation(this.m_FXCoinNode, "Lv3_Idle", true);
                    return e.abrupt("break", 14);
                  case 12:
                    SpineKit.PlayAnimation(this.m_FXCoinNode, "Lv2_Idle", true);
                    return e.abrupt("break", 14);
                  case 14:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        i.ShowFormerCoin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_formerCoin.node.active = true;
                    SpineKit.PlayAnimation(this.m_formerCoin, "BigWin", true);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.CloseFormerCoin = function () {
          this.m_formerCoin.node.active = false;
        };
        return t;
      }(Component);
      _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_coinNode", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_FXCoinNode", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_formerCoin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var RequestMethod;
      var ErrorHandleType;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", "CommonGameManager", undefined);
      (function (e) {
        e[e.Get = 0] = "Get";
        e[e.Post = 1] = "Post";
      })(RequestMethod || (RequestMethod = {}));
      (function (e) {
        e[e.Ignore = 0] = "Ignore";
        e[e.Handle = 1] = "Handle";
      })(ErrorHandleType || (ErrorHandleType = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0e324Erw0JDW6aCYO5d0i2g", "DailyMissionManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", "IframeCommandManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d8221PEwlRBep+hz+x7w5Ot", "NewBottomBarManager", undefined);
      var node$9;
      var RefusedReason;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", undefined);
      (function (e) {
        e[e.None = 0] = "None";
        e[e.Playing = 1] = "Playing";
        e[e.Item = 2] = "Item";
      })(RefusedReason || (RefusedReason = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", "MsgBoxManager", undefined);
      var node$b;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var AutoShowOrder;
      var node$e;
      var node$f;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", "AutoShowManager", undefined);
      (function (e) {
        e[e.SKY_BAR = 0] = "SKY_BAR";
        e[e.PAYTABLE = 1] = "PAYTABLE";
        e[e.LANDING = 2] = "LANDING";
        e[e.DISCOUNT = 3] = "DISCOUNT";
        e[e.EXTRA_BET = 4] = "EXTRA_BET";
        e[e.ICONBOX = 5] = "ICONBOX";
      })(AutoShowOrder || (AutoShowOrder = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", "LocaleStringManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", undefined);
      var node$h;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "de7f6JwfsBHBYba0UlqLoFI", "NotificationManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "81438uBGiNJXoDkKAmuxEJu", "FunctionControlManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", "SoundAudioManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cfe9e3/byhFGL1S1brGrbPU", "DebugManager", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "596e9MhMqpHVIQDNe/qOdAx", "FeatureAck", undefined);
      var FeatureAck_MG = [{
        Award: 4,
        TotalWin: 888,
        PlateSymbol: [4, 4, 4],
        RTP: .97
      }, {
        Award: 3,
        TotalWin: 88,
        PlateSymbol: [3, 3, 3],
        RTP: .97
      }];
      var _class$2;
      var _class2$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "797ddeUlDVOU4nf57irQN6d", "Game_Define", undefined);
      var ccclass$2 = _decorator.ccclass;
      var GameState;
      var Symbol$1;
      !function (e) {
        e[e.WAIT_READY = 0] = "WAIT_READY";
        e[e.UNSHOW_PREPARE = 1] = "UNSHOW_PREPARE";
        e[e.FEATURE_SHOW = 2] = "FEATURE_SHOW";
        e[e.PLATE_SHOW = 3] = "PLATE_SHOW";
        e[e.AWARD = 4] = "AWARD";
        e[e.ROUND_SHOW_END = 5] = "ROUND_SHOW_END";
        e[e.ROUND_END = 6] = "ROUND_END";
      }(GameState || (GameState = {}));
      (function (e) {
        e[e.EMPTY = 0] = "EMPTY";
        e[e.SYMBOL00 = 1] = "SYMBOL00";
        e[e.SYMBOL01 = 2] = "SYMBOL01";
        e[e.SYMBOL02 = 3] = "SYMBOL02";
        e[e.SYMBOL03 = 4] = "SYMBOL03";
      })(Symbol$1 || (Symbol$1 = {}));
      _class2$2 = function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        _inheritsLoose(t, e);
        t.OnExit = function () {
          this.AudioClips = {
            BGM_MG: null,
            BGM_Play: null,
            Big_Win: null,
            Big_Win_Change: null,
            Big_Win_End: null,
            Character_Win_Start: null,
            Coin_End: null,
            FX_MysteryWin: null,
            FX_MysteryWin_Coin: null,
            Reel_Spin: null,
            Reel_Stop: null,
            Small_Win01: null,
            Small_Win02: null,
            Small_Win03: null,
            Symbol_03_Stop1: null,
            Symbol_03_Stop2: null,
            Symbol_03_Stop3: null
          };
        };
        return t;
      }(Component);
      _class2$2.Ver = "27";
      _class2$2.SPICY_LEVEL = 1;
      _class2$2.GameState = Enum(GameState);
      _class2$2.Symbol = Enum(Symbol$1);
      _class2$2.COL = 3;
      _class2$2.ROW = 3;
      _class2$2.ROW_CENTER = 0;
      _class2$2.StringKey = {
        FEATURES_LEFT: "FEATURE_LEFT",
        FEATURES_RIGHT: "FEATURE_RIGHT"
      };
      _class2$2.FEATURE_BET_VALUE = 10;
      _class2$2.FeaturesSpinAck = FeatureAck_MG;
      _class2$2.mustNearWinFeature = [1];
      _class2$2.BgAudioId = -1;
      _class2$2.FULL_HOUSE_AWARD_TYPE = 4;
      _class2$2.SPIN_ACK_TYPE = {
        AT_SUCCESS: 0,
        AT_MONEY_NOT_ENOUGH: 1,
        AT_MONEY_ABNORMAL: 2,
        AT_MONEY_NOT_ENOUGH_SINGLE: 305,
        API_BETONCE_FAIL: 2003
      };
      _class2$2.AWARD_TYPE = {
        AWARD_TYPE_NON: 0,
        AWARD_TYPE_LINE: 1,
        AWARD_TYPE_ALL_PLATE: 2,
        AWARD_TYPE_MAX: 32767
      };
      _class2$2.AudioFileRoot = "Sound/";
      _class2$2.AudioFilePath = {
        BGM_MG: _class2$2.AudioFileRoot + "BGM_MG",
        BGM_Play: _class2$2.AudioFileRoot + "BGM_Play",
        Big_Win: _class2$2.AudioFileRoot + "Big_Win",
        Big_Win_Change: _class2$2.AudioFileRoot + "Big_Win_Change",
        Big_Win_End: _class2$2.AudioFileRoot + "Big_Win_End",
        Character_Win_Start: _class2$2.AudioFileRoot + "Character_Win_Start",
        Coin_End: _class2$2.AudioFileRoot + "Coin_End",
        FX_MysteryWin: _class2$2.AudioFileRoot + "FX_MysteryWin",
        FX_MysteryWin_Coin: _class2$2.AudioFileRoot + "FX_MysteryWin_Coin",
        Reel_Spin: _class2$2.AudioFileRoot + "Reel_Spin",
        Reel_Stop: _class2$2.AudioFileRoot + "Reel_Stop",
        Small_Win01: _class2$2.AudioFileRoot + "Small_Win01",
        Small_Win02: _class2$2.AudioFileRoot + "Small_Win02",
        Small_Win03: _class2$2.AudioFileRoot + "Small_Win03",
        Symbol_03_Stop1: _class2$2.AudioFileRoot + "Symbol_03_Stop1",
        Symbol_03_Stop2: _class2$2.AudioFileRoot + "Symbol_03_Stop2",
        Symbol_03_Stop3: _class2$2.AudioFileRoot + "Symbol_03_Stop3"
      };
      _class2$2.AudioClips = {
        BGM_MG: null,
        BGM_Play: null,
        Big_Win: null,
        Big_Win_Change: null,
        Big_Win_End: null,
        Character_Win_Start: null,
        Coin_End: null,
        FX_MysteryWin: null,
        FX_MysteryWin_Coin: null,
        Reel_Spin: null,
        Reel_Stop: null,
        Small_Win01: null,
        Small_Win02: null,
        Small_Win03: null,
        Symbol_03_Stop1: null,
        Symbol_03_Stop2: null,
        Symbol_03_Stop3: null
      };
      _class2$2.AckType = {
        login: 0,
        exchangeChips: 2,
        info: 11,
        spin: 12,
        heartBeat: 98,
        serverMsg: 99
      };
      _class2$2.SERVER_RET_TYPE = {
        SERVER_SUCCESS: 0,
        SERVER_ERROR_SEATE: 799,
        SERVER_NOUSE: 899,
        SERVER_MAINTAIN: 998,
        SERVER_SHUTDOWN: 999,
        SERVER_NEED_UID: 1001,
        SERVER_NEED_LOGIN: 1002,
        SERVER_TOKEN_ERROR: 1003
      };
      _class2$2.LOGIN_RESULT_TYPE = {
        LOGIN_SUCCESS: 0,
        LOGIN_FAIL: 1,
        API_VERIFY_FAIL: 2001,
        API_LOGIN_REPEAT_FAIL: 2002
      };
      _class2$2.HEART_BEAT_STATE = {
        NOTIFY: 97,
        MAINTAIN: 98,
        CLOSE: 99
      };
      _class2$2.DelayType = {
        Normal: 0,
        Get: 1,
        NotGet: 2
      };
      _class2$2.TimeoutType = {
        Ignore: 0,
        Handle: 1
      };
      _class2$2.USE_ITEM_REASON = {
        NORMAL: 0,
        USING: 1
      };
      _class2$2.MultiLvl = [1, 3, 5, 9];
      _class2$2.Award = {
        ANY: 0,
        COPPER: 1,
        SILVER: 2,
        GOLD: 3,
        FA_FA_FA: 4,
        TurbidPurple: 5
      };
      _class2$2.PlateEftOdds = [8, 18, 28, 58, 88, 888];
      _class2$2.smallWinAudioBound = [18, 88, 888];
      _class2$2.WIN_RATIO = [0, 6, 15, 30];
      _class2$2.WIN_ANIME_START_TIME = [0, 5, 8, 10];
      _class2$2.WIN_ANIME_END_TIME = [0, 2, 2, 2];
      _class2$2.EnterNearwinProb_NoWin = [-1, .02, .03, .06, 1];
      _class2$2.EnterNearwinProb_X8 = [-1, .3, .5, .7, 1];
      _class2$2.Paytable = {
        1: "Symbol_00",
        2: "Symbol_01",
        3: "Symbol_02",
        4: "Symbol_03",
        5: "Symbol_03_Anyx2",
        0: "Symbol_Anyx3"
      };
      _class2$2.ManualFeatureInfoTxt = ["String_01", "String_02", "String_03"];
      _class2$2.ManualFeatureInfoTitle = "String_00";
      _class2$2.MysteryWinAnimReelStopTime = [4.5, 8, 5];
      var Game_Define = ccclass$2(_class$2 = _class2$2) || _class$2;
      var _dec$2;
      var _dec2$2;
      var _class2$3;
      var _descriptor$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d26c6vJ4CtLTor6zSWslDxT", "MysteryWinEffect", undefined);
      var ccclass$3 = _decorator.ccclass;
      var property$2 = _decorator.property;
      _dec$2 = ccclass$3("MysteryWinEffect");
      _dec2$2 = property$2({
        type: sp.Skeleton,
        tooltip: "coin waterfall node"
      });
      _class2$3 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_FXMysteryWin", _descriptor$2, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_cancelCbs = {};
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.ShowFXMystery = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_FXMysteryWin.node.active = true;
                    e.next = 3;
                    return this.PlayAnimation(this.m_FXMysteryWin, "Win_Start", false, 0, function (e, i) {
                      if ("Camera" != e || t.m_gameView.SlotReels.IsClickStopBtn) {
                        if ("NearWin" == e) {
                          node$f.Play(Game_Define.AudioClips.FX_MysteryWin);
                        } else if ("Coin" == e) {
                          node$f.Play(Game_Define.AudioClips.FX_MysteryWin_Coin);
                        } else if ("Change" == e) {
                          if ("L" == i) {
                            t.m_gameView.EffectPlate.SymbolShowChange(0);
                          } else if ("R" == i) {
                            t.m_gameView.EffectPlate.SymbolShowChange(Game_Define.COL - 1);
                          }
                        }
                      } else {
                        switch (i) {
                          case "Zoon_in":
                            t.m_gameView.Zoom_in();
                            break;
                          case "Zoon_out":
                            t.m_gameView.Zoom_out();
                            break;
                          case "Shake":
                            t.m_gameView.Shake();
                        }
                      }
                    });
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.CloseFXMystery = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_FXMysteryWin.node.active = false;
                    this.m_FXMysteryWin.setAnimation(0, "Win_Start", false);
                    this.m_FXMysteryWin.clearTrack(0);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.PlayAnimation = function (e, t, i, n, r, o) {
          var s = this;
          if (undefined === i) {
            i = false;
          }
          if (undefined === n) {
            n = 0;
          }
          if (undefined === o) {
            o = true;
          }
          return new Promise(function (a) {
            s.m_cancelCbs[e.name] = {};
            s.m_cancelCbs[e.name][t] = function () {
              a(true);
            };
            var c = true;
            var l = e.getState();
            if (l) {
              var p = l.expandToIndex(n);
              if (p) {
                var _ = p.animation.name + "." + t;
                c = undefined === l.data.animationToMixTime[_];
              }
            }
            if (c) {
              e.clearTrack(n);
              if (o) {
                e.setToSetupPose();
              }
            }
            var d = e.setAnimation(n, t, i);
            if (d) {
              e.setTrackEventListener(d, function (e, t) {
                if (d && d.animation.name == e.animation.name) {
                  var i = t.data.name;
                  var n = t.stringValue;
                  if (r) {
                    if (!(null == r)) {
                      r(i, n);
                    }
                  }
                }
              });
              e.setTrackCompleteListener(d, function (i) {
                if (d && d.animation.name == i.animation.name) {
                  e.setTrackCompleteListener(d, function () {});
                  e.setTrackInterruptListener(d, function () {});
                  s.m_cancelCbs[e.name][t] = null;
                  a(false);
                }
              });
              e.setTrackInterruptListener(d, function (i) {
                if (d && d.animation.name == i.animation.name) {
                  e.setTrackCompleteListener(d, function () {});
                  e.setTrackInterruptListener(d, function () {});
                  s.m_cancelCbs[e.name][t] = null;
                  a(true);
                }
              });
            } else {
              e.setCompleteListener(function () {
                e.setCompleteListener(null);
                e.setInterruptListener(null);
                s.m_cancelCbs[e.name][t] = null;
                a(false);
              });
              e.setInterruptListener(function () {
                e.setCompleteListener(null);
                e.setInterruptListener(null);
                s.m_cancelCbs[e.name][t] = null;
                a(true);
              });
            }
          });
        };
        _createClass(t, [{
          key: "FXMysteryWin",
          get: function () {
            return this.m_FXMysteryWin;
          }
        }]);
        return t;
      }(Component);
      _descriptor$2 = _applyDecoratedDescriptor(_class2$3.prototype, "m_FXMysteryWin", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$3;
      var _dec2$3;
      var _class$4;
      var _class2$4;
      var _descriptor$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "284adIhY95DB6Z4rs95KGbr", "SymbolEffect", undefined);
      var ccclass$4 = _decorator.ccclass;
      var property$3 = _decorator.property;
      _dec$3 = ccclass$4("SymbolEffect");
      _dec2$3 = property$3({
        type: sp.Skeleton,
        tooltip: "symbol spine"
      });
      _class2$4 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_symbolAnim", _descriptor$3, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.ShowWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_symbolAnim, "Win", true);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ShowStop = function () {
          SpineKit.PlayAnimation(this.m_symbolAnim, "Stop");
        };
        i.ShowNearWin = function () {
          SpineKit.PlayAnimation(this.m_symbolAnim, "NearWin");
        };
        i.ShowDrop = function () {
          SpineKit.PlayAnimation(this.m_symbolAnim, "Drop");
        };
        return t;
      }(Component);
      _descriptor$3 = _applyDecoratedDescriptor(_class2$4.prototype, "m_symbolAnim", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolEffect = _dec$3(_class$4 = _class2$4) || _class$4;
      var node$k;
      var ItemStateReason;
      var CommonState;
      var node$l;
      var node$m;
      var node$o;
      var CommonEffect;
      var _dec$4;
      var _class$5;
      var _class2$5;
      var _descriptor$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", undefined);
      (function (e) {
        e[e.NORMAL = 0] = "NORMAL";
        e[e.USING = 1] = "USING";
      })(ItemStateReason || (ItemStateReason = {}));
      (function (e) {
        e[e.GAME_CLOSE = 1e3] = "GAME_CLOSE";
        e[e.LOGIN = 1001] = "LOGIN";
        e[e.WAIT_RES = 1002] = "WAIT_RES";
        e[e.CHECK_UNSHOW = 1003] = "CHECK_UNSHOW";
        e[e.CHECK_FREESPIN = 1004] = "CHECK_FREESPIN";
        e[e.IDLE = 1005] = "IDLE";
        e[e.SPIN_REQ = 1006] = "SPIN_REQ";
        e[e.SPIN = 1007] = "SPIN";
        e[e.COMMON_SHOW = 1008] = "COMMON_SHOW";
        e[e.MHB_SHOW = 1009] = "MHB_SHOW";
        e[e.JP_SHOW = 1010] = "JP_SHOW";
        e[e.CHECK_STATE = 1011] = "CHECK_STATE";
        e[e.END = 1012] = "END";
        e[e.FREESPIN_WAIT_RES = 1013] = "FREESPIN_WAIT_RES";
        e[e.TURBO = 1014] = "TURBO";
        e[e.FIRST_IN_GAME = 1015] = "FIRST_IN_GAME";
        e[e.CHECK_APP_REWARD = 1016] = "CHECK_APP_REWARD";
        e[e.CHECK_BUFF = 1017] = "CHECK_BUFF";
        e[e.ACTIVATE_BUFF = 1018] = "ACTIVATE_BUFF";
        e[e.END_BUFF = 1019] = "END_BUFF";
        e[e.GRAND_JP = 1020] = "GRAND_JP";
      })(CommonState || (CommonState = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", "ExtraBetController", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (e) {
        var t = function () {
          function e() {}
          e.PascalTriangleLine = function (e) {
            var t = [1];
            for (var i = 1; i < e; i++) {
              t[i] = t[i - 1] * (e - i) / i;
            }
            return t;
          };
          e.RangedRandom = function (e, t) {
            return (t - e) * Math.random() + e;
          };
          e.GetRandomRectPos = function (e, t, i) {
            var n = v2(this.RangedRandom(-t.x, t.x) / 2 | 0, this.RangedRandom(-t.x, t.x) / 2 | 0).rotate(i * macro.RAD);
            return e.add(n);
          };
          e.GetRandomOvalPos = function (e, t, i) {
            var n = t.y / Math.max(1, t.x);
            var r = Math.random() * t.x * .5;
            var o = Math.random() * Math.PI * 2;
            var s = v2(r * Math.cos(o), r * Math.sin(o) * n).rotate(i * macro.RAD);
            return e.add(s);
          };
          e.ZoomAndFlip = function (e, t, i, n) {
            var r = Math.sin(n * Math.PI) * (t - e) + e;
            var o = Math.cos(n * Math.PI * i);
            return v2(r * o, r);
          };
          return e;
        }();
        e.ExtendsMath = t;
        var i = function () {
          function e(e) {
            this.pts = null;
            this.len = 0;
            this.ptl = null;
            this.bez = null;
            this.len = e.length;
            if (0 == this.len) {
              e.push(v3(0, 0));
              e.push(v3(0, 0));
            } else if (1 == this.len) {
              e.push(v3(e[0].x, e[0].y));
            }
            this.pts = e;
            switch (this.len) {
              case 2:
                this.bez = this.Bezier2;
                break;
              case 3:
                this.bez = this.Bezier3;
                break;
              case 4:
                this.bez = this.Bezier4;
                break;
              case 5:
                this.bez = this.Bezier5;
                break;
              case 6:
                this.bez = this.Bezier6;
                break;
              default:
                this.ptl = t.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var i = e.prototype;
          i.GetPosition = function (e) {
            return this.bez.apply(this, [e]);
          };
          i.Bezier2 = function (e) {
            var t = 1 - e;
            return v3(t * this.pts[0].x + e * this.pts[1].x, t * this.pts[0].y + e * this.pts[1].y);
          };
          i.Bezier3 = function (e) {
            var t = 1 - e;
            var i = [t * t, 2 * t * e, e * e];
            return v3(i[0] * this.pts[0].x + i[1] * this.pts[1].x + i[2] * this.pts[2].x, i[0] * this.pts[0].y + i[1] * this.pts[1].y + i[2] * this.pts[2].y);
          };
          i.Bezier4 = function (e) {
            var t = 1 - e;
            var i = [t * t * t, 3 * t * t * e, 3 * t * e * e, e * e * e];
            return v3(i[0] * this.pts[0].x + i[1] * this.pts[1].x + i[2] * this.pts[2].x + i[3] * this.pts[3].x, i[0] * this.pts[0].y + i[1] * this.pts[1].y + i[2] * this.pts[2].y + i[3] * this.pts[3].y);
          };
          i.Bezier5 = function (e) {
            var t = 1 - e;
            var i = [t * t * t * t, 4 * t * t * t * e, 6 * t * t * e * e, 4 * t * e * e * e, e * e * e * e];
            return v3(i[0] * this.pts[0].x + i[1] * this.pts[1].x + i[2] * this.pts[2].x + i[3] * this.pts[3].x + i[4] * this.pts[4].x, i[0] * this.pts[0].y + i[1] * this.pts[1].y + i[2] * this.pts[2].y + i[3] * this.pts[3].y + i[4] * this.pts[4].y);
          };
          i.Bezier6 = function (e) {
            var t = 1 - e;
            var i = [t * t * t * t * t, 5 * t * t * t * t * e, 10 * t * t * t * e * e, 10 * t * t * e * e * e, 5 * t * e * e * e * e, e * e * e * e * e];
            return v3(i[0] * this.pts[0].x + i[1] * this.pts[1].x + i[2] * this.pts[2].x + i[3] * this.pts[3].x + i[4] * this.pts[4].x + i[5] * this.pts[5].x, i[0] * this.pts[0].y + i[1] * this.pts[1].y + i[2] * this.pts[2].y + i[3] * this.pts[3].y + i[4] * this.pts[4].y + i[5] * this.pts[5].y);
          };
          i.BezierN = function (e) {
            var t = 1 - e;
            var i = v3(0, 0);
            for (var n = 0; n < this.len; n++) {
              var r = 1;
              for (var o = 0; o < this.len - n - 1; o++) {
                r *= t;
              }
              for (var s = 0; s < n; s++) {
                r *= e;
              }
              i.x += r * this.ptl[n] * this.pts[n].x;
              i.y += r * this.ptl[n] * this.pts[n].y;
            }
            return i;
          };
          return e;
        }();
        e.Bezier = i;
      })(CommonEffect || (CommonEffect = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "34de2pyU3tGgLxGDSuvsbBA", "SlotReels", undefined);
      var VISIBLE_ROW = [3];
      var DEFAULT_PLATE = [[0, 1, 0, 3, 0, 1], [1, 0, 2, 0, 1, 0], [0, 1, 0, 4, 0, 1]];
      var REEL_POSITION_OFFSET = [v3(0, 0), v3(0, 0), v3(0, 0)];
      var ccclass$5 = _decorator.ccclass;
      var property$4 = _decorator.property;
      _dec$4 = property$4({
        type: SpriteFrame,
        tooltip: "Symbol 圖片"
      });
      _class2$5 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_symbolSpriteFrames", _descriptor$4, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_viewSize = null;
          t.m_symbolSize = null;
          t.m_reelColNodes = [];
          t.m_symbols = [];
          t.m_plateInfo = [];
          t.m_riseTime = 0;
          t.m_upLength = 0;
          t.m_spinBufferTime01 = .1;
          t.m_spinBufferTime02 = .08;
          t.m_downLength = 30;
          t.m_spinSpeed = .18;
          t.m_timesOfBaseSpin = 2;
          t.m_spinIntervalTimes = 1;
          t.m_spinDelayTime = 0;
          t.m_timesOfNearWinSpin = 3.4;
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_reelStopTime = [];
          t.m_reelPreTime = [];
          t.m_isStop = false;
          t.m_isClickStopBtn = false;
          t.m_isChangeSymbol = [];
          t.m_isChangeToFinalSymbol = [];
          t.m_colOffsetY = 0;
          t.m_isColOffset = Array(3).fill(false);
          t.m_hardStopIntervalTime = 0;
          t.m_hardStopSpinSpeed = 0;
          t.m_colHasStop = [];
          t.m_relativeHeight = null;
          t.m_skewRate = null;
          t.m_scaleStandardDiff = .1;
          t.m_scaleStandard = 1;
          t.m_scaleRateX = .9;
          t.m_scaleRateY = .9;
          t.m_isBounceBack = true;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.onLoad = function () {
          var e = this;
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width / 3, this.m_viewSize.height / 1);
          this.m_relativeHeight = this.m_symbolSize.height;
          this.m_skewRate = 4 / this.m_relativeHeight;
          this.m_colOffsetY = -this.m_symbolSize.height / 2;
          var t = 0;
          for (var i = 0; i < 3; i++) {
            var n = new Node();
            this.node.addChild(n);
            n.name = "Reel" + i.toString();
            var r = this.m_symbolSize.width * (i - 1) + REEL_POSITION_OFFSET[i].x;
            n.setPosition(r, 0);
            this.m_reelColNodes.push(n);
            var o = new Array();
            for (var s = 0; s < 6; s++) {
              var a = new Node();
              this.m_reelColNodes[i].addChild(a);
              a.name = t.toString();
              var c = a.addComponent(Sprite);
              c.sizeMode = Sprite.SizeMode.RAW;
              c.type = Sprite.Type.SIMPLE;
              c.trim = false;
              var l = this.m_symbolSize.height / 2 * (3 - s) + REEL_POSITION_OFFSET[i].y;
              a.setPosition(0, l);
              t++;
              o.push(a);
              this.m_isChangeSymbol.push(true);
              this.m_isChangeToFinalSymbol.push(false);
            }
            this.m_symbols.push(o);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
          }
          for (var p = 0; p < 3; p++) {
            var _ = [];
            for (var d = 0; d < 1; d++) {
              _.push(this.GetRandomSymbol());
            }
          }
          this.m_gameView.LastPlate = [DEFAULT_PLATE[0][3], DEFAULT_PLATE[1][3], DEFAULT_PLATE[2][3]];
          for (var u = 0; u < 3; u++) {
            if (DEFAULT_PLATE[u][3] != Game_Define.Symbol.EMPTY) {
              DEFAULT_PLATE[u].shift();
              DEFAULT_PLATE[u].push(Game_Define.Symbol.EMPTY);
              var h = this.m_reelColNodes[u].getPosition();
              h.y += this.m_colOffsetY;
              this.m_reelColNodes[u].setPosition(h);
              this.m_isColOffset[u] = true;
            }
          }
          this.SetPlateSymbol([]);
          for (var m = 0; m < 3; m++) {
            for (var f = 0; f < 6; f++) {
              this.SetRadian(m, f);
            }
          }
          var y = function () {
            var t = node$o.TempoSetting.Crazy777;
            e.m_riseTime = t.BASE.RISE_TIME;
            e.m_upLength = t.BASE.UP_LENGTH;
            e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01;
            e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02;
            e.m_downLength = t.BASE.DOWN_LENGTH;
            e.m_spinSpeed = t.BASE.SPIN_SPEED;
            e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN;
            e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES;
            e.m_timesOfNearWinSpin = t.BASE.TIMES_OF_NEAR_WIN_SPIN;
            e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME;
            e.m_hardStopIntervalTime = t.BASE.HARD_STOP_INTERVAL_TIME;
            e.m_hardStopSpinSpeed = t.BASE.HARD_STOP_SPIN_SPEED;
          };
          y();
          node$o.AddCb(y);
        };
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.SetPlateSymbol = function (e) {
          if (0 == e.length) {
            for (var t = 0; t < 3; t++) {
              for (var i = 0; i < 6; i++) {
                var n = DEFAULT_PLATE[t][i];
                this.m_symbols[t][i].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[n];
                var r = this.m_symbolSize.height / 2 * (3 - i) + REEL_POSITION_OFFSET[t].y;
                this.m_symbols[t][i].setPosition(0, r);
              }
            }
          } else {
            var o = this.CompletePlate(e);
            for (var s = 0; s < 3; s++) {
              for (var a = 0; a < 6; a++) {
                this.m_symbols[s][a].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[o[s][a]];
                var c = this.m_symbolSize.height / 2 * (3 - a) + REEL_POSITION_OFFSET[s].y;
                this.m_symbols[s][a].setPosition(0, c);
                this.SetRadian(s, a);
              }
            }
          }
        };
        i.StartSpin = function () {
          this.m_isBounceBack = true;
          this.m_time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isColOffset = Array(3).fill(false);
          this.m_colHasStop = Array(3).fill(false);
          this.m_spinSpeed = node$o.TempoSetting.Crazy777.BASE.SPIN_SPEED;
          node$f.Play(Game_Define.AudioClips.Reel_Spin);
          node$m.StartSpin();
          for (var e = 0; e < 3; e++) {
            this.m_reelColNodes[e].setPosition(this.m_reelColNodes[e].position.x, 0);
            this.m_reelStopTime[e] = null;
            this.m_reelPreTime[e] = null;
          }
          for (var t = 0; t < 18; t++) {
            this.m_isChangeSymbol[t] = true;
            this.m_isChangeToFinalSymbol[t] = false;
          }
        };
        i.SetPlateInfo = function (e) {
          var t = this;
          this.m_plateInfo = this.CompletePlate(e);
          var i = this.m_riseTime * 3;
          var n = Math.ceil((this.m_time - i) / this.m_spinSpeed);
          n = n > 0 ? n : 1;
          if (this.m_isClickStopBtn) {
            this.m_spinSpeed = this.m_hardStopSpinSpeed;
            this.m_stopTime = node$k.strip((n + 1) * this.m_spinSpeed + this.m_spinDelayTime + i + 0 * this.m_spinSpeed * 2);
            for (var r = 0; r < 3; r++) {
              var o = (n + 1) * this.m_spinSpeed + 0 * this.m_spinSpeed * r;
              this.m_reelStopTime[r] = node$k.strip(o);
              this.m_reelPreTime[r] = node$k.strip(o - this.m_spinSpeed);
            }
          } else {
            this.m_stopTime = node$k.strip(this.m_spinSpeed * (n + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 2 + this.m_spinDelayTime + i + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var s = 0; s < 3; s++) {
              this.m_reelStopTime[s] = node$k.strip(this.m_spinSpeed * (n + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * s);
              this.m_reelPreTime[s] = node$k.strip(this.m_reelStopTime[s] - this.m_spinSpeed);
            }
            if (this.m_gameView.IsInNearwin) {
              for (var a = 0; a < 3; a++) {
                this.m_reelStopTime[a] = node$k.strip(Math.ceil(Game_Define.MysteryWinAnimReelStopTime[a] / this.m_spinSpeed) * this.m_spinSpeed + this.m_spinSpeed * n);
                this.m_reelPreTime[a] = node$k.strip(this.m_reelStopTime[a] - this.m_spinSpeed);
              }
              var c = Math.max(this.m_reelStopTime[2] - Game_Define.MysteryWinAnimReelStopTime[2], this.m_reelStopTime[0] - Game_Define.MysteryWinAnimReelStopTime[0]);
              c = node$k.strip(c - this.m_time);
              tween(this.node).delay(c + 0.03333333333333333).call(function () {
                t.m_gameView.NearwinEft(true);
              }).start();
              this.m_stopTime = node$k.strip(this.m_reelStopTime[1] + this.m_spinDelayTime + i + this.m_spinBufferTime01 + this.m_spinBufferTime02);
              this.m_isBounceBack = false;
            }
          }
        };
        i.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          this.m_spinSpeed = this.m_hardStopSpinSpeed;
          if (0 != this.m_stopTime) {
            var e = this.m_riseTime * 3;
            var t = Math.floor((this.m_time - e) / this.m_spinSpeed);
            var i = (t + 1) * this.m_spinSpeed + this.m_spinDelayTime + e + this.m_hardStopIntervalTime * this.m_spinSpeed * 2;
            if (i < this.m_stopTime) {
              this.m_stopTime = node$k.strip(i);
            }
            for (var n = 0; n < 3; n++) {
              var r = (t + 1) * this.m_spinSpeed + this.m_hardStopIntervalTime * this.m_spinSpeed * n;
              if (r < this.m_reelStopTime[n]) {
                this.m_reelStopTime[n] = node$k.strip(r);
                this.m_reelPreTime[n] = node$k.strip(r - this.m_spinSpeed);
              }
            }
          }
        };
        i.Spin = function (e) {
          this.m_time = node$k.strip(this.m_time + e);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple();
            if (0 != this.m_stopTime && this.m_time >= this.m_stopTime) {
              this.m_isStop = true;
              this.SetOutsideSymbol(false);
            }
          }
        };
        i.Spin_RealSpinMultiple = function () {
          var e = this.m_symbolSize.height * 3;
          for (var t = 0; t < 3; t++) {
            var i = this.m_spinSpeed;
            var n = this.m_time;
            var r = this.m_reelStopTime[t];
            var o = this.m_riseTime * 3;
            for (var s = 0; s < 6; s++) {
              var a = this.m_symbols[t][s].name;
              var c = this.m_symbols[t][s];
              var l = this.m_symbolSize.height / 2 * (3 - s) + REEL_POSITION_OFFSET[t].y;
              var p = this.m_symbolSize.height / 2 * (6 - s);
              if (n < this.m_riseTime * (t + 1)) {
                var _ = (n - this.m_riseTime * t) / this.m_riseTime * this.m_upLength;
                this.m_symbols[t][s].setPosition(0, l + _);
              } else if (n < o) {
                this.m_symbols[t][s].setPosition(0, l + this.m_upLength);
              } else if (null == r || n < r + o) {
                var d = (n - o) % i / i * e;
                var u = this.GetMovelength(d, p, e, t, a, c, false);
                this.m_symbols[t][s].setPosition(0, l - u);
              } else if (n < r + o + this.m_spinBufferTime01 && !this.m_isClickStopBtn && this.m_isBounceBack) {
                var h = (n - r - o) / this.m_spinBufferTime01 * this.m_downLength;
                this.m_symbols[t][s].setPosition(0, l - h);
                this.CheckChangeToFinalSymbol(t, a, c, true);
              } else if (n < r + o + this.m_spinBufferTime01 + this.m_spinBufferTime02 && !this.m_isClickStopBtn && this.m_isBounceBack) {
                var m = (n - r - o - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                this.m_symbols[t][s].setPosition(0, l - this.m_downLength + m);
                this.CheckChangeToFinalSymbol(t, a, c, true);
              } else {
                this.CheckChangeToFinalSymbol(t, a, c, true);
                this.m_symbols[t][s].setPosition(0, l);
              }
              this.SetRadian(t, s);
            }
            var f = 0;
            if (this.m_reelStopTime[t]) {
              for (var y = 0; y < 3; y++) {
                if (this.m_colHasStop[y] && this.m_gameView.SpinAck.PlateSymbol[y] == Game_Define.Symbol.SYMBOL03) {
                  f += 1;
                }
              }
              if (!this.m_colHasStop[t]) {
                if (this.m_reelStopTime[t] + this.m_spinBufferTime01 + this.m_spinBufferTime02 <= this.m_time && !this.m_isClickStopBtn || this.m_reelStopTime[t] <= this.m_time && this.m_isClickStopBtn) {
                  this.m_colHasStop[t] = true;
                  this.m_gameView.EffectPlate.SymbolShowStop(t, f >= 2);
                }
              }
            }
          }
        };
        i.GetMovelength = function (e, t, i, n, r, o, s) {
          if (e >= t) {
            e -= i;
            if (this.m_isChangeSymbol[r]) {
              this.m_isChangeSymbol[r] = false;
              this.ChangeSymbol(n, o, s);
            }
          } else {
            this.m_isChangeSymbol[r] = true;
          }
          return e;
        };
        i.ChangeSymbol = function (e, t, i) {
          var n = Number(t.name);
          var r = this.m_reelPreTime[e];
          var o = n % 6;
          var s = this.m_riseTime * 3;
          if (i || r && this.m_time - s >= r) {
            var a = t.getComponent(Sprite);
            var c = this.m_plateInfo[e][o];
            a.spriteFrame = this.m_symbolSpriteFrames[c];
          } else {
            var l = t.getComponent(Sprite);
            var p = Game_Define.Symbol.EMPTY;
            if (o % 2 == 0) {
              p = this.GetRandomSymbol();
            }
            l.spriteFrame = this.m_symbolSpriteFrames[p];
          }
        };
        i.CheckChangeToFinalSymbol = function (e, t, i, n) {
          if (undefined === n) {
            n = false;
          }
          if (!this.m_isChangeToFinalSymbol[t]) {
            this.m_isChangeToFinalSymbol[t] = true;
            this.ChangeSymbol(e, i, n);
          }
        };
        i.IsPlateStop = function () {
          return this.m_isStop;
        };
        i.GetRandomSymbol = function () {
          var e = this.m_symbolSpriteFrames.length - 1;
          return Math.floor(Math.random() * e - 1) + 2;
        };
        i.SetSymbolActive = function (e, t, i) {
          var n = 3 + (t - Game_Define.ROW_CENTER);
          if (this.m_isColOffset[e]) {
            n--;
          }
          this.m_symbols[e][n].active = i;
        };
        i.GetSymbolPosition = function (e, t) {
          var i = 3 + (t - Game_Define.ROW_CENTER);
          var n = 0;
          if (this.m_isColOffset[e]) {
            i--;
            n = this.m_colOffsetY;
          }
          var r = this.m_symbols[e][i].getPosition();
          r.x = this.m_reelColNodes[e].getPosition().x;
          r.y += n;
          return r;
        };
        i.SetAllSymbolDark = function (e) {
          var t = color(180, 180, 180);
          for (var i = 0; i < 3; i++) {
            for (var n = 0; n < 6; n++) {
              this.m_symbols[i][n].getComponent(Sprite).color = e ? t : color(255, 255, 255);
            }
          }
        };
        i.CompletePlate = function (e) {
          var t = [];
          for (var i = 0; i < 3; i++) {
            var n = [];
            for (var r = 0; r < 6; r++) {
              if (this.CheckRealRow(r)) {
                n.push(e[i][r - (3 - Game_Define.ROW_CENTER)]);
              } else {
                n.push(Game_Define.Symbol.EMPTY);
              }
            }
            t.push(n);
          }
          for (var o = 0; o < 3; o++) {
            if (t[o][3] != Game_Define.Symbol.EMPTY) {
              t[o].shift();
              t[o].push(Game_Define.Symbol.EMPTY);
              var s = this.m_reelColNodes[o].getPosition();
              s.y += this.m_colOffsetY;
              this.m_reelColNodes[o].setPosition(s);
              this.m_isColOffset[o] = true;
            }
            for (var a = 0; a < 6; a++) {
              if (a % 2 == 0 && t[o][a] == Game_Define.Symbol.EMPTY) {
                t[o][a] = this.GetRandomSymbol();
              }
            }
          }
          return t;
        };
        i.CheckRealRow = function (e) {
          return VISIBLE_ROW.includes(e);
        };
        i.SetRadian = function (e, t) {
          var i = 1 - e;
          var n = this.m_symbols[e][t].getPosition();
          n.y += Number(this.m_isColOffset[e]) * this.m_colOffsetY;
          var r = 0;
          if (0 != i && (this.SetNodeSkewX(this.m_symbols[e][t], i * this.m_skewRate * (4 * n.y)), !this.m_isColOffset[e])) {
            var o = 0;
            o = Math.abs(n.y) >= this.m_symbolSize.y / 2 ? 20 : 200 - Math.abs(n.y);
            var s = this.m_reelColNodes[1].getPosition().x - this.m_reelColNodes[e].getPosition().x;
            this.m_symbols[e][t].setPosition(v3(n.x + s / o, n.y, 0));
          }
          if (0 == i && t == 3) {
            r = this.m_scaleStandardDiff;
          }
          var a = this.m_scaleStandard + r - Math.abs(n.y) * (this.m_scaleStandard + r - this.m_scaleRateX) / this.m_relativeHeight;
          var c = this.m_scaleStandard + r - Math.abs(n.y) * (this.m_scaleStandard + r - this.m_scaleRateY) / this.m_relativeHeight;
          this.m_symbols[e][t].setScale(a, c);
        };
        i.SetNodeSkewX = function (e, t) {
          var i = Math.abs(Math.tan(t * Math.PI / 180));
          var n = 180 * Math.acos((Math.sqrt(4 + i * i) - i) / 2) / Math.PI;
          var r = 2 / (Math.sqrt(4 + i * i) - i);
          e.eulerAngles = v3(n, t < 0 ? -n : n, 0);
          e.setScale(v3(r));
        };
        i.SetOutsideSymbol = function (e) {
          for (var t = 0; t < 3; t++) {
            for (var i = 0; i < 6; i++) {
              if ([0, 1, 5].includes(i)) {
                this.m_symbols[t][i].active = e;
              }
            }
          }
        };
        _createClass(t, [{
          key: "IsClickStopBtn",
          get: function () {
            return this.m_isClickStopBtn;
          }
        }]);
        return t;
      }(Component);
      _descriptor$4 = _applyDecoratedDescriptor(_class2$5.prototype, "m_symbolSpriteFrames", [_dec$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var SlotReels = ccclass$5(_class$5 = _class2$5) || _class$5;
      var _dec$5;
      var _dec2$4;
      var _dec3$2;
      var _dec4$1;
      var _dec5;
      var _class$6;
      var _descriptor$5;
      var _descriptor2$2;
      var _descriptor3$2;
      var _descriptor4;
      var _descriptor5;
      var _class3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var BigWinAnimName = {
        Big: {
          Start: "BigWin_Start",
          End: "BigWin_End"
        },
        Mega: {
          Start: "MegaWin_Start",
          End: "MegaWin_End"
        },
        Super: {
          Start: "SuperWin_Start",
          End: "SuperWin_End"
        }
      };
      var ccclass$6 = _decorator.ccclass;
      var property$5 = _decorator.property;
      _dec$5 = property$5({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec2$4 = property$5({
        type: sp.Skeleton,
        tooltip: "遮罩"
      });
      _dec3$2 = property$5({
        type: sp.Skeleton,
        tooltip: "Extra Spine"
      });
      _dec4$1 = property$5({
        type: Label,
        tooltip: "贏分"
      });
      _dec5 = property$5({
        type: CCFloat,
        tooltip: "End extra effect delay time"
      });
      _class3 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_spine", _descriptor$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_maskSpine", _descriptor2$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_extraSpine", _descriptor3$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_winLabel", _descriptor4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_endExtraDelayTime", _descriptor5, _assertThisInitialized(t));
          t.m_isEnd = true;
          t.m_isShowEnd = true;
          t.m_isShowAward = false;
          t.m_eventCb = null;
          t.m_showValueCb = null;
          t.m_cancelCb = null;
          t.m_lvl = 0;
          t.m_nowLvl = 0;
          t.m_win = 0;
          t.m_showWin = 0;
          t.m_step = 0;
          t.m_isShowingExtraEnd = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.update = function (e) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * e;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = node$k.FormatNumberThousands(node$k.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), node$k.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        i.Init = function (e, t) {
          this.m_eventCb = e;
          this.m_showValueCb = t;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        i.Show = function (e, i, n) {
          if (undefined === n) {
            n = true;
          }
          if (e > 0 && i > t.Level.NONE && i <= t.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = i;
            this.m_nowLvl = n ? 0 : i - 1;
            this.m_win = e;
            this.m_showWin = 0;
            this.m_winLabel.string = "0";
            this.m_isShowEnd = false;
            var r = 0;
            for (var o = n ? t.Level.BIG : this.m_lvl; o <= this.m_lvl; o++) {
              var s = "";
              var a = "";
              switch (o) {
                case t.Level.BIG:
                  s = BigWinAnimName.Big.Start;
                  a = BigWinAnimName.Big.End;
                  break;
                case t.Level.MEGA:
                  s = BigWinAnimName.Mega.Start;
                  a = BigWinAnimName.Mega.End;
                  break;
                case t.Level.SUPER:
                  s = BigWinAnimName.Super.Start;
                  a = BigWinAnimName.Super.End;
              }
              if ("" !== s && "" !== a) {
                var c = this.m_spine.findAnimation(s);
                if (c) {
                  r += c.duration;
                }
              }
            }
            this.m_step = node$k.divide(this.m_win, r || 5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, "BigWin_Start");
            }
            this.ShowNext();
          }
        };
        i.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        i.SetSkin = function (e) {
          this.m_spine.setSkin(e);
        };
        i.ShowNext = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      e.next = 4;
                      break;
                    }
                    this.ShowEnd();
                    e.next = 23;
                    break;
                  case 4:
                    this.m_nowLvl++;
                    i = false;
                    e.t0 = this.m_nowLvl;
                    e.next = e.t0 === t.Level.BIG ? 9 : e.t0 === t.Level.MEGA ? 14 : e.t0 === t.Level.SUPER ? 18 : 22;
                    break;
                  case 9:
                    this.CheckExtraSpineStart();
                    e.next = 12;
                    return this.PlayAnimation(this.m_spine, BigWinAnimName.Big.Start);
                  case 12:
                    i = e.sent;
                    return e.abrupt("break", 22);
                  case 14:
                    e.next = 16;
                    return this.PlayAnimation(this.m_spine, BigWinAnimName.Mega.Start);
                  case 16:
                    i = e.sent;
                    return e.abrupt("break", 22);
                  case 18:
                    e.next = 20;
                    return this.PlayAnimation(this.m_spine, BigWinAnimName.Super.Start);
                  case 20:
                    i = e.sent;
                    return e.abrupt("break", 22);
                  case 22:
                    if (!i) {
                      this.ShowNext();
                    }
                  case 23:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ShowEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isShowEnd) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = node$k.FormatNumberThousands(node$k.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), node$k.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    }
                    i = "";
                    e.t0 = this.m_lvl;
                    e.next = e.t0 === t.Level.BIG ? 10 : e.t0 === t.Level.MEGA ? 12 : e.t0 === t.Level.SUPER ? 14 : 16;
                    break;
                  case 10:
                    i = BigWinAnimName.Big.End;
                    return e.abrupt("break", 16);
                  case 12:
                    i = BigWinAnimName.Mega.End;
                    return e.abrupt("break", 16);
                  case 14:
                    i = BigWinAnimName.Super.End;
                    return e.abrupt("break", 16);
                  case 16:
                    if ("" === i) {
                      e.next = 21;
                      break;
                    }
                    e.next = 19;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, i)]);
                  case 19:
                    e.next = 22;
                    break;
                  case 21:
                    console.error("BigWinComponent ShowEnd animName is empty!", this.m_lvl);
                  case 22:
                    if (this.m_maskSpine) {
                      this.m_maskSpine.node.active = false;
                    }
                    this.m_isEnd = true;
                  case 24:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.CheckExtraSpineStart = function () {
          var e = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, "Start").then(function () {
              if (!e.m_isShowingExtraEnd) {
                e.PlayAnimation(e.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        i.CheckExtraSpineEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_extraSpine) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.m_isShowingExtraEnd = true;
                    e.next = 5;
                    return node$l.Wait(this, this.m_endExtraDelayTime);
                  case 5:
                    e.next = 7;
                    return this.PlayAnimation(this.m_extraSpine, "End");
                  case 7:
                    this.m_isShowingExtraEnd = false;
                  case 8:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.PlayAnimation = function (e, t, i, n) {
          var r = this;
          if (undefined === i) {
            i = false;
          }
          if (undefined === n) {
            n = 0;
          }
          return new Promise(function (o) {
            var s = false;
            r.m_cancelCb = function () {
              o(s = true);
            };
            e.clearTrack(n);
            e.setToSetupPose();
            var a = e.setAnimation(n, t, i);
            var c = function () {
              r.m_cancelCb = null;
              o(s);
            };
            if (a) {
              e.setTrackEventListener(a, function (e, i) {
                var n = i.data.name;
                var o = i.stringValue;
                if (r.m_eventCb) {
                  r.m_eventCb(n, o, t);
                }
              });
              e.setTrackCompleteListener(a, function () {
                e.setTrackCompleteListener(a, function () {});
                c();
              });
            } else {
              e.setCompleteListener(function () {
                e.setCompleteListener(null);
                c();
              });
            }
          });
        };
        _createClass(t, [{
          key: "IsEnd",
          get: function () {
            return this.m_isEnd;
          },
          set: function (e) {
            this.m_isEnd = e;
          }
        }]);
        return t;
      }(Component);
      _class3.Level = {
        NONE: 0,
        BIG: 1,
        MEGA: 2,
        SUPER: 3
      };
      _descriptor$5 = _applyDecoratedDescriptor(_class3.prototype, "m_spine", [_dec$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class3.prototype, "m_maskSpine", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$2 = _applyDecoratedDescriptor(_class3.prototype, "m_extraSpine", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "m_winLabel", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "m_endExtraDelayTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.5;
        }
      });
      var BigWinComponent = ccclass$6(_class$6 = _class3) || _class$6;
      var _dec$6;
      var _dec2$5;
      var _dec3$3;
      var _class2$7;
      var _descriptor$6;
      var _descriptor2$3;
      var _descriptor3$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "394e72JYgpJK6UACSxatreM", "EffectPlate", undefined);
      var property$6 = _decorator.property;
      _dec$6 = property$6({
        type: Prefab,
        tooltip: "Symbol 動態"
      });
      _dec2$5 = property$6({
        type: SlotReels,
        tooltip: "轉輪"
      });
      _dec3$3 = property$6({
        type: BigWinComponent,
        tooltip: "big win effect"
      });
      _class2$7 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_symbolPrefabs", _descriptor$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_slotReels", _descriptor2$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bigwinEffect", _descriptor3$3, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_symbolNodes = null;
          t.m_multiplyString = [" ", "X3", "X5", "X9"];
          t.m_multiplyLevel = 0;
          t.m_isMidWild = false;
          t.m_winningSoundCount = 0;
          t.m_effetNodePool = [];
          t.m_curEftNodes = [null, null, null];
          t.m_symbol03Count = 0;
          t.m_bigWinSoundId = null;
          t.m_isPlayedStopReel = null;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Init = function (e) {
          var t = this;
          this.m_gameView = e;
          this.m_bigwinEffect.Init(function (e, i, n) {
            if ("Sound1" == i) {
              node$f.Play(Game_Define.AudioClips.Big_Win_Change);
              if ("MegaWin_Start" == n) {
                node$f.SetVolume(t.m_bigWinSoundId, .75);
              } else if ("SuperWin_Start" == n) {
                node$f.SetVolume(t.m_bigWinSoundId, 1);
              }
            }
            if ("Sound2" == i) {
              node$f.SetMusicFadeOut(t.m_bigWinSoundId, 1);
              node$f.Play(Game_Define.AudioClips.Big_Win_End);
              node$f.Resume(t.m_gameView.BGMId);
              node$f.SetVolume(t.m_gameView.BGMId, 0);
              tween(t.node).delay(1).call(function () {
                node$f.SetMusicFadeIn(t.m_gameView.BGMId, 1, 1);
              }).start();
            }
          }, null);
        };
        i.onLoad = function () {
          for (var e = 0; e < Game_Define.Symbol.SYMBOL03 + 1; e++) {
            this.m_effetNodePool[e] = [];
          }
        };
        i.ShowSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var i;
            var n;
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    n = 0;
                  case 2:
                    if (!(n < t.length)) {
                      e.next = 13;
                      break;
                    }
                    this.m_slotReels.SetSymbolActive(n, 0, false);
                    r = this.m_slotReels.GetSymbolPosition(n, 0);
                    o = this.m_curEftNodes[n];
                    if (!(0 == t[n] || o)) {
                      (o = this.GetEffectNode(t[n])).setPosition(r);
                      o.setParent(this.node);
                      this.m_curEftNodes[n] = o;
                    }
                    i.push(o.getComponent(SymbolEffect).ShowWin());
                    e.next = 10;
                    return node$l.Wait(this, .1);
                  case 10:
                    n++;
                    e.next = 2;
                    break;
                  case 13:
                    e.next = 15;
                    return Promise.all(i);
                  case 15:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        i.ShowCoin = function () {
          if (!this.m_gameView.IsInNearwin) {
            this.m_gameView.CoinEffectL.ShowCoin(true);
            this.m_gameView.CoinEffectR.ShowCoin(true);
          }
        };
        i.SymbolShowStop = function (e, t) {
          if (undefined === t) {
            t = false;
          }
          if (this.m_gameView.SpinAck && (!this.m_gameView.IsInNearwin || 0 != e && e != Game_Define.COL - 1)) {
            var i;
            var n = this.m_gameView.SpinAck.PlateSymbol;
            var r = this.m_slotReels.GetSymbolPosition(e, 0);
            if (this.m_gameView.SlotReels.IsClickStopBtn) {
              if (!this.m_isPlayedStopReel) {
                node$f.Play(Game_Define.AudioClips.Reel_Stop);
                this.m_isPlayedStopReel = true;
              }
            } else {
              node$f.Play(Game_Define.AudioClips.Reel_Stop);
            }
            if (n[e] != Game_Define.Symbol.EMPTY) {
              if (n[e] != Game_Define.Symbol.SYMBOL03 || this.m_gameView.SlotReels.IsClickStopBtn) {
                if (n.includes(Game_Define.Symbol.SYMBOL03) && this.m_gameView.SlotReels.IsClickStopBtn && this.m_symbol03Count < 3) {
                  this.m_symbol03Count += 3;
                  node$f.Play(Game_Define.AudioClips["Symbol_03_Stop" + n.filter(function (e) {
                    return e == Game_Define.Symbol.SYMBOL03;
                  }).length]);
                }
              } else {
                this.m_symbol03Count += 1;
                node$f.Play(Game_Define.AudioClips["Symbol_03_Stop" + this.m_symbol03Count.toString()]);
              }
              this.m_slotReels.SetSymbolActive(e, 0, false);
              (i = this.GetEffectNode(n[e])).setPosition(r);
              i.setParent(this.node);
              this.m_curEftNodes[e] = i;
              if (t) {
                i.getComponent(SymbolEffect).ShowNearWin();
              } else {
                i.getComponent(SymbolEffect).ShowStop();
              }
            }
          }
        };
        i.SymbolShowChange = function (e) {
          this.m_slotReels.SetSymbolActive(e, 0, false);
          if (!this.m_curEftNodes[e]) {
            var t;
            var i = this.m_slotReels.GetSymbolPosition(e, 0);
            (t = this.GetEffectNode(this.m_gameView.SpinAck.PlateSymbol[e])).setPosition(i);
            t.setParent(this.node);
            this.m_curEftNodes[e] = t;
          }
          this.m_curEftNodes[e].getComponent(SymbolEffect).ShowDrop();
        };
        i.CLearAllEftNode = function () {
          for (var e = 0; e < this.m_curEftNodes.length; e++) {
            if (this.m_curEftNodes[e]) {
              this.m_gameView.EffectPlate.ReturnEffectNode(this.m_curEftNodes[e]);
              this.m_curEftNodes[e] = null;
            }
          }
        };
        i.GetEffectNode = function (e) {
          var t = this.m_effetNodePool[e].shift();
          if (!t) {
            (t = instantiate(this.m_symbolPrefabs[e])).name = e.toString();
          }
          t.active = true;
          return t;
        };
        i.ReturnEffectNode = function (e) {
          var t = Number(e.name);
          e.active = false;
          e.removeFromParent();
          this.m_effetNodePool[t].push(e);
        };
        _createClass(t, [{
          key: "BigwinEffect",
          get: function () {
            return this.m_bigwinEffect;
          }
        }, {
          key: "Symbol03Count",
          set: function (e) {
            this.m_symbol03Count = e;
          }
        }, {
          key: "BigWinSoundId",
          set: function (e) {
            this.m_bigWinSoundId = e;
          }
        }, {
          key: "IsPlayedStopReel",
          set: function (e) {
            this.m_isPlayedStopReel = e;
          }
        }]);
        return t;
      }(Component);
      _descriptor$6 = _applyDecoratedDescriptor(_class2$7.prototype, "m_symbolPrefabs", [_dec$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$3 = _applyDecoratedDescriptor(_class2$7.prototype, "m_slotReels", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class2$7.prototype, "m_bigwinEffect", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4b71897/HdBorZDooSe88ix", "AwardState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d7d8fqaYE9D9JAra/WwWKgq", "CheckState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3e322Zg/15IgaW08e0Y6rD5", "FeatureShowState", undefined);
      var CONNECT_TYPE;
      var HTTP_METHOD;
      var MAX_DEFINE;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", "ConnectionManager", undefined);
      (function (e) {
        e[e.TYPE_HTTP = 1] = "TYPE_HTTP";
        e[e.TYPE_WEBSOCKET = 2] = "TYPE_WEBSOCKET";
        e[e.MAX = 3] = "MAX";
      })(CONNECT_TYPE || (CONNECT_TYPE = {}));
      (function (e) {
        e.TYPE_GET = "get";
        e.TYPE_POST = "post";
      })(HTTP_METHOD || (HTTP_METHOD = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", undefined);
      (function (e) {
        e[e.MAX_UINT = 4294967295] = "MAX_UINT";
        e[e.MAX_UINT64 = 0x10000000000000000] = "MAX_UINT64";
        e[e.MAX_INT = -1] = "MAX_INT";
        e[e.MIN_INT = 0] = "MIN_INT";
      })(MAX_DEFINE || (MAX_DEFINE = {}));
      var _dec$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", undefined);
      var ccclass$8 = _decorator.ccclass;
      _dec$7 = ccclass$8("Common_IdleState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var SizeMode;
      var PositionMode;
      var ScaleMode;
      var ColorMode;
      !function (e) {
        e[e.WIDTH = 1] = "WIDTH";
        e[e.HEIGHT = 2] = "HEIGHT";
        e[e.BOTH = 3] = "BOTH";
      }(SizeMode || (SizeMode = {}));
      (function (e) {
        e[e.X = 1] = "X";
        e[e.Y = 2] = "Y";
        e[e.BOTH = 3] = "BOTH";
      })(PositionMode || (PositionMode = {}));
      (function (e) {
        e[e.X = 1] = "X";
        e[e.Y = 2] = "Y";
        e[e.BOTH = 3] = "BOTH";
      })(ScaleMode || (ScaleMode = {}));
      (function (e) {
        e[e.R = 1] = "R";
        e[e.G = 2] = "G";
        e[e.B = 4] = "B";
        e[e.RGB = 7] = "RGB";
        e[e.A = 8] = "A";
        e[e.RGBA = 15] = "RGBA";
      })(ColorMode || (ColorMode = {}));
      var SwitchOffKeyDefine;
      var _dec$9;
      var _dec2$7;
      var _dec3$5;
      var _dec4$3;
      var _dec5$2;
      var _dec6$1;
      var _dec7$1;
      var _class2$9;
      var _descriptor$8;
      var _descriptor2$5;
      var _descriptor3$5;
      var _descriptor4$2;
      var _descriptor5$2;
      var _descriptor6$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (e) {
        e[e.ShopingMall = 1] = "ShopingMall";
        e[e.ShowAutoSetting = 16] = "ShowAutoSetting";
        e[e.NoSoundUnder1 = 17] = "NoSoundUnder1";
        e[e.NoQuickSpin = 18] = "NoQuickSpin";
        e[e.CloseManual = 39] = "CloseManual";
        e[e.CloseExtraBet = 61] = "CloseExtraBet";
      })(SwitchOffKeyDefine || (SwitchOffKeyDefine = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      var ccclass$a = _decorator.ccclass;
      var property$8 = _decorator.property;
      _dec$9 = ccclass$a("ManualComponent");
      _dec2$7 = property$8({
        type: Node,
        tooltip: "特色說明按鈕(新版跑馬燈)"
      });
      _dec3$5 = property$8({
        type: Node,
        tooltip: "特色說明本體(新版跑馬燈)"
      });
      _dec4$3 = property$8({
        type: Node,
        tooltip: "特色說明關閉按鈕(新版跑馬燈)"
      });
      _dec5$2 = property$8({
        type: Node,
        tooltip: "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _dec6$1 = property$8({
        type: Sprite,
        tooltip: "特色說明內容(新版跑馬燈)"
      });
      _dec7$1 = property$8({
        type: Sprite,
        tooltip: "標題"
      });
      _class2$9 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_featureInfoBtn", _descriptor$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_featureInfoBoard", _descriptor2$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_featureInfoCloseBtn", _descriptor3$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_featureInfoSideBtn", _descriptor4$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_featureInfoTxt", _descriptor5$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSprite", _descriptor6$1, _assertThisInitialized(t));
          t.m_manulState = "Close";
          t.m_manulOpenLock = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.onLoad = function () {
          var e = this;
          if (node$k.CheckSwitchOff(SwitchOffKeyDefine.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(Node.EventType.TOUCH_END, function () {
                e.OpenManul();
                node$f.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(Node.EventType.TOUCH_END, function () {
                e.CloseManul();
                node$f.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(Node.EventType.TOUCH_END, function () {
                e.CloseManul();
              });
            }
          }
        };
        i.OpenManul = function () {
          var e = this;
          if (this.m_manulOpenLock) {
            node$b.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            tween(this.m_featureInfoBoard).call(function () {
              e.m_manulState = "Opening";
              e.m_featureInfoBoard.getComponentInChildren(Animation).play("Manual_Open");
            }).delay(.5).call(function () {
              e.m_manulState = "Open";
            }).start();
          }
        };
        i.CloseManul = function () {
          var e = this;
          if (this.m_manulState == "Open") {
            tween(this.m_featureInfoBoard).call(function () {
              e.m_manulState = "Closing";
              e.m_featureInfoBoard.getComponentInChildren(Animation).play("Manual_Close");
            }).delay(.5).call(function () {
              e.m_manulState = "Close";
              e.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        i.SetTxt = function (e, t) {
          if (undefined === t) {
            t = null;
          }
          var i = node$e.GetGameAtlas();
          for (var n = 0; n < this.m_featureInfoTxt.length; n++) {
            if (i.getSpriteFrame(e[n])) {
              this.m_featureInfoTxt[n].spriteFrame = i.getSpriteFrame(e[n]);
            }
          }
          if (this.m_titleSprite && t) {
            this.m_titleSprite.spriteFrame = i.getSpriteFrame(t);
          }
        };
        _createClass(t, [{
          key: "FeatureInfoBtn",
          get: function () {
            return this.m_featureInfoBtn;
          }
        }, {
          key: "ManulState",
          get: function () {
            return this.m_manulState;
          }
        }, {
          key: "ManulOpenLock",
          get: function () {
            return this.m_manulOpenLock;
          },
          set: function (e) {
            this.m_manulOpenLock = e;
          }
        }]);
        return t;
      }(Component);
      _descriptor$8 = _applyDecoratedDescriptor(_class2$9.prototype, "m_featureInfoBtn", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class2$9.prototype, "m_featureInfoBoard", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$5 = _applyDecoratedDescriptor(_class2$9.prototype, "m_featureInfoCloseBtn", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class2$9.prototype, "m_featureInfoSideBtn", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$2 = _applyDecoratedDescriptor(_class2$9.prototype, "m_featureInfoTxt", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor6$1 = _applyDecoratedDescriptor(_class2$9.prototype, "m_titleSprite", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", "NearWinEffectComponent", undefined);
      var _dec$c;
      var _dec2$a;
      var _dec3$8;
      var _dec4$6;
      var _dec5$4;
      var _dec6$3;
      var _dec7$2;
      var _class2$c;
      var _descriptor$b;
      var _descriptor2$8;
      var _descriptor3$8;
      var _descriptor4$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var ccclass$d = _decorator.ccclass;
      var property$b = _decorator.property;
      var CCEasingName = Enum({});
      var FadeEnum;
      !function (e) {
        e[e.None = 0] = "None";
        e[e.FadeIn = 1] = "FadeIn";
        e[e.FadeOut = 2] = "FadeOut";
      }(FadeEnum || (FadeEnum = {}));
      var CCFadeName = Enum({
        None: FadeEnum.None,
        FadeIn: FadeEnum.FadeIn,
        FadeOut: FadeEnum.FadeOut
      });
      _dec$c = ccclass$d("_TweenInfo");
      _dec2$a = property$b({
        visible: false,
        tooltip: "Easing"
      });
      _dec3$8 = property$b({
        type: CCEasingName,
        visible: false
      });
      _dec4$6 = property$b({
        visible: true,
        displayName: "緩動效果",
        type: CCEasingName
      });
      _dec5$4 = property$b({
        type: CCFadeName,
        visible: false
      });
      _dec6$3 = property$b({
        visible: true,
        displayName: "fade type",
        type: CCFadeName
      });
      _dec7$2 = property$b({
        min: 0,
        visible: true,
        displayName: "時間"
      });
      _class2$c = function () {
        function e() {
          _initializerDefineProperty(this, "m_EasingName", _descriptor$b, this);
          _initializerDefineProperty(this, "__easingIdx", _descriptor2$8, this);
          _initializerDefineProperty(this, "__fadeType", _descriptor3$8, this);
          this._EasingEnumList = [];
          _initializerDefineProperty(this, "duration", _descriptor4$4, this);
        }
        _createClass(e, [{
          key: "_easingIdx",
          get: function () {},
          set: function (e) {}
        }, {
          key: "_fadeType",
          get: function () {
            return this.__fadeType;
          },
          set: function (e) {}
        }]);
        return e;
      }();
      _descriptor$b = _applyDecoratedDescriptor(_class2$c.prototype, "m_EasingName", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      _descriptor2$8 = _applyDecoratedDescriptor(_class2$c.prototype, "__easingIdx", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _applyDecoratedDescriptor(_class2$c.prototype, "_easingIdx", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$c.prototype, "_easingIdx"), _class2$c.prototype);
      _descriptor3$8 = _applyDecoratedDescriptor(_class2$c.prototype, "__fadeType", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _applyDecoratedDescriptor(_class2$c.prototype, "_fadeType", [_dec6$3], Object.getOwnPropertyDescriptor(_class2$c.prototype, "_fadeType"), _class2$c.prototype);
      _descriptor4$4 = _applyDecoratedDescriptor(_class2$c.prototype, "duration", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f34aXQ97pIircyjVweKvmp", "IdleState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0181e1hYhtOp6bTGF3W4dFm", "PlateShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5369dby1DhNdI0IAcuZXe4z", "RoundEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ee3d34KNrtLqYun6PqRLF5e", "RoundShowEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "92f12EH7DBCDr60HRj6R7fs", "SpinState", undefined);
      var _dec$d;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c3105j6aOxBA7rp7TSjr+8O", "UnshowPrepareState", undefined);
      var ccclass$f = _decorator.ccclass;
      _dec$d = ccclass$f("UnshowPrepareState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e7a7f3qnGxPwpvUFfU5H+ZR", "WaitReadyState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "24eaasgw4VJGpr7e5XTEUL+", "WaitResState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      cclegacy._RF.pop();
      /**
             * @license
             * Copyright 2009 The Closure Library Authors
             * Copyright 2020 Daniel Wirtz / The long.js Authors.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             *
             * SPDX-License-Identifier: Apache-2.0
             */
      var wasm = null;
      try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
      } catch (e) {}
      function Long(e, t, i) {
        this.low = 0 | e;
        this.high = 0 | t;
        this.unsigned = !!i;
      }
      function isLong(e) {
        return true === (e && e.__isLong__);
      }
      function ctz32(e) {
        var t = Math.clz32(e & -e);
        return e ? 31 - t : t;
      }
      Long.prototype.__isLong__;
      Object.defineProperty(Long.prototype, "__isLong__", {
        value: true
      });
      Long.isLong = isLong;
      var INT_CACHE = {};
      var UINT_CACHE = {};
      function fromInt(e, t) {
        var i;
        var n;
        var r;
        return t ? (r = 0 <= (e >>>= 0) && e < 256) && (n = UINT_CACHE[e]) ? n : (i = new Long(e, 0, true), r && (UINT_CACHE[e] = i), i) : (r = -128 <= (e |= 0) && e < 128) && (n = INT_CACHE[e]) ? n : (i = new Long(e, e < 0 ? -1 : 0, false), r && (INT_CACHE[e] = i), i);
      }
      function fromNumber(e, t) {
        if (isNaN(e)) {
          return t ? UZERO : ZERO;
        }
        if (t) {
          if (e < 0) {
            return UZERO;
          }
          if (e >= 18446744073709552000) {
            return MAX_UNSIGNED_VALUE;
          }
        } else {
          if (e <= -9223372036854776000) {
            return MIN_VALUE;
          }
          if (e + 1 >= 9223372036854776000) {
            return MAX_VALUE;
          }
        }
        return e < 0 ? fromNumber(-e, t).neg() : new Long(e % 4294967296 | 0, e / 4294967296 | 0, t);
      }
      function fromBits(e, t, i) {
        return new Long(e, t, i);
      }
      Long.fromInt = fromInt;
      Long.fromNumber = fromNumber;
      Long.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString(e, t, i) {
        if (0 === e.length) {
          throw Error("empty string");
        }
        if ("number" == typeof t) {
          i = t;
          t = false;
        } else {
          t = !!t;
        }
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) {
          return t ? UZERO : ZERO;
        }
        if ((i = i || 10) < 2 || 36 < i) {
          throw RangeError("radix");
        }
        var n;
        if ((n = e.indexOf("-")) > 0) {
          throw Error("interior hyphen");
        }
        if (0 === n) {
          return fromString(e.substring(1), t, i).neg();
        }
        var r = fromNumber(pow_dbl(i, 8));
        var o = ZERO;
        for (var s = 0; s < e.length; s += 8) {
          var a = Math.min(8, e.length - s);
          var c = parseInt(e.substring(s, s + a), i);
          if (a < 8) {
            var l = fromNumber(pow_dbl(i, a));
            o = o.mul(l).add(fromNumber(c));
          } else {
            o = (o = o.mul(r)).add(fromNumber(c));
          }
        }
        o.unsigned = t;
        return o;
      }
      function fromValue(e, t) {
        return "number" == typeof e ? fromNumber(e, t) : "string" == typeof e ? fromString(e, t) : new Long(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
      }
      Long.fromString = fromString;
      Long.fromValue = fromValue;
      var TWO_PWR_24 = fromInt(16777216);
      var ZERO = fromInt(0);
      Long.ZERO = ZERO;
      var UZERO = fromInt(0, true);
      Long.UZERO = UZERO;
      var ONE = fromInt(1);
      Long.ONE = ONE;
      var UONE = fromInt(1, true);
      Long.UONE = UONE;
      var NEG_ONE = fromInt(-1);
      Long.NEG_ONE = NEG_ONE;
      var MAX_VALUE = new Long(-1, 2147483647, false);
      Long.MAX_VALUE = MAX_VALUE;
      var MAX_UNSIGNED_VALUE = new Long(-1, -1, true);
      Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
      var MIN_VALUE = new Long(0, -2147483648, false);
      Long.MIN_VALUE = MIN_VALUE;
      var LongPrototype = Long.prototype;
      LongPrototype.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * 4294967296 + (this.low >>> 0) : this.high * 4294967296 + (this.low >>> 0);
      };
      LongPrototype.toString = function (e) {
        if ((e = e || 10) < 2 || 36 < e) {
          throw RangeError("radix");
        }
        if (this.isZero()) {
          return "0";
        }
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE)) {
            var t = fromNumber(e);
            var i = this.div(t);
            var n = i.mul(t).sub(this);
            return i.toString(e) + n.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        var r = fromNumber(pow_dbl(e, 6), this.unsigned);
        var o = this;
        for (var s = "";;) {
          var a = o.div(r);
          var c = (o.sub(a.mul(r)).toInt() >>> 0).toString(e);
          if ((o = a).isZero()) {
            return c + s;
          }
          for (; c.length < 6;) {
            c = "0" + c;
          }
          s = "" + c + s;
        }
      };
      LongPrototype.getHighBits = function () {
        return this.high;
      };
      LongPrototype.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      };
      LongPrototype.getLowBits = function () {
        return this.low;
      };
      LongPrototype.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      };
      LongPrototype.getNumBitsAbs = function () {
        if (this.isNegative()) {
          return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        }
        var e = 0 != this.high ? this.high : this.low;
        for (var t = 31; t > 0 && 0 == (e & 1 << t); t--) {
          ;
        }
        return 0 != this.high ? t + 33 : t + 1;
      };
      LongPrototype.isZero = function () {
        return 0 === this.high && 0 === this.low;
      };
      LongPrototype.eqz = LongPrototype.isZero;
      LongPrototype.isNegative = function () {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype.isPositive = function () {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype.isOdd = function () {
        return 1 == (1 & this.low);
      };
      LongPrototype.isEven = function () {
        return 0 == (1 & this.low);
      };
      LongPrototype.equals = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
      };
      LongPrototype.eq = LongPrototype.equals;
      LongPrototype.notEquals = function (e) {
        return !this.eq(e);
      };
      LongPrototype.neq = LongPrototype.notEquals;
      LongPrototype.ne = LongPrototype.notEquals;
      LongPrototype.lessThan = function (e) {
        return this.comp(e) < 0;
      };
      LongPrototype.lt = LongPrototype.lessThan;
      LongPrototype.lessThanOrEqual = function (e) {
        return this.comp(e) <= 0;
      };
      LongPrototype.lte = LongPrototype.lessThanOrEqual;
      LongPrototype.le = LongPrototype.lessThanOrEqual;
      LongPrototype.greaterThan = function (e) {
        return this.comp(e) > 0;
      };
      LongPrototype.gt = LongPrototype.greaterThan;
      LongPrototype.greaterThanOrEqual = function (e) {
        return this.comp(e) >= 0;
      };
      LongPrototype.gte = LongPrototype.greaterThanOrEqual;
      LongPrototype.ge = LongPrototype.greaterThanOrEqual;
      LongPrototype.compare = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        if (this.eq(e)) {
          return 0;
        }
        var t = this.isNegative();
        var i = e.isNegative();
        return t && !i ? -1 : !t && i ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
      };
      LongPrototype.comp = LongPrototype.compare;
      LongPrototype.negate = function () {
        return !this.unsigned && this.eq(MIN_VALUE) ? MIN_VALUE : this.not().add(ONE);
      };
      LongPrototype.neg = LongPrototype.negate;
      LongPrototype.add = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        var t = this.high >>> 16;
        var i = 65535 & this.high;
        var n = this.low >>> 16;
        var r = 65535 & this.low;
        var o = e.high >>> 16;
        var s = 65535 & e.high;
        var a = e.low >>> 16;
        var c = 0;
        var l = 0;
        var p = 0;
        var _ = 0;
        p += (_ += r + (65535 & e.low)) >>> 16;
        l += (p += n + a) >>> 16;
        c += (l += i + s) >>> 16;
        c += t + o;
        return new Long((p &= 65535) << 16 | (_ &= 65535), (c &= 65535) << 16 | (l &= 65535), this.unsigned);
      };
      LongPrototype.subtract = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return this.add(e.neg());
      };
      LongPrototype.sub = LongPrototype.subtract;
      LongPrototype.multiply = function (e) {
        if (this.isZero()) {
          return this;
        }
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        if (wasm) {
          return new Long(wasm.mul(this.low, this.high, e.low, e.high), wasm.get_high(), this.unsigned);
        }
        if (e.isZero()) {
          return this.unsigned ? UZERO : ZERO;
        }
        if (this.eq(MIN_VALUE)) {
          return e.isOdd() ? MIN_VALUE : ZERO;
        }
        if (e.eq(MIN_VALUE)) {
          return this.isOdd() ? MIN_VALUE : ZERO;
        }
        if (this.isNegative()) {
          return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        }
        if (e.isNegative()) {
          return this.mul(e.neg()).neg();
        }
        if (this.lt(TWO_PWR_24) && e.lt(TWO_PWR_24)) {
          return fromNumber(this.toNumber() * e.toNumber(), this.unsigned);
        }
        var t = this.high >>> 16;
        var i = 65535 & this.high;
        var n = this.low >>> 16;
        var r = 65535 & this.low;
        var o = e.high >>> 16;
        var s = 65535 & e.high;
        var a = e.low >>> 16;
        var c = 65535 & e.low;
        var l = 0;
        var p = 0;
        var _ = 0;
        var d = 0;
        _ += (d += r * c) >>> 16;
        p += (_ += n * c) >>> 16;
        _ &= 65535;
        p += (_ += r * a) >>> 16;
        l += (p += i * c) >>> 16;
        p &= 65535;
        l += (p += n * a) >>> 16;
        p &= 65535;
        l += (p += r * s) >>> 16;
        l += t * c + i * a + n * s + r * o;
        return new Long((_ &= 65535) << 16 | (d &= 65535), (l &= 65535) << 16 | (p &= 65535), this.unsigned);
      };
      LongPrototype.mul = LongPrototype.multiply;
      LongPrototype.divide = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        if (e.isZero()) {
          throw Error("division by zero");
        }
        var t;
        var i;
        var n;
        if (wasm) {
          return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? new Long((this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, e.low, e.high), wasm.get_high(), this.unsigned) : this;
        }
        if (this.isZero()) {
          return this.unsigned ? UZERO : ZERO;
        }
        if (this.unsigned) {
          if (!e.unsigned) {
            e = e.toUnsigned();
          }
          if (e.gt(this)) {
            return UZERO;
          }
          if (e.gt(this.shru(1))) {
            return UONE;
          }
          n = UZERO;
        } else {
          if (this.eq(MIN_VALUE)) {
            return e.eq(ONE) || e.eq(NEG_ONE) ? MIN_VALUE : e.eq(MIN_VALUE) ? ONE : (t = this.shr(1).div(e).shl(1)).eq(ZERO) ? e.isNegative() ? ONE : NEG_ONE : (i = this.sub(e.mul(t)), n = t.add(i.div(e)));
          }
          if (e.eq(MIN_VALUE)) {
            return this.unsigned ? UZERO : ZERO;
          }
          if (this.isNegative()) {
            return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
          }
          if (e.isNegative()) {
            return this.div(e.neg()).neg();
          }
          n = ZERO;
        }
        for (i = this; i.gte(e);) {
          t = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
          var r = Math.ceil(Math.log(t) / Math.LN2);
          var o = r <= 48 ? 1 : pow_dbl(2, r - 48);
          var s = fromNumber(t);
          for (var a = s.mul(e); a.isNegative() || a.gt(i);) {
            a = (s = fromNumber(t -= o, this.unsigned)).mul(e);
          }
          if (s.isZero()) {
            s = ONE;
          }
          n = n.add(s);
          i = i.sub(a);
        }
        return n;
      };
      LongPrototype.div = LongPrototype.divide;
      LongPrototype.modulo = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return wasm ? new Long((this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, e.low, e.high), wasm.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
      };
      LongPrototype.mod = LongPrototype.modulo;
      LongPrototype.rem = LongPrototype.modulo;
      LongPrototype.not = function () {
        return new Long(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype.countLeadingZeros = function () {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      };
      LongPrototype.clz = LongPrototype.countLeadingZeros;
      LongPrototype.countTrailingZeros = function () {
        return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
      };
      LongPrototype.ctz = LongPrototype.countTrailingZeros;
      LongPrototype.and = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return new Long(this.low & e.low, this.high & e.high, this.unsigned);
      };
      LongPrototype.or = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return new Long(this.low | e.low, this.high | e.high, this.unsigned);
      };
      LongPrototype.xor = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return new Long(this.low ^ e.low, this.high ^ e.high, this.unsigned);
      };
      LongPrototype.shiftLeft = function (e) {
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : e < 32 ? new Long(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : new Long(0, this.low << e - 32, this.unsigned);
      };
      LongPrototype.shl = LongPrototype.shiftLeft;
      LongPrototype.shiftRight = function (e) {
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : e < 32 ? new Long(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : new Long(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype.shr = LongPrototype.shiftRight;
      LongPrototype.shiftRightUnsigned = function (e) {
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : e < 32 ? new Long(this.low >>> e | this.high << 32 - e, this.high >>> e, this.unsigned) : new Long(32 === e ? this.high : this.high >>> e - 32, 0, this.unsigned);
      };
      LongPrototype.shru = LongPrototype.shiftRightUnsigned;
      LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
      LongPrototype.rotateLeft = function (e) {
        var t;
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : 32 === e ? new Long(this.high, this.low, this.unsigned) : e < 32 ? (t = 32 - e, new Long(this.low << e | this.high >>> t, this.high << e | this.low >>> t, this.unsigned)) : (t = 32 - (e -= 32), new Long(this.high << e | this.low >>> t, this.low << e | this.high >>> t, this.unsigned));
      };
      LongPrototype.rotl = LongPrototype.rotateLeft;
      LongPrototype.rotateRight = function (e) {
        var t;
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : 32 === e ? new Long(this.high, this.low, this.unsigned) : e < 32 ? (t = 32 - e, new Long(this.high << t | this.low >>> e, this.low << t | this.high >>> e, this.unsigned)) : (t = 32 - (e -= 32), new Long(this.low << t | this.high >>> e, this.high << t | this.low >>> e, this.unsigned));
      };
      LongPrototype.rotr = LongPrototype.rotateRight;
      LongPrototype.toSigned = function () {
        return this.unsigned ? new Long(this.low, this.high, false) : this;
      };
      LongPrototype.toUnsigned = function () {
        return this.unsigned ? this : new Long(this.low, this.high, true);
      };
      LongPrototype.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype.toBytesLE = function () {
        var e = this.high;
        var t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
      };
      LongPrototype.toBytesBE = function () {
        var e = this.high;
        var t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
      };
      Long.fromBytes = function (e, t, i) {
        return i ? Long.fromBytesLE(e, t) : Long.fromBytesBE(e, t);
      };
      Long.fromBytesLE = function (e, t) {
        return new Long(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
      };
      Long.fromBytesBE = function (e, t) {
        return new Long(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
      };
      var CjsLoader = function () {
        function e() {
          this._registry = {};
          this._moduleCache = {};
        }
        var t = e.prototype;
        t.define = function (e, t, i) {
          this._registry[e] = {
            factory: t,
            resolveMap: i
          };
        };
        t.require = function (e) {
          return this._require(e);
        };
        t.throwInvalidWrapper = function (e, t) {
          throw new Error("Module '" + e + "' imported from '" + t + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        t._require = function (e, t) {
          var i = this._moduleCache[e];
          if (i) {
            return i.exports;
          }
          var n = {
            id: e,
            exports: {}
          };
          this._moduleCache[e] = n;
          this._tryModuleLoad(n, e);
          return n.exports;
        };
        t._resolve = function (e, t) {
          return this._resolveFromInfos(e, t) || this._throwUnresolved(e, t);
        };
        t._resolveFromInfos = function (e, t) {
          var i;
          var n;
          return e in cjsInfos ? e : t && null != (i = null == (n = cjsInfos[t]) ? undefined : n.resolveCache[e]) ? i : undefined;
        };
        t._tryModuleLoad = function (e, t) {
          var i = true;
          try {
            this._load(e, t);
            i = false;
          } finally {
            if (i) {
              delete this._moduleCache[t];
            }
          }
        };
        t._load = function (e, t) {
          var i = this._loadWrapper(t);
          var n = i.factory;
          var r = i.resolveMap;
          var o = this._createRequire(e);
          var s = r ? this._createRequireWithResolveMap("function" == typeof r ? r() : r, o) : o;
          n(e.exports, s, e);
        };
        t._loadWrapper = function (e) {
          return e in this._registry ? this._registry[e] : this._loadHostProvidedModules(e);
        };
        t._loadHostProvidedModules = function (e) {
          return {
            factory: function (t, i, n) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + e + "'.");
              }
              try {
                n.exports = require(e);
              } catch (t) {
                throw new Error("Exception thrown when calling host defined require('" + e + "').", {
                  cause: t
                });
              }
            }
          };
        };
        t._createRequire = function (e) {
          var t = this;
          return function (i) {
            return t._require(i, e);
          };
        };
        t._createRequireWithResolveMap = function (e, t) {
          return function (i) {
            var n = e[i];
            if (n) {
              return t(n);
            }
            throw new Error("Unresolved specifier " + i);
          };
        };
        t._throwUnresolved = function (e, t) {
          throw new Error("Unable to resolve " + e + " from " + parent + ".");
        };
        return e;
      }();
      var loader = new CjsLoader();
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, i, n, r) {
        i.exports = function (e, t) {
          var i = new Array(arguments.length - 1);
          var n = 0;
          var r = 2;
          var o = true;
          for (; r < arguments.length;) {
            i[n++] = arguments[r++];
          }
          return new Promise(function (r, s) {
            i[n] = function (e) {
              if (o) {
                o = false;
                if (e) {
                  s(e);
                } else {
                  var t = new Array(arguments.length - 1);
                  for (var i = 0; i < t.length;) {
                    t[i++] = arguments[i];
                  }
                  r.apply(null, t);
                }
              }
            };
            try {
              e.apply(t || null, i);
            } catch (e) {
              if (o) {
                o = false;
                s(e);
              }
            }
          });
        };
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, i, n, r) {
        e.length = function (e) {
          var t = e.length;
          if (!t) {
            return 0;
          }
          for (var i = 0; --t % 4 > 1 && "=" === e.charAt(t);) {
            ++i;
          }
          return Math.ceil(3 * e.length) / 4 - i;
        };
        var s = new Array(64);
        var a = new Array(123);
        for (var c = 0; c < 64;) {
          a[s[c] = c < 26 ? c + 65 : c < 52 ? c + 71 : c < 62 ? c - 4 : c - 59 | 43] = c++;
        }
        e.encode = function (e, t, i) {
          var n;
          var r = null;
          var o = [];
          var a = 0;
          for (var c = 0; t < i;) {
            var l = e[t++];
            switch (c) {
              case 0:
                o[a++] = s[l >> 2];
                n = (3 & l) << 4;
                c = 1;
                break;
              case 1:
                o[a++] = s[n | l >> 4];
                n = (15 & l) << 2;
                c = 2;
                break;
              case 2:
                o[a++] = s[n | l >> 6];
                o[a++] = s[63 & l];
                c = 0;
            }
            if (a > 8191) {
              (r || (r = [])).push(String.fromCharCode.apply(String, o));
              a = 0;
            }
          }
          if (c) {
            o[a++] = s[n];
            o[a++] = 61;
            if (1 === c) {
              o[a++] = 61;
            }
          }
          return r ? (a && r.push(String.fromCharCode.apply(String, o.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, o.slice(0, a));
        };
        e.decode = function (e, t, i) {
          var n;
          var r = i;
          var o = 0;
          for (var s = 0; s < e.length;) {
            var c = e.charCodeAt(s++);
            if (61 === c && o > 1) {
              break;
            }
            if (undefined === (c = a[c])) {
              throw Error("invalid encoding");
            }
            switch (o) {
              case 0:
                n = c;
                o = 1;
                break;
              case 1:
                t[i++] = n << 2 | (48 & c) >> 4;
                n = c;
                o = 2;
                break;
              case 2:
                t[i++] = (15 & n) << 4 | (60 & c) >> 2;
                n = c;
                o = 3;
                break;
              case 3:
                t[i++] = (3 & n) << 6 | c;
                o = 0;
            }
          }
          if (1 === o) {
            throw Error("invalid encoding");
          }
          return i - r;
        };
        e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        };
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, i, n, r) {
        function o() {
          this._listeners = {};
        }
        i.exports = o;
        o.prototype.on = function (e, t, i) {
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: i || this
          });
          return this;
        };
        o.prototype.off = function (e, t) {
          if (undefined === e) {
            this._listeners = {};
          } else if (undefined === t) {
            this._listeners[e] = [];
          } else {
            var i = this._listeners[e];
            for (var n = 0; n < i.length;) {
              if (i[n].fn === t) {
                i.splice(n, 1);
              } else {
                ++n;
              }
            }
          }
          return this;
        };
        o.prototype.emit = function (e) {
          var t = this._listeners[e];
          if (t) {
            var i = [];
            for (var n = 1; n < arguments.length;) {
              i.push(arguments[n++]);
            }
            for (n = 0; n < t.length;) {
              t[n].fn.apply(t[n++].ctx, i);
            }
          }
          return this;
        };
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, i, n, r) {
        function o(e) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var t = new Float32Array([-0]);
              var i = new Uint8Array(t.buffer);
              var n = 128 === i[3];
              function r(e, n, r) {
                t[0] = e;
                n[r] = i[0];
                n[r + 1] = i[1];
                n[r + 2] = i[2];
                n[r + 3] = i[3];
              }
              function o(e, n, r) {
                t[0] = e;
                n[r] = i[3];
                n[r + 1] = i[2];
                n[r + 2] = i[1];
                n[r + 3] = i[0];
              }
              function s(e, n) {
                i[0] = e[n];
                i[1] = e[n + 1];
                i[2] = e[n + 2];
                i[3] = e[n + 3];
                return t[0];
              }
              function a(e, n) {
                i[3] = e[n];
                i[2] = e[n + 1];
                i[1] = e[n + 2];
                i[0] = e[n + 3];
                return t[0];
              }
              e.writeFloatLE = n ? r : o;
              e.writeFloatBE = n ? o : r;
              e.readFloatLE = n ? s : a;
              e.readFloatBE = n ? a : s;
            })();
          } else {
            (function () {
              function t(e, t, i, n) {
                var r = t < 0 ? 1 : 0;
                if (r) {
                  t = -t;
                }
                if (0 === t) {
                  e(1 / t > 0 ? 0 : 2147483648, i, n);
                } else if (isNaN(t)) {
                  e(2143289344, i, n);
                } else if (t > 34028234663852886e22) {
                  e((r << 31 | 2139095040) >>> 0, i, n);
                } else if (t < 11754943508222875e-54) {
                  e((r << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, i, n);
                } else {
                  var o = Math.floor(Math.log(t) / Math.LN2);
                  e((r << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, i, n);
                }
              }
              function i(e, t, i) {
                var n = e(t, i);
                var r = 2 * (n >> 31) + 1;
                var o = n >>> 23 & 255;
                var s = 8388607 & n;
                return 255 === o ? s ? NaN : r * Infinity : 0 === o ? 1401298464324817e-60 * r * s : r * Math.pow(2, o - 150) * (s + 8388608);
              }
              e.writeFloatLE = t.bind(null, s);
              e.writeFloatBE = t.bind(null, a);
              e.readFloatLE = i.bind(null, c);
              e.readFloatBE = i.bind(null, l);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var t = new Float64Array([-0]);
              var i = new Uint8Array(t.buffer);
              var n = 128 === i[7];
              function r(e, n, r) {
                t[0] = e;
                n[r] = i[0];
                n[r + 1] = i[1];
                n[r + 2] = i[2];
                n[r + 3] = i[3];
                n[r + 4] = i[4];
                n[r + 5] = i[5];
                n[r + 6] = i[6];
                n[r + 7] = i[7];
              }
              function o(e, n, r) {
                t[0] = e;
                n[r] = i[7];
                n[r + 1] = i[6];
                n[r + 2] = i[5];
                n[r + 3] = i[4];
                n[r + 4] = i[3];
                n[r + 5] = i[2];
                n[r + 6] = i[1];
                n[r + 7] = i[0];
              }
              function s(e, n) {
                i[0] = e[n];
                i[1] = e[n + 1];
                i[2] = e[n + 2];
                i[3] = e[n + 3];
                i[4] = e[n + 4];
                i[5] = e[n + 5];
                i[6] = e[n + 6];
                i[7] = e[n + 7];
                return t[0];
              }
              function a(e, n) {
                i[7] = e[n];
                i[6] = e[n + 1];
                i[5] = e[n + 2];
                i[4] = e[n + 3];
                i[3] = e[n + 4];
                i[2] = e[n + 5];
                i[1] = e[n + 6];
                i[0] = e[n + 7];
                return t[0];
              }
              e.writeDoubleLE = n ? r : o;
              e.writeDoubleBE = n ? o : r;
              e.readDoubleLE = n ? s : a;
              e.readDoubleBE = n ? a : s;
            })();
          } else {
            (function () {
              function t(e, t, i, n, r, o) {
                var s = n < 0 ? 1 : 0;
                if (s) {
                  n = -n;
                }
                if (0 === n) {
                  e(0, r, o + t);
                  e(1 / n > 0 ? 0 : 2147483648, r, o + i);
                } else if (isNaN(n)) {
                  e(0, r, o + t);
                  e(2146959360, r, o + i);
                } else if (n > 17976931348623157e292) {
                  e(0, r, o + t);
                  e((s << 31 | 2146435072) >>> 0, r, o + i);
                } else {
                  var a;
                  if (n < 22250738585072014e-324) {
                    e((a = n / 5e-324) >>> 0, r, o + t);
                    e((s << 31 | a / 4294967296) >>> 0, r, o + i);
                  } else {
                    var c = Math.floor(Math.log(n) / Math.LN2);
                    if (1024 === c) {
                      c = 1023;
                    }
                    e(4503599627370496 * (a = n * Math.pow(2, -c)) >>> 0, r, o + t);
                    e((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, r, o + i);
                  }
                }
              }
              function i(e, t, i, n, r) {
                var o = e(n, r + t);
                var s = e(n, r + i);
                var a = 2 * (s >> 31) + 1;
                var c = s >>> 20 & 2047;
                var l = 4294967296 * (1048575 & s) + o;
                return 2047 === c ? l ? NaN : a * Infinity : 0 === c ? 5e-324 * a * l : a * Math.pow(2, c - 1075) * (l + 4503599627370496);
              }
              e.writeDoubleLE = t.bind(null, s, 0, 4);
              e.writeDoubleBE = t.bind(null, a, 4, 0);
              e.readDoubleLE = i.bind(null, c, 0, 4);
              e.readDoubleBE = i.bind(null, l, 4, 0);
            })();
          }
          return e;
        }
        function s(e, t, i) {
          t[i] = 255 & e;
          t[i + 1] = e >>> 8 & 255;
          t[i + 2] = e >>> 16 & 255;
          t[i + 3] = e >>> 24;
        }
        function a(e, t, i) {
          t[i] = e >>> 24;
          t[i + 1] = e >>> 16 & 255;
          t[i + 2] = e >>> 8 & 255;
          t[i + 3] = 255 & e;
        }
        function c(e, t) {
          return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
        }
        function l(e, t) {
          return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
        }
        i.exports = o(o);
        i.exports;
        i.exports.writeFloatLE;
        i.exports.writeFloatBE;
        i.exports.readFloatLE;
        i.exports.readFloatBE;
        i.exports.writeDoubleLE;
        i.exports.writeDoubleBE;
        i.exports.readDoubleLE;
        i.exports.readDoubleBE;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) {
              return mod;
            }
          } catch (e) {}
          return null;
        }
        module.exports = inquire;
        module.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, i, n, r) {
        e.length = function (e) {
          var t = 0;
          var i = 0;
          for (var n = 0; n < e.length; ++n) {
            if ((i = e.charCodeAt(n)) < 128) {
              t += 1;
            } else if (i < 2048) {
              t += 2;
            } else if (55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(n + 1))) {
              ++n;
              t += 4;
            } else {
              t += 3;
            }
          }
          return t;
        };
        e.read = function (e, t, i) {
          if (i - t < 1) {
            return "";
          }
          var n;
          var r = null;
          var o = [];
          for (var s = 0; t < i;) {
            if ((n = e[t++]) < 128) {
              o[s++] = n;
            } else if (n > 191 && n < 224) {
              o[s++] = (31 & n) << 6 | 63 & e[t++];
            } else if (n > 239 && n < 365) {
              n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
              o[s++] = 55296 + (n >> 10);
              o[s++] = 56320 + (1023 & n);
            } else {
              o[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
            }
            if (s > 8191) {
              (r || (r = [])).push(String.fromCharCode.apply(String, o));
              s = 0;
            }
          }
          return r ? (s && r.push(String.fromCharCode.apply(String, o.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
        };
        e.write = function (e, t, i) {
          var n;
          var r;
          var o = i;
          for (var s = 0; s < e.length; ++s) {
            if ((n = e.charCodeAt(s)) < 128) {
              t[i++] = n;
            } else if (n < 2048) {
              t[i++] = n >> 6 | 192;
              t[i++] = 63 & n | 128;
            } else if (55296 == (64512 & n) && 56320 == (64512 & (r = e.charCodeAt(s + 1)))) {
              n = 65536 + ((1023 & n) << 10) + (1023 & r);
              ++s;
              t[i++] = n >> 18 | 240;
              t[i++] = n >> 12 & 63 | 128;
              t[i++] = n >> 6 & 63 | 128;
              t[i++] = 63 & n | 128;
            } else {
              t[i++] = n >> 12 | 224;
              t[i++] = n >> 6 & 63 | 128;
              t[i++] = 63 & n | 128;
            }
          }
          return i - o;
        };
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, i, n, r) {
        i.exports = function (e, t, i) {
          var n = i || 8192;
          var r = n >>> 1;
          var o = null;
          var s = n;
          return function (i) {
            if (i < 1 || i > r) {
              return e(i);
            }
            if (s + i > n) {
              o = e(n);
              s = 0;
            }
            var a = t.call(o, s, s += i);
            if (7 & s) {
              s = 1 + (7 | s);
            }
            return a;
          };
        };
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, i, n, r) {
        i.exports = s;
        var o = t("../util/minimal");
        function s(e, t) {
          this.lo = e >>> 0;
          this.hi = t >>> 0;
        }
        var a = s.zero = new s(0, 0);
        a.toNumber = function () {
          return 0;
        };
        a.zzEncode = a.zzDecode = function () {
          return this;
        };
        a.length = function () {
          return 1;
        };
        var c = s.zeroHash = "\0\0\0\0\0\0\0\0";
        s.fromNumber = function (e) {
          if (0 === e) {
            return a;
          }
          var t = e < 0;
          if (t) {
            e = -e;
          }
          var i = e >>> 0;
          var n = (e - i) / 4294967296 >>> 0;
          if (t) {
            n = ~n >>> 0;
            i = ~i >>> 0;
            if (++i > 4294967295) {
              i = 0;
              if (++n > 4294967295) {
                n = 0;
              }
            }
          }
          return new s(i, n);
        };
        s.from = function (e) {
          if ("number" == typeof e) {
            return s.fromNumber(e);
          }
          if (o.isString(e)) {
            if (!o.Long) {
              return s.fromNumber(parseInt(e, 10));
            }
            e = o.Long.fromString(e);
          }
          return e.low || e.high ? new s(e.low >>> 0, e.high >>> 0) : a;
        };
        s.prototype.toNumber = function (e) {
          if (!e && this.hi >>> 31) {
            var t = 1 + ~this.lo >>> 0;
            var i = ~this.hi >>> 0;
            if (!t) {
              i = i + 1 >>> 0;
            }
            return -(t + 4294967296 * i);
          }
          return this.lo + 4294967296 * this.hi;
        };
        s.prototype.toLong = function (e) {
          return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(e)
          };
        };
        var l = String.prototype.charCodeAt;
        s.fromHash = function (e) {
          return e === c ? a : new s((l.call(e, 0) | l.call(e, 1) << 8 | l.call(e, 2) << 16 | l.call(e, 3) << 24) >>> 0, (l.call(e, 4) | l.call(e, 5) << 8 | l.call(e, 6) << 16 | l.call(e, 7) << 24) >>> 0);
        };
        s.prototype.toHash = function () {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        };
        s.prototype.zzEncode = function () {
          var e = this.hi >> 31;
          this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
          this.lo = (this.lo << 1 ^ e) >>> 0;
          return this;
        };
        s.prototype.zzDecode = function () {
          var e = -(1 & this.lo);
          this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
          this.hi = (this.hi >>> 1 ^ e) >>> 0;
          return this;
        };
        s.prototype.length = function () {
          var e = this.lo;
          var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
          var i = this.hi >>> 24;
          return 0 === i ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : i < 128 ? 9 : 10;
        };
        i.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, i, n, r) {
        function s(e, t, i) {
          var n = Object.keys(t);
          for (var r = 0; r < n.length; ++r) {
            if (!(undefined !== e[n[r]] && i)) {
              e[n[r]] = t[n[r]];
            }
          }
          return e;
        }
        function a(e) {
          function t(e, i) {
            if (!(this instanceof t)) {
              return new t(e, i);
            }
            Object.defineProperty(this, "message", {
              get: function () {
                return e;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, t);
            } else {
              Object.defineProperty(this, "stack", {
                value: new Error().stack || ""
              });
            }
            if (i) {
              s(this, i);
            }
          }
          t.prototype = Object.create(Error.prototype, {
            constructor: {
              value: t,
              writable: true,
              enumerable: false,
              configurable: true
            },
            name: {
              get: function () {
                return e;
              },
              set: undefined,
              enumerable: false,
              configurable: true
            },
            toString: {
              value: function () {
                return this.name + ": " + this.message;
              },
              writable: true,
              enumerable: false,
              configurable: true
            }
          });
          return t;
        }
        e.asPromise = t("@protobufjs/aspromise");
        e.base64 = t("@protobufjs/base64");
        e.EventEmitter = t("@protobufjs/eventemitter");
        e.float = t("@protobufjs/float");
        e.inquire = t("@protobufjs/inquire");
        e.utf8 = t("@protobufjs/utf8");
        e.pool = t("@protobufjs/pool");
        e.LongBits = t("./longbits");
        e.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        e.global = e.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        e.emptyArray = Object.freeze ? Object.freeze([]) : [];
        e.emptyObject = Object.freeze ? Object.freeze({}) : {};
        e.isInteger = Number.isInteger || function (e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        };
        e.isString = function (e) {
          return "string" == typeof e || e instanceof String;
        };
        e.isObject = function (e) {
          return e && "object" == typeof e;
        };
        e.isset = e.isSet = function (e, t) {
          var i = e[t];
          return !(null == i || !e.hasOwnProperty(t)) && ("object" != typeof i || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0);
        };
        e.Buffer = function () {
          try {
            var e = e.inquire("buffer").Buffer;
            return e.prototype.utf8Write ? e : null;
          } catch (e) {
            return null;
          }
        }();
        e._Buffer_from = null;
        e._Buffer_allocUnsafe = null;
        e.newBuffer = function (e) {
          return "number" == typeof e ? e.Buffer ? e._Buffer_allocUnsafe(e) : new e.Array(e) : e.Buffer ? e._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
        };
        e.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        e.Long = e.global.dcodeIO && e.global.dcodeIO.Long || e.global.Long || e.inquire("long");
        e.key2Re = /^true|false|0|1$/;
        e.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        e.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        e.longToHash = function (e) {
          return e ? e.LongBits.from(e).toHash() : e.LongBits.zeroHash;
        };
        e.longFromHash = function (e, t) {
          var i = e.LongBits.fromHash(e);
          return e.Long ? e.Long.fromBits(i.lo, i.hi, t) : i.toNumber(Boolean(t));
        };
        e.merge = s;
        e.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        };
        e.newError = a;
        e.ProtocolError = a("ProtocolError");
        e.oneOfGetter = function (e) {
          var t = {};
          for (var i = 0; i < e.length; ++i) {
            t[e[i]] = 1;
          }
          return function () {
            var e = Object.keys(this);
            for (var i = e.length - 1; i > -1; --i) {
              if (1 === t[e[i]] && undefined !== this[e[i]] && null !== this[e[i]]) {
                return e[i];
              }
            }
          };
        };
        e.oneOfSetter = function (e) {
          return function (t) {
            for (var i = 0; i < e.length; ++i) {
              if (e[i] !== t) {
                delete this[e[i]];
              }
            }
          };
        };
        e.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: true
        };
        e._configure = function () {
          var e = e.Buffer;
          if (e) {
            e._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, i) {
              return new e(t, i);
            };
            e._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
              return new e(t);
            };
          } else {
            e._Buffer_from = e._Buffer_allocUnsafe = null;
          }
        };
        i.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, i, n, r) {
        i.exports = u;
        var o;
        var s = t("./util/minimal");
        var a = s.LongBits;
        var c = s.base64;
        var l = s.utf8;
        function p(e, t, i) {
          this.fn = e;
          this.len = t;
          this.next = undefined;
          this.val = i;
        }
        function _() {}
        function d(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function u() {
          this.len = 0;
          this.head = new p(_, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var h = function () {
          return s.Buffer ? function () {
            return (u.create = function () {
              return new o();
            })();
          } : function () {
            return new u();
          };
        };
        function m(e, t, i) {
          t[i] = 255 & e;
        }
        function f(e, t) {
          this.len = e;
          this.next = undefined;
          this.val = t;
        }
        function y(e, t, i) {
          for (; e.hi;) {
            t[i++] = 127 & e.lo | 128;
            e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
            e.hi >>>= 7;
          }
          for (; e.lo > 127;) {
            t[i++] = 127 & e.lo | 128;
            e.lo = e.lo >>> 7;
          }
          t[i++] = e.lo;
        }
        function g(e, t, i) {
          t[i] = 255 & e;
          t[i + 1] = e >>> 8 & 255;
          t[i + 2] = e >>> 16 & 255;
          t[i + 3] = e >>> 24;
        }
        u.create = h();
        u.alloc = function (e) {
          return new s.Array(e);
        };
        if (s.Array !== Array) {
          u.alloc = s.pool(u.alloc, s.Array.prototype.subarray);
        }
        u.prototype._push = function (e, t, i) {
          this.tail = this.tail.next = new p(e, t, i);
          this.len += t;
          return this;
        };
        f.prototype = Object.create(p.prototype);
        f.prototype.fn = function (e, t, i) {
          for (; e > 127;) {
            t[i++] = 127 & e | 128;
            e >>>= 7;
          }
          t[i] = e;
        };
        u.prototype.uint32 = function (e) {
          this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
          return this;
        };
        u.prototype.int32 = function (e) {
          return e < 0 ? this._push(y, 10, a.fromNumber(e)) : this.uint32(e);
        };
        u.prototype.sint32 = function (e) {
          return this.uint32((e << 1 ^ e >> 31) >>> 0);
        };
        u.prototype.uint64 = function (e) {
          var t = a.from(e);
          return this._push(y, t.length(), t);
        };
        u.prototype.int64 = u.prototype.uint64;
        u.prototype.sint64 = function (e) {
          var t = a.from(e).zzEncode();
          return this._push(y, t.length(), t);
        };
        u.prototype.bool = function (e) {
          return this._push(m, 1, e ? 1 : 0);
        };
        u.prototype.fixed32 = function (e) {
          return this._push(g, 4, e >>> 0);
        };
        u.prototype.sfixed32 = u.prototype.fixed32;
        u.prototype.fixed64 = function (e) {
          var t = a.from(e);
          return this._push(g, 4, t.lo)._push(g, 4, t.hi);
        };
        u.prototype.sfixed64 = u.prototype.fixed64;
        u.prototype.float = function (e) {
          return this._push(s.float.writeFloatLE, 4, e);
        };
        u.prototype.double = function (e) {
          return this._push(s.float.writeDoubleLE, 8, e);
        };
        var $ = s.Array.prototype.set ? function (e, t, i) {
          t.set(e, i);
        } : function (e, t, i) {
          for (var n = 0; n < e.length; ++n) {
            t[i + n] = e[n];
          }
        };
        u.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) {
            return this._push(m, 1, 0);
          }
          if (s.isString(e)) {
            var i = u.alloc(t = c.length(e));
            c.decode(e, i, 0);
            e = i;
          }
          return this.uint32(t)._push($, t, e);
        };
        u.prototype.string = function (e) {
          var t = l.length(e);
          return t ? this.uint32(t)._push(l.write, t, e) : this._push(m, 1, 0);
        };
        u.prototype.fork = function () {
          this.states = new d(this);
          this.head = this.tail = new p(_, 0, 0);
          this.len = 0;
          return this;
        };
        u.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new p(_, 0, 0);
            this.len = 0;
          }
          return this;
        };
        u.prototype.ldelim = function () {
          var e = this.head;
          var t = this.tail;
          var i = this.len;
          this.reset().uint32(i);
          if (i) {
            this.tail.next = e.next;
            this.tail = t;
            this.len += i;
          }
          return this;
        };
        u.prototype.finish = function () {
          var e = this.head.next;
          var t = this.constructor.alloc(this.len);
          for (var i = 0; e;) {
            e.fn(e.val, t, i);
            i += e.len;
            e = e.next;
          }
          return t;
        };
        u._configure = function (e) {
          o = e;
          u.create = h();
          o._configure();
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("./writer");
        (a.prototype = Object.create(o.prototype)).constructor = a;
        var s = t("./util/minimal");
        function a() {
          o.call(this);
        }
        function c(e, t, i) {
          if (e.length < 40) {
            s.utf8.write(e, t, i);
          } else if (t.utf8Write) {
            t.utf8Write(e, i);
          } else {
            t.write(e, i);
          }
        }
        a._configure = function () {
          a.alloc = s._Buffer_allocUnsafe;
          a.writeBytesBuffer = s.Buffer && s.Buffer.prototype instanceof Uint8Array && "set" === s.Buffer.prototype.set.name ? function (e, t, i) {
            t.set(e, i);
          } : function (e, t, i) {
            if (e.copy) {
              e.copy(t, i, 0, e.length);
            } else {
              for (var n = 0; n < e.length;) {
                t[i++] = e[n++];
              }
            }
          };
        };
        a.prototype.bytes = function (e) {
          if (s.isString(e)) {
            e = s._Buffer_from(e, "base64");
          }
          var t = e.length >>> 0;
          this.uint32(t);
          if (t) {
            this._push(a.writeBytesBuffer, t, e);
          }
          return this;
        };
        a.prototype.string = function (e) {
          var t = s.Buffer.byteLength(e);
          this.uint32(t);
          if (t) {
            this._push(c, t, e);
          }
          return this;
        };
        a._configure();
        i.exports;
      }, function () {
        return {
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, i, n, r) {
        i.exports = p;
        var o;
        var s = t("./util/minimal");
        var a = s.LongBits;
        var c = s.utf8;
        function p(e) {
          this.buf = e;
          this.pos = 0;
          this.len = e.length;
        }
        var _;
        var d = "undefined" != typeof Uint8Array ? function (e) {
          if (e instanceof Uint8Array || Array.isArray(e)) {
            return new p(e);
          }
          throw Error("illegal buffer");
        } : function (e) {
          if (Array.isArray(e)) {
            return new p(e);
          }
          throw Error("illegal buffer");
        };
        var u = function () {
          return s.Buffer ? function (e) {
            return (p.create = function (e) {
              return s.Buffer.isBuffer(e) ? new o(e) : d(e);
            })(e);
          } : d;
        };
        function h() {
          var e = new a(0, 0);
          var t = 0;
          if (!(this.len - this.pos > 4)) {
            for (; t < 3; ++t) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 1) + " > " + this.len);
              }
              e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
              if (this.buf[this.pos++] < 128) {
                return e;
              }
            }
            e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0;
            return e;
          }
          for (; t < 4; ++t) {
            e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
            if (this.buf[this.pos++] < 128) {
              return e;
            }
          }
          e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
          e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return e;
          }
          t = 0;
          if (this.len - this.pos > 4) {
            for (; t < 5; ++t) {
              e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
              if (this.buf[this.pos++] < 128) {
                return e;
              }
            }
          } else {
            for (; t < 5; ++t) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 1) + " > " + this.len);
              }
              e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
              if (this.buf[this.pos++] < 128) {
                return e;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function f() {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
          }
          return new a((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
        }
        p.create = u();
        p.prototype._slice = s.Array.prototype.subarray || s.Array.prototype.slice;
        _ = 4294967295;
        p.prototype.uint32 = function () {
          _ = (127 & this.buf[this.pos]) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return _;
          }
          _ = (_ | (127 & this.buf[this.pos]) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return _;
          }
          _ = (_ | (127 & this.buf[this.pos]) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return _;
          }
          _ = (_ | (127 & this.buf[this.pos]) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return _;
          }
          _ = (_ | (15 & this.buf[this.pos]) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return _;
          }
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (10 || 1) + " > " + this.len);
          }
          return _;
        };
        p.prototype.int32 = function () {
          return 0 | this.uint32();
        };
        p.prototype.sint32 = function () {
          var e = this.uint32();
          return e >>> 1 ^ -(1 & e) | 0;
        };
        p.prototype.bool = function () {
          return 0 !== this.uint32();
        };
        p.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0;
        };
        p.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          return 0 | (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0;
        };
        p.prototype.float = function () {
          if (this.pos + 4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          var e = s.float.readFloatLE(this.buf, this.pos);
          this.pos += 4;
          return e;
        };
        p.prototype.double = function () {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          var e = s.float.readDoubleLE(this.buf, this.pos);
          this.pos += 8;
          return e;
        };
        p.prototype.bytes = function () {
          var e = this.uint32();
          var t = this.pos;
          var i = this.pos + e;
          if (i > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
          }
          this.pos += e;
          if (Array.isArray(this.buf)) {
            return this.buf.slice(t, i);
          }
          if (t === i) {
            var n = s.Buffer;
            return n ? n.alloc(0) : new this.buf.constructor(0);
          }
          return this._slice.call(this.buf, t, i);
        };
        p.prototype.string = function () {
          var e = this.bytes();
          return c.read(e, 0, e.length);
        };
        p.prototype.skip = function (e) {
          if ("number" == typeof e) {
            if (this.pos + e > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
            }
            this.pos += e;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 1) + " > " + this.len);
              }
            } while (128 & this.buf[this.pos++]);
          }
          return this;
        };
        p.prototype.skipType = function (e) {
          switch (e) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 != (e = 7 & this.uint32());) {
                this.skipType(e);
              }
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + e + " at offset " + this.pos);
          }
          return this;
        };
        p._configure = function (e) {
          o = e;
          p.create = u();
          o._configure();
          var t = s.Long ? "toLong" : "toNumber";
          s.merge(p.prototype, {
            int64: function () {
              return h.call(this)[t](false);
            },
            uint64: function () {
              return h.call(this)[t](true);
            },
            sint64: function () {
              return h.call(this).zzDecode()[t](false);
            },
            fixed64: function () {
              return f.call(this)[t](true);
            },
            sfixed64: function () {
              return f.call(this)[t](false);
            }
          });
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("./reader");
        (a.prototype = Object.create(o.prototype)).constructor = a;
        var s = t("./util/minimal");
        function a(e) {
          o.call(this, e);
        }
        a._configure = function () {
          if (s.Buffer) {
            a.prototype._slice = s.Buffer.prototype.slice;
          }
        };
        a.prototype.string = function () {
          var e = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
        };
        a._configure();
        i.exports;
      }, function () {
        return {
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, i, n, r) {
        i.exports = s;
        var o = t("../util/minimal");
        function s(e, t, i) {
          if ("function" != typeof e) {
            throw TypeError("rpcImpl must be a function");
          }
          o.EventEmitter.call(this);
          this.rpcImpl = e;
          this.requestDelimited = Boolean(t);
          this.responseDelimited = Boolean(i);
        }
        (s.prototype = Object.create(o.EventEmitter.prototype)).constructor = s;
        s.prototype.rpcCall = function e(t, i, n, r, s) {
          if (!r) {
            throw TypeError("request must be specified");
          }
          var a = this;
          if (!s) {
            return o.asPromise(e, a, t, i, n, r);
          }
          if (a.rpcImpl) {
            try {
              return a.rpcImpl(t, i[a.requestDelimited ? "encodeDelimited" : "encode"](r).finish(), function (e, i) {
                if (e) {
                  a.emit("error", e, t);
                  return s(e);
                }
                if (null !== i) {
                  if (!(i instanceof n)) {
                    try {
                      i = n[a.responseDelimited ? "decodeDelimited" : "decode"](i);
                    } catch (e) {
                      a.emit("error", e, t);
                      return s(e);
                    }
                  }
                  a.emit("data", i, t);
                  return s(null, i);
                }
                a.end(true);
              });
            } catch (e) {
              a.emit("error", e, t);
              return void setTimeout(function () {
                s(e);
              }, 0);
            }
          } else {
            setTimeout(function () {
              s(Error("already ended"));
            }, 0);
          }
        };
        s.prototype.end = function (e) {
          if (this.rpcImpl) {
            if (!e) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        i.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, i, n, r) {
        e.Service = t("./rpc/service");
        i.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, i, n, r) {
        i.exports = {};
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, i, n, r) {
        function s() {
          e.util._configure();
          e.Writer._configure(e.BufferWriter);
          e.Reader._configure(e.BufferReader);
        }
        e.build = "minimal";
        e.Writer = t("./writer");
        e.BufferWriter = t("./writer_buffer");
        e.Reader = t("./reader");
        e.BufferReader = t("./reader_buffer");
        e.util = t("./util/minimal");
        e.rpc = t("./rpc");
        e.roots = t("./roots");
        e.configure = s;
        s();
        i.exports;
      }, function () {
        return {
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, i, n, r) {
        function o(e, t) {
          if ("string" == typeof e) {
            t = e;
            e = undefined;
          }
          var i = [];
          function n(e) {
            if ("string" != typeof e) {
              var t = "function " + (undefined || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
              if (o.verbose) {
                console.log("codegen: " + t);
              }
              t = "return " + t;
              if (e) {
                var s = Object.keys(e);
                var a = new Array(s.length + 1);
                var c = new Array(s.length);
                for (var l = 0; l < s.length;) {
                  a[l] = s[l];
                  c[l] = e[s[l++]];
                }
                a[l] = t;
                return Function.apply(null, a).apply(null, c);
              }
              return Function(t)();
            }
            var p = new Array(arguments.length - 1);
            for (var _ = 0; _ < p.length;) {
              p[_] = arguments[++_];
            }
            _ = 0;
            e = e.replace(/%([%dfijs])/g, function (e, t) {
              var i = p[_++];
              switch (t) {
                case "d":
                case "f":
                  return String(Number(i));
                case "i":
                  return String(Math.floor(i));
                case "j":
                  return JSON.stringify(i);
                case "s":
                  return String(i);
              }
              return "%";
            });
            if (_ !== p.length) {
              throw Error("parameter count mismatch");
            }
            i.push(e);
            return n;
          }
          function r(n) {
            return "function " + (n || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
          }
          n.toString = r;
          return n;
        }
        i.exports = o;
        o.verbose = false;
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("@protobufjs/aspromise");
        var s = t("@protobufjs/inquire")("fs");
        function a(e, t, i) {
          if ("function" == typeof t) {
            i = t;
            t = {};
          } else if (!t) {
            t = {};
          }
          return i ? !t.xhr && s && s.readFile ? s.readFile(e, function (n, r) {
            return n && "undefined" != typeof XMLHttpRequest ? a.xhr(e, t, i) : n ? i(n) : i(null, t.binary ? r : r.toString("utf8"));
          }) : a.xhr(e, t, i) : o(a, this, e, t);
        }
        a.xhr = function (e, t, i) {
          var n = new XMLHttpRequest();
          n.onreadystatechange = function () {
            if (4 === n.readyState) {
              if (0 !== n.status && 200 !== n.status) {
                return i(Error("status " + n.status));
              }
              if (t.binary) {
                var e = n.response;
                if (!e) {
                  e = [];
                  for (var r = 0; r < n.responseText.length; ++r) {
                    e.push(255 & n.responseText.charCodeAt(r));
                  }
                }
                return i(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
              }
              return i(null, n.responseText);
            }
          };
          if (t.binary) {
            if ("overrideMimeType" in n) {
              n.overrideMimeType("text/plain; charset=x-user-defined");
            }
            n.responseType = "arraybuffer";
          }
          n.open("GET", e);
          n.send();
        };
        i.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, i, n, r) {
        var s = e.isAbsolute = function (e) {
          return /^(?:\/|\w+:)/.test(e);
        };
        var a = e.normalize = function (e) {
          var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
          var i = s(e);
          var n = "";
          if (i) {
            n = t.shift() + "/";
          }
          for (var r = 0; r < t.length;) {
            if (".." === t[r]) {
              if (r > 0 && ".." !== t[r - 1]) {
                t.splice(--r, 2);
              } else if (i) {
                t.splice(r, 1);
              } else {
                ++r;
              }
            } else if ("." === t[r]) {
              t.splice(r, 1);
            } else {
              ++r;
            }
          }
          return n + t.join("/");
        };
        e.resolve = function (e, t, i) {
          if (!i) {
            t = a(t);
          }
          return s(t) ? t : (i || (e = a(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? a(e + "/" + t) : t);
        };
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, i, n, r) {
        var s = t("./util");
        var a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function c(e, t) {
          var i = 0;
          var n = {};
          for (t |= 0; i < e.length;) {
            n[a[i + t]] = e[i++];
          }
          return n;
        }
        e.basic = c([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
        e.defaults = c([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", s.emptyArray, null]);
        e.long = c([0, 0, 0, 1, 1], 7);
        e.mapKey = c([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
        e.packed = c([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
        i.exports;
      }, function () {
        return {
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, i, n, r) {
        i.exports = _;
        var o = t("./object");
        ((_.prototype = Object.create(o.prototype)).constructor = _).className = "Field";
        var s;
        var a = t("./enum");
        var c = t("./types");
        var l = t("./util");
        var p = /^required|optional|repeated$/;
        function _(e, t, i, n, r, s, a) {
          if (l.isObject(n)) {
            a = r;
            s = n;
            n = r = undefined;
          } else if (l.isObject(r)) {
            a = s;
            s = r;
            r = undefined;
          }
          o.call(this, e, s);
          if (!l.isInteger(t) || t < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!l.isString(i)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== n && !p.test(n = n.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== r && !l.isString(r)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === n) {
            n = "optional";
          }
          this.rule = n && "optional" !== n ? n : undefined;
          this.type = i;
          this.id = t;
          this.extend = r || undefined;
          this.required = "required" === n;
          this.optional = !this.required;
          this.repeated = "repeated" === n;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!l.Long && undefined !== c.long[i];
          this.bytes = "bytes" === i;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = a;
        }
        _.fromJSON = function (e, t) {
          return new _(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
        };
        Object.defineProperty(_.prototype, "packed", {
          get: function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _.prototype.setOption = function (e, t, i) {
          if ("packed" === e) {
            this._packed = null;
          }
          return o.prototype.setOption.call(this, e, t, i);
        };
        _.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return l.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        _.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = c.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof s) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
            }
          } else if (this.options && this.options.proto3_optional) {
            this.typeDefault = null;
          }
          if (this.options && null != this.options.default) {
            this.typeDefault = this.options.default;
            if (this.resolvedType instanceof a && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof a))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = l.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else if (this.bytes && "string" == typeof this.typeDefault) {
            var e;
            if (l.base64.test(this.typeDefault)) {
              l.base64.decode(this.typeDefault, e = l.newBuffer(l.base64.length(this.typeDefault)), 0);
            } else {
              l.utf8.write(this.typeDefault, e = l.newBuffer(l.utf8.length(this.typeDefault)), 0);
            }
            this.typeDefault = e;
          }
          if (this.map) {
            this.defaultValue = l.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = l.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof s) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return o.prototype.resolve.call(this);
        };
        _.d = function (e, t, i, n) {
          if ("function" == typeof t) {
            t = l.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = l.decorateEnum(t).name;
          }
          return function (r, o) {
            l.decorateType(r.constructor).add(new _(o, e, t, i, {
              default: n
            }));
          };
        };
        _._configure = function (e) {
          s = e;
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, i, n, r) {
        i.exports = c;
        var o = t("./object");
        ((c.prototype = Object.create(o.prototype)).constructor = c).className = "OneOf";
        var s = t("./field");
        var a = t("./util");
        function c(e, t, i, n) {
          if (!Array.isArray(t)) {
            i = t;
            t = undefined;
          }
          o.call(this, e, i);
          if (undefined !== t && !Array.isArray(t)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = t || [];
          this.fieldsArray = [];
          this.comment = n;
        }
        function l(e) {
          if (e.parent) {
            for (var t = 0; t < e.fieldsArray.length; ++t) {
              if (!e.fieldsArray[t].parent) {
                e.parent.add(e.fieldsArray[t]);
              }
            }
          }
        }
        c.fromJSON = function (e, t) {
          return new c(e, t.oneof, t.options, t.comment);
        };
        c.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]);
        };
        c.prototype.add = function (e) {
          if (!(e instanceof s)) {
            throw TypeError("field must be a Field");
          }
          if (e.parent && e.parent !== this.parent) {
            e.parent.remove(e);
          }
          this.oneof.push(e.name);
          this.fieldsArray.push(e);
          e.partOf = this;
          l(this);
          return this;
        };
        c.prototype.remove = function (e) {
          if (!(e instanceof s)) {
            throw TypeError("field must be a Field");
          }
          var t = this.fieldsArray.indexOf(e);
          if (t < 0) {
            throw Error(e + " is not a member of " + this);
          }
          this.fieldsArray.splice(t, 1);
          if ((t = this.oneof.indexOf(e.name)) > -1) {
            this.oneof.splice(t, 1);
          }
          e.partOf = null;
          return this;
        };
        c.prototype.onAdd = function (e) {
          o.prototype.onAdd.call(this, e);
          for (var t = 0; t < this.oneof.length; ++t) {
            var i = e.get(this.oneof[t]);
            if (i && !i.partOf) {
              i.partOf = this;
              this.fieldsArray.push(i);
            }
          }
          l(this);
        };
        c.prototype.onRemove = function (e) {
          var t;
          for (var i = 0; i < this.fieldsArray.length; ++i) {
            if ((t = this.fieldsArray[i]).parent) {
              t.parent.remove(t);
            }
          }
          o.prototype.onRemove.call(this, e);
        };
        c.d = function () {
          var e = new Array(arguments.length);
          for (var t = 0; t < arguments.length;) {
            e[t] = arguments[t++];
          }
          return function (t, i) {
            a.decorateType(t.constructor).add(new c(i, e));
            Object.defineProperty(t, i, {
              get: a.oneOfGetter(e),
              set: a.oneOfSetter(e)
            });
          };
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, i, n, r) {
        i.exports = u;
        var o = t("./object");
        ((u.prototype = Object.create(o.prototype)).constructor = u).className = "Namespace";
        var s;
        var a;
        var c;
        var l = t("./field");
        var p = t("./util");
        var _ = t("./oneof");
        function d(e, t) {
          if (e && e.length) {
            var i = {};
            for (var n = 0; n < e.length; ++n) {
              i[e[n].name] = e[n].toJSON(t);
            }
            return i;
          }
        }
        function u(e, t) {
          o.call(this, e, t);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function h(e) {
          e._nestedArray = null;
          return e;
        }
        u.fromJSON = function (e, t) {
          return new u(e, t.options).addJSON(t.nested);
        };
        u.arrayToJSON = d;
        u.isReservedId = function (e, t) {
          if (e) {
            for (var i = 0; i < e.length; ++i) {
              if ("string" != typeof e[i] && e[i][0] <= t && e[i][1] > t) {
                return true;
              }
            }
          }
          return false;
        };
        u.isReservedName = function (e, t) {
          if (e) {
            for (var i = 0; i < e.length; ++i) {
              if (e[i] === t) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(u.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = p.toArray(this.nested));
          }
        });
        u.prototype.toJSON = function (e) {
          return p.toObject(["options", this.options, "nested", d(this.nestedArray, e)]);
        };
        u.prototype.addJSON = function (e) {
          if (e) {
            var t;
            var i = Object.keys(e);
            for (var n = 0; n < i.length; ++n) {
              t = e[i[n]];
              this.add((undefined !== t.fields ? s.fromJSON : undefined !== t.values ? c.fromJSON : undefined !== t.methods ? a.fromJSON : undefined !== t.id ? l.fromJSON : u.fromJSON)(i[n], t));
            }
          }
          return this;
        };
        u.prototype.get = function (e) {
          return this.nested && this.nested[e] || null;
        };
        u.prototype.getEnum = function (e) {
          if (this.nested && this.nested[e] instanceof c) {
            return this.nested[e].values;
          }
          throw Error("no such enum: " + e);
        };
        u.prototype.add = function (e) {
          if (!(e instanceof l && undefined !== e.extend || e instanceof s || e instanceof _ || e instanceof c || e instanceof a || e instanceof u)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var t = this.get(e.name);
            if (t) {
              if (!(t instanceof u && e instanceof u) || t instanceof s || t instanceof a) {
                throw Error("duplicate name '" + e.name + "' in " + this);
              }
              var i = t.nestedArray;
              for (var n = 0; n < i.length; ++n) {
                e.add(i[n]);
              }
              this.remove(t);
              if (!this.nested) {
                this.nested = {};
              }
              e.setOptions(t.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[e.name] = e;
          e.onAdd(this);
          return h(this);
        };
        u.prototype.remove = function (e) {
          if (!(e instanceof o)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (e.parent !== this) {
            throw Error(e + " is not a member of " + this);
          }
          delete this.nested[e.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          e.onRemove(this);
          return h(this);
        };
        u.prototype.define = function (e, t) {
          if (p.isString(e)) {
            e = e.split(".");
          } else if (!Array.isArray(e)) {
            throw TypeError("illegal path");
          }
          if (e && e.length && "" === e[0]) {
            throw Error("path must be relative");
          }
          for (var i = this; e.length > 0;) {
            var n = e.shift();
            if (i.nested && i.nested[n]) {
              if (!((i = i.nested[n]) instanceof u)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              i.add(i = new u(n));
            }
          }
          if (t) {
            i.addJSON(t);
          }
          return i;
        };
        u.prototype.resolveAll = function () {
          var e = this.nestedArray;
          for (var t = 0; t < e.length;) {
            if (e[t] instanceof u) {
              e[t++].resolveAll();
            } else {
              e[t++].resolve();
            }
          }
          return this.resolve();
        };
        u.prototype.lookup = function (e, t, i) {
          if ("boolean" == typeof t) {
            i = t;
            t = undefined;
          } else if (t && !Array.isArray(t)) {
            t = [t];
          }
          if (p.isString(e) && e.length) {
            if ("." === e) {
              return this.root;
            }
            e = e.split(".");
          } else if (!e.length) {
            return this;
          }
          if ("" === e[0]) {
            return this.root.lookup(e.slice(1), t);
          }
          var n = this.get(e[0]);
          if (n) {
            if (1 === e.length) {
              if (!t || t.indexOf(n.constructor) > -1) {
                return n;
              }
            } else if (n instanceof u && (n = n.lookup(e.slice(1), t, true))) {
              return n;
            }
          } else {
            for (var r = 0; r < this.nestedArray.length; ++r) {
              if (this._nestedArray[r] instanceof u && (n = this._nestedArray[r].lookup(e, t, true))) {
                return n;
              }
            }
          }
          return null === this.parent || i ? null : this.parent.lookup(e, t);
        };
        u.prototype.lookupType = function (e) {
          var t = this.lookup(e, [s]);
          if (!t) {
            throw Error("no such type: " + e);
          }
          return t;
        };
        u.prototype.lookupEnum = function (e) {
          var t = this.lookup(e, [c]);
          if (!t) {
            throw Error("no such Enum '" + e + "' in " + this);
          }
          return t;
        };
        u.prototype.lookupTypeOrEnum = function (e) {
          var t = this.lookup(e, [s, c]);
          if (!t) {
            throw Error("no such Type or Enum '" + e + "' in " + this);
          }
          return t;
        };
        u.prototype.lookupService = function (e) {
          var t = this.lookup(e, [a]);
          if (!t) {
            throw Error("no such Service '" + e + "' in " + this);
          }
          return t;
        };
        u._configure = function (e, t, i) {
          s = e;
          a = t;
          c = i;
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, i, n, r) {
        i.exports = c;
        var o = t("./field");
        ((c.prototype = Object.create(o.prototype)).constructor = c).className = "MapField";
        var s = t("./types");
        var a = t("./util");
        function c(e, t, i, n, r, s) {
          o.call(this, e, t, n, undefined, undefined, r, s);
          if (!a.isString(i)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = i;
          this.resolvedKeyType = null;
          this.map = true;
        }
        c.fromJSON = function (e, t) {
          return new c(e, t.id, t.keyType, t.type, t.options, t.comment);
        };
        c.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        c.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === s.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return o.prototype.resolve.call(this);
        };
        c.d = function (e, t, i) {
          if ("function" == typeof i) {
            i = a.decorateType(i).name;
          } else if (i && "object" == typeof i) {
            i = a.decorateEnum(i).name;
          }
          return function (n, r) {
            a.decorateType(n.constructor).add(new c(r, e, t, i));
          };
        };
        i.exports;
      }, function () {
        return {
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("./object");
        ((a.prototype = Object.create(o.prototype)).constructor = a).className = "Method";
        var s = t("./util");
        function a(e, t, i, n, r, a, c, l, p) {
          if (s.isObject(r)) {
            c = r;
            r = a = undefined;
          } else if (s.isObject(a)) {
            c = a;
            a = undefined;
          }
          if (undefined !== t && !s.isString(t)) {
            throw TypeError("type must be a string");
          }
          if (!s.isString(i)) {
            throw TypeError("requestType must be a string");
          }
          if (!s.isString(n)) {
            throw TypeError("responseType must be a string");
          }
          o.call(this, e, c);
          this.type = t || "rpc";
          this.requestType = i;
          this.requestStream = !!r || undefined;
          this.responseType = n;
          this.responseStream = !!a || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = l;
          this.parsedOptions = p;
        }
        a.fromJSON = function (e, t) {
          return new a(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
        };
        a.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return s.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        a.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), o.prototype.resolve.call(this));
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, i, n, r) {
        i.exports = l;
        var o = t("./namespace");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "Service";
        var s = t("./method");
        var a = t("./util");
        var c = t("./rpc");
        function l(e, t) {
          o.call(this, e, t);
          this.methods = {};
          this._methodsArray = null;
        }
        function p(e) {
          e._methodsArray = null;
          return e;
        }
        l.fromJSON = function (e, t) {
          var i = new l(e, t.options);
          if (t.methods) {
            var n = Object.keys(t.methods);
            for (var r = 0; r < n.length; ++r) {
              i.add(s.fromJSON(n[r], t.methods[n[r]]));
            }
          }
          if (t.nested) {
            i.addJSON(t.nested);
          }
          i.comment = t.comment;
          return i;
        };
        l.prototype.toJSON = function (e) {
          var t = o.prototype.toJSON.call(this, e);
          var i = !!e && Boolean(e.keepComments);
          return a.toObject(["options", t && t.options || undefined, "methods", o.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
        };
        Object.defineProperty(l.prototype, "methodsArray", {
          get: function () {
            return this._methodsArray || (this._methodsArray = a.toArray(this.methods));
          }
        });
        l.prototype.get = function (e) {
          return this.methods[e] || o.prototype.get.call(this, e);
        };
        l.prototype.resolveAll = function () {
          var e = this.methodsArray;
          for (var t = 0; t < e.length; ++t) {
            e[t].resolve();
          }
          return o.prototype.resolve.call(this);
        };
        l.prototype.add = function (e) {
          if (this.get(e.name)) {
            throw Error("duplicate name '" + e.name + "' in " + this);
          }
          return e instanceof s ? (this.methods[e.name] = e, e.parent = this, p(this)) : o.prototype.add.call(this, e);
        };
        l.prototype.remove = function (e) {
          if (e instanceof s) {
            if (this.methods[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.methods[e.name];
            e.parent = null;
            return p(this);
          }
          return o.prototype.remove.call(this, e);
        };
        l.prototype.create = function (e, t, i) {
          var n;
          var r = new c.Service(e, t, i);
          for (var o = 0; o < this.methodsArray.length; ++o) {
            var s = a.lcFirst((n = this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g, "");
            r[s] = a.codegen(["r", "c"], a.isReserved(s) ? s + "_" : s)("return this.rpcCall(m,q,s,r,c)")({
              m: n,
              q: n.resolvedRequestType.ctor,
              s: n.resolvedResponseType.ctor
            });
          }
          return r;
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, i, n, r) {
        i.exports = s;
        var o = t("./util/minimal");
        function s(e) {
          if (e) {
            var t = Object.keys(e);
            for (var i = 0; i < t.length; ++i) {
              this[t[i]] = e[t[i]];
            }
          }
        }
        s.create = function (e) {
          return this.$type.create(e);
        };
        s.encode = function (e, t) {
          return this.$type.encode(e, t);
        };
        s.encodeDelimited = function (e, t) {
          return this.$type.encodeDelimited(e, t);
        };
        s.decode = function (e) {
          return this.$type.decode(e);
        };
        s.decodeDelimited = function (e) {
          return this.$type.decodeDelimited(e);
        };
        s.verify = function (e) {
          return this.$type.verify(e);
        };
        s.fromObject = function (e) {
          return this.$type.fromObject(e);
        };
        s.toObject = function (e, t) {
          return this.$type.toObject(e, t);
        };
        s.prototype.toJSON = function () {
          return this.$type.toObject(this, o.toJSONOptions);
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, i, n, r) {
        i.exports = function (e) {
          var t = a.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
            return e.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          if (e.group) {
            t("if((t&7)===4)")("break");
          }
          t("switch(t>>>3){");
          for (var i = 0; i < e.fieldsArray.length; ++i) {
            var n = e._fieldsArray[i].resolve();
            var r = n.resolvedType instanceof o ? "int32" : n.type;
            var l = "m" + a.safeProp(n.name);
            t("case %i: {", n.id);
            if (n.map) {
              t("if(%s===util.emptyObject)", l)("%s={}", l)("var c2 = r.uint32()+r.pos");
              if (undefined !== s.defaults[n.keyType]) {
                t("k=%j", s.defaults[n.keyType]);
              } else {
                t("k=null");
              }
              if (undefined !== s.defaults[r]) {
                t("value=%j", s.defaults[r]);
              } else {
                t("value=null");
              }
              t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", n.keyType)("case 2:");
              if (undefined === s.basic[r]) {
                t("value=types[%i].decode(r,r.uint32())", i);
              } else {
                t("value=r.%s()", r);
              }
              t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (undefined !== s.long[n.keyType]) {
                t("%s[typeof k===\"object\"?util.longToHash(k):k]=value", l);
              } else {
                t("%s[k]=value", l);
              }
            } else if (n.repeated) {
              t("if(!(%s&&%s.length))", l, l)("%s=[]", l);
              if (undefined !== s.packed[r]) {
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, r)("}else");
              }
              if (undefined === s.basic[r]) {
                t(n.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, i);
              } else {
                t("%s.push(r.%s())", l, r);
              }
            } else if (undefined === s.basic[r]) {
              t(n.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, i);
            } else {
              t("%s=r.%s()", l, r);
            }
            t("break")("}");
          }
          t("default:")("r.skipType(t&7)")("break")("}")("}");
          for (i = 0; i < e._fieldsArray.length; ++i) {
            var p = e._fieldsArray[i];
            if (p.required) {
              t("if(!m.hasOwnProperty(%j))", p.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + p.name + "'");
            }
          }
          return t("return m");
        };
        var o = t("./enum");
        var s = t("./types");
        var a = t("./util");
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, i, n, r) {
        i.exports = function (e) {
          var t = s.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var i = e.oneofsArray;
          var n = {};
          if (i.length) {
            t("var p={}");
          }
          for (var r = 0; r < e.fieldsArray.length; ++r) {
            var o = e._fieldsArray[r].resolve();
            var p = "m" + s.safeProp(o.name);
            if (o.optional) {
              t("if(%s!=null&&m.hasOwnProperty(%j)){", p, o.name);
            }
            if (o.map) {
              t("if(!util.isObject(%s))", p)("return%j", o.name + ": " + "object" + (o.repeated && true ? "[]" : o.map && false ? "{k:" + o.keyType + "}" : "") + " expected")("var k=Object.keys(%s)", p)("for(var i=0;i<k.length;++i){");
              l(t, o, "k[i]");
              c(t, o, r, p + "[k[i]]")("}");
            } else if (o.repeated) {
              t("if(!Array.isArray(%s))", p)("return%j", o.name + ": " + "array" + (o.repeated && false ? "[]" : o.map && true ? "{k:" + o.keyType + "}" : "") + " expected")("for(var i=0;i<%s.length;++i){", p);
              c(t, o, r, p + "[i]")("}");
            } else {
              if (o.partOf) {
                var _ = s.safeProp(o.partOf.name);
                if (1 === n[o.partOf.name]) {
                  t("if(p%s===1)", _)("return%j", o.partOf.name + ": multiple values");
                }
                n[o.partOf.name] = 1;
                t("p%s=1", _);
              }
              c(t, o, r, p);
            }
            if (o.optional) {
              t("}");
            }
          }
          return t("return null");
        };
        var o = t("./enum");
        var s = t("./util");
        function c(e, t, i, n) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof o) {
              e("switch(%s){", n)("default:")("return%j", t.name + ": " + "enum value" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              var r = Object.keys(t.resolvedType.values);
              for (var s = 0; s < r.length; ++s) {
                e("case %i:", t.resolvedType.values[r[s]]);
              }
              e("break")("}");
            } else {
              e("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", t.name + ".")("}");
            }
          } else {
            switch (t.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                e("if(!util.isInteger(%s))", n)("return%j", t.name + ": " + "integer" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", t.name + ": " + "integer|Long" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "float":
              case "double":
                e("if(typeof %s!==\"number\")", n)("return%j", t.name + ": " + "number" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "bool":
                e("if(typeof %s!==\"boolean\")", n)("return%j", t.name + ": " + "boolean" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "string":
                e("if(!util.isString(%s))", n)("return%j", t.name + ": " + "string" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "bytes":
                e("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", n, n, n)("return%j", t.name + ": " + "buffer" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
            }
          }
          return e;
        }
        function l(e, t, i) {
          switch (t.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              e("if(!util.key32Re.test(%s))", i)("return%j", t.name + ": " + "integer key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              e("if(!util.key64Re.test(%s))", i)("return%j", t.name + ": " + "integer|Long key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "bool":
              e("if(!util.key2Re.test(%s))", i)("return%j", t.name + ": " + "boolean key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
          }
          return e;
        }
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, i, n, r) {
        var s = t("./enum");
        var a = t("./util");
        function c(e, t, i, n) {
          var r = false;
          if (t.resolvedType) {
            if (t.resolvedType instanceof s) {
              e("switch(d%s){", n);
              var o = t.resolvedType.values;
              var a = Object.keys(o);
              for (var c = 0; c < a.length; ++c) {
                if (!(o[a[c]] !== t.typeDefault || r)) {
                  e("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", n, n, n);
                  if (!t.repeated) {
                    e("break");
                  }
                  r = true;
                }
                e("case%j:", a[c])("case %i:", o[a[c]])("m%s=%j", n, o[a[c]])("break");
              }
              e("}");
            } else {
              e("if(typeof d%s!==\"object\")", n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, i, n);
            }
          } else {
            var l = false;
            switch (t.type) {
              case "double":
              case "float":
                e("m%s=Number(d%s)", n, n);
                break;
              case "uint32":
              case "fixed32":
                e("m%s=d%s>>>0", n, n);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                e("m%s=d%s|0", n, n);
                break;
              case "uint64":
                l = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, l)("else if(typeof d%s===\"string\")", n)("m%s=parseInt(d%s,10)", n, n)("else if(typeof d%s===\"number\")", n)("m%s=d%s", n, n)("else if(typeof d%s===\"object\")", n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, l ? "true" : "");
                break;
              case "bytes":
                e("if(typeof d%s===\"string\")", n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length >= 0)", n)("m%s=d%s", n, n);
                break;
              case "string":
                e("m%s=String(d%s)", n, n);
                break;
              case "bool":
                e("m%s=Boolean(d%s)", n, n);
            }
          }
          return e;
        }
        function l(e, t, i, n) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof s) {
              e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", n, i, n, n, i, n, n);
            } else {
              e("d%s=types[%i].toObject(m%s,o)", n, i, n);
            }
          } else {
            var r = false;
            switch (t.type) {
              case "double":
              case "float":
                e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                break;
              case "uint64":
                r = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(typeof m%s===\"number\")", n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, r ? "true" : "", n);
                break;
              case "bytes":
                e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                break;
              default:
                e("d%s=m%s", n, n);
            }
          }
          return e;
        }
        e.fromObject = function (e) {
          var t = e.fieldsArray;
          var i = a.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!t.length) {
            return i("return new this.ctor");
          }
          i("var m=new this.ctor");
          for (var n = 0; n < t.length; ++n) {
            var r = t[n].resolve();
            var o = a.safeProp(r.name);
            if (r.map) {
              i("if(d%s){", o)("if(typeof d%s!==\"object\")", o)("throw TypeError(%j)", r.fullName + ": object expected")("m%s={}", o)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", o);
              c(i, r, n, o + "[ks[i]]")("}")("}");
            } else if (r.repeated) {
              i("if(d%s){", o)("if(!Array.isArray(d%s))", o)("throw TypeError(%j)", r.fullName + ": array expected")("m%s=[]", o)("for(var i=0;i<d%s.length;++i){", o);
              c(i, r, n, o + "[i]")("}")("}");
            } else {
              if (!(r.resolvedType instanceof s)) {
                i("if(d%s!=null){", o);
              }
              c(i, r, n, o);
              if (!(r.resolvedType instanceof s)) {
                i("}");
              }
            }
          }
          return i("return m");
        };
        e.toObject = function (e) {
          var t = e.fieldsArray.slice().sort(a.compareFieldsById);
          if (!t.length) {
            return a.codegen()("return {}");
          }
          var i = a.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var n = [];
          var r = [];
          var o = [];
          for (var c = 0; c < t.length; ++c) {
            if (!t[c].partOf) {
              (t[c].resolve().repeated ? n : t[c].map ? r : o).push(t[c]);
            }
          }
          if (n.length) {
            i("if(o.arrays||o.defaults){");
            for (c = 0; c < n.length; ++c) {
              i("d%s=[]", a.safeProp(n[c].name));
            }
            i("}");
          }
          if (r.length) {
            i("if(o.objects||o.defaults){");
            for (c = 0; c < r.length; ++c) {
              i("d%s={}", a.safeProp(r[c].name));
            }
            i("}");
          }
          if (o.length) {
            i("if(o.defaults){");
            for (c = 0; c < o.length; ++c) {
              var p = o[c];
              var _ = a.safeProp(p.name);
              if (p.resolvedType instanceof s) {
                i("d%s=o.enums===String?%j:%j", _, p.resolvedType.valuesById[p.typeDefault], p.typeDefault);
              } else if (p.long) {
                i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", p.typeDefault.low, p.typeDefault.high, p.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _)("}else")("d%s=o.longs===String?%j:%i", _, p.typeDefault.toString(), p.typeDefault.toNumber());
              } else if (p.bytes) {
                var d = "[" + Array.prototype.slice.call(p.typeDefault).join(",") + "]";
                i("if(o.bytes===String)d%s=%j", _, String.fromCharCode.apply(String, p.typeDefault))("else{")("d%s=%s", _, d)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _, _)("}");
              } else {
                i("d%s=%j", _, p.typeDefault);
              }
            }
            i("}");
          }
          var u = false;
          for (c = 0; c < t.length; ++c) {
            p = t[c];
            var h = e._fieldsArray.indexOf(p);
            _ = a.safeProp(p.name);
            if (p.map) {
              if (!u) {
                u = true;
                i("var ks2");
              }
              i("if(m%s&&(ks2=Object.keys(m%s)).length){", _, _)("d%s={}", _)("for(var j=0;j<ks2.length;++j){");
              l(i, p, h, _ + "[ks2[j]]")("}");
            } else if (p.repeated) {
              i("if(m%s&&m%s.length){", _, _)("d%s=[]", _)("for(var j=0;j<m%s.length;++j){", _);
              l(i, p, h, _ + "[j]")("}");
            } else {
              i("if(m%s!=null&&m.hasOwnProperty(%j)){", _, p.name);
              l(i, p, h, _);
              if (p.partOf) {
                i("if(o.oneofs)")("d%s=%j", a.safeProp(p.partOf.name), p.name);
              }
            }
            i("}");
          }
          return i("return d");
        };
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, i, n, r) {
        var s = t("./message");
        e[".google.protobuf.Any"] = {
          fromObject: function (e) {
            if (e && e["@type"]) {
              var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
              var i = this.lookup(t);
              if (i) {
                var n = "." === e["@type"].charAt(0) ? e["@type"].slice(1) : e["@type"];
                if (-1 === n.indexOf("/")) {
                  n = "/" + n;
                }
                return this.create({
                  type_url: n,
                  value: i.encode(i.fromObject(e)).finish()
                });
              }
            }
            return this.fromObject(e);
          },
          toObject: function (e, t) {
            var i = "";
            var n = "";
            if (t && t.json && e.type_url && e.value) {
              n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
              i = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
              var r = this.lookup(n);
              if (r) {
                e = r.decode(e.value);
              }
            }
            if (!(e instanceof this.ctor) && e instanceof s) {
              var o = e.$type.toObject(e, t);
              if ("" === i) {
                i = "type.googleapis.com/";
              }
              n = i + ("." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName);
              o["@type"] = n;
              return o;
            }
            return this.toObject(e, t);
          }
        };
        i.exports;
      }, function () {
        return {
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, i, n, r) {
        i.exports = S;
        var o = t("./namespace");
        ((S.prototype = Object.create(o.prototype)).constructor = S).className = "Type";
        var s = t("./enum");
        var a = t("./oneof");
        var c = t("./field");
        var l = t("./mapfield");
        var p = t("./service");
        var _ = t("./message");
        var d = t("./reader");
        var u = t("./writer");
        var h = t("./util");
        var m = t("./encoder");
        var f = t("./decoder");
        var y = t("./verifier");
        var g = t("./converter");
        var $ = t("./wrappers");
        function S(e, t) {
          o.call(this, e, t);
          this.fields = {};
          this.oneofs = undefined;
          this.extensions = undefined;
          this.reserved = undefined;
          this.group = undefined;
          this._fieldsById = null;
          this._fieldsArray = null;
          this._oneofsArray = null;
          this._ctor = null;
        }
        function b(e) {
          e._fieldsById = e._fieldsArray = e._oneofsArray = null;
          delete e.encode;
          delete e.decode;
          delete e.verify;
          return e;
        }
        Object.defineProperties(S.prototype, {
          fieldsById: {
            get: function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var e = Object.keys(this.fields);
              for (var t = 0; t < e.length; ++t) {
                var i = this.fields[e[t]];
                var n = i.id;
                if (this._fieldsById[n]) {
                  throw Error("duplicate id " + n + " in " + this);
                }
                this._fieldsById[n] = i;
              }
              return this._fieldsById;
            }
          },
          fieldsArray: {
            get: function () {
              return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields));
            }
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs));
            }
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = S.generateConstructor(this)());
            },
            set: function (e) {
              var t = e.prototype;
              if (!(t instanceof _)) {
                (e.prototype = new _()).constructor = e;
                h.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              h.merge(e, _, true);
              this._ctor = e;
              for (var i = 0; i < this.fieldsArray.length; ++i) {
                this._fieldsArray[i].resolve();
              }
              var n = {};
              for (i = 0; i < this.oneofsArray.length; ++i) {
                n[this._oneofsArray[i].resolve().name] = {
                  get: h.oneOfGetter(this._oneofsArray[i].oneof),
                  set: h.oneOfSetter(this._oneofsArray[i].oneof)
                };
              }
              if (i) {
                Object.defineProperties(e.prototype, n);
              }
            }
          }
        });
        S.generateConstructor = function (e) {
          var t;
          var i = h.codegen(["p"], e.name);
          for (var n = 0; n < e.fieldsArray.length; ++n) {
            if ((t = e._fieldsArray[n]).map) {
              i("this%s={}", h.safeProp(t.name));
            } else if (t.repeated) {
              i("this%s=[]", h.safeProp(t.name));
            }
          }
          return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        S.fromJSON = function (e, t) {
          var i = new S(e, t.options);
          i.extensions = t.extensions;
          i.reserved = t.reserved;
          var n = Object.keys(t.fields);
          for (var r = 0; r < n.length; ++r) {
            i.add((undefined !== t.fields[n[r]].keyType ? l.fromJSON : c.fromJSON)(n[r], t.fields[n[r]]));
          }
          if (t.oneofs) {
            n = Object.keys(t.oneofs);
            for (r = 0; r < n.length; ++r) {
              i.add(a.fromJSON(n[r], t.oneofs[n[r]]));
            }
          }
          if (t.nested) {
            n = Object.keys(t.nested);
            for (r = 0; r < n.length; ++r) {
              var _ = t.nested[n[r]];
              i.add((undefined !== _.id ? c.fromJSON : undefined !== _.fields ? S.fromJSON : undefined !== _.values ? s.fromJSON : undefined !== _.methods ? p.fromJSON : o.fromJSON)(n[r], _));
            }
          }
          if (t.extensions && t.extensions.length) {
            i.extensions = t.extensions;
          }
          if (t.reserved && t.reserved.length) {
            i.reserved = t.reserved;
          }
          if (t.group) {
            i.group = true;
          }
          if (t.comment) {
            i.comment = t.comment;
          }
          return i;
        };
        S.prototype.toJSON = function (e) {
          var t = o.prototype.toJSON.call(this, e);
          var i = !!e && Boolean(e.keepComments);
          return h.toObject(["options", t && t.options || undefined, "oneofs", o.arrayToJSON(this.oneofsArray, e), "fields", o.arrayToJSON(this.fieldsArray.filter(function (e) {
            return !e.declaringField;
          }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
        };
        S.prototype.resolveAll = function () {
          var e = this.fieldsArray;
          for (var t = 0; t < e.length;) {
            e[t++].resolve();
          }
          var i = this.oneofsArray;
          for (t = 0; t < i.length;) {
            i[t++].resolve();
          }
          return o.prototype.resolveAll.call(this);
        };
        S.prototype.get = function (e) {
          return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
        };
        S.prototype.add = function (e) {
          if (this.get(e.name)) {
            throw Error("duplicate name '" + e.name + "' in " + this);
          }
          if (e instanceof c && undefined === e.extend) {
            if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) {
              throw Error("duplicate id " + e.id + " in " + this);
            }
            if (this.isReservedId(e.id)) {
              throw Error("id " + e.id + " is reserved in " + this);
            }
            if (this.isReservedName(e.name)) {
              throw Error("name '" + e.name + "' is reserved in " + this);
            }
            if (e.parent) {
              e.parent.remove(e);
            }
            this.fields[e.name] = e;
            e.message = this;
            e.onAdd(this);
            return b(this);
          }
          return e instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), b(this)) : o.prototype.add.call(this, e);
        };
        S.prototype.remove = function (e) {
          if (e instanceof c && undefined === e.extend) {
            if (!this.fields || this.fields[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.fields[e.name];
            e.parent = null;
            e.onRemove(this);
            return b(this);
          }
          if (e instanceof a) {
            if (!this.oneofs || this.oneofs[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.oneofs[e.name];
            e.parent = null;
            e.onRemove(this);
            return b(this);
          }
          return o.prototype.remove.call(this, e);
        };
        S.prototype.isReservedId = function (e) {
          return o.isReservedId(this.reserved, e);
        };
        S.prototype.isReservedName = function (e) {
          return o.isReservedName(this.reserved, e);
        };
        S.prototype.create = function (e) {
          return new this.ctor(e);
        };
        S.prototype.setup = function () {
          var e = this.fullName;
          var t = [];
          for (var i = 0; i < this.fieldsArray.length; ++i) {
            t.push(this._fieldsArray[i].resolve().resolvedType);
          }
          this.encode = m(this)({
            Writer: u,
            types: t,
            util: h
          });
          this.decode = f(this)({
            Reader: d,
            types: t,
            util: h
          });
          this.verify = y(this)({
            types: t,
            util: h
          });
          this.fromObject = g.fromObject(this)({
            types: t,
            util: h
          });
          this.toObject = g.toObject(this)({
            types: t,
            util: h
          });
          var n = $[e];
          if (n) {
            var r = Object.create(this);
            r.fromObject = this.fromObject;
            this.fromObject = n.fromObject.bind(r);
            r.toObject = this.toObject;
            this.toObject = n.toObject.bind(r);
          }
          return this;
        };
        S.prototype.encode = function (e, t) {
          return this.setup().encode(e, t);
        };
        S.prototype.encodeDelimited = function (e, t) {
          return this.encode(e, t && t.len ? t.fork() : t).ldelim();
        };
        S.prototype.decode = function (e, t) {
          return this.setup().decode(e, t);
        };
        S.prototype.decodeDelimited = function (e) {
          if (!(e instanceof d)) {
            e = d.create(e);
          }
          return this.decode(e, e.uint32());
        };
        S.prototype.verify = function (e) {
          return this.setup().verify(e);
        };
        S.prototype.fromObject = function (e) {
          return this.setup().fromObject(e);
        };
        S.prototype.toObject = function (e, t) {
          return this.setup().toObject(e, t);
        };
        S.d = function (e) {
          return function (t) {
            h.decorateType(t, e);
          };
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, i, n, r) {
        i.exports = u;
        var o = t("./namespace");
        ((u.prototype = Object.create(o.prototype)).constructor = u).className = "Root";
        var s;
        var a;
        var c;
        var l = t("./field");
        var p = t("./enum");
        var _ = t("./oneof");
        var d = t("./util");
        function u(e) {
          o.call(this, "", e);
          this.deferred = [];
          this.files = [];
        }
        function h() {}
        u.fromJSON = function (e, t) {
          if (!t) {
            t = new u();
          }
          if (e.options) {
            t.setOptions(e.options);
          }
          return t.addJSON(e.nested);
        };
        u.prototype.resolvePath = d.path.resolve;
        u.prototype.fetch = d.fetch;
        u.prototype.load = function e(t, i, n) {
          if ("function" == typeof i) {
            n = i;
            i = undefined;
          }
          var r = this;
          if (!n) {
            return d.asPromise(e, r, t, i);
          }
          var o = n === h;
          function s(e, t) {
            if (n) {
              if (o) {
                throw e;
              }
              var i = n;
              n = null;
              i(e, t);
            }
          }
          function l(e) {
            var t = e.lastIndexOf("google/protobuf/");
            if (t > -1) {
              var i = e.substring(t);
              if (i in c) {
                return i;
              }
            }
            return null;
          }
          function p(e, t) {
            try {
              if (d.isString(t) && "{" === t.charAt(0)) {
                t = JSON.parse(t);
              }
              if (d.isString(t)) {
                a.filename = e;
                var n;
                var c = a(t, r, i);
                var p = 0;
                if (c.imports) {
                  for (; p < c.imports.length; ++p) {
                    if (n = l(c.imports[p]) || r.resolvePath(e, c.imports[p])) {
                      _(n);
                    }
                  }
                }
                if (c.weakImports) {
                  for (p = 0; p < c.weakImports.length; ++p) {
                    if (n = l(c.weakImports[p]) || r.resolvePath(e, c.weakImports[p])) {
                      _(n, true);
                    }
                  }
                }
              } else {
                r.setOptions(t.options).addJSON(t.nested);
              }
            } catch (e) {
              s(e);
            }
            if (!(o || u)) {
              s(null, r);
            }
          }
          function _(e, t) {
            e = l(e) || e;
            if (!(r.files.indexOf(e) > -1)) {
              r.files.push(e);
              if (e in c) {
                if (o) {
                  p(e, c[e]);
                } else {
                  ++u;
                  setTimeout(function () {
                    --u;
                    p(e, c[e]);
                  });
                }
              } else if (o) {
                var i;
                try {
                  i = d.fs.readFileSync(e).toString("utf8");
                } catch (e) {
                  return void (t || s(e));
                }
                p(e, i);
              } else {
                ++u;
                r.fetch(e, function (i, o) {
                  --u;
                  if (n) {
                    if (i) {
                      if (t) {
                        if (!u) {
                          s(null, r);
                        }
                      } else {
                        s(i);
                      }
                    } else {
                      p(e, o);
                    }
                  }
                });
              }
            }
          }
          var u = 0;
          if (d.isString(t)) {
            t = [t];
          }
          var m;
          for (var f = 0; f < t.length; ++f) {
            if (m = r.resolvePath("", t[f])) {
              _(m);
            }
          }
          if (o) {
            return r;
          }
          if (!u) {
            s(null, r);
          }
        };
        u.prototype.loadSync = function (e, t) {
          if (!d.isNode) {
            throw Error("not supported");
          }
          return this.load(e, t, h);
        };
        u.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            }).join(", "));
          }
          return o.prototype.resolveAll.call(this);
        };
        var m = /^[A-Z]/;
        function f(e, t) {
          var i = t.parent.lookup(t.extend);
          if (i) {
            var n = new l(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            if (!i.get(n.name)) {
              n.declaringField = t;
              t.extensionField = n;
              i.add(n);
            }
            return true;
          }
          return false;
        }
        u.prototype._handleAdd = function (e) {
          if (e instanceof l) {
            if (!(undefined === e.extend || e.extensionField || f(0, e))) {
              this.deferred.push(e);
            }
          } else if (e instanceof p) {
            if (m.test(e.name)) {
              e.parent[e.name] = e.values;
            }
          } else if (!(e instanceof _)) {
            if (e instanceof s) {
              for (var t = 0; t < this.deferred.length;) {
                if (f(0, this.deferred[t])) {
                  this.deferred.splice(t, 1);
                } else {
                  ++t;
                }
              }
            }
            for (var i = 0; i < e.nestedArray.length; ++i) {
              this._handleAdd(e._nestedArray[i]);
            }
            if (m.test(e.name)) {
              e.parent[e.name] = e;
            }
          }
        };
        u.prototype._handleRemove = function (e) {
          if (e instanceof l) {
            if (undefined !== e.extend) {
              if (e.extensionField) {
                e.extensionField.parent.remove(e.extensionField);
                e.extensionField = null;
              } else {
                var t = this.deferred.indexOf(e);
                if (t > -1) {
                  this.deferred.splice(t, 1);
                }
              }
            }
          } else if (e instanceof p) {
            if (m.test(e.name)) {
              delete e.parent[e.name];
            }
          } else if (e instanceof o) {
            for (var i = 0; i < e.nestedArray.length; ++i) {
              this._handleRemove(e._nestedArray[i]);
            }
            if (m.test(e.name)) {
              delete e.parent[e.name];
            }
          }
        };
        u._configure = function (e, t, i) {
          s = e;
          a = t;
          c = i;
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, i, n, r) {
        var o;
        var s;
        var a = i.exports = t("./util/minimal");
        var c = t("./roots");
        a.codegen = t("@protobufjs/codegen");
        a.fetch = t("@protobufjs/fetch");
        a.path = t("@protobufjs/path");
        a.fs = a.inquire("fs");
        a.toArray = function (e) {
          if (e) {
            var t = Object.keys(e);
            var i = new Array(t.length);
            for (var n = 0; n < t.length;) {
              i[n] = e[t[n++]];
            }
            return i;
          }
          return [];
        };
        a.toObject = function (e) {
          var t = {};
          for (var i = 0; i < e.length;) {
            var n = e[i++];
            var r = e[i++];
            if (undefined !== r) {
              t[n] = r;
            }
          }
          return t;
        };
        var l = /\\/g;
        var p = /"/g;
        a.isReserved = function (e) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
        };
        a.safeProp = function (e) {
          return !/^[$\w_]+$/.test(e) || a.isReserved(e) ? "[\"" + e.replace(l, "\\\\").replace(p, "\\\"") + "\"]" : "." + e;
        };
        a.ucFirst = function (e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        };
        var _ = /_([a-z])/g;
        a.camelCase = function (e) {
          return e.substring(0, 1) + e.substring(1).replace(_, function (e, t) {
            return t.toUpperCase();
          });
        };
        a.compareFieldsById = function (e, t) {
          return e.id - t.id;
        };
        a.decorateType = function (e, i) {
          if (e.$type) {
            if (i && e.$type.name !== i) {
              a.decorateRoot.remove(e.$type);
              e.$type.name = i;
              a.decorateRoot.add(e.$type);
            }
            return e.$type;
          }
          if (!o) {
            o = t("./type");
          }
          var n = new o(i || e.name);
          a.decorateRoot.add(n);
          n.ctor = e;
          Object.defineProperty(e, "$type", {
            value: n,
            enumerable: false
          });
          Object.defineProperty(e.prototype, "$type", {
            value: n,
            enumerable: false
          });
          return n;
        };
        var d = 0;
        a.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!s) {
            s = t("./enum");
          }
          var i = new s("Enum" + d++, e);
          a.decorateRoot.add(i);
          Object.defineProperty(e, "$type", {
            value: i,
            enumerable: false
          });
          return i;
        };
        a.setProperty = function (e, t, i) {
          if ("object" != typeof e) {
            throw TypeError("dst must be an object");
          }
          if (!t) {
            throw TypeError("path must be specified");
          }
          return function e(t, i, n) {
            var r = i.shift();
            if ("__proto__" === r || "prototype" === r) {
              return t;
            }
            if (i.length > 0) {
              t[r] = e(t[r] || {}, i, n);
            } else {
              var o = t[r];
              if (o) {
                n = [].concat(o).concat(n);
              }
              t[r] = n;
            }
            return t;
          }(e, t = t.split("."), i);
        };
        Object.defineProperty(a, "decorateRoot", {
          get: function () {
            return c.decorated || (c.decorated = new (t("./root"))());
          }
        });
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, i, n, r) {
        i.exports = a;
        a.className = "ReflectionObject";
        var o;
        var s = t("./util");
        function a(e, t) {
          if (!s.isString(e)) {
            throw TypeError("name must be a string");
          }
          if (t && !s.isObject(t)) {
            throw TypeError("options must be an object");
          }
          this.options = t;
          this.parsedOptions = null;
          this.name = e;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(a.prototype, {
          root: {
            get: function () {
              for (var e = this; null !== e.parent;) {
                e = e.parent;
              }
              return e;
            }
          },
          fullName: {
            get: function () {
              var e = [this.name];
              for (var t = this.parent; t;) {
                e.unshift(t.name);
                t = t.parent;
              }
              return e.join(".");
            }
          }
        });
        a.prototype.toJSON = function () {
          throw Error();
        };
        a.prototype.onAdd = function (e) {
          if (this.parent && this.parent !== e) {
            this.parent.remove(this);
          }
          this.parent = e;
          this.resolved = false;
          var t = e.root;
          if (t instanceof o) {
            t._handleAdd(this);
          }
        };
        a.prototype.onRemove = function (e) {
          var t = e.root;
          if (t instanceof o) {
            t._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        a.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof o) {
              this.resolved = true;
            }
          }
          return this;
        };
        a.prototype.getOption = function (e) {
          if (this.options) {
            return this.options[e];
          }
        };
        a.prototype.setOption = function (e, t, i) {
          if (!(i && this.options && undefined !== this.options[e])) {
            (this.options || (this.options = {}))[e] = t;
          }
          return this;
        };
        a.prototype.setParsedOption = function (e, t, i) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var n = this.parsedOptions;
          if (i) {
            var r = n.find(function (t) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
            if (r) {
              var o = r[e];
              s.setProperty(o, i, t);
            } else {
              (r = {})[e] = s.setProperty({}, i, t);
              n.push(r);
            }
          } else {
            var a = {
              e: t
            };
            n.push(a);
          }
          return this;
        };
        a.prototype.setOptions = function (e, t) {
          if (e) {
            var i = Object.keys(e);
            for (var n = 0; n < i.length; ++n) {
              this.setOption(i[n], e[i[n]], t);
            }
          }
          return this;
        };
        a.prototype.toString = function () {
          var e = this.constructor.className;
          var t = this.fullName;
          return t.length ? e + " " + t : e;
        };
        a._configure = function (e) {
          o = e;
        };
        i.exports;
      }, function () {
        return {
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, i, n, r) {
        i.exports = c;
        var o = t("./object");
        ((c.prototype = Object.create(o.prototype)).constructor = c).className = "Enum";
        var s = t("./namespace");
        var a = t("./util");
        function c(e, t, i, n, r, s) {
          o.call(this, e, i);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = n;
          this.comments = r || {};
          this.valuesOptions = s;
          this.reserved = undefined;
          if (t) {
            var a = Object.keys(t);
            for (var c = 0; c < a.length; ++c) {
              if ("number" == typeof t[a[c]]) {
                this.valuesById[this.values[a[c]] = t[a[c]]] = a[c];
              }
            }
          }
        }
        c.fromJSON = function (e, t) {
          var i = new c(e, t.values, t.options, t.comment, t.comments);
          i.reserved = t.reserved;
          return i;
        };
        c.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
        };
        c.prototype.add = function (e, t, i, n) {
          if (!a.isString(e)) {
            throw TypeError("name must be a string");
          }
          if (!a.isInteger(t)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[e]) {
            throw Error("duplicate name '" + e + "' in " + this);
          }
          if (this.isReservedId(t)) {
            throw Error("id " + t + " is reserved in " + this);
          }
          if (this.isReservedName(e)) {
            throw Error("name '" + e + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[t]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + t + " in " + this);
            }
            this.values[e] = t;
          } else {
            this.valuesById[this.values[e] = t] = e;
          }
          if (n) {
            if (undefined === this.valuesOptions) {
              this.valuesOptions = {};
            }
            this.valuesOptions[e] = n || null;
          }
          this.comments[e] = i || null;
          return this;
        };
        c.prototype.remove = function (e) {
          if (!a.isString(e)) {
            throw TypeError("name must be a string");
          }
          var t = this.values[e];
          if (null == t) {
            throw Error("name '" + e + "' does not exist in " + this);
          }
          delete this.valuesById[t];
          delete this.values[e];
          delete this.comments[e];
          if (this.valuesOptions) {
            delete this.valuesOptions[e];
          }
          return this;
        };
        c.prototype.isReservedId = function (e) {
          return s.isReservedId(this.reserved, e);
        };
        c.prototype.isReservedName = function (e) {
          return s.isReservedName(this.reserved, e);
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, i, n, r) {
        i.exports = function (e) {
          var t;
          var i = a.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var n = e.fieldsArray.slice().sort(a.compareFieldsById);
          for (var r = 0; r < n.length; ++r) {
            var l = n[r].resolve();
            var p = e._fieldsArray.indexOf(l);
            var _ = l.resolvedType instanceof o ? "int32" : l.type;
            var d = s.basic[_];
            t = "m" + a.safeProp(l.name);
            if (l.map) {
              i("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, 8 | s.mapKey[l.keyType], l.keyType);
              if (undefined === d) {
                i("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", p, t);
              } else {
                i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | d, _, t);
              }
              i("}")("}");
            } else if (l.repeated) {
              i("if(%s!=null&&%s.length){", t, t);
              if (l.packed && undefined !== s.packed[_]) {
                i("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", _, t)("w.ldelim()");
              } else {
                i("for(var i=0;i<%s.length;++i)", t);
                if (undefined === d) {
                  if (l.resolvedType.group) {
                    i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", p, t + "[i]", (l.id << 3 | 3) >>> 0, (l.id << 3 | 4) >>> 0);
                  } else {
                    i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", p, t + "[i]", (l.id << 3 | 2) >>> 0);
                  }
                } else {
                  i("w.uint32(%i).%s(%s[i])", (l.id << 3 | d) >>> 0, _, t);
                }
              }
              i("}");
            } else {
              if (l.optional) {
                i("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, l.name);
              }
              if (undefined === d) {
                if (l.resolvedType.group) {
                  i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", p, t, (l.id << 3 | 3) >>> 0, (l.id << 3 | 4) >>> 0);
                } else {
                  i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", p, t, (l.id << 3 | 2) >>> 0);
                }
              } else {
                i("w.uint32(%i).%s(%s)", (l.id << 3 | d) >>> 0, _, t);
              }
            }
          }
          return i("return w");
        };
        var o = t("./enum");
        var s = t("./types");
        var a = t("./util");
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, i, n, r) {
        var o = i.exports = t("./index-minimal");
        o.build = "light";
        o.load = function (e, t, i) {
          if ("function" == typeof t) {
            i = t;
            t = new o.Root();
          } else if (!t) {
            t = new o.Root();
          }
          return t.load(e, i);
        };
        o.loadSync = function (e, t) {
          if (!t) {
            t = new o.Root();
          }
          return t.loadSync(e);
        };
        o.encoder = t("./encoder");
        o.decoder = t("./decoder");
        o.verifier = t("./verifier");
        o.converter = t("./converter");
        o.ReflectionObject = t("./object");
        o.Namespace = t("./namespace");
        o.Root = t("./root");
        o.Enum = t("./enum");
        o.Type = t("./type");
        o.Field = t("./field");
        o.OneOf = t("./oneof");
        o.MapField = t("./mapfield");
        o.Service = t("./service");
        o.Method = t("./method");
        o.Message = t("./message");
        o.wrappers = t("./wrappers");
        o.types = t("./types");
        o.util = t("./util");
        o.ReflectionObject._configure(o.Root);
        o.Namespace._configure(o.Type, o.Service, o.Enum);
        o.Root._configure(o.Type);
        o.Field._configure(o.Type);
        i.exports;
      }, function () {
        return {
          "./index-minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, i, n, r) {
        i.exports = m;
        var o = /[\s{}=;:[\],'"()<>]/g;
        var s = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var c = /^ *[*/]+ */;
        var l = /^\s*\*?\/*/;
        var p = /\n/g;
        var _ = /\s/;
        var d = /\\(.?)/g;
        var u = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function h(e) {
          return e.replace(d, function (e, t) {
            switch (t) {
              case "\\":
              case "":
                return t;
              default:
                return u[t] || "";
            }
          });
        }
        function m(e, t) {
          e = e.toString();
          var i = 0;
          var n = e.length;
          var r = 1;
          var d = 0;
          var u = {};
          var m = [];
          var f = null;
          function $(i, n, o) {
            var s;
            var a = {
              type: e.charAt(i++),
              lineEmpty: false,
              leading: o
            };
            var _ = i - (t ? 2 : 3);
            do {
              if (--_ < 0 || "\n" === (s = e.charAt(_))) {
                a.lineEmpty = true;
                break;
              }
            } while (" " === s || "\t" === s);
            var h = e.substring(i, n).split(p);
            for (var m = 0; m < h.length; ++m) {
              h[m] = h[m].replace(t ? l : c, "").trim();
            }
            a.text = h.join("\n").trim();
            u[r] = a;
            d = r;
          }
          function S(t) {
            var i = b(t);
            var n = e.substring(t, i);
            return /^\s*\/\//.test(n);
          }
          function b(e) {
            for (var t = e; t < n && "\n" !== e.charAt(t);) {
              t++;
            }
            return t;
          }
          function v() {
            if (m.length > 0) {
              return m.shift();
            }
            if (f) {
              return function () {
                var t = "'" === f ? a : s;
                t.lastIndex = i - 1;
                var n = t.exec(e);
                if (!n) {
                  throw Error("illegal string (line " + r + ")");
                }
                i = t.lastIndex;
                w(f);
                f = null;
                return h(n[1]);
              }();
            }
            var c;
            var l;
            var p;
            var d;
            var u;
            var v = 0 === i;
            do {
              if (i === n) {
                return null;
              }
              for (c = false; _.test(p = e.charAt(i));) {
                if ("\n" === p) {
                  v = true;
                  ++r;
                }
                if (++i === n) {
                  return null;
                }
              }
              if ("/" === e.charAt(i)) {
                if (++i === n) {
                  throw Error("illegal comment (line " + r + ")");
                }
                if ("/" === e.charAt(i)) {
                  if (t) {
                    d = i;
                    u = false;
                    if (S(i - 1)) {
                      u = true;
                      do {
                        if ((i = b(i)) === n) {
                          break;
                        }
                        i++;
                        if (!v) {
                          break;
                        }
                      } while (S(i));
                    } else {
                      i = Math.min(n, b(i) + 1);
                    }
                    if (u) {
                      $(d, i, v);
                      v = true;
                    }
                    r++;
                    c = true;
                  } else {
                    for (u = "/" === e.charAt(d = i + 1); "\n" !== e.charAt(++i);) {
                      if (i === n) {
                        return null;
                      }
                    }
                    ++i;
                    if (u) {
                      $(d, i - 1, v);
                      v = true;
                    }
                    ++r;
                    c = true;
                  }
                } else {
                  if ("*" !== (p = e.charAt(i))) {
                    return "/";
                  }
                  d = i + 1;
                  u = t || "*" === e.charAt(d);
                  do {
                    if ("\n" === p) {
                      ++r;
                    }
                    if (++i === n) {
                      throw Error("illegal comment (line " + r + ")");
                    }
                    l = p;
                    p = e.charAt(i);
                  } while ("*" !== l || "/" !== p);
                  ++i;
                  if (u) {
                    $(d, i - 2, v);
                    v = true;
                  }
                  c = true;
                }
              }
            } while (c);
            var E = i;
            o.lastIndex = 0;
            if (!o.test(e.charAt(E++))) {
              for (; E < n && !o.test(e.charAt(E));) {
                ++E;
              }
            }
            var T = e.substring(i, i = E);
            if (!("\"" !== T && "'" !== T)) {
              f = T;
            }
            return T;
          }
          function w(e) {
            m.push(e);
          }
          function E() {
            if (!m.length) {
              var e = v();
              if (null === e) {
                return null;
              }
              w(e);
            }
            return m[0];
          }
          return Object.defineProperty({
            next: v,
            peek: E,
            push: w,
            skip: function (e, t) {
              var i = E();
              if (i === e) {
                v();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + i + "', '" + e + "' expected") + " (line " + r + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var i;
              var n = null;
              if (undefined === e) {
                i = u[r - 1];
                delete u[r - 1];
                if (i && (t || "*" === i.type || i.lineEmpty)) {
                  n = i.leading ? i.text : null;
                }
              } else {
                if (d < e) {
                  E();
                }
                i = u[e];
                delete u[e];
                if (!(!i || i.lineEmpty || !t && "/" !== i.type)) {
                  n = i.leading ? null : i.text;
                }
              }
              return n;
            }
          }, "line", {
            get: function () {
              return r;
            }
          });
        }
        m.unescape = h;
        i.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, i, n, r) {
        i.exports = C;
        C.filename = null;
        C.defaults = {
          keepCase: false
        };
        var o = t("./tokenize");
        var s = t("./root");
        var a = t("./type");
        var c = t("./field");
        var l = t("./mapfield");
        var p = t("./oneof");
        var _ = t("./enum");
        var d = t("./service");
        var u = t("./method");
        var h = t("./types");
        var m = t("./util");
        var f = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var g = /^0[x][0-9a-fA-F]+$/;
        var $ = /^-?0[x][0-9a-fA-F]+$/;
        var S = /^0[0-7]+$/;
        var b = /^-?0[0-7]+$/;
        var v = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var w = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var E = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var T = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function C(e, t, i) {
          if (!(t instanceof s)) {
            i = t;
            t = new s();
          }
          if (!i) {
            i = C.defaults;
          }
          var n;
          var r;
          var A;
          var I;
          var N;
          var L = i.preferTrailingComment || false;
          var D = o(e, i.alternateCommentMode || false);
          var R = D.next;
          var P = D.push;
          var O = D.peek;
          var k = D.skip;
          var B = D.cmnt;
          var M = true;
          var x = false;
          var F = t;
          var z = i.keepCase ? function (e) {
            return e;
          } : m.camelCase;
          function U(e, t, i) {
            var n = C.filename;
            if (!i) {
              C.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + D.line + ")");
          }
          function j() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = R()) && "'" !== e) {
                throw U(e);
              }
              t.push(R());
              k(e);
              e = O();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function G(e) {
            var t = R();
            switch (t) {
              case "'":
              case "\"":
                P(t);
                return j();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (e, t) {
                var i = 1;
                if ("-" === e.charAt(0)) {
                  i = -1;
                  e = e.substring(1);
                }
                switch (e) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return i * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (f.test(e)) {
                  return i * parseInt(e, 10);
                }
                if (g.test(e)) {
                  return i * parseInt(e, 16);
                }
                if (S.test(e)) {
                  return i * parseInt(e, 8);
                }
                if (v.test(e)) {
                  return i * parseFloat(e);
                }
                throw U(e, "number", t);
              }(t, true);
            } catch (i) {
              if (e && E.test(t)) {
                return t;
              }
              throw U(t, "value");
            }
          }
          function W(e, t) {
            var i;
            var n;
            do {
              if (!t || "\"" !== (i = O()) && "'" !== i) {
                e.push([n = V(R()), k("to", true) ? V(R()) : n]);
              } else {
                e.push(j());
              }
            } while (k(",", true));
            var r = {
              options: undefined,
              setOption: function (e, t) {
                if (undefined === this.options) {
                  this.options = {};
                }
                this.options[e] = t;
              }
            };
            K(r, function (e) {
              if ("option" !== e) {
                throw U(e);
              }
              ee(r, e);
              k(";");
            }, function () {
              ne(r);
            });
          }
          function V(e, t) {
            switch (e) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!t && "-" === e.charAt(0)) {
              throw U(e, "id");
            }
            if (y.test(e)) {
              return parseInt(e, 10);
            }
            if ($.test(e)) {
              return parseInt(e, 16);
            }
            if (b.test(e)) {
              return parseInt(e, 8);
            }
            throw U(e, "id");
          }
          function H() {
            if (undefined !== n) {
              throw U("package");
            }
            n = R();
            if (!E.test(n)) {
              throw U(n, "name");
            }
            F = F.define(n);
            k(";");
          }
          function q() {
            var e;
            var t = O();
            switch (t) {
              case "weak":
                e = A || (A = []);
                R();
                break;
              case "public":
                R();
              default:
                e = r || (r = []);
            }
            t = j();
            k(";");
            e.push(t);
          }
          function X() {
            k("=");
            I = j();
            if (!(x = "proto3" === I) && "proto2" !== I) {
              throw U(I, "syntax");
            }
            t.setOption("syntax", I);
            k(";");
          }
          function Y(e, t) {
            switch (t) {
              case "option":
                ee(e, t);
                k(";");
                return true;
              case "message":
                J(e, t);
                return true;
              case "enum":
                Q(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!w.test(t = R())) {
                    throw U(t, "service name");
                  }
                  var i = new d(t);
                  K(i, function (e) {
                    if (!Y(i, e)) {
                      if ("rpc" !== e) {
                        throw U(e);
                      }
                      !function (e, t) {
                        var i = B();
                        var n = t;
                        if (!w.test(t = R())) {
                          throw U(t, "name");
                        }
                        var r;
                        var o;
                        var s;
                        var a;
                        var c = t;
                        k("(");
                        if (k("stream", true)) {
                          o = true;
                        }
                        if (!E.test(t = R())) {
                          throw U(t);
                        }
                        r = t;
                        k(")");
                        k("returns");
                        k("(");
                        if (k("stream", true)) {
                          a = true;
                        }
                        if (!E.test(t = R())) {
                          throw U(t);
                        }
                        s = t;
                        k(")");
                        var l = new u(c, n, r, s, o, a);
                        l.comment = i;
                        K(l, function (e) {
                          if ("option" !== e) {
                            throw U(e);
                          }
                          ee(l, e);
                          k(";");
                        });
                        e.add(l);
                      }(i, e);
                    }
                  });
                  e.add(i);
                })(e, t);
                return true;
              case "extend":
                (function (e, t) {
                  if (!E.test(t = R())) {
                    throw U(t, "reference");
                  }
                  var i = t;
                  K(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        Z(e, t, i);
                        break;
                      case "optional":
                        Z(e, x ? "proto3_optional" : "optional", i);
                        break;
                      default:
                        if (!x || !E.test(t)) {
                          throw U(t);
                        }
                        P(t);
                        Z(e, "optional", i);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function K(e, t, i) {
            var n = D.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = B();
              }
              e.filename = C.filename;
            }
            if (k("{", true)) {
              for (var r; "}" !== (r = R());) {
                t(r);
              }
              k(";", true);
            } else {
              if (i) {
                i();
              }
              k(";");
              if (e && ("string" != typeof e.comment || L)) {
                e.comment = B(n) || e.comment;
              }
            }
          }
          function J(e, t) {
            if (!w.test(t = R())) {
              throw U(t, "type name");
            }
            var i = new a(t);
            K(i, function (e) {
              if (!Y(i, e)) {
                switch (e) {
                  case "map":
                    !function (e) {
                      k("<");
                      var t = R();
                      if (undefined === h.mapKey[t]) {
                        throw U(t, "type");
                      }
                      k(",");
                      var i = R();
                      if (!E.test(i)) {
                        throw U(i, "type");
                      }
                      k(">");
                      var n = R();
                      if (!w.test(n)) {
                        throw U(n, "name");
                      }
                      k("=");
                      var r = new l(z(n), V(R()), t, i);
                      K(r, function (e) {
                        if ("option" !== e) {
                          throw U(e);
                        }
                        ee(r, e);
                        k(";");
                      }, function () {
                        ne(r);
                      });
                      e.add(r);
                    }(i);
                    break;
                  case "required":
                  case "repeated":
                    Z(i, e);
                    break;
                  case "optional":
                    Z(i, x ? "proto3_optional" : "optional");
                    break;
                  case "oneof":
                    !function (e, t) {
                      if (!w.test(t = R())) {
                        throw U(t, "name");
                      }
                      var i = new p(z(t));
                      K(i, function (e) {
                        if ("option" === e) {
                          ee(i, e);
                          k(";");
                        } else {
                          P(e);
                          Z(i, "optional");
                        }
                      });
                      e.add(i);
                    }(i, e);
                    break;
                  case "extensions":
                    W(i.extensions || (i.extensions = []));
                    break;
                  case "reserved":
                    W(i.reserved || (i.reserved = []), true);
                    break;
                  default:
                    if (!x || !E.test(e)) {
                      throw U(e);
                    }
                    P(e);
                    Z(i, "optional");
                }
              }
            });
            e.add(i);
          }
          function Z(e, t, i) {
            var n = R();
            if ("group" !== n) {
              for (; n.endsWith(".") || O().startsWith(".");) {
                n += R();
              }
              if (!E.test(n)) {
                throw U(n, "type");
              }
              var r = R();
              if (!w.test(r)) {
                throw U(r, "name");
              }
              r = z(r);
              k("=");
              var o = new c(r, V(R()), n, t, i);
              K(o, function (e) {
                if ("option" !== e) {
                  throw U(e);
                }
                ee(o, e);
                k(";");
              }, function () {
                ne(o);
              });
              if ("proto3_optional" === t) {
                var s = new p("_" + r);
                o.setOption("proto3_optional", true);
                s.add(o);
                e.add(s);
              } else {
                e.add(o);
              }
              if (!(x || !o.repeated || undefined === h.packed[n] && undefined !== h.basic[n])) {
                o.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var i = R();
                if (!w.test(i)) {
                  throw U(i, "name");
                }
                var n = m.lcFirst(i);
                if (i === n) {
                  i = m.ucFirst(i);
                }
                k("=");
                var r = V(R());
                var o = new a(i);
                o.group = true;
                var s = new c(n, r, i, t);
                s.filename = C.filename;
                K(o, function (e) {
                  switch (e) {
                    case "option":
                      ee(o, e);
                      k(";");
                      break;
                    case "required":
                    case "repeated":
                      Z(o, e);
                      break;
                    case "optional":
                      Z(o, x ? "proto3_optional" : "optional");
                      break;
                    case "message":
                      J(o, e);
                      break;
                    case "enum":
                      Q(o, e);
                      break;
                    default:
                      throw U(e);
                  }
                });
                e.add(o).add(s);
              }(e, t);
            }
          }
          function Q(e, t) {
            if (!w.test(t = R())) {
              throw U(t, "name");
            }
            var i = new _(t);
            K(i, function (e) {
              switch (e) {
                case "option":
                  ee(i, e);
                  k(";");
                  break;
                case "reserved":
                  W(i.reserved || (i.reserved = []), true);
                  break;
                default:
                  !function (e, t) {
                    if (!w.test(t)) {
                      throw U(t, "name");
                    }
                    k("=");
                    var i = V(R(), true);
                    var n = {
                      options: undefined,
                      setOption: function (e, t) {
                        if (undefined === this.options) {
                          this.options = {};
                        }
                        this.options[e] = t;
                      }
                    };
                    K(n, function (e) {
                      if ("option" !== e) {
                        throw U(e);
                      }
                      ee(n, e);
                      k(";");
                    }, function () {
                      ne(n);
                    });
                    e.add(t, i, n.comment, n.options);
                  }(i, e);
              }
            });
            e.add(i);
          }
          function ee(e, t) {
            var i = k("(", true);
            if (!E.test(t = R())) {
              throw U(t, "name");
            }
            var n;
            var r = t;
            var o = r;
            if (i) {
              k(")");
              o = r = "(" + r + ")";
              t = O();
              if (T.test(t)) {
                n = t.slice(1);
                r += t;
                R();
              }
            }
            k("=");
            (function (e, t, i, n) {
              if (e.setParsedOption) {
                e.setParsedOption(t, i, n);
              }
            })(e, o, te(e, r), n);
          }
          function te(e, t) {
            if (k("{", true)) {
              for (var i = {}; !k("}", true);) {
                if (!w.test(N = R())) {
                  throw U(N, "name");
                }
                if (null === N) {
                  throw U(N, "end of input");
                }
                var n;
                var r = N;
                k(":", true);
                if ("{" === O()) {
                  n = te(e, t + "." + N);
                } else if ("[" === O()) {
                  var o;
                  n = [];
                  if (k("[", true)) {
                    do {
                      o = G(true);
                      n.push(o);
                    } while (k(",", true));
                    k("]");
                    if (undefined !== o) {
                      ie(e, t + "." + N, o);
                    }
                  }
                } else {
                  n = G(true);
                  ie(e, t + "." + N, n);
                }
                var s = i[r];
                if (s) {
                  n = [].concat(s).concat(n);
                }
                i[r] = n;
                k(",", true);
                k(";", true);
              }
              return i;
            }
            var a = G(true);
            ie(e, t, a);
            return a;
          }
          function ie(e, t, i) {
            if (e.setOption) {
              e.setOption(t, i);
            }
          }
          function ne(e) {
            if (k("[", true)) {
              do {
                ee(e, "option");
              } while (k(",", true));
              k("]");
            }
            return e;
          }
          for (; null !== (N = R());) {
            switch (N) {
              case "package":
                if (!M) {
                  throw U(N);
                }
                H();
                break;
              case "import":
                if (!M) {
                  throw U(N);
                }
                q();
                break;
              case "syntax":
                if (!M) {
                  throw U(N);
                }
                X();
                break;
              case "option":
                ee(F, N);
                k(";");
                break;
              default:
                if (Y(F, N)) {
                  M = false;
                  continue;
                }
                throw U(N);
            }
          }
          C.filename = null;
          return {
            package: n,
            imports: r,
            weakImports: A,
            syntax: I,
            root: t
          };
        }
        i.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, i, n, r) {
        i.exports = a;
        var o;
        var s = /\/|\./;
        function a(e, t) {
          if (!s.test(e)) {
            e = "google/protobuf/" + e + ".proto";
            t = {
              nested: {
                google: {
                  nested: {
                    protobuf: {
                      nested: t
                    }
                  }
                }
              }
            };
          }
          a[e] = t;
        }
        a("any", {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        });
        a("duration", {
          Duration: o = {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        });
        a("timestamp", {
          Timestamp: o
        });
        a("empty", {
          Empty: {
            fields: {}
          }
        });
        a("struct", {
          Struct: {
            fields: {
              fields: {
                keyType: "string",
                type: "Value",
                id: 1
              }
            }
          },
          Value: {
            oneofs: {
              kind: {
                oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
              }
            },
            fields: {
              nullValue: {
                type: "NullValue",
                id: 1
              },
              numberValue: {
                type: "double",
                id: 2
              },
              stringValue: {
                type: "string",
                id: 3
              },
              boolValue: {
                type: "bool",
                id: 4
              },
              structValue: {
                type: "Struct",
                id: 5
              },
              listValue: {
                type: "ListValue",
                id: 6
              }
            }
          },
          NullValue: {
            values: {
              NULL_VALUE: 0
            }
          },
          ListValue: {
            fields: {
              values: {
                rule: "repeated",
                type: "Value",
                id: 1
              }
            }
          }
        });
        a("wrappers", {
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        });
        a("field_mask", {
          FieldMask: {
            fields: {
              paths: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          }
        });
        a.get = function (e) {
          return a[e] || null;
        };
        i.exports;
      }, {});
      var _cjsExports;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, i, n, r) {
        var o = i.exports = t("./index-light");
        o.build = "full";
        o.tokenize = t("./tokenize");
        o.parse = t("./parse");
        o.common = t("./common");
        o.Root._configure(o.Type, o.parse, o.common);
        i.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, i, n, r) {
        i.exports = t("./src/index");
        _cjsExports = i.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _cjsExports$1;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, i, n, r) {
        i.exports = t("./src/index-minimal");
        i.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@old-rd1/cnt-protocol/cntProto.js", function (e, t, i, n, r) {
        var o;
        var s = t("protobufjs/minimal");
        var a = s.Reader;
        var c = s.Writer;
        var l = s.util;
        var p = s.roots.default || (s.roots.default = {});
        (o = {}).SpinAck = function () {
          function e(e) {
            this.PlateSymbol = [];
            if (e) {
              var t = Object.keys(e);
              for (var i = 0; i < t.length; ++i) {
                if (null != e[t[i]]) {
                  this[t[i]] = e[t[i]];
                }
              }
            }
          }
          e.prototype.Award = 0;
          e.prototype.TotalWin = 0;
          e.prototype.PlateSymbol = l.emptyArray;
          e.prototype.ShowIndex = "";
          e.prototype.NowMoney = 0;
          e.prototype.AckType = 0;
          e.prototype.RTP = 0;
          e.create = function (t) {
            return new e(t);
          };
          e.encode = function (e, t) {
            if (!t) {
              t = c.create();
            }
            if (null != e.Award && Object.hasOwnProperty.call(e, "Award")) {
              t.uint32(8).int32(e.Award);
            }
            if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
              t.uint32(17).double(e.TotalWin);
            }
            if (null != e.PlateSymbol && e.PlateSymbol.length) {
              t.uint32(26).fork();
              for (var i = 0; i < e.PlateSymbol.length; ++i) {
                t.int32(e.PlateSymbol[i]);
              }
              t.ldelim();
            }
            if (null != e.ShowIndex && Object.hasOwnProperty.call(e, "ShowIndex")) {
              t.uint32(42).string(e.ShowIndex);
            }
            if (null != e.NowMoney && Object.hasOwnProperty.call(e, "NowMoney")) {
              t.uint32(49).double(e.NowMoney);
            }
            if (null != e.AckType && Object.hasOwnProperty.call(e, "AckType")) {
              t.uint32(56).int32(e.AckType);
            }
            if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
              t.uint32(65).double(e.RTP);
            }
            return t;
          };
          e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          };
          e.decode = function (e, t) {
            if (!(e instanceof a)) {
              e = a.create(e);
            }
            var i = undefined === t ? e.len : e.pos + t;
            for (var n = new p.cntProto.SpinAck(); e.pos < i;) {
              var r = e.uint32();
              switch (r >>> 3) {
                case 1:
                  n.Award = e.int32();
                  break;
                case 2:
                  n.TotalWin = e.double();
                  break;
                case 3:
                  if (!(n.PlateSymbol && n.PlateSymbol.length)) {
                    n.PlateSymbol = [];
                  }
                  if (2 == (7 & r)) {
                    for (var o = e.uint32() + e.pos; e.pos < o;) {
                      n.PlateSymbol.push(e.int32());
                    }
                  } else {
                    n.PlateSymbol.push(e.int32());
                  }
                  break;
                case 5:
                  n.ShowIndex = e.string();
                  break;
                case 6:
                  n.NowMoney = e.double();
                  break;
                case 7:
                  n.AckType = e.int32();
                  break;
                case 8:
                  n.RTP = e.double();
                  break;
                default:
                  e.skipType(7 & r);
              }
            }
            return n;
          };
          e.decodeDelimited = function (e) {
            if (!(e instanceof a)) {
              e = new a(e);
            }
            return this.decode(e, e.uint32());
          };
          e.verify = function (e) {
            if ("object" != typeof e || null === e) {
              return "object expected";
            }
            if (null != e.Award && e.hasOwnProperty("Award") && !l.isInteger(e.Award)) {
              return "Award: integer expected";
            }
            if (null != e.TotalWin && e.hasOwnProperty("TotalWin") && "number" != typeof e.TotalWin) {
              return "TotalWin: number expected";
            }
            if (null != e.PlateSymbol && e.hasOwnProperty("PlateSymbol")) {
              if (!Array.isArray(e.PlateSymbol)) {
                return "PlateSymbol: array expected";
              }
              for (var t = 0; t < e.PlateSymbol.length; ++t) {
                if (!l.isInteger(e.PlateSymbol[t])) {
                  return "PlateSymbol: integer[] expected";
                }
              }
            }
            return null != e.ShowIndex && e.hasOwnProperty("ShowIndex") && !l.isString(e.ShowIndex) ? "ShowIndex: string expected" : null != e.NowMoney && e.hasOwnProperty("NowMoney") && "number" != typeof e.NowMoney ? "NowMoney: number expected" : null != e.AckType && e.hasOwnProperty("AckType") && !l.isInteger(e.AckType) ? "AckType: integer expected" : null != e.RTP && e.hasOwnProperty("RTP") && "number" != typeof e.RTP ? "RTP: number expected" : null;
          };
          e.fromObject = function (e) {
            if (e instanceof p.cntProto.SpinAck) {
              return e;
            }
            var t = new p.cntProto.SpinAck();
            if (null != e.Award) {
              t.Award = 0 | e.Award;
            }
            if (null != e.TotalWin) {
              t.TotalWin = Number(e.TotalWin);
            }
            if (e.PlateSymbol) {
              if (!Array.isArray(e.PlateSymbol)) {
                throw TypeError(".cntProto.SpinAck.PlateSymbol: array expected");
              }
              t.PlateSymbol = [];
              for (var i = 0; i < e.PlateSymbol.length; ++i) {
                t.PlateSymbol[i] = 0 | e.PlateSymbol[i];
              }
            }
            if (null != e.ShowIndex) {
              t.ShowIndex = String(e.ShowIndex);
            }
            if (null != e.NowMoney) {
              t.NowMoney = Number(e.NowMoney);
            }
            if (null != e.AckType) {
              t.AckType = 0 | e.AckType;
            }
            if (null != e.RTP) {
              t.RTP = Number(e.RTP);
            }
            return t;
          };
          e.toObject = function (e, t) {
            if (!t) {
              t = {};
            }
            var i = {};
            if (t.arrays || t.defaults) {
              i.PlateSymbol = [];
            }
            if (t.defaults) {
              i.Award = 0;
              i.TotalWin = 0;
              i.ShowIndex = "";
              i.NowMoney = 0;
              i.AckType = 0;
              i.RTP = 0;
            }
            if (null != e.Award && e.hasOwnProperty("Award")) {
              i.Award = e.Award;
            }
            if (null != e.TotalWin && e.hasOwnProperty("TotalWin")) {
              i.TotalWin = t.json && !isFinite(e.TotalWin) ? String(e.TotalWin) : e.TotalWin;
            }
            if (e.PlateSymbol && e.PlateSymbol.length) {
              i.PlateSymbol = [];
              for (var n = 0; n < e.PlateSymbol.length; ++n) {
                i.PlateSymbol[n] = e.PlateSymbol[n];
              }
            }
            if (null != e.ShowIndex && e.hasOwnProperty("ShowIndex")) {
              i.ShowIndex = e.ShowIndex;
            }
            if (null != e.NowMoney && e.hasOwnProperty("NowMoney")) {
              i.NowMoney = t.json && !isFinite(e.NowMoney) ? String(e.NowMoney) : e.NowMoney;
            }
            if (null != e.AckType && e.hasOwnProperty("AckType")) {
              i.AckType = e.AckType;
            }
            if (null != e.RTP && e.hasOwnProperty("RTP")) {
              i.RTP = t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP;
            }
            return i;
          };
          e.prototype.toJSON = function () {
            return this.constructor.toObject(this, s.util.toJSONOptions);
          };
          e.getTypeUrl = function (e) {
            if (undefined === e) {
              e = "type.googleapis.com";
            }
            return e + "/cntProto.SpinAck";
          };
          return e;
        }();
        p.cntProto = o;
        i.exports = p;
        _cjsExports$1 = i.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CoinTree/Client/Thai_UAT/node_modules/@old-rd1/cnt-protocol/cntProto.js");
      cclegacy._RF.push({}, "e7a72q0wLNPWZqcdH9Ty9PF", "GameView", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var Transition;
      var State$1;
      var EventType;
      !function (e) {
        e[e.NONE = 0] = "NONE";
        e[e.COLOR = 1] = "COLOR";
        e[e.SPRITE = 2] = "SPRITE";
        e[e.SCALE = 4] = "SCALE";
        e[e.COLOR_SPRITE = 3] = "COLOR_SPRITE";
        e[e.COLOR_SCALE = 5] = "COLOR_SCALE";
        e[e.SPRITE_SCALE = 6] = "SPRITE_SCALE";
        e[e.ALL = 7] = "ALL";
      }(Transition || (Transition = {}));
      ccenum(Transition);
      (function (e) {
        e.NORMAL = "normal";
        e.HOVER = "hover";
        e.PRESSED = "pressed";
        e.DISABLED = "disabled";
      })(State$1 || (State$1 = {}));
      (function (e) {
        e.CLICK = "click";
      })(EventType || (EventType = {}));
      var _dec$g;
      var _dec2$d;
      var _dec3$b;
      var _dec4$9;
      var _dec5$7;
      var _class2$f;
      var _descriptor$e;
      var _descriptor2$b;
      var _descriptor3$b;
      var _descriptor4$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", undefined);
      var ccclass$i = _decorator.ccclass;
      var property$e = _decorator.property;
      _dec$g = ccclass$i("CommonBuyBonusCell");
      _dec2$d = property$e({
        type: Sprite,
        tooltip: "購買文字"
      });
      _dec3$b = property$e({
        type: Sprite,
        tooltip: "項目標題"
      });
      _dec4$9 = property$e({
        type: CCString,
        tooltip: "標題圖片名稱"
      });
      _dec5$7 = property$e({
        type: Label,
        tooltip: "金額"
      });
      _class2$f = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          _initializerDefineProperty(t = e.call.apply(e, [this].concat(n)) || this, "m_buyHintSprite", _descriptor$e, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSprite", _descriptor2$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titlePicName", _descriptor3$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_priceLabel", _descriptor4$7, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.start = function () {
          var e = node$e.GetGameAtlas();
          if (node$e.CurrLang !== node$l.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = e.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = e.getSpriteFrame(this.m_titlePicName);
          }
        };
        i.SetPrice = function (e) {
          this.m_priceLabel.string = e;
        };
        return t;
      }(Component);
      _descriptor$e = _applyDecoratedDescriptor(_class2$f.prototype, "m_buyHintSprite", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$b = _applyDecoratedDescriptor(_class2$f.prototype, "m_titleSprite", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$b = _applyDecoratedDescriptor(_class2$f.prototype, "m_titlePicName", [_dec4$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      _descriptor4$7 = _applyDecoratedDescriptor(_class2$f.prototype, "m_priceLabel", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _class$m;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var ccclass$m = _decorator.ccclass;
      var EvtReceiver = ccclass$m(_class$m = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).m_callback = undefined;
          return t;
        }
        _inheritsLoose(t, e);
        t.Pack = function (e, i) {
          e.addComponent(t);
          e.getComponent(t).SetCallback(i);
        };
        var i = t.prototype;
        i.EvtReciever = function (e) {
          log("AnimEvtReciever: ", e);
          if (this.m_callback) {
            this.m_callback(e);
          } else {
            log("callback沒有設定，無法處理event: ", e);
          }
        };
        i.triggerAnimationEvent = function (e) {
          log("triggerAnimationEvent: ", e);
          if (this.m_callback) {
            this.m_callback(e);
          } else {
            log("callback沒有設定，無法處理event: ", e);
          }
        };
        i.SetCallback = function (e) {
          this.m_callback = e;
        };
        i.onDestroy = function () {
          this.m_callback = null;
        };
        return t;
      }(Component)) || _class$m;
      var _EffectView$WIN_EFFEC;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var EffectView = function (e) {
        function t() {
          var i;
          (i = e.call(this) || this).m_awardBoardFile = t.EFFECT_ROOT + "win/awardBoard";
          i.m_effectList = {};
          i.m_timeLineList = {};
          i.m_winEffCbFunc = null;
          i.m_currentWinEffect = null;
          i.m_currentWinEffectTimeline = null;
          i.m_awardBoard = null;
          i.m_awardBoardTimeline = null;
          i.m_txtWinValue = null;
          i.m_durRollMoneyTick = t.MONEY_ROLL_TIME;
          i.m_moneyRealValue = 0;
          i.m_moneyRollValue = 0;
          i.m_bgMaskNode = null;
          i.m_commonGetCoinCbFunc = null;
          i.m_commonGetCoinMidCbFunc = null;
          i.m_commonGetCoinEff = null;
          i.m_commonGetCoinTline = null;
          i.m_updateMoneyEff = null;
          i.m_updateMoneyTline = null;
          i.m_getCoinParticle = null;
          i.m_odds = [3, 5, 10, 20, 30];
          i.m_winEffectFiles = [null, null, t.EFFECT_ROOT + t.FILE_PATH.BIG_WIN, t.EFFECT_ROOT + t.FILE_PATH.MEGA_WIN, t.EFFECT_ROOT + t.FILE_PATH.SUPER_WIN];
          i.m_coinEffects = [2, 3, 5, 5, 5];
          i.m_coinTimes = [2, 2, 5, 5, 5];
          i.m_soundNameByOdds = [];
          i.m_isAutoCheckFloat = false;
          i.m_rotateCoins = {};
          i.m_coinEffectNode = undefined;
          i.m_loadedSound = undefined;
          i.m_isLandscape = false;
          i.m_LandscapeRate = 1;
          i.m_winType = undefined;
          i.m_nowPlaySoundID = null;
          i.m_loadedSound = false;
          return i;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.LoadSound = function () {
          this.m_loadedSound = true;
        };
        i.OnUpdate = function (e) {
          this.RollWinMoney(e);
        };
        i.ShowWinAndCoinEffect = function (e, t, i) {
          if (undefined === i) {
            i = null;
          }
          i = i || null;
          var n = node$h.GetManagerId(i);
          this.ShowWinEffect(e, n);
          if (!(undefined !== e.playCoinAtWinEffect && true !== e.playCoinAtWinEffect)) {
            this.playCoinEffect(t, n);
          }
          node$h.StartLoad(n);
        };
        i.ShowWinEffect = function (e, i) {
          var n = this;
          if (undefined === i) {
            i = -1;
          }
          var r = e.effectFile;
          var o = e.winValue;
          var s = e.cbFunc;
          var a = e.yPos;
          var c = e.deltaY;
          var l = e.cbFuncBtoM;
          var p = e.cbFuncMtoS;
          var _ = e.cbFuncPlaying;
          var d = e.isLoop || false;
          var u = e.rollTime;
          if (null != o) {
            var h = function () {
              if (n.m_bgMaskNode) {
                n.m_bgMaskNode.active = true;
              }
              log("LoadPrefabManager CB", o);
              a = null != a && a || t.DEFAULT_Y;
              n.m_effectList[r].setPosition(v3(t.DesignSize.width / 2, a));
              n.m_effectList[r].active = true;
              n.m_timeLineList[r].play(t.ANI_LABEL.ACT);
              n.m_currentWinEffect = n.m_effectList[r];
              n.m_currentWinEffectTimeline = n.m_timeLineList[r];
              n.m_currentWinEffectTimeline.name = r;
              c = r == t.FILE_PATH.JACKPOT ? 180 : null != c ? c : 230;
              n.m_awardBoard.setPosition(v3(t.DesignSize.width / 2, a - c));
              n.m_awardBoard.active = true;
              n.m_awardBoardTimeline.play(t.ANI_LABEL.ACT);
              n.SetWinValue(o, u);
              if (!(null == _)) {
                _();
              }
            };
            var m = i;
            if (-1 == i) {
              m = node$h.GetManagerId(h);
            }
            this.m_winEffCbFunc = s;
            if (null == this.m_effectList[r]) {
              node$h.AddLoad(m);
              node$l.GameBundle.load(r, function (e, i) {
                if (e) {
                  error(e.message || e);
                } else {
                  var o = instantiate(i);
                  o.active = false;
                  n.addChild(o);
                  node$k.SetZIndex(o, t.EFF_ZORDER.WIN_EFFECT);
                  var s = o.getComponent(Animation);
                  EvtReceiver.Pack(o, function (e) {
                    if (e == t.ANI_FRAME_EVENT.ENDING) {
                      if (n.m_awardBoard && n.m_awardBoard.active) {
                        n.m_awardBoardTimeline.play(t.ANI_LABEL.ENDING);
                      }
                    } else if (e == t.ANI_FRAME_EVENT.LOOP) {
                      if (d) {
                        s.play(t.ANI_LABEL.LOOP);
                        s.getState(t.ANI_LABEL.LOOP).wrapMode = AnimationClip.WrapMode.Loop;
                      }
                    } else if (e == t.ANI_FRAME_EVENT.B_TO_M) {
                      if (n.m_awardBoard && n.m_awardBoard.active) {
                        tween(n.m_txtWinValue).by(.25, {
                          scale: v3(1.5, 1.5, 1.5)
                        }).by(.1, {
                          scale: v3(.9, .9, .9)
                        }).start();
                      }
                      if (l) {
                        l();
                      }
                    } else if (e == t.ANI_FRAME_EVENT.M_TO_S) {
                      if (n.m_awardBoard && n.m_awardBoard.active) {
                        tween(n.m_txtWinValue).by(.25, {
                          scale: v3(1.5, 1.5, 1.5)
                        }).by(.1, {
                          scale: v3(.9, .9, .9)
                        }).start();
                      }
                      if (!(null == p)) {
                        p();
                      }
                    } else if (e == t.ANI_FRAME_EVENT.END) {
                      log("ANI_FRAME_EVENT.END");
                      n.OnAnimationEnd();
                      if (n.m_winEffCbFunc) {
                        n.m_winEffCbFunc();
                      }
                    }
                  });
                  o.active = false;
                  n.m_effectList[r] = o;
                  n.m_timeLineList[r] = s;
                  node$h.OnLoaded(m);
                }
              });
              if (null == this.m_awardBoard) {
                node$h.AddLoad(m);
                node$l.GameBundle.load(this.m_awardBoardFile, function (e, i) {
                  if (e) {
                    error(e.message || e);
                  } else {
                    n.m_awardBoard = instantiate(i);
                    n.addChild(n.m_awardBoard);
                    node$k.SetZIndex(n.m_awardBoard, t.EFF_ZORDER.AWARD_BOARD);
                    n.m_awardBoard.active = false;
                    n.m_awardBoardTimeline = n.m_awardBoard.getComponent(Animation);
                    n.m_txtWinValue = n.m_awardBoard.getChildByName("win_value_label");
                    node$h.OnLoaded(m);
                  }
                });
              }
              if (-1 == i) {
                node$h.StartLoad(m);
              } else {
                node$h.AddOnLoadedCallback(m, h);
              }
            } else if (-1 == i) {
              h();
            } else {
              node$h.AddOnLoadedCallback(m, h);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        i.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(t.ANI_LABEL.ENDING, false);
          }
        };
        i.SetWinValue = function (e, i, n) {
          if (undefined === i) {
            i = null;
          }
          if (undefined === n) {
            n = 0;
          }
          this.m_moneyRealValue = node$k.strip(e);
          this.m_moneyRollValue = n;
          i = null == i && t.MONEY_ROLL_TIME || i;
          this.m_durRollMoneyTick = node$k.strip(i);
        };
        i.RollWinMoney = function (e) {
          this.m_moneyRealValue = node$k.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = node$k.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var t = node$k.divide(this.m_durRollMoneyTick, node$k.strip(e));
            var i = node$k.divide(node$k.strip(this.m_moneyRealValue - this.m_moneyRollValue), t);
            var n = node$k.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              n = this.m_moneyRealValue.toString().indexOf(".") > -1 ? node$k.FORMAT_NUMBER_TYPE.PERMANENT_DOT : node$k.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = node$k.strip(this.m_moneyRollValue + i);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, n);
            this.m_durRollMoneyTick = node$k.strip(this.m_durRollMoneyTick - e);
          }
        };
        i.SetLabelString = function (e, t, i) {
          if (undefined === i) {
            i = null;
          }
          var n = e.getComponent(Label);
          if (null != n && null != n) {
            if (null == i || null == i) {
              n.string = t.toString();
            } else {
              var r;
              if ("number" == typeof t) {
                r = t;
              } else {
                var o = t.replace(/,/g, "");
                r = isNaN(Number(o)) ? 0 : Number(o);
              }
              n.string = node$k.FormatNumberThousands(r, i);
            }
            node$k.SetFont(n);
          } else {
            log("Warning!!!!!!!!!! SetLabelString: ", e);
          }
        };
        i.SetWinMoneyToMax = function () {};
        i.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        i.StopAnimation = function (e) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (1 != e && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        i.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0;
          this.m_moneyRollValue = 0;
        };
        i.playCoinEffect = function (e, i) {
          var n = this;
          if (undefined === i) {
            i = -1;
          }
          if (node$l.CommonBundle) {
            var r = e.level;
            var o = e.position;
            var s = e.time;
            if (null == s) {
              s = 0;
            }
            var a = e.zOrder;
            if (null == a) {
              a = 0;
            }
            var c = e.parent;
            this.stopCoinEffectImmly();
            var l = t.COIN_EFFECT_LIST[r];
            if (l = node$k.GetFilePath(l)) {
              log("~~~~~~~~~~~~~~~~~~~~~~", e, s, a);
              var p = function () {
                n.m_coinEffectNode.setPosition(v3(o.x, o.y));
                if (null == c || null == c) {
                  n.addChild(n.m_coinEffectNode);
                  node$k.SetZIndex(n.m_coinEffectNode, 0);
                } else {
                  c.addChild(n.m_coinEffectNode);
                  node$k.SetZIndex(n.m_coinEffectNode, a);
                }
                if (0 != s) {
                  tween(n).delay(s).call(function () {
                    n.stopCoinEffect();
                  }).start();
                }
              };
              if (-1 != i) {
                node$h.AddOnLoadedCallback(i, p);
                node$h.AddLoad(i);
              }
              node$l.CommonBundle.load(l, function (e, t) {
                log("LoadRes ", l);
                if (e) {
                  error(e.message || e);
                } else {
                  n.m_coinEffectNode = instantiate(t);
                  if (n.m_coinEffectNode) {
                    if (-1 == i) {
                      p();
                    } else {
                      node$h.OnLoaded(i);
                    }
                  } else {
                    log("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        i.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        i.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var e = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(ParticleSystem2D);
            var t = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(ParticleSystem2D);
            if (e) {
              e.stopSystem();
            }
            if (t) {
              t.stopSystem();
            }
          }
        };
        i.ShowCommonEffect = function (e, i, n, r) {
          if (undefined === n) {
            n = null;
          }
          if (undefined === r) {
            r = null;
          }
          n = n || {};
          r = r || {};
          var o = new Vec2(t.DesignSize.width / 2, t.DesignSize.height);
          var s = new Vec2(t.DesignSize.width / 2 - 10, 145);
          var a = undefined;
          var c = e / i;
          if (node$9) {
            e = node$9.GetDisplayValue(e);
          }
          for (var l = this.m_odds.length - 1; l >= 0; l--) {
            if (c >= this.m_odds[l]) {
              r.level = this.m_coinEffects[l];
              if (5 == this.m_coinEffects[l]) {
                r.position = r.position ? r.position : o;
              } else {
                r.position = r.smallPosition ? r.smallPosition : r.position ? r.position : s;
              }
              if (null == r.time || r.time <= 0) {
                r.time = this.m_coinTimes[l];
              }
              if (5 == this.m_coinEffects[l]) {
                n.effectFile = this.m_winEffectFiles[l];
                n.winValue = e;
                this.SetWinType(l);
                this.ShowWinAndCoinEffect(n, r);
              } else {
                this.playCoinEffect(r);
              }
              a = this.m_soundNameByOdds[l];
              break;
            }
          }
          if (null != a) {
            this.m_nowPlaySoundID = node$f.Play(a, false);
          }
          if (null == r.time) {
            r.time = 0;
          }
          return r.time;
        };
        i.SkipEffect = function () {
          this.stopCoinEffect();
          TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var e = this.m_currentWinEffectTimeline.name;
            var i = node$k.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(e != t.FILE_PATH.BIG_WIN && e != t.FILE_PATH.MEGA_WIN && e != t.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = node$k.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = node$k.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(t.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  i = this.m_moneyRealValue.toString().indexOf(".") > -1 ? node$k.FORMAT_NUMBER_TYPE.PERMANENT_DOT : node$k.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, i);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        i.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            node$f.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        i.SetAutoCheckFloat = function (e) {
          this.m_isAutoCheckFloat = e;
        };
        i.SetOdds = function (e) {
          this.m_odds = e;
        };
        i.SetWinEffectFiles = function (e) {
          this.m_winEffectFiles = e;
        };
        i.SetAwardBoardFile = function (e) {
          this.m_awardBoardFile = e;
        };
        i.SetEffectLevels = function (e) {
          this.m_coinEffects = e;
        };
        i.SetEffectTimes = function (e) {
          this.m_coinTimes = e;
        };
        i.SetSoundNameByOdds = function (e) {
          this.m_soundNameByOdds = e;
        };
        i.SetBGMaskNode = function (e) {
          if (null != e) {
            this.m_bgMaskNode = e;
          }
        };
        i.SetWinTextFontSize = function (e) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(Label).fontSize = e;
          }
        };
        i.SetWinType = function (e) {
          this.m_winType = e;
        };
        _createClass(t, [{
          key: "CoinEffectNode",
          set: function (e) {
            this.m_coinEffectNode = e;
          }
        }]);
        return t;
      }(Node);
      EffectView.DesignSize = {
        width: 1136,
        height: 640
      };
      EffectView.SOUND_FILE = {
        COMMON_SUPER_WIN: null,
        COMMON_MEGA_WIN: null,
        COMMON_COIN_SMALL: null,
        COMMON_COIN_MEDIUM: null,
        COMMON_BIG_WIN: null
      };
      EffectView.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      EffectView.FILE_PATH = {
        BIG_WIN: "win/big_anim",
        MEGA_WIN: "win/mega_anim",
        SUPER_WIN: "win/super_anim",
        JACKPOT: "win/effect_Jackpot",
        BIG_TO_MEGA_WIN: "win/bigToMega_anim",
        BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
        FIVE_OF_A_KIND: "win/5ofa_anim"
      };
      _EffectView$WIN_EFFEC = {
        [EffectView.FILE_PATH.BIG_WIN]: "Common_big_win",
        [EffectView.FILE_PATH.MEGA_WIN]: "Common_mega_win",
        [EffectView.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [EffectView.FILE_PATH.JACKPOT]: "Common_JP_win",
        [EffectView.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [EffectView.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [EffectView.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      EffectView.WIN_EFFECT_SOUND_NAME = _EffectView$WIN_EFFEC;
      EffectView.EffectViewUIName = Enum({
        TXT_WIN_MONEY: "label_final_value",
        PARTICLE: "Particle_"
      });
      EffectView.DEFAULT_Y = 400;
      EffectView.PARTICLE_AMOUNT_MAX = 2;
      EffectView.MONEY_ROLL_TIME = 3;
      EffectView.UPDATE_MONEY_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      EffectView.COMMON_GET_COIN_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      EffectView.GET_COIN_PARTICLE_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      EffectView.ROTATE_COIN_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      EffectView.TRIAL_COIN_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      EffectView.COIN_APPEAR_PARTICLE_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      EffectView.COMMON_COIN_AMOUNT = 8;
      EffectView.ANI_LABEL = {
        ACT: "main",
        LOOP: "loop",
        ENDING: "ending"
      };
      EffectView.ANI_FRAME_EVENT = {
        MID: "AniMid",
        B_TO_M: "AniBtoM",
        M_TO_S: "AniMtoS",
        ENDING: "AniEnding",
        END: "AniEnd",
        LOOP: "AniLoop"
      };
      EffectView.EFF_ZORDER = {
        COIN_FALL: 1,
        WIN_EFFECT: 2,
        AWARD_BOARD: 3,
        COMMON_GET_COIN: 4,
        GET_TRIAL_COIN: 5
      };
      EffectView.COIN_EFFECT_LIST = {
        1: EffectView.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        2: EffectView.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        3: EffectView.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        4: EffectView.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
        5: EffectView.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        6: EffectView.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        7: EffectView.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      EffectView.WIN_TYPE = {
        BIG: 2,
        MEGA: 3,
        SUPER: 4
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var ImgType;
      !function (e) {
        e[e.PNG = 0] = "PNG";
        e[e.JPG = 1] = "JPG";
      }(ImgType || (ImgType = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var BoneName;
      !function (e) {
        e[e.default = 1] = "default";
      }(BoneName || (BoneName = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var SlotName;
      !function (e) {
        e[e.default = 1] = "default";
      }(SlotName || (SlotName = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var ZipCache = new Map();
      var ResCache = new Map();
      var ResCacheJsonVersion = new Map();
      var _ZipBundleLoader = function () {
        function e() {
          this.loadedZipNames = new Array();
        }
        var t = e.prototype;
        t.downloadZip = function (e, t) {
          return new Promise(function (i) {
            var n = e.match(/[^/]+$/);
            if (null !== n) {
              var r = "" + n[0] + t + ".zip";
              assetManager.downloader.downloadFile(e + "/" + r, {
                xhrResponseType: "arraybuffer"
              }, null, function (e, t) {
                i(t);
              });
            } else {
              i(null);
            }
          });
        };
        t.loadZip = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            var n;
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = i ? "." + i : "";
                    e.next = 3;
                    return this.downloadZip(t, n);
                  case 3:
                    if (null !== (r = e.sent)) {
                      o = t.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(r), function (e, i) {
                        if (e) {
                          console.warn("Unzip failed:", e.message);
                        } else {
                          Object.keys(i).forEach(function (e) {
                            ZipCache.set(t + "/" + e, i[e]);
                            ZipCache.set(o + "/" + e, i[e]);
                          });
                        }
                      });
                    }
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, i) {
            return e.apply(this, arguments);
          };
        }();
        t.init = function () {
          if (globalThis.fflate) {
            var e = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              get: function () {
                return this.ZipCacheUrl ? ResCache.get(this.ZipCacheUrl) : e.get.call(this);
              },
              set: function (e) {},
              configurable: true
            });
            var t = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (e, i, n, r, o) {
              function s() {
                var e = this.status >= 200 && this.status < 300 || 304 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !e && 404 != this.status && i.includes("http")) {
                  Log(701, this.status);
                  Log(702, i);
                }
                this.removeEventListener("load", s);
              }
              if (ZipCache.has(i)) {
                this.ZipCacheUrl = i;
              }
              this.addEventListener("load", s.bind(this));
              return t.apply(this, arguments);
            };
            var i = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
              var n;
              var r;
              var o;
              var s;
              var a;
              var c;
              var l;
              var p;
              return _regeneratorRuntime().wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (!this.ZipCacheUrl) {
                        e.next = 26;
                        break;
                      }
                      if (ResCache.has(this.ZipCacheUrl)) {
                        e.next = 24;
                        break;
                      }
                      n = this.responseType;
                      r = ZipCache.get(this.ZipCacheUrl);
                      o = null;
                      e.t0 = n;
                      e.next = "arraybuffer" === e.t0 ? 8 : "json" === e.t0 ? 10 : "text" === e.t0 ? 14 : 17;
                      break;
                    case 8:
                      o = r.buffer ? r.buffer : r;
                      return e.abrupt("break", 18);
                    case 10:
                      s = new TextDecoder();
                      a = s.decode(r);
                      o = JSON.parse(a);
                      return e.abrupt("break", 18);
                    case 14:
                      c = new TextDecoder();
                      o = c.decode(r);
                      return e.abrupt("break", 18);
                    case 17:
                      console.error("Unknown type in zipCache:", n);
                    case 18:
                      if (l = ResCacheJsonVersion.get(this.ZipCacheUrl)) {
                        ResCache.delete(this.ZipCacheUrl + "@version" + l);
                        ResCacheJsonVersion.delete(this.ZipCacheUrl);
                      }
                      p = performance.now();
                      ResCacheJsonVersion.set(this.ZipCacheUrl, p);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + p;
                      ResCache.set(this.ZipCacheUrl, o);
                    case 24:
                      this.onload();
                      return e.abrupt("return");
                    case 26:
                      return e.abrupt("return", i.apply(this, arguments));
                    case 27:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return e;
      }();
      function Log(e, t) {
        if (!sys.isNative) {
          var i = "https://" + window.location.host + "/";
          if (-1 == i.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(i)) {
            var n = 0;
            switch (sys.browserType) {
              case sys.BrowserType.CHROME:
                n = 1;
                break;
              case sys.BrowserType.SAFARI:
                n = 2;
                break;
              case sys.BrowserType.IE:
                n = 3;
                break;
              case sys.BrowserType.UC:
                n = 4;
                break;
              case sys.BrowserType.QQ:
              case sys.BrowserType.MOBILE_QQ:
                n = 5;
                break;
              case sys.BrowserType.FIREFOX:
                n = 6;
            }
            var r = 0;
            switch (sys.os) {
              case sys.OS.ANDROID:
                r = 1;
                break;
              case sys.OS.IOS:
                r = 2;
                break;
              case sys.OS.WINDOWS:
                r = 3;
                break;
              default:
                r = 0;
            }
            var o = GetLinkParameterByName("apiId") || "-1";
            var s = GetLinkParameterByName("ssoKey") || "1";
            var a = GetLinkParameterByName("gameID") || "-1";
            var c = "https://" + (GetLinkParameterByName("domain_platform") || GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/assetUpdate?";
            Send(c += "?AccountID=-1&GameID=" + a + "&GameVersion=" + new Date().getTime() + "&EventID=" + e + "&EventValue=" + t + "&BrowserSystem=" + n + "&DeviceSystem=" + r + "&CreateTime=" + new Date().toISOString() + "&Screen=0&SSOKey=" + s + "&ApiId=" + o + "&LogIndex=11");
          }
        }
      }
      function Send(e) {
        var t = {
          Accept: "application/json, text/javascript, text/plain"
        };
        var i = new XMLHttpRequest();
        i.open("GET", e, true);
        if (t) {
          Object.keys(t).forEach(function (e) {
            return i.setRequestHeader(e, t[e]);
          });
        }
        i.timeout = 5e3;
        i.onload = function () {};
        i.onerror = function () {};
        i.ontimeout = function () {};
        i.send();
      }
      function GetLinkParameterByName(e, t) {
        if (undefined === t) {
          t = null;
        }
        if (!t) {
          t = CheckReplayUrlAndDecode();
        }
        e = e.replace(/[[\]]/g, "\\$&");
        var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null;
      }
      function CheckReplayUrlAndDecode() {
        var e = window.location.href;
        var t = this.GetLinkParameterByName("replaydata", e);
        if (!t) {
          return e;
        }
        var i = "0".charCodeAt(0);
        var n = "9".charCodeAt(0);
        var r = "a".charCodeAt(0);
        var o = "z".charCodeAt(0);
        var s = "A".charCodeAt(0);
        var a = "Z".charCodeAt(0);
        var c = "";
        for (var l = 0; l < t.length; l++) {
          var p = t.charCodeAt(l);
          if (p >= i && p <= n) {
            p = n - (p - i);
            c += String.fromCharCode(p);
          } else if (p >= r && p <= o && l % 2 == 0) {
            p = o - (p - r);
            c += String.fromCharCode(p);
          } else if (p >= s && p <= a && l % 3 == 0) {
            p = a - (p - s);
            c += String.fromCharCode(p);
          } else {
            c += String.fromCharCode(p);
          }
        }
        var _ = e.split("replaydata=" + t);
        _.join("");
        return _ + atob(c);
      }
      var instance = globalThis.__zipBundleLoader;
      var _dec$y;
      var _dec2$u;
      var _dec3$o;
      var _dec4$l;
      var _dec5$i;
      var _dec6$f;
      var _class2$x;
      var _descriptor$t;
      var _descriptor2$l;
      var _descriptor3$l;
      var _descriptor4$h;
      var _descriptor5$f;
      var _dec7$c;
      var _dec8$b;
      var _dec9$a;
      var _class5$1;
      var _descriptor6$b;
      var _descriptor7$9;
      if (globalThis.fflate && !instance) {
        instance = new _ZipBundleLoader();
        globalThis.__zipBundleLoader = instance;
        instance.init();
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var ccclass$B = _decorator.ccclass;
      var property$w = _decorator.property;
      var BundleNo;
      !function (e) {
        e[e.CommonMainBundle = 0] = "CommonMainBundle";
        e[e.CommonBundle = 1] = "CommonBundle";
        e[e.OtherBundle = 2] = "OtherBundle";
        e[e.DefaultLangBundle = 3] = "DefaultLangBundle";
        e[e.LangTextBundle = 4] = "LangTextBundle";
        e[e.GameBundle = 5] = "GameBundle";
      }(BundleNo || (BundleNo = {}));
      var AutoplayPanelNo;
      var SeriesNo;
      !function (e) {
        e[e.None = 0] = "None";
        e[e.AutoPlaySettingPanel = 1] = "AutoPlaySettingPanel";
        e[e.AutoPlaySettingPanel_DFI = 2] = "AutoPlaySettingPanel_DFI";
        e[e.AutoPlaySettingPanel_DFIII = 3] = "AutoPlaySettingPanel_DFIII";
        e[e.AutoPlaySettingPanel_BS = 4] = "AutoPlaySettingPanel_BS";
        e[e.AutoPlaySetting_AG2 = 5] = "AutoPlaySetting_AG2";
        e[e.AutoPlaySetting_FD = 6] = "AutoPlaySetting_FD";
        e[e.AutoPlaySettingPanel_MS = 7] = "AutoPlaySettingPanel_MS";
      }(AutoplayPanelNo || (AutoplayPanelNo = {}));
      (function (e) {
        e[e.None = 0] = "None";
        e[e.Dark = 1] = "Dark";
      })(SeriesNo || (SeriesNo = {}));
      _dec$y = ccclass$B("StyleSetting");
      _dec2$u = property$w({
        type: CCBoolean,
        tooltip: "是否有骰子造型"
      });
      _dec3$o = property$w({
        type: CCBoolean,
        tooltip: "是否有萬聖造型"
      });
      _dec4$l = property$w({
        type: CCBoolean,
        tooltip: "是否有聖誕造型"
      });
      _dec5$i = property$w({
        type: CCBoolean,
        tooltip: "是否有OKBET廠商造型"
      });
      _dec6$f = property$w({
        type: Enum(SeriesNo),
        tooltip: "系列"
      });
      _class2$x = function () {
        _initializerDefineProperty(this, "HasDice", _descriptor$t, this);
        _initializerDefineProperty(this, "HasHolloween", _descriptor2$l, this);
        _initializerDefineProperty(this, "HasXmas", _descriptor3$l, this);
        _initializerDefineProperty(this, "HasOkbet", _descriptor4$h, this);
        _initializerDefineProperty(this, "Series", _descriptor5$f, this);
      };
      _descriptor$t = _applyDecoratedDescriptor(_class2$x.prototype, "HasDice", [_dec2$u], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor2$l = _applyDecoratedDescriptor(_class2$x.prototype, "HasHolloween", [_dec3$o], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor3$l = _applyDecoratedDescriptor(_class2$x.prototype, "HasXmas", [_dec4$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor4$h = _applyDecoratedDescriptor(_class2$x.prototype, "HasOkbet", [_dec5$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor5$f = _applyDecoratedDescriptor(_class2$x.prototype, "Series", [_dec6$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SeriesNo.None;
        }
      });
      _dec7$c = ccclass$B("PlayTypeSetting");
      _dec8$b = property$w({
        type: CCBoolean,
        tooltip: "Match"
      });
      _dec9$a = property$w({
        type: CCBoolean,
        tooltip: "Break"
      });
      _class5$1 = function () {
        _initializerDefineProperty(this, "Match", _descriptor6$b, this);
        _initializerDefineProperty(this, "Break", _descriptor7$9, this);
      };
      _descriptor6$b = _applyDecoratedDescriptor(_class5$1.prototype, "Match", [_dec8$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor7$9 = _applyDecoratedDescriptor(_class5$1.prototype, "Break", [_dec9$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      cclegacy._RF.pop();
    }
  };
});
(function (r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js');
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [function (_m) {
        var _exportObj = {};
        for (var _key in _m) {
          if (_key !== "default" && _key !== "__esModule") {
            _exportObj[_key] = _m[_key];
          }
        }
        _export(_exportObj);
      }],
      execute: function () {}
    };
  });
});