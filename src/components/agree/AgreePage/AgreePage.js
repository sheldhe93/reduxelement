import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import styles from './AgreePage.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class AgreePage extends Component {
  render() {
    const { history } = this.props;
    const nextGo = () => {
      history.push("/about");
    }
    const notGo = () => {
      alert("최근 5년이내 아파트에 거주한 경험이 있는 경우만 리뷰를 작성 할 수 있습니다.");
    }
    return (
      <div className={cx('footerNext')} >
        <div className={cx('flexCenter', 'cursor')} onClick={this.props.agree1 === "Y" ? nextGo : notGo}>다음<Icon size={20} icon={arrowRight2} /></div>
      </div>
    );
  }
}
export default AgreePage;