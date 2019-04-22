import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { ChipsInput } from '../_common/ChipsInput';
import { Label } from '../_common/Label';
import styles from './Chips.scss';
import { useInput } from '../Dropdown/hooks/useInput';

const Text = ({
  value,
  onChange,

  label,
  placeholder,
  className,
  prefixClassName,
  error,

  onFocus,
  onBlur,
  disabled,

  innerRef,
}) => {
  const _TextInputDOM = useRef();
  const [focused, setFocused, handleFocus, handleBlur] = useInput(_TextInputDOM, onFocus, onBlur);

  return (
    <div className={`${styles.text} ${prefixClassName} ${className}`}>
      <Label focused={focused} error={error} className={`${styles.dropdownLabel} ${prefixClassName}-label`}>
        {label}
      </Label>
      <ChipsInput
        inputRef={_TextInputDOM}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        onClick={setFocused}
        focused={focused}
        active={focused}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

Text.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  prefixClassName: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Text;