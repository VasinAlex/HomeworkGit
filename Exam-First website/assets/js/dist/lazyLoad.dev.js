"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defaults = require("./defaults");

var _autoInitialize = require("./autoInitialize");

var _load = require("./load");

var _intersectionObserver = require("./intersectionObserver");

var _environment = require("./environment");

var _native = require("./native");

var _online = require("./online");

var _dom = require("./dom");

var _data = require("./data");

var _counters = require("./counters");

var _unobserve = require("./unobserve");

var _restore = require("./restore");

var _originalAttributes = require("./originalAttributes");

var LazyLoad = function LazyLoad(customSettings, elements) {
  var settings = (0, _defaults.getExtendedSettings)(customSettings);
  this._settings = settings;
  this.loadingCount = 0;
  (0, _intersectionObserver.setObserver)(settings, this);
  (0, _online.setOnlineCheck)(settings, this);
  this.update(elements);
};

LazyLoad.prototype = {
  update: function update(givenNodeset) {
    var settings = this._settings;
    var elementsToLoad = (0, _dom.getElementsToLoad)(givenNodeset, settings);
    (0, _counters.setToLoadCount)(this, elementsToLoad.length);

    if (_environment.isBot || !_environment.supportsIntersectionObserver) {
      this.loadAll(elementsToLoad);
      return;
    }

    if ((0, _native.shouldUseNative)(settings)) {
      (0, _native.loadAllNative)(elementsToLoad, settings, this);
      return;
    }

    (0, _intersectionObserver.updateObserver)(this._observer, elementsToLoad);
  },
  destroy: function destroy() {
    // Observer
    if (this._observer) {
      this._observer.disconnect();
    } // Clean handlers


    (0, _online.resetOnlineCheck)(this); // Clean custom attributes on elements

    (0, _dom.queryElements)(this._settings).forEach(function (element) {
      (0, _originalAttributes.deleteOriginalAttrs)(element);
    }); // Delete all internal props

    delete this._observer;
    delete this._settings;
    delete this._onlineHandler;
    delete this.loadingCount;
    delete this.toLoadCount;
  },
  loadAll: function loadAll(elements) {
    var _this = this;

    var settings = this._settings;
    var elementsToLoad = (0, _dom.getElementsToLoad)(elements, settings);
    elementsToLoad.forEach(function (element) {
      (0, _unobserve.unobserve)(element, _this);
      (0, _load.load)(element, settings, _this);
    });
  },
  restoreAll: function restoreAll() {
    var settings = this._settings;
    (0, _dom.queryElements)(settings).forEach(function (element) {
      (0, _restore.restore)(element, settings);
    });
  }
};

LazyLoad.load = function (element, customSettings) {
  var settings = (0, _defaults.getExtendedSettings)(customSettings);
  (0, _load.load)(element, settings);
};

LazyLoad.resetStatus = function (element) {
  (0, _data.resetStatus)(element);
}; // Automatic instances creation if required (useful for async script loading)


if (_environment.runningOnBrowser) {
  (0, _autoInitialize.autoInitialize)(LazyLoad, window.lazyLoadOptions);
}

var _default = LazyLoad;
exports["default"] = _default;