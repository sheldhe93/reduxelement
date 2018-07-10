import React, { Component } from 'react';
import styles from './DetailState.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class DetailState extends Component {
  render() {
    const targetClick = (data) => {
      this.props.onRes(data);
    }
    const { part4 } = this.props;
    const onOff = part4.dState === "" ? "" : part4.dState[0];
    return (
      <div className={cx('stateTemplate', 'flexcenter2')}>
        <div className={cx('subjectSmall')}>결혼 여부를 알려주세요</div>
        <div className={cx('flexcenter', 'twoButton')}>
          <div className={cx('cursor', 'flexcenter', 'borderRightgray', `${onOff === 1 ? "onButton" : ""}`)} onClick={() => targetClick([1, "기혼"])}>기혼</div>
          <div className={cx('cursor', 'flexcenter', 'borderLeftgray', `${onOff === 2 ? "onButton" : ""}`)} onClick={() => targetClick([2, "미혼"])}>미혼</div>
        </div>
      </div>
    );
  }
}

export default DetailState;