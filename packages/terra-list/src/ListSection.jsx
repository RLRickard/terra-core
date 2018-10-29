import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SectionHeader from './ListSectionHeader';

// Disable this lint rule to allow for the metaData prop
/* eslint-disable react/forbid-prop-types */
const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the section can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Function callback for the ref of the li.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for the ref of the li.
   */
  onClick: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  onKeyDown: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Header to be placed within a section list item
   */
  title: PropTypes.string,
};
/* eslint-enable react/forbid-prop-types */

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
  title: '',
};

const ListSection = ({
  children,
  isCollapsed,
  isCollapsible,
  ...customProps
}) => {
  let sectionItems;
  if (!isCollapsible || !isCollapsed) {
    sectionItems = children;
  }

  return (
    <React.Fragment>
      <SectionHeader isCollapsible={isCollapsible} isCollapsed={isCollapsed} {...customProps} />
      {sectionItems}
    </React.Fragment>
  );
};

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

export default ListSection;