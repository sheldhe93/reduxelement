import React, { Component } from 'react';
import styles from './AboutStar.scss';
import ReactStars from 'react-stars'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
class AboutStar extends Component {
  constructor(props) {
    super(props);
    this.setStars = this.setStars.bind(this);
  }
  state = {
    rating: this.props.part.star
  };
  setStars(nextValue) {
    this.props.onChangeStar(nextValue);
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <div className={cx('detailStar', 'wid90', 'flexcenter')}>
        <div className={cx('wid15')}>
          매우<br />불편
        </div>
        <div className={cx('wid60')}>
          <ReactStars
            count={5}
            onChange={this.setStars.bind(this)}
            size={32}
            value={rating}
            color1={'gray'}
            color2={'#ffa408'} />
        </div>
        <div className={cx('wid15')}>매우<br />편리</div>
      </div>
    );
  }
}
export default AboutStar;