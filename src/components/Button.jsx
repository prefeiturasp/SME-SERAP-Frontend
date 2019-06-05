import React, { Component } from 'react';
import If from './layout';
// import If from './If';

export var ButtonStyle = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info',
  Light: 'light',
  Dark: 'dark',
  Link: 'link',

  OutlinePrimary: 'outline-primary',
  OutlineSecondary: 'outline-secondary',
  OutlineSuccess: 'outline-success',
  OutlineDanger: 'outline-danger',
  OutlineWarning: 'outline-warning',
  OutlineInfo: 'outline-info',
  OutlineLight: 'outline-light',
  OutlineDark: 'outline-dark',
  OutlineLink: 'outline-link'
};

export var ButtonIcon = {
  TRASH: 'trash',
  HOME: 'home',
  EDIT: 'edit',
  CLOSE: 'close',
  FOLDER: 'folder',
  POWER_OFF: 'power-off',
  ARROW_DOWN: 'arrow-down',
  ANGLE_DOWN: 'angle-down'
};

export var ButtonType = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  RESET: 'reset'
};

export default class Button extends Component {
  render() {
    const {
      type,
      style,
      className,
      buttonStyle,
      disabled,
      label,
      icon,
      onClick
    } = this.props;
    return (
      <button
        type={type || ButtonType.BUTTON}
        className={`btn btn-${style} ${className}`}
        onClick={onClick}
        style={buttonStyle}
        disabled={disabled}
      >
        {label}
        <If isVisible={true}>
          <i class={`fa fa-${icon}`} />
        </If>
      </button>
    );
  }
}
