import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ResultReview } from 'components/result/ResultReview';
import { ResultProfile } from 'components/result/ResultProfile';
import styles from '../styles/Result.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
class Result extends Component {
  render() {
    const { part1, part2, part4 } = this.props;
    const agreeCheckTotal = part4.success === "" ? false : true;
    return (
      <div className={cx("resultTemplate")}>
        { !agreeCheckTotal && <Redirect to="/detail" />}
        <ResultProfile part4={part4}/>
        <ResultReview part2={part1} />
        <ResultReview part2={part2} />
      </div >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    agree: state.about.agree,
    part1: state.about.part1,
    part2: state.about.part2,
    part4: state.about.part4,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
Result.defaultProps = Result;
export default connect(mapStateToProps, mapDispatchToProps)(Result);