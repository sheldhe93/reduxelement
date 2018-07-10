import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import styles from './AboutValue.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
class AboutValue extends Component {
  render() {
    const { history, part1, part2, part3 } = this.props;
    const prevGo = () => { history.push("/"); }
    const nextGo = () => {
      if (part1.success !== "Y") {
        alert(`${part1.name} 문항 내용에 충족하지 못하였습니다.`);
        return;
      }
      if (part2.success !== "Y") {
        alert(`${part2.name} 문항 내용에 충족하지 못하였습니다.`);
        return;
      }
      if (part3.success !== "Y") {
        alert("3번문항 확인");
        return;
      }
      this.props.onAgreeY();
      history.push("/detail");
      // onAgreeY();
    }
    return (
      <div className={cx('footerNext')}>
        <div className={cx('flexstartCenter', 'cursor')} onClick={prevGo}>
          <Icon size={20} icon={arrowLeft2} />
          이전
          </div>
        <div className={cx('flexendCenter', 'cursor')} onClick={nextGo}>
          다음
            <Icon size={20} icon={arrowRight2} />
        </div>
      </div>
    );
  }
}
export default AboutValue;