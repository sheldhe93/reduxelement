import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import styles from './ResultProfile.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class ResultReview extends Component {
  render() {
    const { part4 } = this.props;
    const profileImg = `http://s.zigbang.com/v2/danji/review_${part4.sex[2]}_${part4.age[2]}.png`;
    return (
      <div className={cx("resultProfile")}>
        <div className={cx("imgLine")}>
          <img src={profileImg} alt="프로필사진" />
        </div>
        <div className={cx("profileLine")}>
          <div className={cx("profileTitle")}>
            <div className={cx("profileMain")}>{part4.age[1]} {part4.sex[1]}</div>
            <div className={cx("profileDate")}>{part4.success} 등록</div>
          </div>
          <div className={cx("profileSub")}>
            {part4.time[1]} · {part4.residence[1]} · {part4.dState[1]}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultReview;