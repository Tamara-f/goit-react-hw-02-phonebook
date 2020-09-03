import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, OnChangeFilter }) {
  return (
    <div>
      <span>Find name</span>
      <input
        type="text"
        value={value}
        onChange={e => OnChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  OnChangeFilter: PropTypes.func.isRequired,
};
