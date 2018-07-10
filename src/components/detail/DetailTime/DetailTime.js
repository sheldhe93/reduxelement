import React, { Component } from 'react';
import styles from './DetailTime.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class DetailTime extends Component {
  render() {
    const targetClick = (data) => {
      this.props.onRes(data);
    }
    const { part4 } = this.props;
    const onOff = part4.time === "" ? "" : part4.time[0];
    return (
      <div className={cx('ageTemplate', 'flexcenter2')}>
        <div className={cx('subjectSmall', 'divOne')}>아파트에 거주하셨던 시기는?</div>
        <div className={cx('flexcenter2', 'divTwo')}>
          <div className={cx('flexcenter', 'threeButton')}>
            <div className={cx('flexcenter', `${onOff === 1 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([1, "2013년까지"])} >2013년까지</div>
            <div className={cx('flexcenter', `${onOff === 2 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([2, "2014년까지"])}>2014년까지</div>
            <div className={cx('flexcenter', `${onOff === 3 ? "onButton" : ""}`)} onClick={() => targetClick([3, "2015년까지"])}>2015년까지</div>
          </div>
          <div className={cx('flexcenter', 'threeButton')}>
            <div className={cx('flexcenter', `${onOff === 4 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([4, "2016년까지"])}>2016년까지</div>
            <div className={cx('flexcenter', `${onOff === 5 ? "onButton" : ""}`, 'borderRightgray')} onClick={() => targetClick([5, "2017년까지"])}>2017년까지</div>
            <div className={cx('flexcenter', `${onOff === 6 ? "onButton" : ""}`)} onClick={() => targetClick([6, "현재 거주 중"])}>현재 거주 중</div>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailTime;