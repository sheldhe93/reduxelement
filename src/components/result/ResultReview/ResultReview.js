import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import ReactStars from 'react-stars'
import styles from './ResultReview.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class ResultReview extends Component {
  render() {
    const { part2 } = this.props;
    return (
      <div className={cx("resultAppr")}>
        <div className={cx("profileSubName")}>
          <div className={cx("subjectSmall")} >{part2.name}</div>
          <div className={cx("starView", "subjectSmall")}>
            <div>&nbsp;|&nbsp; {part2.star}&nbsp;</div>
            <ReactStars
              count={5}
              size={10}
              value={part2.star}
              char="●"
              color1={'#e1e1e1'}
              color2={'#757575'}
              edit={false}
            />
          </div>
        </div>
        <div className={cx("profileMemo")} >{part2.memo}</div>
      </div>
    );
  }
}

export default ResultReview;