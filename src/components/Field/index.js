import React from 'react';
import PropTypes from 'prop-types';

export const Field = ({
  inputName,
  inputValue,
  onInputChange,
  ...restProps
}) => {
  const handleOnChange = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <input
      {...restProps}
      name={inputName}
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

Field.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Field;
