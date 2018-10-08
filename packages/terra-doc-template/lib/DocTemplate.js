'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraPropsTable = require('terra-props-table');

var _terraPropsTable2 = _interopRequireDefault(_terraPropsTable);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _ExampleTemplate = require('./ExampleTemplate');

var _ExampleTemplate2 = _interopRequireDefault(_ExampleTemplate);

var _DocTemplateModule = require('./DocTemplate.module.scss');

var _DocTemplateModule2 = _interopRequireDefault(_DocTemplateModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_DocTemplateModule2.default);

var propTypes = {
  /**
   * Enables the ability to add custom content to doc template. Children will be rendered after all other content.
   */
  children: _propTypes2.default.node,
  /**
   * The given component's npm package name.
   */
  packageName: _propTypes2.default.string,
  /**
   * The given component's readme file imported to a string.
   */
  readme: _propTypes2.default.string,
  /**
   * The url to the source code for the given component.
   */
  srcPath: _propTypes2.default.string,
  /**
   * All of the example(s) that will be displayed. An empty array is supported.
   * ```
   * title: The title of the example
   * description: A description of the example to be displayed below the title
   * example: The example to be displayed
   * source: The source code of the example
   * ```
   */
  examples: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    description: _propTypes2.default.node,
    example: _propTypes2.default.element,
    source: _propTypes2.default.string
  })),
  /**
   * All of the props table(s) that will be displayed. An empty array is supported.
   * ```
   * componentSrc: The source code of the component
   * componentName: The name of the component
   * propsResolution: Type of react-docgen resolver to use for prop-types resolution. Supported values are `default` or `findAllComponentDefinitions`. Will use `default` if left unspecified.
   * ```
   */
  propsTables: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    componentSrc: _propTypes2.default.string,
    componentName: _propTypes2.default.string,
    propsResolution: _propTypes2.default.string
  }))
};

var defaultProps = {
  packageName: '',
  readme: '',
  srcPath: '',
  examples: [],
  propsTables: []
};

var DocTemplate = function DocTemplate(_ref) {
  var packageName = _ref.packageName,
      readme = _ref.readme,
      srcPath = _ref.srcPath,
      examples = _ref.examples,
      propsTables = _ref.propsTables,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['packageName', 'readme', 'srcPath', 'examples', 'propsTables', 'children']);

  var id = 0;
  var localExamples = examples;
  var localPropsTables = propsTables;

  // Assign unique identifiers to use as keys later
  for (var i = 0; i < localExamples.length; i += 1) {
    localExamples[i].id = id;
    id += 1;
  }

  for (var _i = 0; _i < localPropsTables.length; _i += 1) {
    localPropsTables[_i].id = id;
    id += 1;
  }

  var docTemplateClassNames = cx(['doc-template', customProps.className]);

  var exampleHeader = void 0;
  if (localExamples.length > 0) {
    var exampleHeaderText = localExamples.length > 1 ? 'Examples' : 'Example';
    exampleHeader = _react2.default.createElement(
      'h1',
      { className: cx('examples-header') },
      exampleHeaderText
    );
  }

  var badge = _react2.default.createElement(
    'a',
    { href: 'https://www.npmjs.org/package/' + packageName },
    _react2.default.createElement('img', { src: 'https://badgen.net/npm/v/' + packageName, alt: 'NPM version' })
  );

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: docTemplateClassNames }),
    packageName && badge,
    readme && _react2.default.createElement(_terraMarkdown2.default, { src: readme }),
    srcPath && _react2.default.createElement(
      'a',
      { href: srcPath },
      'View component source code'
    ),
    exampleHeader,
    localExamples.map(function (example) {
      return _react2.default.createElement(_ExampleTemplate2.default, {
        title: example.title,
        example: example.example,
        exampleSrc: example.source,
        description: example.description,
        key: example.id
      });
    }),
    localPropsTables.map(function (propsTable) {
      return _react2.default.createElement(_terraPropsTable2.default, {
        src: propsTable.componentSrc,
        componentName: propsTable.componentName,
        key: propsTable.id,
        propsResolution: propsTable.propsResolution
      });
    }),
    children
  );
};

DocTemplate.propTypes = propTypes;
DocTemplate.defaultProps = defaultProps;

exports.default = DocTemplate;