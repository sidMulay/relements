import React from 'react';
import PropTypes from 'prop-types';
// import Icon from 'components/UI/Icon';

import styles from './Header.scss';

function Header({
  prefixClassName, onSort, columns, sortKey, sortOrder,
}) {
  if (!columns || columns.length === 0) return null;
  return (
    <div className={`${styles.tableHeader} ${prefixClassName}`}>
      {columns.map((column, i) => {
        const isTheSortedColumn = sortKey === column.sortKey;
        const activeClassName = column.sortKey && (isTheSortedColumn ? styles.active : '');
        const sortIcon = column.sortKey && isTheSortedColumn && (sortOrder === 1 ? '▲' : '▼');
        return (
          <div
            key={i}
            className={`${styles.tableHeaderItem} ${activeClassName} ${prefixClassName}-header-column ${
              column.className
            }`}
            style={{ width: column.width, maxWidth: column.width, minWidth: column.width }}
            onClick={() => onSort(column)}
          >
            <div className={`${styles.tableHeaderItemText} ${prefixClassName}-title`}>{column.title}</div>
            <div className={`${styles.tableHeaderItemIcon} ${prefixClassName}-icon`}>{sortIcon}</div>
          </div>
        );
      })}
    </div>
  );
}

Header.propTypes = {
  prefixClassName: PropTypes.string,
  onSort: PropTypes.func,
  columns: PropTypes.arrayOf(PropTypes.object),
  sortOrder: PropTypes.number,
  sortKey: PropTypes.string,
};

Header.defaultProps = {
  prefixClassName: '',
  onSort: () => {},
  columns: [],
  sortOrder: -1,
  sortKey: '',
};

export default Header;