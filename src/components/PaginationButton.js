import React from 'react';


const colors = {
  white: '#FFFFFF',
  black: '#000000',
  greenButton: '#67A640',
  disabledGreenButton: '#98C17E',
  greyBorder: '#DDDDDD',
  offWhiteTableRow: '#F9F9F9',
  greySelectedTableRow: '#E0E0E0',
  danger: '#D9534F',
  warning: '#F0AD4E',
  brandPrimary: '#E91431',
  actionBackground: '#417496',
  successBackground: '#6BA62A',
  disabledBlueButton: '#7FA0B6',
  lightGreyBackground: '#E9E9E9',
  lighterGrayBackground: '#F5F5F5',
  gray: '#777',
  mediumDarkGrey: '#555555',
  veryDarkGrey: '#333333',
  red: '#E91431',
  hoverRed: '#BE1028',
  disabledRed: '#C25656',
  errorText: '#F44336',
  paleYellow: '#FFDB89',
};


const styles = {
  button: {
    cursor: 'default',
    color: colors.gray,
    backgroundColor: colors.white,
    border: '1px solid #dddddd',
    position: 'relative',
    padding: '12px 12px',
    marginLeft: '-1px',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: 1.42857,
  },
  active: {
    zIndex: 2,
    color: colors.white,
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  item: { display: 'inline-block' },
};

export const DefaultButton = ({ active, ...props }) => {
  const style = active ? { ...styles.button, ...styles.active } : styles.button;
  return (
    <button style={style} type="button" {...props} className="-btn">
      {props.children}
    </button>
  );
};

const defaultProps = {
  buttonComponent: DefaultButton,
};

class PaginationButton extends React.Component {
  handleClick = event => {
    const { disabled, onSelect, eventKey } = this.props;

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  render() {
    const {
      buttonComponent: Component,
      eventKey,
      active,
      ...props
    } = this.props;

    return (
      <li style={styles.item}>
        <Component {...props} onClick={this.handleClick} active={active}>
          {this.props.children}
        </Component>
      </li>
    );
  }
}

PaginationButton.defaultProps = defaultProps;

export default PaginationButton;
