"use strict";

var toast = {
  style: {
    position: 'fixed',
    right: '20px',
    top: '20px',
    width: '350px',
    padding: '15px',
    color: '#fff',
    'border-radius': '5px',
    'z-index': '10000'
  },
  show: function show(text, type) {
    if (document.getElementById("my-toast")) {
      document.getElementById("my-toast").remove();
    }

    var styleString = '';

    for (var prop in this.style) {
      styleString += "".concat(prop, ":").concat(this.style[prop], ";");
    }

    switch (type) {
      case 'success':
        styleString += 'background-color: rgba(25, 135, 84, .8);';
        break;

      case 'danger':
        styleString += 'background-color: rgba(195, 22, 22, .8);';
        break;

      case 'warning':
        styleString += 'background-color: rgba(255, 184, 30, .8);';
        break;

      case 'info':
        styleString += 'background-color: rgba(30, 199, 255, 0.8);';
        break;
    }

    var html = "<div id=\"my-toast\" class=\"toast-".concat(type, "\" style=\"").concat(styleString, "\">\n      <div>").concat(text, "</div>\n    </div>");
    document.body.insertAdjacentHTML('afterbegin', html);
    setTimeout(function () {
      if (document.getElementById("my-toast")) {
        document.getElementById("my-toast").remove();
      }
    }, 3000);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'success');
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'danger');
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'warning');
  },
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'info');
  }
};