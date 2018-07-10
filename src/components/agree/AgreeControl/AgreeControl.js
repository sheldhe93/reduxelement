import React, { Component } from 'react';
import styles from './AgreeControl.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined');
}
const defaultProps = {
  onAgree: createWarning('onAgree'),
  onAgreeY: createWarning('onAgreeY'),
  onAgreeN: createWarning('onAgreeN'),
  agree1: ""
};

class AgreeControl extends Component {
  render() {
    return (
      <div className={cx('agreeControlMain')}>
        <div className={cx('button', `${this.props.agree1 === "N" ? "onButton" : "offButton"}`)} onClick={this.props.onAgreeN}>
          아니요
        </div>
        <div className={cx('button', `${this.props.agree1 === "Y" ? "onButton" : "offButton"}`)} onClick={this.props.onAgreeY}>
          예
        </div>
      </div>
    );
  }
}
AgreeControl.defaultProps = defaultProps;
export default AgreeControl;