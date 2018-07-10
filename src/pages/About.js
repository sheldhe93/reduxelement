import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Redirect } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { pencil } from 'react-icons-kit/entypo/pencil'
import { AboutValue } from 'components/about/AboutValue';
import { AboutMain } from 'components/about/AboutMain';
import styles from '../styles/About.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class About extends Component {
  render() {
    const { agree1, agree } = this.props;
    const agreeCheck = agree1 === "Y" ? true : false;
    const agreeCheckTotal = agree === "Y" ? false : true;
    return (
      <div className={cx('about-template')}>
        {!agreeCheck && <Redirect to="/" />}
        {!agreeCheckTotal && <Redirect to="/detail" />}
        <h3>
          <div>
            <Icon size={20} icon={pencil} />검색한 단지에 대해 아래의 항목들을 입력해주세요.
          </div>
        </h3>
        <AboutMain />
        <AboutValue
          agree1={this.props.agree1}
          agree={this.props.agree}
          history={this.props.history}
          part1={this.props.part1}
          part2={this.props.part2}
          part3={this.props.part3}
          onAgreeY={this.props.handleAgreeY}
          onAgreeN={this.props.handleAgreeN}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    agree1: state.agree.agree1,
    agree: state.about.agree,
    part1: state.about.part1,
    part2: state.about.part2,
    part3: state.about.part3,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAgreeY: () => { dispatch(actions.agree2y()) },
    handleAgreeN: () => { dispatch(actions.agree2n()) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);