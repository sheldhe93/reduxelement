import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import styles from './DetailValue.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class DetailValue extends Component {
  render() {


    const { part4, history } = this.props;
    const nextGo = () => {
      if (part4.residence[0] === "") {
        alert("1번문항 체크해주세요.");
        return;
      }
      if (part4.time[0] === "") {
        alert("2번문항 체크해주세요.");
        return;
      }
      if (part4.age[0] === "") {
        alert("3번문항 체크해주세요.");
        return;
      }
      if (part4.sex[0] === "") {
        alert("4번문항 체크해주세요.");
        return;
      }
      if (part4.dState[0] === "") {
        alert("5번문항 체크해주세요.");
        return;
      }
      const nYear = new Date().getFullYear();
      const nMonth = new Date().getMonth() + 1;
      const nDate = new Date().getDate();
      const total = `${nYear}.${nMonth}.${nDate}`;
      this.props.onRes(total);
      history.push("/result");
    }

    return (
      <div className={cx('valueTemplate', 'flexcenter2')}>
        <div className={cx('flexcenter')} onClick={nextGo}>
          리뷰 제출하기&nbsp;<Icon size={18} icon={arrowRight2} />
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    agree: state.about.agree,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailValue);