System.register('chunks:///game.js', ["./minimal-1613abea.js"], function (_0x3c7324, _0x2854a7) {
  'use strict';

  var _0x4a8f3c;
  var _0x5f2708;
  return {
    'setters': [function (_0x1b0af5) {
      _0x4a8f3c = _0x1b0af5.l;
      _0x5f2708 = _0x1b0af5._;
    }],
    'execute': function () {
      _0x4a8f3c.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/TripleCoinTreasure2/Client/Thai_UAT/assets/game/Script/Proto/js/tct2proto.js", function (_0x4aac0f, _0x2d323d, _0x4bba9d, _0x232f6d, _0x402032) {
        var _0xb8ea35;
        var _0x5231ed = _0x2d323d("protobufjs/minimal");
        var _0x10b00c = _0x5231ed.Reader;
        var _0x29544e = _0x5231ed.Writer;
        var _0x4c69c5 = _0x5231ed.util;
        var _0x6f3a94 = _0x5231ed.roots['default'] || (_0x5231ed.roots["default"] = {});
        (_0xb8ea35 = {
          "CColumn": function () {
            function _0x4470d9(_0x5f0454) {
              this.Col = [];
              if (_0x5f0454) {
                var _0x306256 = Object.keys(_0x5f0454);
                for (var _0x32c789 = 0x0; _0x32c789 < _0x306256.length; ++_0x32c789) {
                  if (null != _0x5f0454[_0x306256[_0x32c789]]) {
                    this[_0x306256[_0x32c789]] = _0x5f0454[_0x306256[_0x32c789]];
                  }
                }
              }
            }
            _0x4470d9.prototype.Col = _0x4c69c5.emptyArray;
            _0x4470d9.create = function (_0x330cbd) {
              return new _0x4470d9(_0x330cbd);
            };
            _0x4470d9.encode = function (_0x1f6d79, _0x205a8) {
              if (!_0x205a8) {
                _0x205a8 = _0x29544e.create();
              }
              if (null != _0x1f6d79.Col && _0x1f6d79.Col.length) {
                for (var _0x1a7d36 = 0x0; _0x1a7d36 < _0x1f6d79.Col.length; ++_0x1a7d36) {
                  _0x6f3a94.tct2Proto.CSymbol.encode(_0x1f6d79.Col[_0x1a7d36], _0x205a8.uint32(0xa).fork()).ldelim();
                }
              }
              return _0x205a8;
            };
            _0x4470d9.encodeDelimited = function (_0x4104ac, _0x5c1fec) {
              return this.encode(_0x4104ac, _0x5c1fec).ldelim();
            };
            _0x4470d9.decode = function (_0x4a5ca1, _0x168227) {
              if (!(_0x4a5ca1 instanceof _0x10b00c)) {
                _0x4a5ca1 = _0x10b00c.create(_0x4a5ca1);
              }
              var _0x149c18 = undefined === _0x168227 ? _0x4a5ca1.len : _0x4a5ca1.pos + _0x168227;
              for (var _0x46f480 = new _0x6f3a94.tct2Proto.CColumn(); _0x4a5ca1.pos < _0x149c18;) {
                var _0x2eb70c = _0x4a5ca1.uint32();
                switch (_0x2eb70c >>> 0x3) {
                  case 0x1:
                    if (!(_0x46f480.Col && _0x46f480.Col.length)) {
                      _0x46f480.Col = [];
                    }
                    _0x46f480.Col.push(_0x6f3a94.tct2Proto.CSymbol.decode(_0x4a5ca1, _0x4a5ca1.uint32()));
                    break;
                  default:
                    _0x4a5ca1.skipType(0x7 & _0x2eb70c);
                }
              }
              return _0x46f480;
            };
            _0x4470d9.decodeDelimited = function (_0x21d15a) {
              if (!(_0x21d15a instanceof _0x10b00c)) {
                _0x21d15a = new _0x10b00c(_0x21d15a);
              }
              return this.decode(_0x21d15a, _0x21d15a.uint32());
            };
            _0x4470d9.verify = function (_0x1a174f) {
              if ("object" != typeof _0x1a174f || null === _0x1a174f) {
                return "object expected";
              }
              if (null != _0x1a174f.Col && _0x1a174f.hasOwnProperty("Col")) {
                if (!Array.isArray(_0x1a174f.Col)) {
                  return "Col: array expected";
                }
                for (var _0x379a3b = 0x0; _0x379a3b < _0x1a174f.Col.length; ++_0x379a3b) {
                  var _0x2dd1f1 = _0x6f3a94.tct2Proto.CSymbol.verify(_0x1a174f.Col[_0x379a3b]);
                  if (_0x2dd1f1) {
                    return "Col." + _0x2dd1f1;
                  }
                }
              }
              return null;
            };
            _0x4470d9.fromObject = function (_0x12acc0) {
              if (_0x12acc0 instanceof _0x6f3a94.tct2Proto.CColumn) {
                return _0x12acc0;
              }
              var _0x41b052 = new _0x6f3a94.tct2Proto.CColumn();
              if (_0x12acc0.Col) {
                if (!Array.isArray(_0x12acc0.Col)) {
                  throw TypeError(".tct2Proto.CColumn.Col: array expected");
                }
                _0x41b052.Col = [];
                for (var _0x5a28be = 0x0; _0x5a28be < _0x12acc0.Col.length; ++_0x5a28be) {
                  if ("object" != typeof _0x12acc0.Col[_0x5a28be]) {
                    throw TypeError(".tct2Proto.CColumn.Col: object expected");
                  }
                  _0x41b052.Col[_0x5a28be] = _0x6f3a94.tct2Proto.CSymbol.fromObject(_0x12acc0.Col[_0x5a28be]);
                }
              }
              return _0x41b052;
            };
            _0x4470d9.toObject = function (_0x3e75f2, _0x240d1e) {
              if (!_0x240d1e) {
                _0x240d1e = {};
              }
              var _0x20276a = {};
              if (_0x240d1e.arrays || _0x240d1e.defaults) {
                _0x20276a.Col = [];
              }
              if (_0x3e75f2.Col && _0x3e75f2.Col.length) {
                _0x20276a.Col = [];
                for (var _0x3fb493 = 0x0; _0x3fb493 < _0x3e75f2.Col.length; ++_0x3fb493) {
                  _0x20276a.Col[_0x3fb493] = _0x6f3a94.tct2Proto.CSymbol.toObject(_0x3e75f2.Col[_0x3fb493], _0x240d1e);
                }
              }
              return _0x20276a;
            };
            _0x4470d9.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x4470d9.getTypeUrl = function (_0x1bb017) {
              if (undefined === _0x1bb017) {
                _0x1bb017 = "type.googleapis.com";
              }
              return _0x1bb017 + "/tct2Proto.CColumn";
            };
            return _0x4470d9;
          }(),
          FreePlateCSymbolData: function () {
            function _0x1ac718(_0x143201) {
              this.FPSD = [];
              if (_0x143201) {
                var _0x38b3ce = Object.keys(_0x143201);
                for (var _0xc3a81a = 0x0; _0xc3a81a < _0x38b3ce.length; ++_0xc3a81a) {
                  if (null != _0x143201[_0x38b3ce[_0xc3a81a]]) {
                    this[_0x38b3ce[_0xc3a81a]] = _0x143201[_0x38b3ce[_0xc3a81a]];
                  }
                }
              }
            }
            _0x1ac718.prototype.FPSD = _0x4c69c5.emptyArray;
            _0x1ac718.create = function (_0x225a39) {
              return new _0x1ac718(_0x225a39);
            };
            _0x1ac718.encode = function (_0x2aaa76, _0x295bc5) {
              if (!_0x295bc5) {
                _0x295bc5 = _0x29544e.create();
              }
              if (null != _0x2aaa76.FPSD && _0x2aaa76.FPSD.length) {
                for (var _0x22c977 = 0x0; _0x22c977 < _0x2aaa76.FPSD.length; ++_0x22c977) {
                  _0x6f3a94.tct2Proto.CColumn.encode(_0x2aaa76.FPSD[_0x22c977], _0x295bc5.uint32(0xa).fork()).ldelim();
                }
              }
              return _0x295bc5;
            };
            _0x1ac718.encodeDelimited = function (_0x488bf7, _0x27796b) {
              return this.encode(_0x488bf7, _0x27796b).ldelim();
            };
            _0x1ac718.decode = function (_0x175dc8, _0x4b9f09) {
              if (!(_0x175dc8 instanceof _0x10b00c)) {
                _0x175dc8 = _0x10b00c.create(_0x175dc8);
              }
              var _0x16404e = undefined === _0x4b9f09 ? _0x175dc8.len : _0x175dc8.pos + _0x4b9f09;
              for (var _0x507a8a = new _0x6f3a94.tct2Proto.FreePlateCSymbolData(); _0x175dc8.pos < _0x16404e;) {
                var _0x4f4092 = _0x175dc8.uint32();
                switch (_0x4f4092 >>> 0x3) {
                  case 0x1:
                    if (!(_0x507a8a.FPSD && _0x507a8a.FPSD.length)) {
                      _0x507a8a.FPSD = [];
                    }
                    _0x507a8a.FPSD.push(_0x6f3a94.tct2Proto.CColumn.decode(_0x175dc8, _0x175dc8.uint32()));
                    break;
                  default:
                    _0x175dc8.skipType(0x7 & _0x4f4092);
                }
              }
              return _0x507a8a;
            };
            _0x1ac718.decodeDelimited = function (_0xe0e2a) {
              if (!(_0xe0e2a instanceof _0x10b00c)) {
                _0xe0e2a = new _0x10b00c(_0xe0e2a);
              }
              return this.decode(_0xe0e2a, _0xe0e2a.uint32());
            };
            _0x1ac718.verify = function (_0x5c9cf4) {
              if ("object" != typeof _0x5c9cf4 || null === _0x5c9cf4) {
                return "object expected";
              }
              if (null != _0x5c9cf4.FPSD && _0x5c9cf4.hasOwnProperty('FPSD')) {
                if (!Array.isArray(_0x5c9cf4.FPSD)) {
                  return "FPSD: array expected";
                }
                for (var _0xb5cd2c = 0x0; _0xb5cd2c < _0x5c9cf4.FPSD.length; ++_0xb5cd2c) {
                  var _0x422f1b = _0x6f3a94.tct2Proto.CColumn.verify(_0x5c9cf4.FPSD[_0xb5cd2c]);
                  if (_0x422f1b) {
                    return 'FPSD.' + _0x422f1b;
                  }
                }
              }
              return null;
            };
            _0x1ac718.fromObject = function (_0x3c2a78) {
              if (_0x3c2a78 instanceof _0x6f3a94.tct2Proto.FreePlateCSymbolData) {
                return _0x3c2a78;
              }
              var _0x2f71eb = new _0x6f3a94.tct2Proto.FreePlateCSymbolData();
              if (_0x3c2a78.FPSD) {
                if (!Array.isArray(_0x3c2a78.FPSD)) {
                  throw TypeError(".tct2Proto.FreePlateCSymbolData.FPSD: array expected");
                }
                _0x2f71eb.FPSD = [];
                for (var _0x37a937 = 0x0; _0x37a937 < _0x3c2a78.FPSD.length; ++_0x37a937) {
                  if ("object" != typeof _0x3c2a78.FPSD[_0x37a937]) {
                    throw TypeError(".tct2Proto.FreePlateCSymbolData.FPSD: object expected");
                  }
                  _0x2f71eb.FPSD[_0x37a937] = _0x6f3a94.tct2Proto.CColumn.fromObject(_0x3c2a78.FPSD[_0x37a937]);
                }
              }
              return _0x2f71eb;
            };
            _0x1ac718.toObject = function (_0x89d38b, _0x1b9b2a) {
              if (!_0x1b9b2a) {
                _0x1b9b2a = {};
              }
              var _0x4fabc4 = {};
              if (_0x1b9b2a.arrays || _0x1b9b2a.defaults) {
                _0x4fabc4.FPSD = [];
              }
              if (_0x89d38b.FPSD && _0x89d38b.FPSD.length) {
                _0x4fabc4.FPSD = [];
                for (var _0x2d9823 = 0x0; _0x2d9823 < _0x89d38b.FPSD.length; ++_0x2d9823) {
                  _0x4fabc4.FPSD[_0x2d9823] = _0x6f3a94.tct2Proto.CColumn.toObject(_0x89d38b.FPSD[_0x2d9823], _0x1b9b2a);
                }
              }
              return _0x4fabc4;
            };
            _0x1ac718.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x1ac718.getTypeUrl = function (_0x280c4b) {
              if (undefined === _0x280c4b) {
                _0x280c4b = 'type.googleapis.com';
              }
              return _0x280c4b + "/tct2Proto.FreePlateCSymbolData";
            };
            return _0x1ac718;
          }(),
          CSymbol: function () {
            function _0xdf0a54(_0x40c039) {
              if (_0x40c039) {
                var _0x2859f6 = Object.keys(_0x40c039);
                for (var _0x45e1d9 = 0x0; _0x45e1d9 < _0x2859f6.length; ++_0x45e1d9) {
                  if (null != _0x40c039[_0x2859f6[_0x45e1d9]]) {
                    this[_0x2859f6[_0x45e1d9]] = _0x40c039[_0x2859f6[_0x45e1d9]];
                  }
                }
              }
            }
            _0xdf0a54.prototype.Symbol = 0x0;
            _0xdf0a54.prototype.JPState = 0x0;
            _0xdf0a54.prototype.JPMult = 0x0;
            _0xdf0a54.prototype.Number = 0x0;
            _0xdf0a54.create = function (_0x22e2f2) {
              return new _0xdf0a54(_0x22e2f2);
            };
            _0xdf0a54.encode = function (_0x39fb7d, _0x45e11b) {
              if (!_0x45e11b) {
                _0x45e11b = _0x29544e.create();
              }
              if (null != _0x39fb7d.Symbol && Object.hasOwnProperty.call(_0x39fb7d, "Symbol")) {
                _0x45e11b.uint32(0x8).int32(_0x39fb7d.Symbol);
              }
              if (null != _0x39fb7d.JPState && Object.hasOwnProperty.call(_0x39fb7d, "JPState")) {
                _0x45e11b.uint32(0x10).int32(_0x39fb7d.JPState);
              }
              if (null != _0x39fb7d.JPMult && Object.hasOwnProperty.call(_0x39fb7d, "JPMult")) {
                _0x45e11b.uint32(0x18).int32(_0x39fb7d.JPMult);
              }
              if (null != _0x39fb7d.Number && Object.hasOwnProperty.call(_0x39fb7d, 'Number')) {
                _0x45e11b.uint32(0x21).double(_0x39fb7d.Number);
              }
              return _0x45e11b;
            };
            _0xdf0a54.encodeDelimited = function (_0x53bdcd, _0x175a82) {
              return this.encode(_0x53bdcd, _0x175a82).ldelim();
            };
            _0xdf0a54.decode = function (_0x47746f, _0x3642c4) {
              if (!(_0x47746f instanceof _0x10b00c)) {
                _0x47746f = _0x10b00c.create(_0x47746f);
              }
              var _0x9ac402 = undefined === _0x3642c4 ? _0x47746f.len : _0x47746f.pos + _0x3642c4;
              for (var _0x92844f = new _0x6f3a94.tct2Proto.CSymbol(); _0x47746f.pos < _0x9ac402;) {
                var _0x5b78e6 = _0x47746f.uint32();
                switch (_0x5b78e6 >>> 0x3) {
                  case 0x1:
                    _0x92844f.Symbol = _0x47746f.int32();
                    break;
                  case 0x2:
                    _0x92844f.JPState = _0x47746f.int32();
                    break;
                  case 0x3:
                    _0x92844f.JPMult = _0x47746f.int32();
                    break;
                  case 0x4:
                    _0x92844f.Number = _0x47746f.double();
                    break;
                  default:
                    _0x47746f.skipType(0x7 & _0x5b78e6);
                }
              }
              return _0x92844f;
            };
            _0xdf0a54.decodeDelimited = function (_0xc40367) {
              if (!(_0xc40367 instanceof _0x10b00c)) {
                _0xc40367 = new _0x10b00c(_0xc40367);
              }
              return this.decode(_0xc40367, _0xc40367.uint32());
            };
            _0xdf0a54.verify = function (_0x293bb0) {
              return "object" != typeof _0x293bb0 || null === _0x293bb0 ? "object expected" : null != _0x293bb0.Symbol && _0x293bb0.hasOwnProperty('Symbol') && !_0x4c69c5.isInteger(_0x293bb0.Symbol) ? "Symbol: integer expected" : null != _0x293bb0.JPState && _0x293bb0.hasOwnProperty("JPState") && !_0x4c69c5.isInteger(_0x293bb0.JPState) ? "JPState: integer expected" : null != _0x293bb0.JPMult && _0x293bb0.hasOwnProperty("JPMult") && !_0x4c69c5.isInteger(_0x293bb0.JPMult) ? "JPMult: integer expected" : null != _0x293bb0.Number && _0x293bb0.hasOwnProperty("Number") && 'number' != typeof _0x293bb0.Number ? "Number: number expected" : null;
            };
            _0xdf0a54.fromObject = function (_0x49a658) {
              if (_0x49a658 instanceof _0x6f3a94.tct2Proto.CSymbol) {
                return _0x49a658;
              }
              var _0x578bfe = new _0x6f3a94.tct2Proto.CSymbol();
              if (null != _0x49a658.Symbol) {
                _0x578bfe.Symbol = 0x0 | _0x49a658.Symbol;
              }
              if (null != _0x49a658.JPState) {
                _0x578bfe.JPState = 0x0 | _0x49a658.JPState;
              }
              if (null != _0x49a658.JPMult) {
                _0x578bfe.JPMult = 0x0 | _0x49a658.JPMult;
              }
              if (null != _0x49a658.Number) {
                _0x578bfe.Number = Number(_0x49a658.Number);
              }
              return _0x578bfe;
            };
            _0xdf0a54.toObject = function (_0x4025f9, _0xcabb79) {
              if (!_0xcabb79) {
                _0xcabb79 = {};
              }
              var _0x1300cd = {};
              if (_0xcabb79.defaults) {
                _0x1300cd.Symbol = 0x0;
                _0x1300cd.JPState = 0x0;
                _0x1300cd.JPMult = 0x0;
                _0x1300cd.Number = 0x0;
              }
              if (null != _0x4025f9.Symbol && _0x4025f9.hasOwnProperty("Symbol")) {
                _0x1300cd.Symbol = _0x4025f9.Symbol;
              }
              if (null != _0x4025f9.JPState && _0x4025f9.hasOwnProperty('JPState')) {
                _0x1300cd.JPState = _0x4025f9.JPState;
              }
              if (null != _0x4025f9.JPMult && _0x4025f9.hasOwnProperty("JPMult")) {
                _0x1300cd.JPMult = _0x4025f9.JPMult;
              }
              if (null != _0x4025f9.Number && _0x4025f9.hasOwnProperty("Number")) {
                _0x1300cd.Number = _0xcabb79.json && !isFinite(_0x4025f9.Number) ? String(_0x4025f9.Number) : _0x4025f9.Number;
              }
              return _0x1300cd;
            };
            _0xdf0a54.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0xdf0a54.getTypeUrl = function (_0x2318ad) {
              if (undefined === _0x2318ad) {
                _0x2318ad = "type.googleapis.com";
              }
              return _0x2318ad + "/tct2Proto.CSymbol";
            };
            return _0xdf0a54;
          }(),
          "AwardData": function () {
            function _0xe9a1ed(_0x48f096) {
              if (_0x48f096) {
                var _0x4b51b6 = Object.keys(_0x48f096);
                for (var _0xa490df = 0x0; _0xa490df < _0x4b51b6.length; ++_0xa490df) {
                  if (null != _0x48f096[_0x4b51b6[_0xa490df]]) {
                    this[_0x4b51b6[_0xa490df]] = _0x48f096[_0x4b51b6[_0xa490df]];
                  }
                }
              }
            }
            _0xe9a1ed.prototype.Symbol = 0x0;
            _0xe9a1ed.prototype.Count = 0x0;
            _0xe9a1ed.prototype.Line = 0x0;
            _0xe9a1ed.prototype.Win = 0x0;
            _0xe9a1ed.create = function (_0xe4930b) {
              return new _0xe9a1ed(_0xe4930b);
            };
            _0xe9a1ed.encode = function (_0x16c0e6, _0x60323a) {
              if (!_0x60323a) {
                _0x60323a = _0x29544e.create();
              }
              if (null != _0x16c0e6.Symbol && Object.hasOwnProperty.call(_0x16c0e6, "Symbol")) {
                _0x60323a.uint32(0x8).int32(_0x16c0e6.Symbol);
              }
              if (null != _0x16c0e6.Count && Object.hasOwnProperty.call(_0x16c0e6, "Count")) {
                _0x60323a.uint32(0x10).int32(_0x16c0e6.Count);
              }
              if (null != _0x16c0e6.Line && Object.hasOwnProperty.call(_0x16c0e6, "Line")) {
                _0x60323a.uint32(0x18).int32(_0x16c0e6.Line);
              }
              if (null != _0x16c0e6.Win && Object.hasOwnProperty.call(_0x16c0e6, 'Win')) {
                _0x60323a.uint32(0x21).double(_0x16c0e6.Win);
              }
              return _0x60323a;
            };
            _0xe9a1ed.encodeDelimited = function (_0x3106c3, _0x2ec2e1) {
              return this.encode(_0x3106c3, _0x2ec2e1).ldelim();
            };
            _0xe9a1ed.decode = function (_0x52164c, _0x517a11) {
              if (!(_0x52164c instanceof _0x10b00c)) {
                _0x52164c = _0x10b00c.create(_0x52164c);
              }
              var _0x3a9207 = undefined === _0x517a11 ? _0x52164c.len : _0x52164c.pos + _0x517a11;
              for (var _0x4d1a79 = new _0x6f3a94.tct2Proto.AwardData(); _0x52164c.pos < _0x3a9207;) {
                var _0x1f6c98 = _0x52164c.uint32();
                switch (_0x1f6c98 >>> 0x3) {
                  case 0x1:
                    _0x4d1a79.Symbol = _0x52164c.int32();
                    break;
                  case 0x2:
                    _0x4d1a79.Count = _0x52164c.int32();
                    break;
                  case 0x3:
                    _0x4d1a79.Line = _0x52164c.int32();
                    break;
                  case 0x4:
                    _0x4d1a79.Win = _0x52164c.double();
                    break;
                  default:
                    _0x52164c.skipType(0x7 & _0x1f6c98);
                }
              }
              return _0x4d1a79;
            };
            _0xe9a1ed.decodeDelimited = function (_0x52d49c) {
              if (!(_0x52d49c instanceof _0x10b00c)) {
                _0x52d49c = new _0x10b00c(_0x52d49c);
              }
              return this.decode(_0x52d49c, _0x52d49c.uint32());
            };
            _0xe9a1ed.verify = function (_0x7d91) {
              return "object" != typeof _0x7d91 || null === _0x7d91 ? "object expected" : null != _0x7d91.Symbol && _0x7d91.hasOwnProperty("Symbol") && !_0x4c69c5.isInteger(_0x7d91.Symbol) ? "Symbol: integer expected" : null != _0x7d91.Count && _0x7d91.hasOwnProperty("Count") && !_0x4c69c5.isInteger(_0x7d91.Count) ? "Count: integer expected" : null != _0x7d91.Line && _0x7d91.hasOwnProperty("Line") && !_0x4c69c5.isInteger(_0x7d91.Line) ? "Line: integer expected" : null != _0x7d91.Win && _0x7d91.hasOwnProperty("Win") && "number" != typeof _0x7d91.Win ? "Win: number expected" : null;
            };
            _0xe9a1ed.fromObject = function (_0x44aa3f) {
              if (_0x44aa3f instanceof _0x6f3a94.tct2Proto.AwardData) {
                return _0x44aa3f;
              }
              var _0x22e82f = new _0x6f3a94.tct2Proto.AwardData();
              if (null != _0x44aa3f.Symbol) {
                _0x22e82f.Symbol = 0x0 | _0x44aa3f.Symbol;
              }
              if (null != _0x44aa3f.Count) {
                _0x22e82f.Count = 0x0 | _0x44aa3f.Count;
              }
              if (null != _0x44aa3f.Line) {
                _0x22e82f.Line = 0x0 | _0x44aa3f.Line;
              }
              if (null != _0x44aa3f.Win) {
                _0x22e82f.Win = Number(_0x44aa3f.Win);
              }
              return _0x22e82f;
            };
            _0xe9a1ed.toObject = function (_0x5014d5, _0x2e15ee) {
              if (!_0x2e15ee) {
                _0x2e15ee = {};
              }
              var _0x4d6e9f = {};
              if (_0x2e15ee.defaults) {
                _0x4d6e9f.Symbol = 0x0;
                _0x4d6e9f.Count = 0x0;
                _0x4d6e9f.Line = 0x0;
                _0x4d6e9f.Win = 0x0;
              }
              if (null != _0x5014d5.Symbol && _0x5014d5.hasOwnProperty("Symbol")) {
                _0x4d6e9f.Symbol = _0x5014d5.Symbol;
              }
              if (null != _0x5014d5.Count && _0x5014d5.hasOwnProperty("Count")) {
                _0x4d6e9f.Count = _0x5014d5.Count;
              }
              if (null != _0x5014d5.Line && _0x5014d5.hasOwnProperty("Line")) {
                _0x4d6e9f.Line = _0x5014d5.Line;
              }
              if (null != _0x5014d5.Win && _0x5014d5.hasOwnProperty("Win")) {
                _0x4d6e9f.Win = _0x2e15ee.json && !isFinite(_0x5014d5.Win) ? String(_0x5014d5.Win) : _0x5014d5.Win;
              }
              return _0x4d6e9f;
            };
            _0xe9a1ed.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0xe9a1ed.getTypeUrl = function (_0x9538d4) {
              if (undefined === _0x9538d4) {
                _0x9538d4 = "type.googleapis.com";
              }
              return _0x9538d4 + '/tct2Proto.AwardData';
            };
            return _0xe9a1ed;
          }(),
          FeatureEffect: function () {
            function _0x2456af(_0x30315a) {
              this.EffectPos = [];
              if (_0x30315a) {
                var _0x1584cb = Object.keys(_0x30315a);
                for (var _0x360143 = 0x0; _0x360143 < _0x1584cb.length; ++_0x360143) {
                  if (null != _0x30315a[_0x1584cb[_0x360143]]) {
                    this[_0x1584cb[_0x360143]] = _0x30315a[_0x1584cb[_0x360143]];
                  }
                }
              }
            }
            _0x2456af.prototype.ScatterPos = 0x0;
            _0x2456af.prototype.EffectPos = _0x4c69c5.emptyArray;
            _0x2456af.prototype.JPState = 0x0;
            _0x2456af.prototype.Number = 0x0;
            _0x2456af.create = function (_0x124a4d) {
              return new _0x2456af(_0x124a4d);
            };
            _0x2456af.encode = function (_0xca0411, _0x2cc950) {
              if (!_0x2cc950) {
                _0x2cc950 = _0x29544e.create();
              }
              if (null != _0xca0411.ScatterPos && Object.hasOwnProperty.call(_0xca0411, "ScatterPos")) {
                _0x2cc950.uint32(0x8).int32(_0xca0411.ScatterPos);
              }
              if (null != _0xca0411.EffectPos && _0xca0411.EffectPos.length) {
                _0x2cc950.uint32(0x12).fork();
                for (var _0x310681 = 0x0; _0x310681 < _0xca0411.EffectPos.length; ++_0x310681) {
                  _0x2cc950.int32(_0xca0411.EffectPos[_0x310681]);
                }
                _0x2cc950.ldelim();
              }
              if (null != _0xca0411.JPState && Object.hasOwnProperty.call(_0xca0411, "JPState")) {
                _0x2cc950.uint32(0x18).int32(_0xca0411.JPState);
              }
              if (null != _0xca0411.Number && Object.hasOwnProperty.call(_0xca0411, "Number")) {
                _0x2cc950.uint32(0x21).double(_0xca0411.Number);
              }
              return _0x2cc950;
            };
            _0x2456af.encodeDelimited = function (_0x49ced6, _0x2d9242) {
              return this.encode(_0x49ced6, _0x2d9242).ldelim();
            };
            _0x2456af.decode = function (_0xea8ef9, _0x4e60e1) {
              if (!(_0xea8ef9 instanceof _0x10b00c)) {
                _0xea8ef9 = _0x10b00c.create(_0xea8ef9);
              }
              var _0x253825 = undefined === _0x4e60e1 ? _0xea8ef9.len : _0xea8ef9.pos + _0x4e60e1;
              for (var _0x2e1388 = new _0x6f3a94.tct2Proto.FeatureEffect(); _0xea8ef9.pos < _0x253825;) {
                var _0x480e7d = _0xea8ef9.uint32();
                switch (_0x480e7d >>> 0x3) {
                  case 0x1:
                    _0x2e1388.ScatterPos = _0xea8ef9.int32();
                    break;
                  case 0x2:
                    if (!(_0x2e1388.EffectPos && _0x2e1388.EffectPos.length)) {
                      _0x2e1388.EffectPos = [];
                    }
                    if (0x2 == (0x7 & _0x480e7d)) {
                      for (var _0xfee58d = _0xea8ef9.uint32() + _0xea8ef9.pos; _0xea8ef9.pos < _0xfee58d;) {
                        _0x2e1388.EffectPos.push(_0xea8ef9.int32());
                      }
                    } else {
                      _0x2e1388.EffectPos.push(_0xea8ef9.int32());
                    }
                    break;
                  case 0x3:
                    _0x2e1388.JPState = _0xea8ef9.int32();
                    break;
                  case 0x4:
                    _0x2e1388.Number = _0xea8ef9.double();
                    break;
                  default:
                    _0xea8ef9.skipType(0x7 & _0x480e7d);
                }
              }
              return _0x2e1388;
            };
            _0x2456af.decodeDelimited = function (_0x29eb31) {
              if (!(_0x29eb31 instanceof _0x10b00c)) {
                _0x29eb31 = new _0x10b00c(_0x29eb31);
              }
              return this.decode(_0x29eb31, _0x29eb31.uint32());
            };
            _0x2456af.verify = function (_0x2d69eb) {
              if ("object" != typeof _0x2d69eb || null === _0x2d69eb) {
                return "object expected";
              }
              if (null != _0x2d69eb.ScatterPos && _0x2d69eb.hasOwnProperty("ScatterPos") && !_0x4c69c5.isInteger(_0x2d69eb.ScatterPos)) {
                return "ScatterPos: integer expected";
              }
              if (null != _0x2d69eb.EffectPos && _0x2d69eb.hasOwnProperty("EffectPos")) {
                if (!Array.isArray(_0x2d69eb.EffectPos)) {
                  return "EffectPos: array expected";
                }
                for (var _0x424249 = 0x0; _0x424249 < _0x2d69eb.EffectPos.length; ++_0x424249) {
                  if (!_0x4c69c5.isInteger(_0x2d69eb.EffectPos[_0x424249])) {
                    return "EffectPos: integer[] expected";
                  }
                }
              }
              return null != _0x2d69eb.JPState && _0x2d69eb.hasOwnProperty('JPState') && !_0x4c69c5.isInteger(_0x2d69eb.JPState) ? "JPState: integer expected" : null != _0x2d69eb.Number && _0x2d69eb.hasOwnProperty("Number") && "number" != typeof _0x2d69eb.Number ? "Number: number expected" : null;
            };
            _0x2456af.fromObject = function (_0x5f625f) {
              if (_0x5f625f instanceof _0x6f3a94.tct2Proto.FeatureEffect) {
                return _0x5f625f;
              }
              var _0x3c8700 = new _0x6f3a94.tct2Proto.FeatureEffect();
              if (null != _0x5f625f.ScatterPos) {
                _0x3c8700.ScatterPos = 0x0 | _0x5f625f.ScatterPos;
              }
              if (_0x5f625f.EffectPos) {
                if (!Array.isArray(_0x5f625f.EffectPos)) {
                  throw TypeError(".tct2Proto.FeatureEffect.EffectPos: array expected");
                }
                _0x3c8700.EffectPos = [];
                for (var _0x40307a = 0x0; _0x40307a < _0x5f625f.EffectPos.length; ++_0x40307a) {
                  _0x3c8700.EffectPos[_0x40307a] = 0x0 | _0x5f625f.EffectPos[_0x40307a];
                }
              }
              if (null != _0x5f625f.JPState) {
                _0x3c8700.JPState = 0x0 | _0x5f625f.JPState;
              }
              if (null != _0x5f625f.Number) {
                _0x3c8700.Number = Number(_0x5f625f.Number);
              }
              return _0x3c8700;
            };
            _0x2456af.toObject = function (_0x57755d, _0x144360) {
              if (!_0x144360) {
                _0x144360 = {};
              }
              var _0x319044 = {};
              if (_0x144360.arrays || _0x144360.defaults) {
                _0x319044.EffectPos = [];
              }
              if (_0x144360.defaults) {
                _0x319044.ScatterPos = 0x0;
                _0x319044.JPState = 0x0;
                _0x319044.Number = 0x0;
              }
              if (null != _0x57755d.ScatterPos && _0x57755d.hasOwnProperty("ScatterPos")) {
                _0x319044.ScatterPos = _0x57755d.ScatterPos;
              }
              if (_0x57755d.EffectPos && _0x57755d.EffectPos.length) {
                _0x319044.EffectPos = [];
                for (var _0x17f8ec = 0x0; _0x17f8ec < _0x57755d.EffectPos.length; ++_0x17f8ec) {
                  _0x319044.EffectPos[_0x17f8ec] = _0x57755d.EffectPos[_0x17f8ec];
                }
              }
              if (null != _0x57755d.JPState && _0x57755d.hasOwnProperty('JPState')) {
                _0x319044.JPState = _0x57755d.JPState;
              }
              if (null != _0x57755d.Number && _0x57755d.hasOwnProperty("Number")) {
                _0x319044.Number = _0x144360.json && !isFinite(_0x57755d.Number) ? String(_0x57755d.Number) : _0x57755d.Number;
              }
              return _0x319044;
            };
            _0x2456af.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x2456af.getTypeUrl = function (_0x58f069) {
              if (undefined === _0x58f069) {
                _0x58f069 = "type.googleapis.com";
              }
              return _0x58f069 + "/tct2Proto.FeatureEffect";
            };
            return _0x2456af;
          }(),
          FeatureEffectData: function () {
            function _0x174619(_0x5d1f40) {
              this.FED = [];
              if (_0x5d1f40) {
                var _0x3b7b95 = Object.keys(_0x5d1f40);
                for (var _0x1faa88 = 0x0; _0x1faa88 < _0x3b7b95.length; ++_0x1faa88) {
                  if (null != _0x5d1f40[_0x3b7b95[_0x1faa88]]) {
                    this[_0x3b7b95[_0x1faa88]] = _0x5d1f40[_0x3b7b95[_0x1faa88]];
                  }
                }
              }
            }
            _0x174619.prototype.FED = _0x4c69c5.emptyArray;
            _0x174619.create = function (_0x299b7) {
              return new _0x174619(_0x299b7);
            };
            _0x174619.encode = function (_0x444646, _0x16df1a) {
              if (!_0x16df1a) {
                _0x16df1a = _0x29544e.create();
              }
              if (null != _0x444646.FED && _0x444646.FED.length) {
                for (var _0x296636 = 0x0; _0x296636 < _0x444646.FED.length; ++_0x296636) {
                  _0x6f3a94.tct2Proto.FeatureEffect.encode(_0x444646.FED[_0x296636], _0x16df1a.uint32(0xa).fork()).ldelim();
                }
              }
              return _0x16df1a;
            };
            _0x174619.encodeDelimited = function (_0x4f57d8, _0x3bb9c9) {
              return this.encode(_0x4f57d8, _0x3bb9c9).ldelim();
            };
            _0x174619.decode = function (_0x1f5062, _0x4b5332) {
              if (!(_0x1f5062 instanceof _0x10b00c)) {
                _0x1f5062 = _0x10b00c.create(_0x1f5062);
              }
              var _0x2e3f9f = undefined === _0x4b5332 ? _0x1f5062.len : _0x1f5062.pos + _0x4b5332;
              for (var _0xc5aa26 = new _0x6f3a94.tct2Proto.FeatureEffectData(); _0x1f5062.pos < _0x2e3f9f;) {
                var _0x5a5cdb = _0x1f5062.uint32();
                switch (_0x5a5cdb >>> 0x3) {
                  case 0x1:
                    if (!(_0xc5aa26.FED && _0xc5aa26.FED.length)) {
                      _0xc5aa26.FED = [];
                    }
                    _0xc5aa26.FED.push(_0x6f3a94.tct2Proto.FeatureEffect.decode(_0x1f5062, _0x1f5062.uint32()));
                    break;
                  default:
                    _0x1f5062.skipType(0x7 & _0x5a5cdb);
                }
              }
              return _0xc5aa26;
            };
            _0x174619.decodeDelimited = function (_0x427ab4) {
              if (!(_0x427ab4 instanceof _0x10b00c)) {
                _0x427ab4 = new _0x10b00c(_0x427ab4);
              }
              return this.decode(_0x427ab4, _0x427ab4.uint32());
            };
            _0x174619.verify = function (_0x1da5e9) {
              if ('object' != typeof _0x1da5e9 || null === _0x1da5e9) {
                return "object expected";
              }
              if (null != _0x1da5e9.FED && _0x1da5e9.hasOwnProperty("FED")) {
                if (!Array.isArray(_0x1da5e9.FED)) {
                  return "FED: array expected";
                }
                for (var _0x1357ed = 0x0; _0x1357ed < _0x1da5e9.FED.length; ++_0x1357ed) {
                  var _0x566147 = _0x6f3a94.tct2Proto.FeatureEffect.verify(_0x1da5e9.FED[_0x1357ed]);
                  if (_0x566147) {
                    return "FED." + _0x566147;
                  }
                }
              }
              return null;
            };
            _0x174619.fromObject = function (_0xb3b22) {
              if (_0xb3b22 instanceof _0x6f3a94.tct2Proto.FeatureEffectData) {
                return _0xb3b22;
              }
              var _0x14cff3 = new _0x6f3a94.tct2Proto.FeatureEffectData();
              if (_0xb3b22.FED) {
                if (!Array.isArray(_0xb3b22.FED)) {
                  throw TypeError(".tct2Proto.FeatureEffectData.FED: array expected");
                }
                _0x14cff3.FED = [];
                for (var _0x1d727d = 0x0; _0x1d727d < _0xb3b22.FED.length; ++_0x1d727d) {
                  if ("object" != typeof _0xb3b22.FED[_0x1d727d]) {
                    throw TypeError(".tct2Proto.FeatureEffectData.FED: object expected");
                  }
                  _0x14cff3.FED[_0x1d727d] = _0x6f3a94.tct2Proto.FeatureEffect.fromObject(_0xb3b22.FED[_0x1d727d]);
                }
              }
              return _0x14cff3;
            };
            _0x174619.toObject = function (_0x21e63b, _0x1fd42d) {
              if (!_0x1fd42d) {
                _0x1fd42d = {};
              }
              var _0x574f37 = {};
              if (_0x1fd42d.arrays || _0x1fd42d.defaults) {
                _0x574f37.FED = [];
              }
              if (_0x21e63b.FED && _0x21e63b.FED.length) {
                _0x574f37.FED = [];
                for (var _0x374488 = 0x0; _0x374488 < _0x21e63b.FED.length; ++_0x374488) {
                  _0x574f37.FED[_0x374488] = _0x6f3a94.tct2Proto.FeatureEffect.toObject(_0x21e63b.FED[_0x374488], _0x1fd42d);
                }
              }
              return _0x574f37;
            };
            _0x174619.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x174619.getTypeUrl = function (_0x1b3ef5) {
              if (undefined === _0x1b3ef5) {
                _0x1b3ef5 = "type.googleapis.com";
              }
              return _0x1b3ef5 + "/tct2Proto.FeatureEffectData";
            };
            return _0x174619;
          }(),
          RoundInfo: function () {
            function _0x2554b0(_0x1fbe96) {
              this.MainPlateSymbol = [];
              this.FreePlateSymbol = [];
              this.FreePlateSymbolLog = [];
              this.AwardDataVec = [];
              this.BlueData = [];
              this.RedData = [];
              this.GreenData = [];
              this.AddCrack = [];
              if (_0x1fbe96) {
                var _0x54db69 = Object.keys(_0x1fbe96);
                for (var _0x22461e = 0x0; _0x22461e < _0x54db69.length; ++_0x22461e) {
                  if (null != _0x1fbe96[_0x54db69[_0x22461e]]) {
                    this[_0x54db69[_0x22461e]] = _0x1fbe96[_0x54db69[_0x22461e]];
                  }
                }
              }
            }
            _0x2554b0.prototype.MainPlateSymbol = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.FreePlateSymbol = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.FreePlateSymbolLog = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.AwardDataVec = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.AwardTypeFlag = 0x0;
            _0x2554b0.prototype.RoundWin = 0x0;
            _0x2554b0.prototype.FreeRemainRound = 0x0;
            _0x2554b0.prototype.FreeNowRound = 0x0;
            _0x2554b0.prototype.MGReelWeightResult = 0x0;
            _0x2554b0.prototype.BlueData = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.RedData = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.GreenData = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.AddCrack = _0x4c69c5.emptyArray;
            _0x2554b0.prototype.MaxFlag = false;
            _0x2554b0.create = function (_0x396568) {
              return new _0x2554b0(_0x396568);
            };
            _0x2554b0.encode = function (_0x15c8db, _0x575a5d) {
              if (!_0x575a5d) {
                _0x575a5d = _0x29544e.create();
              }
              if (null != _0x15c8db.MainPlateSymbol && _0x15c8db.MainPlateSymbol.length) {
                for (var _0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.MainPlateSymbol.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.Column.encode(_0x15c8db.MainPlateSymbol[_0x2dd0ba], _0x575a5d.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.FreePlateSymbol && _0x15c8db.FreePlateSymbol.length) {
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.FreePlateSymbol.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.FreePlateCSymbolData.encode(_0x15c8db.FreePlateSymbol[_0x2dd0ba], _0x575a5d.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.FreePlateSymbolLog && _0x15c8db.FreePlateSymbolLog.length) {
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.FreePlateSymbolLog.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.FreePlateCSymbolData.encode(_0x15c8db.FreePlateSymbolLog[_0x2dd0ba], _0x575a5d.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.AwardDataVec && _0x15c8db.AwardDataVec.length) {
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.AwardDataVec.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.AwardData.encode(_0x15c8db.AwardDataVec[_0x2dd0ba], _0x575a5d.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.AwardTypeFlag && Object.hasOwnProperty.call(_0x15c8db, 'AwardTypeFlag')) {
                _0x575a5d.uint32(0x28).int32(_0x15c8db.AwardTypeFlag);
              }
              if (null != _0x15c8db.RoundWin && Object.hasOwnProperty.call(_0x15c8db, "RoundWin")) {
                _0x575a5d.uint32(0x31).double(_0x15c8db.RoundWin);
              }
              if (null != _0x15c8db.FreeRemainRound && Object.hasOwnProperty.call(_0x15c8db, "FreeRemainRound")) {
                _0x575a5d.uint32(0x38).int32(_0x15c8db.FreeRemainRound);
              }
              if (null != _0x15c8db.FreeNowRound && Object.hasOwnProperty.call(_0x15c8db, "FreeNowRound")) {
                _0x575a5d.uint32(0x40).int32(_0x15c8db.FreeNowRound);
              }
              if (null != _0x15c8db.MGReelWeightResult && Object.hasOwnProperty.call(_0x15c8db, "MGReelWeightResult")) {
                _0x575a5d.uint32(0x50).int32(_0x15c8db.MGReelWeightResult);
              }
              if (null != _0x15c8db.BlueData && _0x15c8db.BlueData.length) {
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.BlueData.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.FeatureEffectData.encode(_0x15c8db.BlueData[_0x2dd0ba], _0x575a5d.uint32(0x5a).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.RedData && _0x15c8db.RedData.length) {
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.RedData.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.FeatureEffectData.encode(_0x15c8db.RedData[_0x2dd0ba], _0x575a5d.uint32(0x62).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.GreenData && _0x15c8db.GreenData.length) {
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.GreenData.length; ++_0x2dd0ba) {
                  _0x6f3a94.tct2Proto.FeatureEffectData.encode(_0x15c8db.GreenData[_0x2dd0ba], _0x575a5d.uint32(0x6a).fork()).ldelim();
                }
              }
              if (null != _0x15c8db.AddCrack && _0x15c8db.AddCrack.length) {
                _0x575a5d.uint32(0x72).fork();
                for (_0x2dd0ba = 0x0; _0x2dd0ba < _0x15c8db.AddCrack.length; ++_0x2dd0ba) {
                  _0x575a5d.bool(_0x15c8db.AddCrack[_0x2dd0ba]);
                }
                _0x575a5d.ldelim();
              }
              if (null != _0x15c8db.MaxFlag && Object.hasOwnProperty.call(_0x15c8db, "MaxFlag")) {
                _0x575a5d.uint32(0x78).bool(_0x15c8db.MaxFlag);
              }
              return _0x575a5d;
            };
            _0x2554b0.encodeDelimited = function (_0x4109af, _0x323129) {
              return this.encode(_0x4109af, _0x323129).ldelim();
            };
            _0x2554b0.decode = function (_0x148f7a, _0x545deb) {
              if (!(_0x148f7a instanceof _0x10b00c)) {
                _0x148f7a = _0x10b00c.create(_0x148f7a);
              }
              var _0xb3b450 = undefined === _0x545deb ? _0x148f7a.len : _0x148f7a.pos + _0x545deb;
              for (var _0x109383 = new _0x6f3a94.tct2Proto.RoundInfo(); _0x148f7a.pos < _0xb3b450;) {
                var _0x28e33e = _0x148f7a.uint32();
                switch (_0x28e33e >>> 0x3) {
                  case 0x1:
                    if (!(_0x109383.MainPlateSymbol && _0x109383.MainPlateSymbol.length)) {
                      _0x109383.MainPlateSymbol = [];
                    }
                    _0x109383.MainPlateSymbol.push(_0x6f3a94.tct2Proto.Column.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x109383.FreePlateSymbol && _0x109383.FreePlateSymbol.length)) {
                      _0x109383.FreePlateSymbol = [];
                    }
                    _0x109383.FreePlateSymbol.push(_0x6f3a94.tct2Proto.FreePlateCSymbolData.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x109383.FreePlateSymbolLog && _0x109383.FreePlateSymbolLog.length)) {
                      _0x109383.FreePlateSymbolLog = [];
                    }
                    _0x109383.FreePlateSymbolLog.push(_0x6f3a94.tct2Proto.FreePlateCSymbolData.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0x4:
                    if (!(_0x109383.AwardDataVec && _0x109383.AwardDataVec.length)) {
                      _0x109383.AwardDataVec = [];
                    }
                    _0x109383.AwardDataVec.push(_0x6f3a94.tct2Proto.AwardData.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0x5:
                    _0x109383.AwardTypeFlag = _0x148f7a.int32();
                    break;
                  case 0x6:
                    _0x109383.RoundWin = _0x148f7a.double();
                    break;
                  case 0x7:
                    _0x109383.FreeRemainRound = _0x148f7a.int32();
                    break;
                  case 0x8:
                    _0x109383.FreeNowRound = _0x148f7a.int32();
                    break;
                  case 0xa:
                    _0x109383.MGReelWeightResult = _0x148f7a.int32();
                    break;
                  case 0xb:
                    if (!(_0x109383.BlueData && _0x109383.BlueData.length)) {
                      _0x109383.BlueData = [];
                    }
                    _0x109383.BlueData.push(_0x6f3a94.tct2Proto.FeatureEffectData.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0xc:
                    if (!(_0x109383.RedData && _0x109383.RedData.length)) {
                      _0x109383.RedData = [];
                    }
                    _0x109383.RedData.push(_0x6f3a94.tct2Proto.FeatureEffectData.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0xd:
                    if (!(_0x109383.GreenData && _0x109383.GreenData.length)) {
                      _0x109383.GreenData = [];
                    }
                    _0x109383.GreenData.push(_0x6f3a94.tct2Proto.FeatureEffectData.decode(_0x148f7a, _0x148f7a.uint32()));
                    break;
                  case 0xe:
                    if (!(_0x109383.AddCrack && _0x109383.AddCrack.length)) {
                      _0x109383.AddCrack = [];
                    }
                    if (0x2 == (0x7 & _0x28e33e)) {
                      for (var _0x5bc84a = _0x148f7a.uint32() + _0x148f7a.pos; _0x148f7a.pos < _0x5bc84a;) {
                        _0x109383.AddCrack.push(_0x148f7a.bool());
                      }
                    } else {
                      _0x109383.AddCrack.push(_0x148f7a.bool());
                    }
                    break;
                  case 0xf:
                    _0x109383.MaxFlag = _0x148f7a.bool();
                    break;
                  default:
                    _0x148f7a.skipType(0x7 & _0x28e33e);
                }
              }
              return _0x109383;
            };
            _0x2554b0.decodeDelimited = function (_0x1af7bf) {
              if (!(_0x1af7bf instanceof _0x10b00c)) {
                _0x1af7bf = new _0x10b00c(_0x1af7bf);
              }
              return this.decode(_0x1af7bf, _0x1af7bf.uint32());
            };
            _0x2554b0.verify = function (_0x41108b) {
              if ('object' != typeof _0x41108b || null === _0x41108b) {
                return "object expected";
              }
              if (null != _0x41108b.MainPlateSymbol && _0x41108b.hasOwnProperty("MainPlateSymbol")) {
                if (!Array.isArray(_0x41108b.MainPlateSymbol)) {
                  return "MainPlateSymbol: array expected";
                }
                for (var _0x133c8c = 0x0; _0x133c8c < _0x41108b.MainPlateSymbol.length; ++_0x133c8c) {
                  if (_0x16d827 = _0x6f3a94.tct2Proto.Column.verify(_0x41108b.MainPlateSymbol[_0x133c8c])) {
                    return 'MainPlateSymbol.' + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.FreePlateSymbol && _0x41108b.hasOwnProperty('FreePlateSymbol')) {
                if (!Array.isArray(_0x41108b.FreePlateSymbol)) {
                  return "FreePlateSymbol: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.FreePlateSymbol.length; ++_0x133c8c) {
                  if (_0x16d827 = _0x6f3a94.tct2Proto.FreePlateCSymbolData.verify(_0x41108b.FreePlateSymbol[_0x133c8c])) {
                    return "FreePlateSymbol." + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.FreePlateSymbolLog && _0x41108b.hasOwnProperty('FreePlateSymbolLog')) {
                if (!Array.isArray(_0x41108b.FreePlateSymbolLog)) {
                  return "FreePlateSymbolLog: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.FreePlateSymbolLog.length; ++_0x133c8c) {
                  if (_0x16d827 = _0x6f3a94.tct2Proto.FreePlateCSymbolData.verify(_0x41108b.FreePlateSymbolLog[_0x133c8c])) {
                    return "FreePlateSymbolLog." + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.AwardDataVec && _0x41108b.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(_0x41108b.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.AwardDataVec.length; ++_0x133c8c) {
                  if (_0x16d827 = _0x6f3a94.tct2Proto.AwardData.verify(_0x41108b.AwardDataVec[_0x133c8c])) {
                    return "AwardDataVec." + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.AwardTypeFlag && _0x41108b.hasOwnProperty("AwardTypeFlag") && !_0x4c69c5.isInteger(_0x41108b.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != _0x41108b.RoundWin && _0x41108b.hasOwnProperty("RoundWin") && 'number' != typeof _0x41108b.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != _0x41108b.FreeRemainRound && _0x41108b.hasOwnProperty("FreeRemainRound") && !_0x4c69c5.isInteger(_0x41108b.FreeRemainRound)) {
                return "FreeRemainRound: integer expected";
              }
              if (null != _0x41108b.FreeNowRound && _0x41108b.hasOwnProperty("FreeNowRound") && !_0x4c69c5.isInteger(_0x41108b.FreeNowRound)) {
                return "FreeNowRound: integer expected";
              }
              if (null != _0x41108b.MGReelWeightResult && _0x41108b.hasOwnProperty('MGReelWeightResult') && !_0x4c69c5.isInteger(_0x41108b.MGReelWeightResult)) {
                return "MGReelWeightResult: integer expected";
              }
              if (null != _0x41108b.BlueData && _0x41108b.hasOwnProperty("BlueData")) {
                if (!Array.isArray(_0x41108b.BlueData)) {
                  return "BlueData: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.BlueData.length; ++_0x133c8c) {
                  if (_0x16d827 = _0x6f3a94.tct2Proto.FeatureEffectData.verify(_0x41108b.BlueData[_0x133c8c])) {
                    return "BlueData." + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.RedData && _0x41108b.hasOwnProperty("RedData")) {
                if (!Array.isArray(_0x41108b.RedData)) {
                  return "RedData: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.RedData.length; ++_0x133c8c) {
                  if (_0x16d827 = _0x6f3a94.tct2Proto.FeatureEffectData.verify(_0x41108b.RedData[_0x133c8c])) {
                    return "RedData." + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.GreenData && _0x41108b.hasOwnProperty("GreenData")) {
                if (!Array.isArray(_0x41108b.GreenData)) {
                  return "GreenData: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.GreenData.length; ++_0x133c8c) {
                  var _0x16d827;
                  if (_0x16d827 = _0x6f3a94.tct2Proto.FeatureEffectData.verify(_0x41108b.GreenData[_0x133c8c])) {
                    return "GreenData." + _0x16d827;
                  }
                }
              }
              if (null != _0x41108b.AddCrack && _0x41108b.hasOwnProperty('AddCrack')) {
                if (!Array.isArray(_0x41108b.AddCrack)) {
                  return "AddCrack: array expected";
                }
                for (_0x133c8c = 0x0; _0x133c8c < _0x41108b.AddCrack.length; ++_0x133c8c) {
                  if ("boolean" != typeof _0x41108b.AddCrack[_0x133c8c]) {
                    return "AddCrack: boolean[] expected";
                  }
                }
              }
              return null != _0x41108b.MaxFlag && _0x41108b.hasOwnProperty("MaxFlag") && "boolean" != typeof _0x41108b.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            _0x2554b0.fromObject = function (_0x542017) {
              if (_0x542017 instanceof _0x6f3a94.tct2Proto.RoundInfo) {
                return _0x542017;
              }
              var _0xe34828 = new _0x6f3a94.tct2Proto.RoundInfo();
              if (_0x542017.MainPlateSymbol) {
                if (!Array.isArray(_0x542017.MainPlateSymbol)) {
                  throw TypeError(".tct2Proto.RoundInfo.MainPlateSymbol: array expected");
                }
                _0xe34828.MainPlateSymbol = [];
                for (var _0x973c7e = 0x0; _0x973c7e < _0x542017.MainPlateSymbol.length; ++_0x973c7e) {
                  if ('object' != typeof _0x542017.MainPlateSymbol[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.MainPlateSymbol: object expected");
                  }
                  _0xe34828.MainPlateSymbol[_0x973c7e] = _0x6f3a94.tct2Proto.Column.fromObject(_0x542017.MainPlateSymbol[_0x973c7e]);
                }
              }
              if (_0x542017.FreePlateSymbol) {
                if (!Array.isArray(_0x542017.FreePlateSymbol)) {
                  throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbol: array expected");
                }
                _0xe34828.FreePlateSymbol = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.FreePlateSymbol.length; ++_0x973c7e) {
                  if ("object" != typeof _0x542017.FreePlateSymbol[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbol: object expected");
                  }
                  _0xe34828.FreePlateSymbol[_0x973c7e] = _0x6f3a94.tct2Proto.FreePlateCSymbolData.fromObject(_0x542017.FreePlateSymbol[_0x973c7e]);
                }
              }
              if (_0x542017.FreePlateSymbolLog) {
                if (!Array.isArray(_0x542017.FreePlateSymbolLog)) {
                  throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbolLog: array expected");
                }
                _0xe34828.FreePlateSymbolLog = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.FreePlateSymbolLog.length; ++_0x973c7e) {
                  if ("object" != typeof _0x542017.FreePlateSymbolLog[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbolLog: object expected");
                  }
                  _0xe34828.FreePlateSymbolLog[_0x973c7e] = _0x6f3a94.tct2Proto.FreePlateCSymbolData.fromObject(_0x542017.FreePlateSymbolLog[_0x973c7e]);
                }
              }
              if (_0x542017.AwardDataVec) {
                if (!Array.isArray(_0x542017.AwardDataVec)) {
                  throw TypeError(".tct2Proto.RoundInfo.AwardDataVec: array expected");
                }
                _0xe34828.AwardDataVec = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.AwardDataVec.length; ++_0x973c7e) {
                  if ("object" != typeof _0x542017.AwardDataVec[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.AwardDataVec: object expected");
                  }
                  _0xe34828.AwardDataVec[_0x973c7e] = _0x6f3a94.tct2Proto.AwardData.fromObject(_0x542017.AwardDataVec[_0x973c7e]);
                }
              }
              if (null != _0x542017.AwardTypeFlag) {
                _0xe34828.AwardTypeFlag = 0x0 | _0x542017.AwardTypeFlag;
              }
              if (null != _0x542017.RoundWin) {
                _0xe34828.RoundWin = Number(_0x542017.RoundWin);
              }
              if (null != _0x542017.FreeRemainRound) {
                _0xe34828.FreeRemainRound = 0x0 | _0x542017.FreeRemainRound;
              }
              if (null != _0x542017.FreeNowRound) {
                _0xe34828.FreeNowRound = 0x0 | _0x542017.FreeNowRound;
              }
              if (null != _0x542017.MGReelWeightResult) {
                _0xe34828.MGReelWeightResult = 0x0 | _0x542017.MGReelWeightResult;
              }
              if (_0x542017.BlueData) {
                if (!Array.isArray(_0x542017.BlueData)) {
                  throw TypeError(".tct2Proto.RoundInfo.BlueData: array expected");
                }
                _0xe34828.BlueData = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.BlueData.length; ++_0x973c7e) {
                  if ("object" != typeof _0x542017.BlueData[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.BlueData: object expected");
                  }
                  _0xe34828.BlueData[_0x973c7e] = _0x6f3a94.tct2Proto.FeatureEffectData.fromObject(_0x542017.BlueData[_0x973c7e]);
                }
              }
              if (_0x542017.RedData) {
                if (!Array.isArray(_0x542017.RedData)) {
                  throw TypeError(".tct2Proto.RoundInfo.RedData: array expected");
                }
                _0xe34828.RedData = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.RedData.length; ++_0x973c7e) {
                  if ("object" != typeof _0x542017.RedData[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.RedData: object expected");
                  }
                  _0xe34828.RedData[_0x973c7e] = _0x6f3a94.tct2Proto.FeatureEffectData.fromObject(_0x542017.RedData[_0x973c7e]);
                }
              }
              if (_0x542017.GreenData) {
                if (!Array.isArray(_0x542017.GreenData)) {
                  throw TypeError(".tct2Proto.RoundInfo.GreenData: array expected");
                }
                _0xe34828.GreenData = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.GreenData.length; ++_0x973c7e) {
                  if ("object" != typeof _0x542017.GreenData[_0x973c7e]) {
                    throw TypeError(".tct2Proto.RoundInfo.GreenData: object expected");
                  }
                  _0xe34828.GreenData[_0x973c7e] = _0x6f3a94.tct2Proto.FeatureEffectData.fromObject(_0x542017.GreenData[_0x973c7e]);
                }
              }
              if (_0x542017.AddCrack) {
                if (!Array.isArray(_0x542017.AddCrack)) {
                  throw TypeError(".tct2Proto.RoundInfo.AddCrack: array expected");
                }
                _0xe34828.AddCrack = [];
                for (_0x973c7e = 0x0; _0x973c7e < _0x542017.AddCrack.length; ++_0x973c7e) {
                  _0xe34828.AddCrack[_0x973c7e] = Boolean(_0x542017.AddCrack[_0x973c7e]);
                }
              }
              if (null != _0x542017.MaxFlag) {
                _0xe34828.MaxFlag = Boolean(_0x542017.MaxFlag);
              }
              return _0xe34828;
            };
            _0x2554b0.toObject = function (_0x1f96db, _0x3f89ca) {
              if (!_0x3f89ca) {
                _0x3f89ca = {};
              }
              var _0x183cf2 = {};
              if (_0x3f89ca.arrays || _0x3f89ca.defaults) {
                _0x183cf2.MainPlateSymbol = [];
                _0x183cf2.FreePlateSymbol = [];
                _0x183cf2.FreePlateSymbolLog = [];
                _0x183cf2.AwardDataVec = [];
                _0x183cf2.BlueData = [];
                _0x183cf2.RedData = [];
                _0x183cf2.GreenData = [];
                _0x183cf2.AddCrack = [];
              }
              if (_0x3f89ca.defaults) {
                _0x183cf2.AwardTypeFlag = 0x0;
                _0x183cf2.RoundWin = 0x0;
                _0x183cf2.FreeRemainRound = 0x0;
                _0x183cf2.FreeNowRound = 0x0;
                _0x183cf2.MGReelWeightResult = 0x0;
                _0x183cf2.MaxFlag = false;
              }
              if (_0x1f96db.MainPlateSymbol && _0x1f96db.MainPlateSymbol.length) {
                _0x183cf2.MainPlateSymbol = [];
                for (var _0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.MainPlateSymbol.length; ++_0x67e7dd) {
                  _0x183cf2.MainPlateSymbol[_0x67e7dd] = _0x6f3a94.tct2Proto.Column.toObject(_0x1f96db.MainPlateSymbol[_0x67e7dd], _0x3f89ca);
                }
              }
              if (_0x1f96db.FreePlateSymbol && _0x1f96db.FreePlateSymbol.length) {
                _0x183cf2.FreePlateSymbol = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.FreePlateSymbol.length; ++_0x67e7dd) {
                  _0x183cf2.FreePlateSymbol[_0x67e7dd] = _0x6f3a94.tct2Proto.FreePlateCSymbolData.toObject(_0x1f96db.FreePlateSymbol[_0x67e7dd], _0x3f89ca);
                }
              }
              if (_0x1f96db.FreePlateSymbolLog && _0x1f96db.FreePlateSymbolLog.length) {
                _0x183cf2.FreePlateSymbolLog = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.FreePlateSymbolLog.length; ++_0x67e7dd) {
                  _0x183cf2.FreePlateSymbolLog[_0x67e7dd] = _0x6f3a94.tct2Proto.FreePlateCSymbolData.toObject(_0x1f96db.FreePlateSymbolLog[_0x67e7dd], _0x3f89ca);
                }
              }
              if (_0x1f96db.AwardDataVec && _0x1f96db.AwardDataVec.length) {
                _0x183cf2.AwardDataVec = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.AwardDataVec.length; ++_0x67e7dd) {
                  _0x183cf2.AwardDataVec[_0x67e7dd] = _0x6f3a94.tct2Proto.AwardData.toObject(_0x1f96db.AwardDataVec[_0x67e7dd], _0x3f89ca);
                }
              }
              if (null != _0x1f96db.AwardTypeFlag && _0x1f96db.hasOwnProperty('AwardTypeFlag')) {
                _0x183cf2.AwardTypeFlag = _0x1f96db.AwardTypeFlag;
              }
              if (null != _0x1f96db.RoundWin && _0x1f96db.hasOwnProperty("RoundWin")) {
                _0x183cf2.RoundWin = _0x3f89ca.json && !isFinite(_0x1f96db.RoundWin) ? String(_0x1f96db.RoundWin) : _0x1f96db.RoundWin;
              }
              if (null != _0x1f96db.FreeRemainRound && _0x1f96db.hasOwnProperty("FreeRemainRound")) {
                _0x183cf2.FreeRemainRound = _0x1f96db.FreeRemainRound;
              }
              if (null != _0x1f96db.FreeNowRound && _0x1f96db.hasOwnProperty('FreeNowRound')) {
                _0x183cf2.FreeNowRound = _0x1f96db.FreeNowRound;
              }
              if (null != _0x1f96db.MGReelWeightResult && _0x1f96db.hasOwnProperty("MGReelWeightResult")) {
                _0x183cf2.MGReelWeightResult = _0x1f96db.MGReelWeightResult;
              }
              if (_0x1f96db.BlueData && _0x1f96db.BlueData.length) {
                _0x183cf2.BlueData = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.BlueData.length; ++_0x67e7dd) {
                  _0x183cf2.BlueData[_0x67e7dd] = _0x6f3a94.tct2Proto.FeatureEffectData.toObject(_0x1f96db.BlueData[_0x67e7dd], _0x3f89ca);
                }
              }
              if (_0x1f96db.RedData && _0x1f96db.RedData.length) {
                _0x183cf2.RedData = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.RedData.length; ++_0x67e7dd) {
                  _0x183cf2.RedData[_0x67e7dd] = _0x6f3a94.tct2Proto.FeatureEffectData.toObject(_0x1f96db.RedData[_0x67e7dd], _0x3f89ca);
                }
              }
              if (_0x1f96db.GreenData && _0x1f96db.GreenData.length) {
                _0x183cf2.GreenData = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.GreenData.length; ++_0x67e7dd) {
                  _0x183cf2.GreenData[_0x67e7dd] = _0x6f3a94.tct2Proto.FeatureEffectData.toObject(_0x1f96db.GreenData[_0x67e7dd], _0x3f89ca);
                }
              }
              if (_0x1f96db.AddCrack && _0x1f96db.AddCrack.length) {
                _0x183cf2.AddCrack = [];
                for (_0x67e7dd = 0x0; _0x67e7dd < _0x1f96db.AddCrack.length; ++_0x67e7dd) {
                  _0x183cf2.AddCrack[_0x67e7dd] = _0x1f96db.AddCrack[_0x67e7dd];
                }
              }
              if (null != _0x1f96db.MaxFlag && _0x1f96db.hasOwnProperty("MaxFlag")) {
                _0x183cf2.MaxFlag = _0x1f96db.MaxFlag;
              }
              return _0x183cf2;
            };
            _0x2554b0.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x2554b0.getTypeUrl = function (_0x4148a6) {
              if (undefined === _0x4148a6) {
                _0x4148a6 = "type.googleapis.com";
              }
              return _0x4148a6 + '/tct2Proto.RoundInfo';
            };
            return _0x2554b0;
          }(),
          SpinAck: function () {
            function _0x64822d(_0x1fe3e3) {
              this.RoundQueue = [];
              this.CrackLevels = [];
              if (_0x1fe3e3) {
                var _0x49b26c = Object.keys(_0x1fe3e3);
                for (var _0x1f195f = 0x0; _0x1f195f < _0x49b26c.length; ++_0x1f195f) {
                  if (null != _0x1fe3e3[_0x49b26c[_0x1f195f]]) {
                    this[_0x49b26c[_0x1f195f]] = _0x1fe3e3[_0x49b26c[_0x1f195f]];
                  }
                }
              }
            }
            _0x64822d.prototype.RoundQueue = _0x4c69c5.emptyArray;
            _0x64822d.prototype.FreeTotalWin = 0x0;
            _0x64822d.prototype.TotalWin = 0x0;
            _0x64822d.prototype.ShowIndex = '';
            _0x64822d.prototype.NowMoney = 0x0;
            _0x64822d.prototype.AckType = 0x0;
            _0x64822d.prototype.RTP = 0x0;
            _0x64822d.prototype.Bet = 0x0;
            _0x64822d.prototype.FolderIndex = 0x0;
            _0x64822d.prototype.CrackLevels = _0x4c69c5.emptyArray;
            _0x64822d.create = function (_0x36dde0) {
              return new _0x64822d(_0x36dde0);
            };
            _0x64822d.encode = function (_0x2be072, _0xb1084d) {
              if (!_0xb1084d) {
                _0xb1084d = _0x29544e.create();
              }
              if (null != _0x2be072.RoundQueue && _0x2be072.RoundQueue.length) {
                for (var _0x1b01df = 0x0; _0x1b01df < _0x2be072.RoundQueue.length; ++_0x1b01df) {
                  _0x6f3a94.tct2Proto.RoundInfo.encode(_0x2be072.RoundQueue[_0x1b01df], _0xb1084d.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x2be072.FreeTotalWin && Object.hasOwnProperty.call(_0x2be072, "FreeTotalWin")) {
                _0xb1084d.uint32(0x11).double(_0x2be072.FreeTotalWin);
              }
              if (null != _0x2be072.TotalWin && Object.hasOwnProperty.call(_0x2be072, "TotalWin")) {
                _0xb1084d.uint32(0x19).double(_0x2be072.TotalWin);
              }
              if (null != _0x2be072.ShowIndex && Object.hasOwnProperty.call(_0x2be072, "ShowIndex")) {
                _0xb1084d.uint32(0x22).string(_0x2be072.ShowIndex);
              }
              if (null != _0x2be072.NowMoney && Object.hasOwnProperty.call(_0x2be072, 'NowMoney')) {
                _0xb1084d.uint32(0x29).double(_0x2be072.NowMoney);
              }
              if (null != _0x2be072.AckType && Object.hasOwnProperty.call(_0x2be072, "AckType")) {
                _0xb1084d.uint32(0x30).int32(_0x2be072.AckType);
              }
              if (null != _0x2be072.RTP && Object.hasOwnProperty.call(_0x2be072, "RTP")) {
                _0xb1084d.uint32(0x39).double(_0x2be072.RTP);
              }
              if (null != _0x2be072.Bet && Object.hasOwnProperty.call(_0x2be072, 'Bet')) {
                _0xb1084d.uint32(0x41).double(_0x2be072.Bet);
              }
              if (null != _0x2be072.FolderIndex && Object.hasOwnProperty.call(_0x2be072, 'FolderIndex')) {
                _0xb1084d.uint32(0x48).int32(_0x2be072.FolderIndex);
              }
              if (null != _0x2be072.CrackLevels && _0x2be072.CrackLevels.length) {
                _0xb1084d.uint32(0x52).fork();
                for (_0x1b01df = 0x0; _0x1b01df < _0x2be072.CrackLevels.length; ++_0x1b01df) {
                  _0xb1084d.int32(_0x2be072.CrackLevels[_0x1b01df]);
                }
                _0xb1084d.ldelim();
              }
              return _0xb1084d;
            };
            _0x64822d.encodeDelimited = function (_0x116e2c, _0x463bbd) {
              return this.encode(_0x116e2c, _0x463bbd).ldelim();
            };
            _0x64822d.decode = function (_0x1e79e7, _0x59e0be) {
              if (!(_0x1e79e7 instanceof _0x10b00c)) {
                _0x1e79e7 = _0x10b00c.create(_0x1e79e7);
              }
              var _0x3aa7e6 = undefined === _0x59e0be ? _0x1e79e7.len : _0x1e79e7.pos + _0x59e0be;
              for (var _0x2e7a2f = new _0x6f3a94.tct2Proto.SpinAck(); _0x1e79e7.pos < _0x3aa7e6;) {
                var _0x38a575 = _0x1e79e7.uint32();
                switch (_0x38a575 >>> 0x3) {
                  case 0x1:
                    if (!(_0x2e7a2f.RoundQueue && _0x2e7a2f.RoundQueue.length)) {
                      _0x2e7a2f.RoundQueue = [];
                    }
                    _0x2e7a2f.RoundQueue.push(_0x6f3a94.tct2Proto.RoundInfo.decode(_0x1e79e7, _0x1e79e7.uint32()));
                    break;
                  case 0x2:
                    _0x2e7a2f.FreeTotalWin = _0x1e79e7.double();
                    break;
                  case 0x3:
                    _0x2e7a2f.TotalWin = _0x1e79e7.double();
                    break;
                  case 0x4:
                    _0x2e7a2f.ShowIndex = _0x1e79e7.string();
                    break;
                  case 0x5:
                    _0x2e7a2f.NowMoney = _0x1e79e7.double();
                    break;
                  case 0x6:
                    _0x2e7a2f.AckType = _0x1e79e7.int32();
                    break;
                  case 0x7:
                    _0x2e7a2f.RTP = _0x1e79e7.double();
                    break;
                  case 0x8:
                    _0x2e7a2f.Bet = _0x1e79e7.double();
                    break;
                  case 0x9:
                    _0x2e7a2f.FolderIndex = _0x1e79e7.int32();
                    break;
                  case 0xa:
                    if (!(_0x2e7a2f.CrackLevels && _0x2e7a2f.CrackLevels.length)) {
                      _0x2e7a2f.CrackLevels = [];
                    }
                    if (0x2 == (0x7 & _0x38a575)) {
                      for (var _0x4f1b45 = _0x1e79e7.uint32() + _0x1e79e7.pos; _0x1e79e7.pos < _0x4f1b45;) {
                        _0x2e7a2f.CrackLevels.push(_0x1e79e7.int32());
                      }
                    } else {
                      _0x2e7a2f.CrackLevels.push(_0x1e79e7.int32());
                    }
                    break;
                  default:
                    _0x1e79e7.skipType(0x7 & _0x38a575);
                }
              }
              return _0x2e7a2f;
            };
            _0x64822d.decodeDelimited = function (_0x13a4d6) {
              if (!(_0x13a4d6 instanceof _0x10b00c)) {
                _0x13a4d6 = new _0x10b00c(_0x13a4d6);
              }
              return this.decode(_0x13a4d6, _0x13a4d6.uint32());
            };
            _0x64822d.verify = function (_0x40a956) {
              if ("object" != typeof _0x40a956 || null === _0x40a956) {
                return "object expected";
              }
              if (null != _0x40a956.RoundQueue && _0x40a956.hasOwnProperty("RoundQueue")) {
                if (!Array.isArray(_0x40a956.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var _0x3b505f = 0x0; _0x3b505f < _0x40a956.RoundQueue.length; ++_0x3b505f) {
                  var _0x367009 = _0x6f3a94.tct2Proto.RoundInfo.verify(_0x40a956.RoundQueue[_0x3b505f]);
                  if (_0x367009) {
                    return "RoundQueue." + _0x367009;
                  }
                }
              }
              if (null != _0x40a956.FreeTotalWin && _0x40a956.hasOwnProperty("FreeTotalWin") && 'number' != typeof _0x40a956.FreeTotalWin) {
                return "FreeTotalWin: number expected";
              }
              if (null != _0x40a956.TotalWin && _0x40a956.hasOwnProperty("TotalWin") && "number" != typeof _0x40a956.TotalWin) {
                return "TotalWin: number expected";
              }
              if (null != _0x40a956.ShowIndex && _0x40a956.hasOwnProperty("ShowIndex") && !_0x4c69c5.isString(_0x40a956.ShowIndex)) {
                return "ShowIndex: string expected";
              }
              if (null != _0x40a956.NowMoney && _0x40a956.hasOwnProperty("NowMoney") && "number" != typeof _0x40a956.NowMoney) {
                return "NowMoney: number expected";
              }
              if (null != _0x40a956.AckType && _0x40a956.hasOwnProperty("AckType") && !_0x4c69c5.isInteger(_0x40a956.AckType)) {
                return "AckType: integer expected";
              }
              if (null != _0x40a956.RTP && _0x40a956.hasOwnProperty("RTP") && "number" != typeof _0x40a956.RTP) {
                return "RTP: number expected";
              }
              if (null != _0x40a956.Bet && _0x40a956.hasOwnProperty('Bet') && "number" != typeof _0x40a956.Bet) {
                return "Bet: number expected";
              }
              if (null != _0x40a956.FolderIndex && _0x40a956.hasOwnProperty("FolderIndex") && !_0x4c69c5.isInteger(_0x40a956.FolderIndex)) {
                return "FolderIndex: integer expected";
              }
              if (null != _0x40a956.CrackLevels && _0x40a956.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(_0x40a956.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (_0x3b505f = 0x0; _0x3b505f < _0x40a956.CrackLevels.length; ++_0x3b505f) {
                  if (!_0x4c69c5.isInteger(_0x40a956.CrackLevels[_0x3b505f])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x64822d.fromObject = function (_0x412abf) {
              if (_0x412abf instanceof _0x6f3a94.tct2Proto.SpinAck) {
                return _0x412abf;
              }
              var _0x14482e = new _0x6f3a94.tct2Proto.SpinAck();
              if (_0x412abf.RoundQueue) {
                if (!Array.isArray(_0x412abf.RoundQueue)) {
                  throw TypeError(".tct2Proto.SpinAck.RoundQueue: array expected");
                }
                _0x14482e.RoundQueue = [];
                for (var _0x2b95f6 = 0x0; _0x2b95f6 < _0x412abf.RoundQueue.length; ++_0x2b95f6) {
                  if ("object" != typeof _0x412abf.RoundQueue[_0x2b95f6]) {
                    throw TypeError(".tct2Proto.SpinAck.RoundQueue: object expected");
                  }
                  _0x14482e.RoundQueue[_0x2b95f6] = _0x6f3a94.tct2Proto.RoundInfo.fromObject(_0x412abf.RoundQueue[_0x2b95f6]);
                }
              }
              if (null != _0x412abf.FreeTotalWin) {
                _0x14482e.FreeTotalWin = Number(_0x412abf.FreeTotalWin);
              }
              if (null != _0x412abf.TotalWin) {
                _0x14482e.TotalWin = Number(_0x412abf.TotalWin);
              }
              if (null != _0x412abf.ShowIndex) {
                _0x14482e.ShowIndex = String(_0x412abf.ShowIndex);
              }
              if (null != _0x412abf.NowMoney) {
                _0x14482e.NowMoney = Number(_0x412abf.NowMoney);
              }
              if (null != _0x412abf.AckType) {
                _0x14482e.AckType = 0x0 | _0x412abf.AckType;
              }
              if (null != _0x412abf.RTP) {
                _0x14482e.RTP = Number(_0x412abf.RTP);
              }
              if (null != _0x412abf.Bet) {
                _0x14482e.Bet = Number(_0x412abf.Bet);
              }
              if (null != _0x412abf.FolderIndex) {
                _0x14482e.FolderIndex = 0x0 | _0x412abf.FolderIndex;
              }
              if (_0x412abf.CrackLevels) {
                if (!Array.isArray(_0x412abf.CrackLevels)) {
                  throw TypeError(".tct2Proto.SpinAck.CrackLevels: array expected");
                }
                _0x14482e.CrackLevels = [];
                for (_0x2b95f6 = 0x0; _0x2b95f6 < _0x412abf.CrackLevels.length; ++_0x2b95f6) {
                  _0x14482e.CrackLevels[_0x2b95f6] = 0x0 | _0x412abf.CrackLevels[_0x2b95f6];
                }
              }
              return _0x14482e;
            };
            _0x64822d.toObject = function (_0x302f83, _0x89e9e5) {
              if (!_0x89e9e5) {
                _0x89e9e5 = {};
              }
              var _0x2e1aff = {};
              if (_0x89e9e5.arrays || _0x89e9e5.defaults) {
                _0x2e1aff.RoundQueue = [];
                _0x2e1aff.CrackLevels = [];
              }
              if (_0x89e9e5.defaults) {
                _0x2e1aff.FreeTotalWin = 0x0;
                _0x2e1aff.TotalWin = 0x0;
                _0x2e1aff.ShowIndex = '';
                _0x2e1aff.NowMoney = 0x0;
                _0x2e1aff.AckType = 0x0;
                _0x2e1aff.RTP = 0x0;
                _0x2e1aff.Bet = 0x0;
                _0x2e1aff.FolderIndex = 0x0;
              }
              if (_0x302f83.RoundQueue && _0x302f83.RoundQueue.length) {
                _0x2e1aff.RoundQueue = [];
                for (var _0x100abe = 0x0; _0x100abe < _0x302f83.RoundQueue.length; ++_0x100abe) {
                  _0x2e1aff.RoundQueue[_0x100abe] = _0x6f3a94.tct2Proto.RoundInfo.toObject(_0x302f83.RoundQueue[_0x100abe], _0x89e9e5);
                }
              }
              if (null != _0x302f83.FreeTotalWin && _0x302f83.hasOwnProperty('FreeTotalWin')) {
                _0x2e1aff.FreeTotalWin = _0x89e9e5.json && !isFinite(_0x302f83.FreeTotalWin) ? String(_0x302f83.FreeTotalWin) : _0x302f83.FreeTotalWin;
              }
              if (null != _0x302f83.TotalWin && _0x302f83.hasOwnProperty("TotalWin")) {
                _0x2e1aff.TotalWin = _0x89e9e5.json && !isFinite(_0x302f83.TotalWin) ? String(_0x302f83.TotalWin) : _0x302f83.TotalWin;
              }
              if (null != _0x302f83.ShowIndex && _0x302f83.hasOwnProperty("ShowIndex")) {
                _0x2e1aff.ShowIndex = _0x302f83.ShowIndex;
              }
              if (null != _0x302f83.NowMoney && _0x302f83.hasOwnProperty("NowMoney")) {
                _0x2e1aff.NowMoney = _0x89e9e5.json && !isFinite(_0x302f83.NowMoney) ? String(_0x302f83.NowMoney) : _0x302f83.NowMoney;
              }
              if (null != _0x302f83.AckType && _0x302f83.hasOwnProperty('AckType')) {
                _0x2e1aff.AckType = _0x302f83.AckType;
              }
              if (null != _0x302f83.RTP && _0x302f83.hasOwnProperty('RTP')) {
                _0x2e1aff.RTP = _0x89e9e5.json && !isFinite(_0x302f83.RTP) ? String(_0x302f83.RTP) : _0x302f83.RTP;
              }
              if (null != _0x302f83.Bet && _0x302f83.hasOwnProperty("Bet")) {
                _0x2e1aff.Bet = _0x89e9e5.json && !isFinite(_0x302f83.Bet) ? String(_0x302f83.Bet) : _0x302f83.Bet;
              }
              if (null != _0x302f83.FolderIndex && _0x302f83.hasOwnProperty("FolderIndex")) {
                _0x2e1aff.FolderIndex = _0x302f83.FolderIndex;
              }
              if (_0x302f83.CrackLevels && _0x302f83.CrackLevels.length) {
                _0x2e1aff.CrackLevels = [];
                for (_0x100abe = 0x0; _0x100abe < _0x302f83.CrackLevels.length; ++_0x100abe) {
                  _0x2e1aff.CrackLevels[_0x100abe] = _0x302f83.CrackLevels[_0x100abe];
                }
              }
              return _0x2e1aff;
            };
            _0x64822d.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x64822d.getTypeUrl = function (_0x53b133) {
              if (undefined === _0x53b133) {
                _0x53b133 = "type.googleapis.com";
              }
              return _0x53b133 + "/tct2Proto.SpinAck";
            };
            return _0x64822d;
          }(),
          StateInfo: function () {
            function _0x530ffa(_0x3c26e7) {
              this.CrackLevels = [];
              if (_0x3c26e7) {
                var _0x3316e9 = Object.keys(_0x3c26e7);
                for (var _0x304e6d = 0x0; _0x304e6d < _0x3316e9.length; ++_0x304e6d) {
                  if (null != _0x3c26e7[_0x3316e9[_0x304e6d]]) {
                    this[_0x3316e9[_0x304e6d]] = _0x3c26e7[_0x3316e9[_0x304e6d]];
                  }
                }
              }
            }
            _0x530ffa.prototype.CrackLevels = _0x4c69c5.emptyArray;
            _0x530ffa.create = function (_0x3cbd9f) {
              return new _0x530ffa(_0x3cbd9f);
            };
            _0x530ffa.encode = function (_0x2b4682, _0x423757) {
              if (!_0x423757) {
                _0x423757 = _0x29544e.create();
              }
              if (null != _0x2b4682.CrackLevels && _0x2b4682.CrackLevels.length) {
                _0x423757.uint32(0xa).fork();
                for (var _0x2993f5 = 0x0; _0x2993f5 < _0x2b4682.CrackLevels.length; ++_0x2993f5) {
                  _0x423757.int32(_0x2b4682.CrackLevels[_0x2993f5]);
                }
                _0x423757.ldelim();
              }
              return _0x423757;
            };
            _0x530ffa.encodeDelimited = function (_0x1bb847, _0xb501f6) {
              return this.encode(_0x1bb847, _0xb501f6).ldelim();
            };
            _0x530ffa.decode = function (_0x39f1dc, _0x2d3252) {
              if (!(_0x39f1dc instanceof _0x10b00c)) {
                _0x39f1dc = _0x10b00c.create(_0x39f1dc);
              }
              var _0x23655a = undefined === _0x2d3252 ? _0x39f1dc.len : _0x39f1dc.pos + _0x2d3252;
              for (var _0x1fabb3 = new _0x6f3a94.tct2Proto.StateInfo(); _0x39f1dc.pos < _0x23655a;) {
                var _0x10288a = _0x39f1dc.uint32();
                switch (_0x10288a >>> 0x3) {
                  case 0x1:
                    if (!(_0x1fabb3.CrackLevels && _0x1fabb3.CrackLevels.length)) {
                      _0x1fabb3.CrackLevels = [];
                    }
                    if (0x2 == (0x7 & _0x10288a)) {
                      for (var _0x3b52a2 = _0x39f1dc.uint32() + _0x39f1dc.pos; _0x39f1dc.pos < _0x3b52a2;) {
                        _0x1fabb3.CrackLevels.push(_0x39f1dc.int32());
                      }
                    } else {
                      _0x1fabb3.CrackLevels.push(_0x39f1dc.int32());
                    }
                    break;
                  default:
                    _0x39f1dc.skipType(0x7 & _0x10288a);
                }
              }
              return _0x1fabb3;
            };
            _0x530ffa.decodeDelimited = function (_0x3e57eb) {
              if (!(_0x3e57eb instanceof _0x10b00c)) {
                _0x3e57eb = new _0x10b00c(_0x3e57eb);
              }
              return this.decode(_0x3e57eb, _0x3e57eb.uint32());
            };
            _0x530ffa.verify = function (_0x5bf0c8) {
              if ("object" != typeof _0x5bf0c8 || null === _0x5bf0c8) {
                return "object expected";
              }
              if (null != _0x5bf0c8.CrackLevels && _0x5bf0c8.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(_0x5bf0c8.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (var _0x1fa97d = 0x0; _0x1fa97d < _0x5bf0c8.CrackLevels.length; ++_0x1fa97d) {
                  if (!_0x4c69c5.isInteger(_0x5bf0c8.CrackLevels[_0x1fa97d])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x530ffa.fromObject = function (_0xdcaabb) {
              if (_0xdcaabb instanceof _0x6f3a94.tct2Proto.StateInfo) {
                return _0xdcaabb;
              }
              var _0x4604d3 = new _0x6f3a94.tct2Proto.StateInfo();
              if (_0xdcaabb.CrackLevels) {
                if (!Array.isArray(_0xdcaabb.CrackLevels)) {
                  throw TypeError(".tct2Proto.StateInfo.CrackLevels: array expected");
                }
                _0x4604d3.CrackLevels = [];
                for (var _0x17b67a = 0x0; _0x17b67a < _0xdcaabb.CrackLevels.length; ++_0x17b67a) {
                  _0x4604d3.CrackLevels[_0x17b67a] = 0x0 | _0xdcaabb.CrackLevels[_0x17b67a];
                }
              }
              return _0x4604d3;
            };
            _0x530ffa.toObject = function (_0xc557dc, _0x506313) {
              if (!_0x506313) {
                _0x506313 = {};
              }
              var _0x321b25 = {};
              if (_0x506313.arrays || _0x506313.defaults) {
                _0x321b25.CrackLevels = [];
              }
              if (_0xc557dc.CrackLevels && _0xc557dc.CrackLevels.length) {
                _0x321b25.CrackLevels = [];
                for (var _0x20ff00 = 0x0; _0x20ff00 < _0xc557dc.CrackLevels.length; ++_0x20ff00) {
                  _0x321b25.CrackLevels[_0x20ff00] = _0xc557dc.CrackLevels[_0x20ff00];
                }
              }
              return _0x321b25;
            };
            _0x530ffa.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x530ffa.getTypeUrl = function (_0x5527c9) {
              if (undefined === _0x5527c9) {
                _0x5527c9 = "type.googleapis.com";
              }
              return _0x5527c9 + "/tct2Proto.StateInfo";
            };
            return _0x530ffa;
          }(),
          "GameInfoData": function () {
            function _0x2e47ca(_0x59b117) {
              this.Mul = [];
              this.JPOdds = [];
              this.BlueOdds = [];
              this.CoinOdds = [];
              this.CrackLevels = [];
              this.BuyMul = [];
              if (_0x59b117) {
                var _0x2ec285 = Object.keys(_0x59b117);
                for (var _0x98f3b2 = 0x0; _0x98f3b2 < _0x2ec285.length; ++_0x98f3b2) {
                  if (null != _0x59b117[_0x2ec285[_0x98f3b2]]) {
                    this[_0x2ec285[_0x98f3b2]] = _0x59b117[_0x2ec285[_0x98f3b2]];
                  }
                }
              }
            }
            _0x2e47ca.prototype.ShowExtra = false;
            _0x2e47ca.prototype.Mul = _0x4c69c5.emptyArray;
            _0x2e47ca.prototype.JPOdds = _0x4c69c5.emptyArray;
            _0x2e47ca.prototype.BlueOdds = _0x4c69c5.emptyArray;
            _0x2e47ca.prototype.CoinOdds = _0x4c69c5.emptyArray;
            _0x2e47ca.prototype.CrackLevels = _0x4c69c5.emptyArray;
            _0x2e47ca.prototype.MaxBet = 0x0;
            _0x2e47ca.prototype.BuyMul = _0x4c69c5.emptyArray;
            _0x2e47ca.create = function (_0x34fdfa) {
              return new _0x2e47ca(_0x34fdfa);
            };
            _0x2e47ca.encode = function (_0x48c98b, _0x260017) {
              if (!_0x260017) {
                _0x260017 = _0x29544e.create();
              }
              if (null != _0x48c98b.ShowExtra && Object.hasOwnProperty.call(_0x48c98b, "ShowExtra")) {
                _0x260017.uint32(0x8).bool(_0x48c98b.ShowExtra);
              }
              if (null != _0x48c98b.Mul && _0x48c98b.Mul.length) {
                _0x260017.uint32(0x12).fork();
                for (var _0xfdbe4 = 0x0; _0xfdbe4 < _0x48c98b.Mul.length; ++_0xfdbe4) {
                  _0x260017.double(_0x48c98b.Mul[_0xfdbe4]);
                }
                _0x260017.ldelim();
              }
              if (null != _0x48c98b.JPOdds && _0x48c98b.JPOdds.length) {
                _0x260017.uint32(0x1a).fork();
                for (_0xfdbe4 = 0x0; _0xfdbe4 < _0x48c98b.JPOdds.length; ++_0xfdbe4) {
                  _0x260017.int32(_0x48c98b.JPOdds[_0xfdbe4]);
                }
                _0x260017.ldelim();
              }
              if (null != _0x48c98b.BlueOdds && _0x48c98b.BlueOdds.length) {
                for (_0xfdbe4 = 0x0; _0xfdbe4 < _0x48c98b.BlueOdds.length; ++_0xfdbe4) {
                  _0x6f3a94.tct2Proto.Column.encode(_0x48c98b.BlueOdds[_0xfdbe4], _0x260017.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x48c98b.CoinOdds && _0x48c98b.CoinOdds.length) {
                for (_0xfdbe4 = 0x0; _0xfdbe4 < _0x48c98b.CoinOdds.length; ++_0xfdbe4) {
                  _0x6f3a94.tct2Proto.Column.encode(_0x48c98b.CoinOdds[_0xfdbe4], _0x260017.uint32(0x2a).fork()).ldelim();
                }
              }
              if (null != _0x48c98b.CrackLevels && _0x48c98b.CrackLevels.length) {
                _0x260017.uint32(0x32).fork();
                for (_0xfdbe4 = 0x0; _0xfdbe4 < _0x48c98b.CrackLevels.length; ++_0xfdbe4) {
                  _0x260017.int32(_0x48c98b.CrackLevels[_0xfdbe4]);
                }
                _0x260017.ldelim();
              }
              if (null != _0x48c98b.MaxBet && Object.hasOwnProperty.call(_0x48c98b, "MaxBet")) {
                _0x260017.uint32(0x39).double(_0x48c98b.MaxBet);
              }
              if (null != _0x48c98b.BuyMul && _0x48c98b.BuyMul.length) {
                _0x260017.uint32(0x42).fork();
                for (_0xfdbe4 = 0x0; _0xfdbe4 < _0x48c98b.BuyMul.length; ++_0xfdbe4) {
                  _0x260017.double(_0x48c98b.BuyMul[_0xfdbe4]);
                }
                _0x260017.ldelim();
              }
              return _0x260017;
            };
            _0x2e47ca.encodeDelimited = function (_0x54cff7, _0x286ef4) {
              return this.encode(_0x54cff7, _0x286ef4).ldelim();
            };
            _0x2e47ca.decode = function (_0xcfc7b7, _0x4a2c7c) {
              if (!(_0xcfc7b7 instanceof _0x10b00c)) {
                _0xcfc7b7 = _0x10b00c.create(_0xcfc7b7);
              }
              var _0x3e6c8f = undefined === _0x4a2c7c ? _0xcfc7b7.len : _0xcfc7b7.pos + _0x4a2c7c;
              for (var _0x4c6498 = new _0x6f3a94.tct2Proto.GameInfoData(); _0xcfc7b7.pos < _0x3e6c8f;) {
                var _0x55aa1d = _0xcfc7b7.uint32();
                switch (_0x55aa1d >>> 0x3) {
                  case 0x1:
                    _0x4c6498.ShowExtra = _0xcfc7b7.bool();
                    break;
                  case 0x2:
                    if (!(_0x4c6498.Mul && _0x4c6498.Mul.length)) {
                      _0x4c6498.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x55aa1d)) {
                      for (var _0x5eea27 = _0xcfc7b7.uint32() + _0xcfc7b7.pos; _0xcfc7b7.pos < _0x5eea27;) {
                        _0x4c6498.Mul.push(_0xcfc7b7.double());
                      }
                    } else {
                      _0x4c6498.Mul.push(_0xcfc7b7.double());
                    }
                    break;
                  case 0x3:
                    if (!(_0x4c6498.JPOdds && _0x4c6498.JPOdds.length)) {
                      _0x4c6498.JPOdds = [];
                    }
                    if (0x2 == (0x7 & _0x55aa1d)) {
                      for (_0x5eea27 = _0xcfc7b7.uint32() + _0xcfc7b7.pos; _0xcfc7b7.pos < _0x5eea27;) {
                        _0x4c6498.JPOdds.push(_0xcfc7b7.int32());
                      }
                    } else {
                      _0x4c6498.JPOdds.push(_0xcfc7b7.int32());
                    }
                    break;
                  case 0x4:
                    if (!(_0x4c6498.BlueOdds && _0x4c6498.BlueOdds.length)) {
                      _0x4c6498.BlueOdds = [];
                    }
                    _0x4c6498.BlueOdds.push(_0x6f3a94.tct2Proto.Column.decode(_0xcfc7b7, _0xcfc7b7.uint32()));
                    break;
                  case 0x5:
                    if (!(_0x4c6498.CoinOdds && _0x4c6498.CoinOdds.length)) {
                      _0x4c6498.CoinOdds = [];
                    }
                    _0x4c6498.CoinOdds.push(_0x6f3a94.tct2Proto.Column.decode(_0xcfc7b7, _0xcfc7b7.uint32()));
                    break;
                  case 0x6:
                    if (!(_0x4c6498.CrackLevels && _0x4c6498.CrackLevels.length)) {
                      _0x4c6498.CrackLevels = [];
                    }
                    if (0x2 == (0x7 & _0x55aa1d)) {
                      for (_0x5eea27 = _0xcfc7b7.uint32() + _0xcfc7b7.pos; _0xcfc7b7.pos < _0x5eea27;) {
                        _0x4c6498.CrackLevels.push(_0xcfc7b7.int32());
                      }
                    } else {
                      _0x4c6498.CrackLevels.push(_0xcfc7b7.int32());
                    }
                    break;
                  case 0x7:
                    _0x4c6498.MaxBet = _0xcfc7b7.double();
                    break;
                  case 0x8:
                    if (!(_0x4c6498.BuyMul && _0x4c6498.BuyMul.length)) {
                      _0x4c6498.BuyMul = [];
                    }
                    if (0x2 == (0x7 & _0x55aa1d)) {
                      for (_0x5eea27 = _0xcfc7b7.uint32() + _0xcfc7b7.pos; _0xcfc7b7.pos < _0x5eea27;) {
                        _0x4c6498.BuyMul.push(_0xcfc7b7.double());
                      }
                    } else {
                      _0x4c6498.BuyMul.push(_0xcfc7b7.double());
                    }
                    break;
                  default:
                    _0xcfc7b7.skipType(0x7 & _0x55aa1d);
                }
              }
              return _0x4c6498;
            };
            _0x2e47ca.decodeDelimited = function (_0x1ee81b) {
              if (!(_0x1ee81b instanceof _0x10b00c)) {
                _0x1ee81b = new _0x10b00c(_0x1ee81b);
              }
              return this.decode(_0x1ee81b, _0x1ee81b.uint32());
            };
            _0x2e47ca.verify = function (_0x4a061b) {
              if ('object' != typeof _0x4a061b || null === _0x4a061b) {
                return "object expected";
              }
              if (null != _0x4a061b.ShowExtra && _0x4a061b.hasOwnProperty("ShowExtra") && "boolean" != typeof _0x4a061b.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != _0x4a061b.Mul && _0x4a061b.hasOwnProperty("Mul")) {
                if (!Array.isArray(_0x4a061b.Mul)) {
                  return "Mul: array expected";
                }
                for (var _0x6c02bc = 0x0; _0x6c02bc < _0x4a061b.Mul.length; ++_0x6c02bc) {
                  if ("number" != typeof _0x4a061b.Mul[_0x6c02bc]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              if (null != _0x4a061b.JPOdds && _0x4a061b.hasOwnProperty("JPOdds")) {
                if (!Array.isArray(_0x4a061b.JPOdds)) {
                  return "JPOdds: array expected";
                }
                for (_0x6c02bc = 0x0; _0x6c02bc < _0x4a061b.JPOdds.length; ++_0x6c02bc) {
                  if (!_0x4c69c5.isInteger(_0x4a061b.JPOdds[_0x6c02bc])) {
                    return "JPOdds: integer[] expected";
                  }
                }
              }
              if (null != _0x4a061b.BlueOdds && _0x4a061b.hasOwnProperty('BlueOdds')) {
                if (!Array.isArray(_0x4a061b.BlueOdds)) {
                  return "BlueOdds: array expected";
                }
                for (_0x6c02bc = 0x0; _0x6c02bc < _0x4a061b.BlueOdds.length; ++_0x6c02bc) {
                  if (_0x1d89bf = _0x6f3a94.tct2Proto.Column.verify(_0x4a061b.BlueOdds[_0x6c02bc])) {
                    return "BlueOdds." + _0x1d89bf;
                  }
                }
              }
              if (null != _0x4a061b.CoinOdds && _0x4a061b.hasOwnProperty("CoinOdds")) {
                if (!Array.isArray(_0x4a061b.CoinOdds)) {
                  return "CoinOdds: array expected";
                }
                for (_0x6c02bc = 0x0; _0x6c02bc < _0x4a061b.CoinOdds.length; ++_0x6c02bc) {
                  var _0x1d89bf;
                  if (_0x1d89bf = _0x6f3a94.tct2Proto.Column.verify(_0x4a061b.CoinOdds[_0x6c02bc])) {
                    return 'CoinOdds.' + _0x1d89bf;
                  }
                }
              }
              if (null != _0x4a061b.CrackLevels && _0x4a061b.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(_0x4a061b.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (_0x6c02bc = 0x0; _0x6c02bc < _0x4a061b.CrackLevels.length; ++_0x6c02bc) {
                  if (!_0x4c69c5.isInteger(_0x4a061b.CrackLevels[_0x6c02bc])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              if (null != _0x4a061b.MaxBet && _0x4a061b.hasOwnProperty("MaxBet") && 'number' != typeof _0x4a061b.MaxBet) {
                return "MaxBet: number expected";
              }
              if (null != _0x4a061b.BuyMul && _0x4a061b.hasOwnProperty("BuyMul")) {
                if (!Array.isArray(_0x4a061b.BuyMul)) {
                  return "BuyMul: array expected";
                }
                for (_0x6c02bc = 0x0; _0x6c02bc < _0x4a061b.BuyMul.length; ++_0x6c02bc) {
                  if ("number" != typeof _0x4a061b.BuyMul[_0x6c02bc]) {
                    return "BuyMul: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x2e47ca.fromObject = function (_0x37c2d9) {
              if (_0x37c2d9 instanceof _0x6f3a94.tct2Proto.GameInfoData) {
                return _0x37c2d9;
              }
              var _0x52e83b = new _0x6f3a94.tct2Proto.GameInfoData();
              if (null != _0x37c2d9.ShowExtra) {
                _0x52e83b.ShowExtra = Boolean(_0x37c2d9.ShowExtra);
              }
              if (_0x37c2d9.Mul) {
                if (!Array.isArray(_0x37c2d9.Mul)) {
                  throw TypeError(".tct2Proto.GameInfoData.Mul: array expected");
                }
                _0x52e83b.Mul = [];
                for (var _0x1f7e3c = 0x0; _0x1f7e3c < _0x37c2d9.Mul.length; ++_0x1f7e3c) {
                  _0x52e83b.Mul[_0x1f7e3c] = Number(_0x37c2d9.Mul[_0x1f7e3c]);
                }
              }
              if (_0x37c2d9.JPOdds) {
                if (!Array.isArray(_0x37c2d9.JPOdds)) {
                  throw TypeError(".tct2Proto.GameInfoData.JPOdds: array expected");
                }
                _0x52e83b.JPOdds = [];
                for (_0x1f7e3c = 0x0; _0x1f7e3c < _0x37c2d9.JPOdds.length; ++_0x1f7e3c) {
                  _0x52e83b.JPOdds[_0x1f7e3c] = 0x0 | _0x37c2d9.JPOdds[_0x1f7e3c];
                }
              }
              if (_0x37c2d9.BlueOdds) {
                if (!Array.isArray(_0x37c2d9.BlueOdds)) {
                  throw TypeError(".tct2Proto.GameInfoData.BlueOdds: array expected");
                }
                _0x52e83b.BlueOdds = [];
                for (_0x1f7e3c = 0x0; _0x1f7e3c < _0x37c2d9.BlueOdds.length; ++_0x1f7e3c) {
                  if ("object" != typeof _0x37c2d9.BlueOdds[_0x1f7e3c]) {
                    throw TypeError(".tct2Proto.GameInfoData.BlueOdds: object expected");
                  }
                  _0x52e83b.BlueOdds[_0x1f7e3c] = _0x6f3a94.tct2Proto.Column.fromObject(_0x37c2d9.BlueOdds[_0x1f7e3c]);
                }
              }
              if (_0x37c2d9.CoinOdds) {
                if (!Array.isArray(_0x37c2d9.CoinOdds)) {
                  throw TypeError(".tct2Proto.GameInfoData.CoinOdds: array expected");
                }
                _0x52e83b.CoinOdds = [];
                for (_0x1f7e3c = 0x0; _0x1f7e3c < _0x37c2d9.CoinOdds.length; ++_0x1f7e3c) {
                  if ("object" != typeof _0x37c2d9.CoinOdds[_0x1f7e3c]) {
                    throw TypeError(".tct2Proto.GameInfoData.CoinOdds: object expected");
                  }
                  _0x52e83b.CoinOdds[_0x1f7e3c] = _0x6f3a94.tct2Proto.Column.fromObject(_0x37c2d9.CoinOdds[_0x1f7e3c]);
                }
              }
              if (_0x37c2d9.CrackLevels) {
                if (!Array.isArray(_0x37c2d9.CrackLevels)) {
                  throw TypeError(".tct2Proto.GameInfoData.CrackLevels: array expected");
                }
                _0x52e83b.CrackLevels = [];
                for (_0x1f7e3c = 0x0; _0x1f7e3c < _0x37c2d9.CrackLevels.length; ++_0x1f7e3c) {
                  _0x52e83b.CrackLevels[_0x1f7e3c] = 0x0 | _0x37c2d9.CrackLevels[_0x1f7e3c];
                }
              }
              if (null != _0x37c2d9.MaxBet) {
                _0x52e83b.MaxBet = Number(_0x37c2d9.MaxBet);
              }
              if (_0x37c2d9.BuyMul) {
                if (!Array.isArray(_0x37c2d9.BuyMul)) {
                  throw TypeError(".tct2Proto.GameInfoData.BuyMul: array expected");
                }
                _0x52e83b.BuyMul = [];
                for (_0x1f7e3c = 0x0; _0x1f7e3c < _0x37c2d9.BuyMul.length; ++_0x1f7e3c) {
                  _0x52e83b.BuyMul[_0x1f7e3c] = Number(_0x37c2d9.BuyMul[_0x1f7e3c]);
                }
              }
              return _0x52e83b;
            };
            _0x2e47ca.toObject = function (_0x2d8744, _0x2a2063) {
              if (!_0x2a2063) {
                _0x2a2063 = {};
              }
              var _0x46787b = {};
              if (_0x2a2063.arrays || _0x2a2063.defaults) {
                _0x46787b.Mul = [];
                _0x46787b.JPOdds = [];
                _0x46787b.BlueOdds = [];
                _0x46787b.CoinOdds = [];
                _0x46787b.CrackLevels = [];
                _0x46787b.BuyMul = [];
              }
              if (_0x2a2063.defaults) {
                _0x46787b.ShowExtra = false;
                _0x46787b.MaxBet = 0x0;
              }
              if (null != _0x2d8744.ShowExtra && _0x2d8744.hasOwnProperty('ShowExtra')) {
                _0x46787b.ShowExtra = _0x2d8744.ShowExtra;
              }
              if (_0x2d8744.Mul && _0x2d8744.Mul.length) {
                _0x46787b.Mul = [];
                for (var _0x2483a3 = 0x0; _0x2483a3 < _0x2d8744.Mul.length; ++_0x2483a3) {
                  _0x46787b.Mul[_0x2483a3] = _0x2a2063.json && !isFinite(_0x2d8744.Mul[_0x2483a3]) ? String(_0x2d8744.Mul[_0x2483a3]) : _0x2d8744.Mul[_0x2483a3];
                }
              }
              if (_0x2d8744.JPOdds && _0x2d8744.JPOdds.length) {
                _0x46787b.JPOdds = [];
                for (_0x2483a3 = 0x0; _0x2483a3 < _0x2d8744.JPOdds.length; ++_0x2483a3) {
                  _0x46787b.JPOdds[_0x2483a3] = _0x2d8744.JPOdds[_0x2483a3];
                }
              }
              if (_0x2d8744.BlueOdds && _0x2d8744.BlueOdds.length) {
                _0x46787b.BlueOdds = [];
                for (_0x2483a3 = 0x0; _0x2483a3 < _0x2d8744.BlueOdds.length; ++_0x2483a3) {
                  _0x46787b.BlueOdds[_0x2483a3] = _0x6f3a94.tct2Proto.Column.toObject(_0x2d8744.BlueOdds[_0x2483a3], _0x2a2063);
                }
              }
              if (_0x2d8744.CoinOdds && _0x2d8744.CoinOdds.length) {
                _0x46787b.CoinOdds = [];
                for (_0x2483a3 = 0x0; _0x2483a3 < _0x2d8744.CoinOdds.length; ++_0x2483a3) {
                  _0x46787b.CoinOdds[_0x2483a3] = _0x6f3a94.tct2Proto.Column.toObject(_0x2d8744.CoinOdds[_0x2483a3], _0x2a2063);
                }
              }
              if (_0x2d8744.CrackLevels && _0x2d8744.CrackLevels.length) {
                _0x46787b.CrackLevels = [];
                for (_0x2483a3 = 0x0; _0x2483a3 < _0x2d8744.CrackLevels.length; ++_0x2483a3) {
                  _0x46787b.CrackLevels[_0x2483a3] = _0x2d8744.CrackLevels[_0x2483a3];
                }
              }
              if (null != _0x2d8744.MaxBet && _0x2d8744.hasOwnProperty("MaxBet")) {
                _0x46787b.MaxBet = _0x2a2063.json && !isFinite(_0x2d8744.MaxBet) ? String(_0x2d8744.MaxBet) : _0x2d8744.MaxBet;
              }
              if (_0x2d8744.BuyMul && _0x2d8744.BuyMul.length) {
                _0x46787b.BuyMul = [];
                for (_0x2483a3 = 0x0; _0x2483a3 < _0x2d8744.BuyMul.length; ++_0x2483a3) {
                  _0x46787b.BuyMul[_0x2483a3] = _0x2a2063.json && !isFinite(_0x2d8744.BuyMul[_0x2483a3]) ? String(_0x2d8744.BuyMul[_0x2483a3]) : _0x2d8744.BuyMul[_0x2483a3];
                }
              }
              return _0x46787b;
            };
            _0x2e47ca.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x2e47ca.getTypeUrl = function (_0x5b36e8) {
              if (undefined === _0x5b36e8) {
                _0x5b36e8 = "type.googleapis.com";
              }
              return _0x5b36e8 + "/tct2Proto.GameInfoData";
            };
            return _0x2e47ca;
          }(),
          BuyReq: function () {
            function _0x4ce966(_0xdaf6f3) {
              if (_0xdaf6f3) {
                var _0x217f84 = Object.keys(_0xdaf6f3);
                for (var _0x565247 = 0x0; _0x565247 < _0x217f84.length; ++_0x565247) {
                  if (null != _0xdaf6f3[_0x217f84[_0x565247]]) {
                    this[_0x217f84[_0x565247]] = _0xdaf6f3[_0x217f84[_0x565247]];
                  }
                }
              }
            }
            _0x4ce966.prototype.BaseBet = 0x0;
            _0x4ce966.prototype.BuyType = 0x0;
            _0x4ce966.create = function (_0x247cd4) {
              return new _0x4ce966(_0x247cd4);
            };
            _0x4ce966.encode = function (_0x5e77c4, _0x31cd00) {
              if (!_0x31cd00) {
                _0x31cd00 = _0x29544e.create();
              }
              if (null != _0x5e77c4.BaseBet && Object.hasOwnProperty.call(_0x5e77c4, 'BaseBet')) {
                _0x31cd00.uint32(0x9).double(_0x5e77c4.BaseBet);
              }
              if (null != _0x5e77c4.BuyType && Object.hasOwnProperty.call(_0x5e77c4, 'BuyType')) {
                _0x31cd00.uint32(0x10).int32(_0x5e77c4.BuyType);
              }
              return _0x31cd00;
            };
            _0x4ce966.encodeDelimited = function (_0x47c905, _0x2fe474) {
              return this.encode(_0x47c905, _0x2fe474).ldelim();
            };
            _0x4ce966.decode = function (_0x596317, _0x4951d3) {
              if (!(_0x596317 instanceof _0x10b00c)) {
                _0x596317 = _0x10b00c.create(_0x596317);
              }
              var _0x140555 = undefined === _0x4951d3 ? _0x596317.len : _0x596317.pos + _0x4951d3;
              for (var _0x2f27b0 = new _0x6f3a94.tct2Proto.BuyReq(); _0x596317.pos < _0x140555;) {
                var _0xd5043f = _0x596317.uint32();
                switch (_0xd5043f >>> 0x3) {
                  case 0x1:
                    _0x2f27b0.BaseBet = _0x596317.double();
                    break;
                  case 0x2:
                    _0x2f27b0.BuyType = _0x596317.int32();
                    break;
                  default:
                    _0x596317.skipType(0x7 & _0xd5043f);
                }
              }
              return _0x2f27b0;
            };
            _0x4ce966.decodeDelimited = function (_0x4d2898) {
              if (!(_0x4d2898 instanceof _0x10b00c)) {
                _0x4d2898 = new _0x10b00c(_0x4d2898);
              }
              return this.decode(_0x4d2898, _0x4d2898.uint32());
            };
            _0x4ce966.verify = function (_0x33d1e3) {
              return "object" != typeof _0x33d1e3 || null === _0x33d1e3 ? "object expected" : null != _0x33d1e3.BaseBet && _0x33d1e3.hasOwnProperty("BaseBet") && 'number' != typeof _0x33d1e3.BaseBet ? "BaseBet: number expected" : null != _0x33d1e3.BuyType && _0x33d1e3.hasOwnProperty("BuyType") && !_0x4c69c5.isInteger(_0x33d1e3.BuyType) ? "BuyType: integer expected" : null;
            };
            _0x4ce966.fromObject = function (_0x1c29b4) {
              if (_0x1c29b4 instanceof _0x6f3a94.tct2Proto.BuyReq) {
                return _0x1c29b4;
              }
              var _0x4ba342 = new _0x6f3a94.tct2Proto.BuyReq();
              if (null != _0x1c29b4.BaseBet) {
                _0x4ba342.BaseBet = Number(_0x1c29b4.BaseBet);
              }
              if (null != _0x1c29b4.BuyType) {
                _0x4ba342.BuyType = 0x0 | _0x1c29b4.BuyType;
              }
              return _0x4ba342;
            };
            _0x4ce966.toObject = function (_0x3685db, _0x35c74d) {
              if (!_0x35c74d) {
                _0x35c74d = {};
              }
              var _0x13ed8f = {};
              if (_0x35c74d.defaults) {
                _0x13ed8f.BaseBet = 0x0;
                _0x13ed8f.BuyType = 0x0;
              }
              if (null != _0x3685db.BaseBet && _0x3685db.hasOwnProperty("BaseBet")) {
                _0x13ed8f.BaseBet = _0x35c74d.json && !isFinite(_0x3685db.BaseBet) ? String(_0x3685db.BaseBet) : _0x3685db.BaseBet;
              }
              if (null != _0x3685db.BuyType && _0x3685db.hasOwnProperty("BuyType")) {
                _0x13ed8f.BuyType = _0x3685db.BuyType;
              }
              return _0x13ed8f;
            };
            _0x4ce966.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
            };
            _0x4ce966.getTypeUrl = function (_0x17c78a) {
              if (undefined === _0x17c78a) {
                _0x17c78a = 'type.googleapis.com';
              }
              return _0x17c78a + "/tct2Proto.BuyReq";
            };
            return _0x4ce966;
          }()
        }).Column = function () {
          function _0x2a2a7b(_0x1f6062) {
            this.Col = [];
            if (_0x1f6062) {
              var _0x33751c = Object.keys(_0x1f6062);
              for (var _0x350e02 = 0x0; _0x350e02 < _0x33751c.length; ++_0x350e02) {
                if (null != _0x1f6062[_0x33751c[_0x350e02]]) {
                  this[_0x33751c[_0x350e02]] = _0x1f6062[_0x33751c[_0x350e02]];
                }
              }
            }
          }
          _0x2a2a7b.prototype.Col = _0x4c69c5.emptyArray;
          _0x2a2a7b.create = function (_0x481d79) {
            return new _0x2a2a7b(_0x481d79);
          };
          _0x2a2a7b.encode = function (_0x5aad81, _0x13d386) {
            if (!_0x13d386) {
              _0x13d386 = _0x29544e.create();
            }
            if (null != _0x5aad81.Col && _0x5aad81.Col.length) {
              _0x13d386.uint32(0xa).fork();
              for (var _0x1ef824 = 0x0; _0x1ef824 < _0x5aad81.Col.length; ++_0x1ef824) {
                _0x13d386.int32(_0x5aad81.Col[_0x1ef824]);
              }
              _0x13d386.ldelim();
            }
            return _0x13d386;
          };
          _0x2a2a7b.encodeDelimited = function (_0xfa42db, _0x313e52) {
            return this.encode(_0xfa42db, _0x313e52).ldelim();
          };
          _0x2a2a7b.decode = function (_0x4626b0, _0x1523b3) {
            if (!(_0x4626b0 instanceof _0x10b00c)) {
              _0x4626b0 = _0x10b00c.create(_0x4626b0);
            }
            var _0x2ac209 = undefined === _0x1523b3 ? _0x4626b0.len : _0x4626b0.pos + _0x1523b3;
            for (var _0x1d699d = new _0x6f3a94.tct2Proto.Column(); _0x4626b0.pos < _0x2ac209;) {
              var _0x24b239 = _0x4626b0.uint32();
              switch (_0x24b239 >>> 0x3) {
                case 0x1:
                  if (!(_0x1d699d.Col && _0x1d699d.Col.length)) {
                    _0x1d699d.Col = [];
                  }
                  if (0x2 == (0x7 & _0x24b239)) {
                    for (var _0x369d66 = _0x4626b0.uint32() + _0x4626b0.pos; _0x4626b0.pos < _0x369d66;) {
                      _0x1d699d.Col.push(_0x4626b0.int32());
                    }
                  } else {
                    _0x1d699d.Col.push(_0x4626b0.int32());
                  }
                  break;
                default:
                  _0x4626b0.skipType(0x7 & _0x24b239);
              }
            }
            return _0x1d699d;
          };
          _0x2a2a7b.decodeDelimited = function (_0x243b04) {
            if (!(_0x243b04 instanceof _0x10b00c)) {
              _0x243b04 = new _0x10b00c(_0x243b04);
            }
            return this.decode(_0x243b04, _0x243b04.uint32());
          };
          _0x2a2a7b.verify = function (_0x35728f) {
            if ('object' != typeof _0x35728f || null === _0x35728f) {
              return "object expected";
            }
            if (null != _0x35728f.Col && _0x35728f.hasOwnProperty("Col")) {
              if (!Array.isArray(_0x35728f.Col)) {
                return "Col: array expected";
              }
              for (var _0x18500c = 0x0; _0x18500c < _0x35728f.Col.length; ++_0x18500c) {
                if (!_0x4c69c5.isInteger(_0x35728f.Col[_0x18500c])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x2a2a7b.fromObject = function (_0x295de9) {
            if (_0x295de9 instanceof _0x6f3a94.tct2Proto.Column) {
              return _0x295de9;
            }
            var _0x5e8896 = new _0x6f3a94.tct2Proto.Column();
            if (_0x295de9.Col) {
              if (!Array.isArray(_0x295de9.Col)) {
                throw TypeError(".tct2Proto.Column.Col: array expected");
              }
              _0x5e8896.Col = [];
              for (var _0x1198bf = 0x0; _0x1198bf < _0x295de9.Col.length; ++_0x1198bf) {
                _0x5e8896.Col[_0x1198bf] = 0x0 | _0x295de9.Col[_0x1198bf];
              }
            }
            return _0x5e8896;
          };
          _0x2a2a7b.toObject = function (_0xc6ec1, _0x6e51ee) {
            if (!_0x6e51ee) {
              _0x6e51ee = {};
            }
            var _0x15cc95 = {};
            if (_0x6e51ee.arrays || _0x6e51ee.defaults) {
              _0x15cc95.Col = [];
            }
            if (_0xc6ec1.Col && _0xc6ec1.Col.length) {
              _0x15cc95.Col = [];
              for (var _0xa8dc82 = 0x0; _0xa8dc82 < _0xc6ec1.Col.length; ++_0xa8dc82) {
                _0x15cc95.Col[_0xa8dc82] = _0xc6ec1.Col[_0xa8dc82];
              }
            }
            return _0x15cc95;
          };
          _0x2a2a7b.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x5231ed.util.toJSONOptions);
          };
          _0x2a2a7b.getTypeUrl = function (_0x32bb11) {
            if (undefined === _0x32bb11) {
              _0x32bb11 = "type.googleapis.com";
            }
            return _0x32bb11 + "/tct2Proto.Column";
          };
          return _0x2a2a7b;
        }();
        _0x6f3a94.tct2Proto = _0xb8ea35;
        _0x4bba9d.exports = _0x6f3a94;
        _0x4bba9d.exports;
      }, function () {
        return {
          'protobufjs/minimal': _0x5f2708
        };
      });
      _0x4a8f3c.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/TripleCoinTreasure2/Client/Thai_UAT/assets/game/Script/Proto/js/tct2proto.js");
    }
  };
});
(function (_0x451a6e) {
  _0x451a6e('virtual:///prerequisite-imports/game', "chunks:///game.js");
})(function (_0xe0eca2, _0x5d595c) {
  System.register(_0xe0eca2, [_0x5d595c], function (_0x262688, _0x3ba54f) {
    return {
      'setters': [function (_0x51e5d2) {
        var _0x38b4a4 = {};
        for (var _0x4a42c9 in _0x51e5d2) {
          if (_0x4a42c9 !== 'default' && _0x4a42c9 !== '__esModule') {
            _0x38b4a4[_0x4a42c9] = _0x51e5d2[_0x4a42c9];
          }
        }
        _0x262688(_0x38b4a4);
      }],
      'execute': function () {}
    };
  });
});