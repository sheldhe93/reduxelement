import React, { Component } from 'react';
import styles from './DetailSex.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class DetailSex extends Component {
  render() {
    const targetClick = (data) => {
      this.props.onRes(data);
    }
    const { part4 } = this.props;
    const onOff = part4.sex === "" ? "" : part4.sex[0];
    return (
      <div className={cx('sexTemplate', 'flexcenter2')}>
        <div className={cx('subjectSmall')}>작성해주시는 분의 성별은?</div>
        <div className={cx('flexcenter', 'twoButton')}>
          <div className={cx('cursor', 'flexcenter', 'borderRightgray', `${onOff === 1 ? "onButton" : ""}`)} onClick={() => targetClick([1, "남자", "m"])}>
            남자
          </div>
          <div className={cx('cursor', 'flexcenter', 'borderLeftgray', `${onOff === 2 ? "onButton" : ""}`)} onClick={() => targetClick([2, "여자", "w"])}>
            여자
          </div>
        </div>
      </div>
    );
  }
}

export default DetailSex;