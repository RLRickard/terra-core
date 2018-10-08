'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('terra-avatar/lib/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvatarFacility = function AvatarFacility() {
  return _react2.default.createElement(_Avatar2.default, { ariaLabel: 'South Surgical Center', variant: 'facility' });
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = AvatarFacility;