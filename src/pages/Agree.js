import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { iosHelpOutline } from 'react-icons-kit/ionicons/iosHelpOutline'
import { connect } from 'react-redux';
import { AgreeControl } from 'components/agree/AgreeControl';
import { AgreePage } from 'components/agree/AgreePage';
import styles from '../styles/Agree.scss';
import classNames from 'classnames/bind';
import * as actions from '../actions';
const cx = classNames.bind(styles);

class Agree extends Component {
  render() {
    const { agree1, history } = this.props;
    const { handleAgreeY, handleAgreeN } = this.props;
    return (
      <div className={cx('agree-template')}>
        <h3>
          <div><Icon size={20} icon={iosHelpOutline} />최근 5년이내 아파트에 거주한 경험이 있나요?</div>
        </h3>
        <AgreeControl onAgreeY={handleAgreeY} onAgreeN={handleAgreeN} agree1={agree1} />
        <AgreePage agree1={agree1} history={history} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    agree1: state.agree.agree1
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAgreeY: () => { dispatch(actions.agree1y()) },
    handleAgreeN: () => { dispatch(actions.agree1n()) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Agree);