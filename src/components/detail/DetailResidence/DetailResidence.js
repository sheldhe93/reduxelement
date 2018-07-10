import React, { Component } from 'react';
import styles from './DetailResidence.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class DetailResidence extends Component {
  render() {
    const targetClick = (data) => {
      this.props.onRes(data);
    }
    const { part4 } = this.props;
    const onOff = part4.residence === "" ? "" : part4.residence[0];
    return (
      <div className={cx('residenceTemplate', 'flexcenter2')}>
        <div className={cx('subjectSmall')}>
          리뷰해주신 아파트의 거주형태는?
        </div>
        <div className={cx('flexcenter', 'twoButton')}>
          <div className={cx('cursor', 'flexcenter', 'borderRightgray', `${onOff === 1 ? "onButton" : ""}`)} onClick={() => targetClick([1, "자가거주"])}>
            자가거주
          </div>
          <div className={cx('cursor', 'flexcenter', 'borderLeftgray', `${onOff === 2 ? "onButton" : ""}`)} onClick={() => targetClick([2, "전세 또는 월세"])}>
            전세 또는 월세
          </div>
        </div>
      </div>
    );
  }
}
export default DetailResidence;