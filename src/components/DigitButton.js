import React from 'react';
import PropTypes from 'prop-types';

function DigitButton({ digit }) {
  return (
    <button type="button" value={digit}>{digit}</button>
  );
}

DigitButton.propTypes = {
  digit: PropTypes.number.isRequired,
};

export default DigitButton;
