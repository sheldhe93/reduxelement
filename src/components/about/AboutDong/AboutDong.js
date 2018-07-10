import React, { Component } from 'react';
import { AboutDongCheck } from 'components/about/AboutDongCheck';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from './AboutDong.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class AboutDong extends Component {

  render() {
    const { part3 } = this.props;
    const { handleChangeDong, handleChangeFloor, handleSuccess3, handleNonSuccess3 } = this.props;
    return (
      <div className={cx(`detail${part3.on}`)}>
        <div className={cx('detailIntro', 'wid85')}>
          <div>거주 하셨던 동,층 정보를 입력해주세요.</div>
        </div>
        <AboutDongCheck
          part3={part3}
          onNonSuccess={handleNonSuccess3}
          onDong={handleChangeDong}
          onFloor={handleChangeFloor}
          onSuccess={handleSuccess3} />
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    part3: state.about.part3
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeDong: (dong) => { dispatch(actions.ag2_3dong(dong)) },
    handleChangeFloor: (floor) => { dispatch(actions.ag2_3floor(floor)) },
    handleSuccess3: () => { dispatch(actions.ag2_3success()) },
    handleNonSuccess3: () => {
      dispatch(actions.ag2_3nonsuccess())
      dispatch(actions.agree2n())
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutDong);