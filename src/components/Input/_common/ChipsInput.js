import React, { useState, useEffect } from 'react';
import AutosizeInput from 'react-input-autosize';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import CrossIcon from 'icons/close.svg';
import styles from './ChipsInput.scss';
import { useChips } from './hooks/useChips';

export const ChipsInput = ({
  className,
  onKeyDown,
  onFocus,
  onBlur,
  onMouseDown,
  innerRef,
  value,
  onChange,
  focused,
  error,
  placeholder = 'Type here...',
  inputRef,
  disabled,
}) => {
  const focusedClassName = focused ? styles.focused : '';
  const errorClassName = error ? styles.error : '';
  const [inputValue, setInputValue] = useState();
  const [onKeyDownChips, addChip, deleteChip] = useChips(value, inputValue, setInputValue);

  const renderChip = (title, i) => {
    return (
      <div key={i} className={styles.chip}>
        {title}
        {!disabled && (
          <Icon onClick={() => deleteChip(title)} src={{ default: CrossIcon }} className={styles.deleteChipIcon} />
        )}
      </div>
    );
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
  };

  const handleKeyDown = (e) => {
    onKeyDownChips(e);
    onKeyDown(e);
  };

  const renderInput = () => {
    return (
      <AutosizeInput
        ref={inputRef}
        inputClassName={styles.newChip}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div
      onClick={onFocus}
      ref={innerRef}
      className={`${styles.chips} ${focusedClassName} ${errorClassName} ${className}-input`}
    >
      <div className={styles.chipsTrack}>
        {value.map(renderChip)}
        {!disabled ? renderInput() : null}
      </div>
    </div>
  );
};

ChipsInput.propTypes = {
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
  innerRef: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  focused: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  inputRef: PropTypes.object,
};