import React from 'react';
import PropTypes from 'prop-types';

function DigitButton({ digit, onClick }) {
  return (
    <button type="button" onClick={() => onClick(digit)}>{digit}</button>
  );
}

DigitButton.propTypes = {
  digit: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DigitButton;
