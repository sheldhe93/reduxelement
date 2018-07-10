import React, { Component } from 'react';
import styles from './DetailAge.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class DetailAge extends Component {
  render() {
    const targetClick = (data) => {
      this.props.onRes(data);
    }
    const { part4 } = this.props;
    const onOff = part4.age === "" ? "" : part4.age[0];
    return (
      <div className={cx('ageTemplate', 'flexcenter2')}>
        <div className={cx('subjectSmall')}>작성해주시는 분의 연령대는?</div>
        <div className={cx('flexcenter', 'fiveButton')}>
          <div className={cx('cursor', 'flexcenter', `${onOff === 1 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([1, "20대", 20])}>20대</div>
          <div className={cx('cursor', 'flexcenter', `${onOff === 2 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([2, "30대", 30])}>30대</div>
          <div className={cx('cursor', 'flexcenter', `${onOff === 3 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([3, "40대", 40])}>40대</div>
          <div className={cx('cursor', 'flexcenter', `${onOff === 4 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([4, "50대", 50])}>50대</div>
          <div className={cx('cursor', 'flexcenter', `${onOff === 5 ? "onButton" : ""}`)} onClick={() => targetClick([5, "60대이상", 60])}>60대이상</div>
        </div>
      </div>
    );
  }
}
export default DetailAge;